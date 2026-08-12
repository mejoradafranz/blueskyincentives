import { useCallback, useEffect, useState, type FormEvent } from "react";
import { useAdminPrograms } from "./useAdminPrograms";
import * as participantsApi from "../../api/participants";
import type { Participant } from "../../types";
import { PageHeader } from "../../components/ui/PageHeader";
import { Button } from "../../components/ui/Button";
import { Modal } from "../../components/ui/Modal";
import { LoadingScreen } from "../../components/ui/LoadingScreen";
import { ProgramSelect } from "../../components/admin/ProgramSelect";
import { ApiError } from "../../api/client";
import "../../components/ui/Table.css";

export function Participants() {
  const { programs, selectedProgram, selectedId, setSelectedId, isLoading: programsLoading } =
    useAdminPrograms();
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [awarding, setAwarding] = useState<Participant | null>(null);

  const refresh = useCallback(async () => {
    if (!selectedProgram) return;
    setIsLoading(true);
    try {
      const { participants } = await participantsApi.listParticipants(selectedProgram.id);
      setParticipants(participants);
    } finally {
      setIsLoading(false);
    }
  }, [selectedProgram]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  async function handleRemove(participant: Participant) {
    if (!confirm(`Remove ${participant.user.firstName} ${participant.user.lastName} from this program?`)) {
      return;
    }
    await participantsApi.removeParticipant(participant.id);
    refresh();
  }

  if (programsLoading) return <LoadingScreen />;

  if (!programs.length) {
    return (
      <PageHeader
        title="Participants"
        description="Create a program first before adding participants."
      />
    );
  }

  return (
    <div>
      <PageHeader
        title="Participants"
        description={selectedProgram?.name}
        actions={
          <>
            <ProgramSelect programs={programs} selectedId={selectedId} onChange={setSelectedId} />
            <Button onClick={() => setShowAdd(true)}>Add participant</Button>
          </>
        }
      />

      <div className="data-table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Points balance</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {participants
              .filter((p) => p.status === "active")
              .map((p) => (
                <tr key={p.id}>
                  <td>
                    {p.user.firstName} {p.user.lastName}
                  </td>
                  <td>{p.user.email}</td>
                  <td>{p.pointsBalance.toLocaleString()}</td>
                  <td>
                    <span className="badge badge--success">{p.status}</span>
                  </td>
                  <td style={{ display: "flex", gap: 8 }}>
                    <button
                      className="btn btn--ghost"
                      style={{ padding: "6px 12px" }}
                      onClick={() => setAwarding(p)}
                    >
                      Award points
                    </button>
                    <button
                      className="btn btn--ghost"
                      style={{ padding: "6px 12px", color: "var(--color-danger)" }}
                      onClick={() => handleRemove(p)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {!isLoading && participants.filter((p) => p.status === "active").length === 0 && (
          <div className="data-table__empty">No participants enrolled yet.</div>
        )}
      </div>

      {showAdd && selectedProgram && (
        <AddParticipantModal
          programId={selectedProgram.id}
          onClose={() => setShowAdd(false)}
          onSaved={() => {
            setShowAdd(false);
            refresh();
          }}
        />
      )}

      {awarding && (
        <AwardPointsModal
          participant={awarding}
          onClose={() => setAwarding(null)}
          onSaved={() => {
            setAwarding(null);
            refresh();
          }}
        />
      )}
    </div>
  );
}

function AddParticipantModal({
  programId,
  onClose,
  onSaved,
}: {
  programId: string;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [tempPassword, setTempPassword] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      const { tempPassword } = await participantsApi.addParticipant({
        programId,
        email,
        firstName,
        lastName,
      });
      if (tempPassword) {
        setTempPassword(tempPassword);
      } else {
        onSaved();
      }
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (tempPassword) {
    return (
      <Modal title="Participant added" onClose={onSaved}>
        <div className="form-success">
          Account created for {email}. Temporary password (shown once):
        </div>
        <div
          style={{
            fontFamily: "monospace",
            fontSize: "1.1rem",
            padding: "12px 16px",
            background: "var(--color-bg-subtle)",
            borderRadius: "var(--radius-sm)",
            marginBottom: 16,
            userSelect: "all",
          }}
        >
          {tempPassword}
        </div>
        <Button onClick={onSaved} style={{ width: "100%" }}>
          Done
        </Button>
      </Modal>
    );
  }

  return (
    <Modal title="Add participant" onClose={onClose}>
      <form onSubmit={handleSubmit}>
        {error && <div className="form-error">{error}</div>}

        <div className="form-field">
          <label htmlFor="p-email">Email</label>
          <input
            id="p-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="p-first">First name</label>
          <input
            id="p-first"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="p-last">Last name</label>
          <input
            id="p-last"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <Button type="submit" disabled={isSubmitting} style={{ width: "100%" }}>
          {isSubmitting ? "Adding…" : "Add participant"}
        </Button>
      </form>
    </Modal>
  );
}

function AwardPointsModal({
  participant,
  onClose,
  onSaved,
}: {
  participant: Participant;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [points, setPoints] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      await participantsApi.awardPoints(participant.id, Number(points), note || undefined);
      onSaved();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Modal title={`Award points to ${participant.user.firstName}`} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        {error && <div className="form-error">{error}</div>}

        <div className="form-field">
          <label htmlFor="points">Points (use a negative number to deduct)</label>
          <input
            id="points"
            type="number"
            required
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="note">Note (optional)</label>
          <textarea id="note" rows={3} value={note} onChange={(e) => setNote(e.target.value)} />
        </div>

        <Button type="submit" disabled={isSubmitting} style={{ width: "100%" }}>
          {isSubmitting ? "Saving…" : "Award points"}
        </Button>
      </form>
    </Modal>
  );
}

import { useState, type FormEvent } from "react";
import { useAdminPrograms } from "./useAdminPrograms";
import * as programsApi from "../../api/programs";
import type { Program } from "../../types";
import { PageHeader } from "../../components/ui/PageHeader";
import { Button } from "../../components/ui/Button";
import { Modal } from "../../components/ui/Modal";
import { LoadingScreen } from "../../components/ui/LoadingScreen";
import { formatCents } from "../../utils/format";
import { ApiError } from "../../api/client";
import "../../components/ui/Table.css";

export function ProgramConfig() {
  const { programs, isLoading, refresh } = useAdminPrograms();
  const [showCreate, setShowCreate] = useState(false);
  const [editing, setEditing] = useState<Program | null>(null);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <PageHeader
        title="Program Config"
        description="Manage your incentive programs, budgets, and points rates."
        actions={<Button onClick={() => setShowCreate(true)}>New program</Button>}
      />

      <div className="data-table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Budget</th>
              <th>Points / $</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {programs.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>
                  <span
                    className={`badge ${
                      p.status === "active" ? "badge--success" : "badge--muted"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td>{formatCents(p.budgetCents)}</td>
                <td>{p.pointsPerDollar}</td>
                <td>
                  <button
                    className="btn btn--ghost"
                    style={{ padding: "6px 12px" }}
                    onClick={() => setEditing(p)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {programs.length === 0 && <div className="data-table__empty">No programs yet.</div>}
      </div>

      {showCreate && (
        <ProgramFormModal
          onClose={() => setShowCreate(false)}
          onSaved={() => {
            setShowCreate(false);
            refresh();
          }}
        />
      )}

      {editing && (
        <ProgramFormModal
          program={editing}
          onClose={() => setEditing(null)}
          onSaved={() => {
            setEditing(null);
            refresh();
          }}
        />
      )}
    </div>
  );
}

function ProgramFormModal({
  program,
  onClose,
  onSaved,
}: {
  program?: Program;
  onClose: () => void;
  onSaved: () => void;
}) {
  const isEdit = Boolean(program);
  const [name, setName] = useState(program?.name ?? "");
  const [description, setDescription] = useState(program?.description ?? "");
  const [budgetDollars, setBudgetDollars] = useState(
    program ? String(program.budgetCents / 100) : ""
  );
  const [pointsPerDollar, setPointsPerDollar] = useState(
    program ? String(program.pointsPerDollar) : "100"
  );
  const [status, setStatus] = useState<Program["status"]>(program?.status ?? "active");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      if (isEdit && program) {
        await programsApi.updateProgram(program.id, {
          name,
          description: description || undefined,
          status,
          budgetDollars: Number(budgetDollars),
          pointsPerDollar: Number(pointsPerDollar),
        });
      } else {
        await programsApi.createProgram({
          name,
          description: description || undefined,
          budgetDollars: Number(budgetDollars),
          pointsPerDollar: Number(pointsPerDollar),
        });
      }
      onSaved();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Modal title={isEdit ? "Edit program" : "New program"} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        {error && <div className="form-error">{error}</div>}

        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" required value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="budget">Budget (USD)</label>
          <input
            id="budget"
            type="number"
            min={0}
            step="0.01"
            required
            value={budgetDollars}
            onChange={(e) => setBudgetDollars(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="ppd">Points per dollar</label>
          <input
            id="ppd"
            type="number"
            min={1}
            step="1"
            required
            value={pointsPerDollar}
            onChange={(e) => setPointsPerDollar(e.target.value)}
          />
        </div>

        {isEdit && (
          <div className="form-field">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value as Program["status"])}
            >
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        )}

        <Button type="submit" disabled={isSubmitting} style={{ width: "100%" }}>
          {isSubmitting ? "Saving…" : isEdit ? "Save changes" : "Create program"}
        </Button>
      </form>
    </Modal>
  );
}

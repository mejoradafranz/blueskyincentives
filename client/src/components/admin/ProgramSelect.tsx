import type { Program } from "../../types";

export function ProgramSelect({
  programs,
  selectedId,
  onChange,
}: {
  programs: Program[];
  selectedId: string | null;
  onChange: (id: string) => void;
}) {
  if (programs.length <= 1) {
    return null;
  }

  return (
    <select
      value={selectedId ?? ""}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: "8px 12px",
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--color-border)",
        fontSize: "0.9rem",
        background: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      {programs.map((p) => (
        <option key={p.id} value={p.id}>
          {p.name}
        </option>
      ))}
    </select>
  );
}

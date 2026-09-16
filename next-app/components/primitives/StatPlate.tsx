export function StatPlate({ metrics }: { metrics: { value: string; label: string }[] }) {
  return (
    <div className="hero-metric-plate" style={{ display: "flex", flexWrap: "wrap", gap: 22, margin: "18px 0 4px" }}>
      {metrics.map((m) => (
        <div key={m.label}>
          <b className="grad-text" style={{ fontSize: 20, fontWeight: 800 }}>
            {m.value}
          </b>
          <span style={{ display: "block", fontSize: 12, color: "var(--text-secondary)" }}>{m.label}</span>
        </div>
      ))}
    </div>
  )
}

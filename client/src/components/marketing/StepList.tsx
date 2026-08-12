import "./StepList.css";

export function StepList({
  steps,
}: {
  steps: { title: string; description: string }[];
}) {
  return (
    <ol className="step-list">
      {steps.map((step, i) => (
        <li key={step.title} className="step-list__item">
          <div className="step-list__number">{i + 1}</div>
          <div>
            <h3 className="step-list__title">{step.title}</h3>
            <p className="step-list__description">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

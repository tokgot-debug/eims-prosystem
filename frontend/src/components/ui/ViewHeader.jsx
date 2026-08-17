export default function ViewHeader({ title, subtitle, children }) {
  return (
    <div className="view-title-block">
      <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {children && <div className="view-title-actions">{children}</div>}
    </div>
  );
}

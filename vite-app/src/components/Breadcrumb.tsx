/** Ported from breadcrumbs.js's per-page lookup table, driven by props instead of a filename map. */
export function Breadcrumb({
  section,
  sectionHref,
  label,
}: {
  section?: string | null;
  sectionHref?: string | null;
  label: string;
}) {
  return (
    <nav className="breadcrumb-bar" aria-label="Breadcrumb">
      <div className="container breadcrumb-inner">
        <a href="index.html">Home</a>
        {section && (
          <>
            <span className="breadcrumb-sep">/</span>
            {sectionHref ? <a href={sectionHref}>{section}</a> : <span>{section}</span>}
          </>
        )}
        <span className="breadcrumb-sep">/</span>
        <span aria-current="page">{label}</span>
      </div>
    </nav>
  );
}

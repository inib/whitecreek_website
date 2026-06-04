import * as React from "react";

/**
 * Description: Wraps related content in a consistent mobile-first section layout.
 * Dependencies: React for rendering semantic section markup.
 * Code-customers: Landing, band portrait, and dates page content blocks.
 * Variables/origin: eyebrow, title, children, and className are provided by each page at call sites.
 */
export default function Section({ eyebrow, title, children, className = "" }) {
  return (
    <section className={`content-section ${className}`.trim()}>
      <div className="section-heading">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        {title ? <h2>{title}</h2> : null}
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}

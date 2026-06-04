import * as React from "react";

/**
 * Description: Detects whether a social URL should open as an external browser target.
 * Dependencies: JavaScript String.prototype.startsWith; no Gatsby APIs are required.
 * Code-customers: SocialLinks component anchor attribute decisions.
 * Variables/origin: url is supplied by src/data/social-links.json entries.
 */
function isExternalUrl(url) {
  return url.startsWith("http://") || url.startsWith("https://");
}

/**
 * Description: Renders shared social and contact links from structured JSON content.
 * Dependencies: React for list rendering and isExternalUrl for safe external-link attributes.
 * Code-customers: Landing page follow section and any future footer/social placements.
 * Variables/origin: links defaults to imported social profile records with label and url fields.
 */
export default function SocialLinks({ links }) {
  return (
    <div className="social-links" aria-label="Social links">
      {links.map((link) => {
        const external = isExternalUrl(link.url);

        return (
          <a
            href={link.url}
            key={link.url}
            rel={external ? "noreferrer" : undefined}
            target={external ? "_blank" : undefined}
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
}

import * as React from "react";
import Navigation from "./navigation";

/**
 * Description: Provides the shared page shell, masthead, navigation, main content, and footer.
 * Dependencies: React for composition and Navigation for reusable site links.
 * Code-customers: Landing, band portrait, and dates pages.
 * Variables/origin: children is supplied by Gatsby page components; currentYear is generated at render time for the footer.
 */
export default function Layout({ children }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="site-shell">
      <header className="site-header">
        <LinkBrand />
        <Navigation />
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <p>© {currentYear} White Creek · Allgäu Classic Rock</p>
      </footer>
    </div>
  );
}

/**
 * Description: Renders the text-based White Creek brand mark without image or script dependencies.
 * Dependencies: React only.
 * Code-customers: Layout masthead.
 * Variables/origin: Brand copy comes from the README project identity.
 */
function LinkBrand() {
  return (
    <a className="brand" href="/" aria-label="White Creek home">
      <span className="brand__name">White Creek</span>
      <span className="brand__tag">Classic Rock Covers</span>
    </a>
  );
}

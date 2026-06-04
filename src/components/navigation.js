import * as React from "react";
import { Link } from "gatsby";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "Band", path: "/band/" },
  { label: "Dates", path: "/dates/" },
];

/**
 * Description: Renders the primary site navigation with Gatsby links.
 * Dependencies: React for markup and Gatsby Link for static internal navigation.
 * Code-customers: Layout component and every page wrapped by Layout.
 * Variables/origin: navigationItems is a local constant derived from the README site structure.
 */
export default function Navigation() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      {navigationItems.map((item) => (
        <Link key={item.path} to={item.path} activeClassName="is-active">
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Section from "../components/section";
import EventList from "../components/event-list";

const featuredEvents = [
  {
    date: "12 Jul 2026",
    isoDate: "2026-07-12",
    venue: "Sommerbühne Kempten",
    location: "Open-air rock night",
    city: "Kempten, Allgäu",
  },
  {
    date: "08 Aug 2026",
    isoDate: "2026-08-08",
    venue: "Gasthof Adler",
    location: "Classic cover evening",
    city: "Isny im Allgäu",
  },
  {
    date: "19 Sep 2026",
    isoDate: "2026-09-19",
    venue: "Kulturschuppen",
    location: "Vintage rock session",
    city: "Memmingen",
  },
];

/**
 * Description: Renders the landing page with hero, intro, event preview, and social links.
 * Dependencies: React, Gatsby Link, shared Layout, Section, and EventList components.
 * Code-customers: Gatsby page routing for the repository root path.
 * Variables/origin: featuredEvents is temporary page-local content based on the README dates preview direction.
 */
export default function IndexPage() {
  return (
    <Layout>
      <section className="hero">
        <p className="eyebrow">Allgäu · Classic Rock</p>
        <h1>White Creek</h1>
        <p className="hero__copy">
          Handcrafted classic rock covers with warm vintage tone, honest stage energy,
          and songs built for long nights.
        </p>
        <Link className="button" to="/dates/">
          Upcoming Shows
        </Link>
      </section>

      <Section eyebrow="The band" title="Rock songs with Allgäu roots">
        <p>
          White Creek is a classic rock cover band from southern Germany, shaped by
          guitar-driven favorites, warm harmonies, and a stripped-back stage presence.
        </p>
      </Section>

      <Section eyebrow="Next up" title="Upcoming dates">
        <EventList events={featuredEvents} isPreview />
        <Link className="text-link" to="/dates/">
          View all dates
        </Link>
      </Section>

      <Section eyebrow="Follow" title="Stay connected" className="social-section">
        <div className="social-links" aria-label="Social links">
          <a href="mailto:booking@whitecreek.example.com">Booking</a>
          <a href="https://www.instagram.com/" rel="noreferrer">Instagram</a>
          <a href="https://www.facebook.com/" rel="noreferrer">Facebook</a>
        </div>
      </Section>
    </Layout>
  );
}

/**
 * Description: Supplies document metadata for the landing page.
 * Dependencies: Gatsby Head API.
 * Code-customers: Gatsby build and browser document head.
 * Variables/origin: Title and description use README project identity and landing page content.
 */
export function Head() {
  return (
    <>
      <title>White Creek · Classic Rock Covers</title>
      <meta
        name="description"
        content="White Creek is a classic rock cover band from the Allgäu region of southern Germany."
      />
    </>
  );
}

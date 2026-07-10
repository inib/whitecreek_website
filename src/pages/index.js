import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Section from "../components/section";
import EventList from "../components/event-list";
import SocialLinks from "../components/social-links";
import events from "../data/events.json";
import socialLinks from "../data/social-links.json";

/**
 * Description: Renders the landing page with hero, intro, data-backed event preview, and social links.
 * Dependencies: React, Gatsby Link, shared Layout, Section, EventList, SocialLinks, and JSON content imports.
 * Code-customers: Gatsby page routing for the repository root path.
 * Variables/origin: events and socialLinks are imported from src/data/ so previews can change without page code edits.
 */
export default function IndexPage() {
  return (
    <Layout>
      <section className="hero">
        <p className="eyebrow">Weißbach · Pfronten · Allgäu · Classic Rock</p>
        <h1>White Creek</h1>
        <p className="hero__copy">
          Handcrafted classic rock covers. Warm vintage tone, honest on stage, 
          songs built for long nights.
        </p>
        <img
          src="/img/kurpark_rep.png"
          alt="White Creek live performance"
        />
      </section>

      <Section eyebrow="Next up" title="Upcoming dates">
        <EventList events={events} isPreview />
        <Link className="text-link" to="/dates/">
          View all dates
        </Link>
      </Section>

      <Section eyebrow="Follow" title="Stay connected" className="social-section">
        <SocialLinks links={socialLinks} />
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

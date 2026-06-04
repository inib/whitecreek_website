import * as React from "react";
import Layout from "../components/layout";
import Section from "../components/section";
import EventList from "../components/event-list";
import events from "../data/events.json";

/**
 * Description: Lists upcoming White Creek shows using the shared event list component and structured content data.
 * Dependencies: React, shared Layout, Section, EventList, and src/data/events.json.
 * Code-customers: Gatsby page routing for /dates/.
 * Variables/origin: events is imported from src/data/events.json so show updates do not require editing page code.
 */
export default function DatesPage() {
  return (
    <Layout>
      <Section eyebrow="Dates" title="Upcoming shows">
        <p className="lead">
          Upcoming White Creek classic rock cover band shows.
        </p>
        <EventList events={events} />
      </Section>
    </Layout>
  );
}

/**
 * Description: Supplies document metadata for the dates page.
 * Dependencies: Gatsby Head API.
 * Code-customers: Gatsby build and browser document head.
 * Variables/origin: Title and description reflect the README dates page purpose.
 */
export function Head() {
  return (
    <>
      <title>Dates · White Creek</title>
      <meta name="description" content="Upcoming White Creek classic rock cover band shows." />
    </>
  );
}

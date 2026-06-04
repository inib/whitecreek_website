import * as React from "react";
import Layout from "../components/layout";
import Section from "../components/section";
import EventList from "../components/event-list";

const upcomingEvents = [
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
  {
    date: "24 Oct 2026",
    isoDate: "2026-10-24",
    venue: "Alte Mühle",
    location: "Autumn club show",
    city: "Wangen im Allgäu",
  },
];

/**
 * Description: Lists upcoming White Creek shows using the shared event list component.
 * Dependencies: React, shared Layout, Section, and EventList components.
 * Code-customers: Gatsby page routing for /dates/.
 * Variables/origin: upcomingEvents is local seed content and is marked in the page note for future JSON extraction.
 */
export default function DatesPage() {
  return (
    <Layout>
      <Section eyebrow="Dates" title="Upcoming shows">
        <p className="lead">
          A simple static list for now. Future removal candidate: move the page-local
          event array into a JSON content file so show updates do not require editing page code.
        </p>
        <EventList events={upcomingEvents} />
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

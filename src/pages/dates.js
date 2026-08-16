import * as React from "react";
import Layout from "../components/layout";
import Section from "../components/section";
import EventList from "../components/event-list";
import events from "../data/events.json";

/**
 * Description: Separates White Creek shows into upcoming and previous sections using structured content data.
 * Dependencies: React, shared Layout, Section, EventList, and src/data/events.json.
 * Code-customers: Gatsby page routing for /dates/.
 * Variables/origin: events is imported from src/data/events.json so show updates do not require editing page code.
 */
export default function DatesPage() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = events
    .filter((event) => new Date(`${event.date}T00:00:00`) >= today)
    .sort((first, second) => first.date.localeCompare(second.date));
  const previousEvents = events
    .filter((event) => new Date(`${event.date}T00:00:00`) < today)
    .sort((first, second) => second.date.localeCompare(first.date));

  return (
    <Layout>
      <Section eyebrow="Dates" title="Upcoming shows">
        <p className="lead">
          Upcoming White Creek classic rock cover band shows.
        </p>
        <EventList
          events={upcomingEvents}
          emptyMessage="No upcoming shows announced right now. Check back soon."
        />
      </Section>

      <Section eyebrow="From the stage" title="Previous shows">
        <p className="lead">
          A look back at past White Creek shows.
        </p>
        <EventList
          events={previousEvents}
          showPhotos
          emptyMessage="Previous shows will appear here."
        />
      </Section>
    </Layout>
  );
}

/**
 * Description: Supplies document metadata for the dates page.
 * Dependencies: Gatsby Head API.
 * Code-customers: Gatsby build and browser document head.
 * Variables/origin: Title and description reflect the upcoming and previous show content.
 */
export function Head() {
  return (
    <>
      <title>Dates · White Creek</title>
      <meta name="description" content="Upcoming and previous White Creek classic rock cover band shows." />
    </>
  );
}

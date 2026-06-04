import * as React from "react";

/**
 * Description: Displays upcoming concerts as an accessible, low-JavaScript event list.
 * Dependencies: React for rendering list markup; data is passed from page-local arrays.
 * Code-customers: Landing page preview and full dates page.
 * Variables/origin: events and isPreview are supplied by pages; event fields follow the README dates structure.
 */
export default function EventList({ events, isPreview = false }) {
  const visibleEvents = isPreview ? events.slice(0, 3) : events;

  return (
    <div className="event-list">
      {visibleEvents.map((event) => (
        <article className="event-card" key={`${event.date}-${event.venue}`}>
          <time dateTime={event.isoDate}>{event.date}</time>
          <div>
            <h3>{event.venue}</h3>
            <p>{event.location}</p>
            <p className="event-card__city">{event.city}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

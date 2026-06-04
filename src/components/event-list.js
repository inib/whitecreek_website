import * as React from "react";

/**
 * Description: Formats an ISO event date into the compact day/month/year style used on event cards.
 * Dependencies: JavaScript Intl.DateTimeFormat with UTC timeZone to avoid date drift during static builds.
 * Code-customers: EventList date labels on landing previews and the full dates page.
 * Variables/origin: date is the ISO yyyy-mm-dd value from src/data/events.json.
 */
function formatEventDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    timeZone: "UTC",
    year: "numeric",
  }).format(new Date(date));
}

/**
 * Description: Displays upcoming concerts as an accessible, low-JavaScript event list.
 * Dependencies: React for rendering list markup and formatEventDate for data-file date display.
 * Code-customers: Landing page preview and full dates page.
 * Variables/origin: events and isPreview are supplied by pages; event fields come from src/data/events.json.
 */
export default function EventList({ events, isPreview = false }) {
  const visibleEvents = isPreview ? events.slice(0, 3) : events;

  return (
    <div className="event-list">
      {visibleEvents.map((event) => (
        <article className="event-card" key={`${event.date}-${event.venue}`}>
          <time dateTime={event.date}>{formatEventDate(event.date)}</time>
          <div>
            <h3>{event.venue}</h3>
            <p>{event.location}</p>
            <p className="event-card__city">{event.city}</p>
            {event.ticketUrl ? (
              <a className="event-card__ticket" href={event.ticketUrl}>
                Ticket info
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

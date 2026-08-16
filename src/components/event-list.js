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
 * Description: Displays concerts as an accessible, low-JavaScript event list, with optional photos for previous shows.
 * Dependencies: React for rendering list markup and formatEventDate for data-file date display.
 * Code-customers: Landing page preview and full dates page.
 * Variables/origin: events, isPreview, showPhotos, and emptyMessage are supplied by pages; event fields come from src/data/events.json.
 */
export default function EventList({
  events,
  isPreview = false,
  showPhotos = false,
  emptyMessage = "No shows announced yet.",
}) {
  const visibleEvents = isPreview ? events.slice(0, 3) : events;

  if (visibleEvents.length === 0) {
    return <p className="event-list__empty">{emptyMessage}</p>;
  }

  return (
    <div className="event-list">
      {visibleEvents.map((event) => (
        <article
          className={`event-card${showPhotos ? " event-card--with-photo" : ""}`}
          key={`${event.date}-${event.venue}`}
        >
          {showPhotos ? <EventPhoto event={event} /> : null}
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

/**
 * Description: Renders a previous show's configured photo or a visible placeholder ready for later replacement.
 * Dependencies: React and the optional photo/photoAlt fields in src/data/events.json.
 * Code-customers: EventList when showPhotos is enabled on the dates page.
 * Variables/origin: event is the current show object supplied by EventList.
 */
function EventPhoto({ event }) {
  if (event.photo) {
    return (
      <img
        className="event-card__photo"
        src={event.photo}
        alt={event.photoAlt || `White Creek live at ${event.venue}`}
      />
    );
  }

  return (
    <div
      className="event-card__photo-placeholder"
      role="img"
      aria-label={`Photo placeholder for ${event.venue}`}
    >
      <span>Show photo</span>
    </div>
  );
}

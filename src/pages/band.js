import * as React from "react";
import Layout from "../components/layout";
import Section from "../components/section";

const members = [
  { name: "Lead Voice", instrument: "Vocals", note: "Carries the choruses with grit and warmth." },
  { name: "Guitar", instrument: "Electric guitar", note: "Keeps the riffs sharp, melodic, and road-tested." },
  { name: "Bass", instrument: "Bass", note: "Locks the low end into the heartbeat of every song." },
  { name: "Drums", instrument: "Drums", note: "Drives the set with steady classic-rock momentum." },
];

/**
 * Description: Presents the White Creek band portrait with story, members, and gallery placeholders.
 * Dependencies: React, shared Layout, and Section components.
 * Code-customers: Gatsby page routing for /band/.
 * Variables/origin: members is temporary editorial content until final band bios and photos are supplied.
 */
export default function BandPage() {
  return (
    <Layout>
      <Section eyebrow="Band portrait" title="A cover band with a lived-in rock sound">
        <p>
          White Creek brings familiar classic rock songs back to the room: direct,
          warm, and without unnecessary polish. The band is rooted in the Allgäu and
          built around songs that work best when people gather close to the stage.
        </p>
      </Section>

      <Section eyebrow="Members" title="On stage">
        <div className="member-grid">
          {members.map((member) => (
            <article className="member-card" key={member.instrument}>
              <div className="image-placeholder" aria-hidden="true" />
              <p className="eyebrow">{member.instrument}</p>
              <h3>{member.name}</h3>
              <p>{member.note}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Gallery" title="Live moments">
        <div className="gallery-grid" aria-label="Gallery placeholders for future band photos">
          <div className="image-placeholder image-placeholder--wide" />
          <div className="image-placeholder" />
          <div className="image-placeholder" />
        </div>
      </Section>
    </Layout>
  );
}

/**
 * Description: Supplies document metadata for the band page.
 * Dependencies: Gatsby Head API.
 * Code-customers: Gatsby build and browser document head.
 * Variables/origin: Title and description reflect the README band portrait purpose.
 */
export function Head() {
  return (
    <>
      <title>Band · White Creek</title>
      <meta name="description" content="Meet White Creek, a classic rock cover band from the Allgäu." />
    </>
  );
}

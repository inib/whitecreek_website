import * as React from "react";
import Layout from "../components/layout";
import Section from "../components/section";
import MemberList from "../components/member-list";
import members from "../data/members.json";

/**
 * Description: Presents the White Creek band portrait with story, data-backed members, and gallery placeholders.
 * Dependencies: React, shared Layout, Section, MemberList, and src/data/members.json.
 * Code-customers: Gatsby page routing for /band/.
 * Variables/origin: members is imported structured content; empty photo values intentionally keep placeholders until final photos arrive.
 */
export default function BandPage() {
  return (
    <Layout>
      <Section eyebrow="Band portrait" title="In Pfronten dahoam">
        <p>
          <b>White Creek</b> nimmt euch mit bekannten Rock Klassikern auf eine Reise in die Vergangenheit und zurück.
          Direkt, laut und unpoliert. Aus <b>Weißbach</b> in Pfronten im Allgäu bringen wir 
          Pink FLoyd, Eric Clapton und Sunrise Avenue zu Euch auf die Bühnen.
        </p>
      </Section>

      <Section eyebrow="Members" title="On stage">
        <MemberList members={members} />
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

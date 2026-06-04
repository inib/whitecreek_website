import * as React from "react";

/**
 * Description: Renders a single band member photo or a styled placeholder until real photos are provided.
 * Dependencies: React and the global image-placeholder/member-photo CSS classes.
 * Code-customers: MemberList cards on the band portrait page.
 * Variables/origin: photo and name come from src/data/members.json; empty photo values intentionally use placeholders.
 */
function MemberPhoto({ photo, name }) {
  if (!photo) {
    return <div className="image-placeholder" aria-hidden="true" />;
  }

  return <img className="member-photo" src={photo} alt={`${name} of White Creek`} />;
}

/**
 * Description: Presents the structured band member roster as reusable cards.
 * Dependencies: React and MemberPhoto for photo/placeholder rendering.
 * Code-customers: Band portrait members section and future landing previews if needed.
 * Variables/origin: members is supplied by src/data/members.json with name, instrument, photo, and description fields.
 */
export default function MemberList({ members }) {
  return (
    <div className="member-grid">
      {members.map((member) => (
        <article className="member-card" key={`${member.instrument}-${member.name}`}>
          <MemberPhoto photo={member.photo} name={member.name} />
          <p className="eyebrow">{member.instrument}</p>
          <h3>{member.name}</h3>
          <p>{member.description}</p>
        </article>
      ))}
    </div>
  );
}

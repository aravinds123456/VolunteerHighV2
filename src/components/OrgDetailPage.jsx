import { useState } from 'react';
import { linkify } from './linkify';
import './OrgDetailPage.css';

/**
 * One reusable component standing in for ArizonaStateParksandTrailsView,
 * AZSustainabilityAllianceView, BureauOfLandManagementView, CityOfFlagstaffView,
 * FeedMyStarvingChildrenView, HandsOnGreaterPhoenixView, JuniorAchievementOfArizonaView,
 * and LostOurHomesPetRescueView — all of which share an identical layout:
 *
 *   VStack {
 *     title (+ optional note)
 *     HStack {
 *       VStack { "Opportunities Near You 📍" + scrollable list }
 *       Divider()
 *       VStack { selected opportunity detail, or placeholder }
 *     }
 *   }
 *
 * `title`, `note`, and `opportunities` come from src/data/opportunities.js,
 * keeping this file purely structural/visual — exactly mirroring the Swift pattern
 * of near-duplicate views differing only in their data.
 */
export default function OrgDetailPage({ title, note, opportunities, centerTitle }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="org-page">
      <div className={`org-header${centerTitle ? ' center-title' : ''}`}>
        <h1 className="org-title">{title}</h1>
        {note && <p className="org-note">{linkify(note)}</p>}
      </div>

      <div className="org-body">
        <div className="org-list-pane">
          <h2 className="org-list-heading">Opportunities Near You&nbsp;&nbsp;📍</h2>
          <div className="org-list-scroll">
            {opportunities.map((opp, i) => (
              <button
                key={i}
                className={`org-list-item${selected === i ? ' selected' : ''}`}
                onClick={() => setSelected(i)}
              >
                {opp.name}
              </button>
            ))}
          </div>
        </div>

        <div className="org-divider" />

        <div className="org-detail-pane">
          <div className="org-detail-scroll">
            {selected !== null ? (
              <>
                <h3 className="org-detail-name">{opportunities[selected].name}</h3>
                <p className="org-detail-description">{opportunities[selected].description}</p>
              </>
            ) : (
              <p className="org-detail-placeholder">Select an opportunity to view more details</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

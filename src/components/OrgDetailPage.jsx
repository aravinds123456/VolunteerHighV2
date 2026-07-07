import { useMemo, useState } from 'react';
import { linkify } from './linkify';
import './OrgDetailPage.css';

/**
 * One reusable component for all 8 org pages.
 * Master–Detail layout: left pane scrolls the opportunity list independently
 * from the right pane which scrolls the selected opportunity's description.
 * Exactly like Indeed's split layout.
 *
 * `contactEmail` (from src/data/orgContactEmails.js) powers a mailto: button
 * shown alongside the "View Official Listing" button, so the person can
 * email the organization directly to ask about a specific opportunity.
 */
export default function OrgDetailPage({ title, note, opportunities, centerTitle, bannerImage, contactEmail }) {
  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOpportunities = useMemo(() => {
    if (!searchTerm.trim()) return opportunities;
    const term = searchTerm.toLowerCase();
    return opportunities.filter(
      (opp) =>
        opp.name.toLowerCase().includes(term) ||
        opp.description.toLowerCase().includes(term)
    );
  }, [opportunities, searchTerm]);

  const selectedOpportunity = selected !== null ? opportunities[selected] : null;

  function buildMailtoHref(opportunityName) {
    if (!contactEmail) return null;
    const subject = `Volunteering Inquiry — ${opportunityName}`;
    const body = `Hi,\n\nI'm interested in the "${opportunityName}" volunteer opportunity with ${title}, and I'd like to learn more.\n\nThank you!`;
    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="org-page">
      {bannerImage && (
        <div className="org-banner" style={{ backgroundImage: `url(${bannerImage})` }} />
      )}

      <div className={`org-header${centerTitle ? ' center-title' : ''}`}>
        <h1 className="org-title">{title}</h1>
        {note && <p className="org-note">{linkify(note)}</p>}
      </div>

      <div className="org-body">
        {/* LEFT PANE — scrolls independently */}
        <div className="org-list-pane">
          <h2 className="org-list-heading">Opportunities Near You&nbsp;📍</h2>

          <input
            className="org-search-input"
            type="text"
            placeholder="Search opportunities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="org-list-scroll">
            {filteredOpportunities.length === 0 ? (
              <p className="org-list-empty">No opportunities match your search.</p>
            ) : (
              filteredOpportunities.map((opp) => {
                const originalIndex = opportunities.indexOf(opp);
                return (
                  <button
                    key={originalIndex}
                    className={`org-list-item${selected === originalIndex ? ' selected' : ''}`}
                    onClick={() => setSelected(originalIndex)}
                  >
                    {opp.name}
                  </button>
                );
              })
            )}
          </div>
        </div>

        <div className="org-divider" />

        {/* RIGHT PANE — scrolls independently */}
        <div className="org-detail-pane">
          <div className="org-detail-scroll">
            {selectedOpportunity ? (
              <>
                <h3 className="org-detail-name">{selectedOpportunity.name}</h3>
                <p className="org-detail-description">
                  {linkify(selectedOpportunity.description)}
                </p>
                <div className="org-detail-actions">
                  {selectedOpportunity.link && (
                    <a
                      className="org-apply-button"
                      href={selectedOpportunity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Official Listing ↗
                    </a>
                  )}
                  {contactEmail && (
                    <a
                      className="org-apply-button org-apply-button-secondary"
                      href={buildMailtoHref(selectedOpportunity.name)}
                    >
                      ✉ Email {title}
                    </a>
                  )}
                </div>
              </>
            ) : (
              <p className="org-detail-placeholder">
                Select an opportunity on the left to view details
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

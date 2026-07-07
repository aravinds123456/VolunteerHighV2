import OrgDetailPage from '../components/OrgDetailPage';
import { organizations } from '../data/opportunities';
import { ORG_CONTACT_EMAILS } from '../data/orgContactEmails';

export default function AZSustainabilityAlliancePage() {
  const org = organizations.azSustainabilityAlliance;
  return (
    <OrgDetailPage
      title={org.title}
      note={org.note}
      opportunities={org.opportunities}
      contactEmail={ORG_CONTACT_EMAILS.azSustainabilityAlliance}
    />
  );
}

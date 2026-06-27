import OrgDetailPage from '../components/OrgDetailPage';
import { organizations } from '../data/opportunities';

export default function AZSustainabilityAlliancePage() {
  const org = organizations.azSustainabilityAlliance;
  return <OrgDetailPage title={org.title} note={org.note} opportunities={org.opportunities} />;
}

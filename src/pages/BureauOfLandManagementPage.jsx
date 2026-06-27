import OrgDetailPage from '../components/OrgDetailPage';
import { organizations } from '../data/opportunities';

export default function BureauOfLandManagementPage() {
  const org = organizations.bureauOfLandManagement;
  return <OrgDetailPage title={org.title} note={org.note} opportunities={org.opportunities} />;
}

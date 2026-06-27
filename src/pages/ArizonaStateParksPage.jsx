import OrgDetailPage from '../components/OrgDetailPage';
import { organizations } from '../data/opportunities';

export default function ArizonaStateParksPage() {
  const org = organizations.arizonaStateParks;
  return <OrgDetailPage title={org.title} note={org.note} opportunities={org.opportunities} centerTitle />;
}

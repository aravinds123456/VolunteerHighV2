import OrgDetailPage from '../components/OrgDetailPage';
import { organizations } from '../data/opportunities';

export default function HandsOnGreaterPhoenixPage() {
  const org = organizations.handsOnGreaterPhoenix;
  return <OrgDetailPage title={org.title} note={org.note} opportunities={org.opportunities} />;
}

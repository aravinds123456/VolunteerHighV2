import OrgDetailPage from '../components/OrgDetailPage';
import { organizations } from '../data/opportunities';

export default function CityOfFlagstaffPage() {
  const org = organizations.cityOfFlagstaff;
  return <OrgDetailPage title={org.title} note={org.note} opportunities={org.opportunities} />;
}

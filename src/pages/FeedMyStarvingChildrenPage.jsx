import OrgDetailPage from '../components/OrgDetailPage';
import { organizations } from '../data/opportunities';

export default function FeedMyStarvingChildrenPage() {
  const org = organizations.feedMyStarvingChildren;
  return <OrgDetailPage title={org.title} note={org.note} opportunities={org.opportunities} />;
}

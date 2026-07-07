import OrgDetailPage from '../components/OrgDetailPage';
import { organizations } from '../data/opportunities';
import { ORG_CONTACT_EMAILS } from '../data/orgContactEmails';

export default function JuniorAchievementPage() {
  const org = organizations.juniorAchievement;
  return (
    <OrgDetailPage
      title={org.title}
      note={org.note}
      opportunities={org.opportunities}
      centerTitle
      contactEmail={ORG_CONTACT_EMAILS.juniorAchievement}
    />
  );
}

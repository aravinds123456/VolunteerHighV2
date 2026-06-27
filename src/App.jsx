import { BrowserRouter, Routes, Route } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage';
import MainScreen from './pages/MainScreen';
import QuestPage from './pages/QuestPage';
import MapsPage from './pages/MapsPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';

import HandsOnGreaterPhoenixPage from './pages/HandsOnGreaterPhoenixPage';
import ArizonaStateParksPage from './pages/ArizonaStateParksPage';
import CityOfFlagstaffPage from './pages/CityOfFlagstaffPage';
import JuniorAchievementPage from './pages/JuniorAchievementPage';
import FeedMyStarvingChildrenPage from './pages/FeedMyStarvingChildrenPage';
import AZSustainabilityAlliancePage from './pages/AZSustainabilityAlliancePage';
import BureauOfLandManagementPage from './pages/BureauOfLandManagementPage';
import LostOurHomesPetRescuePage from './pages/LostOurHomesPetRescuePage';

/**
 * Route map mirrors the SwiftUI navigation graph:
 *   WelcomePage -> MainScreen -> { QuestView, Maps, AboutView, FAQView, 8x OrgView }
 * On macOS, WelcomePage's "Next" and FeaturesPage's iOS-only branch both
 * collapse to MainScreen, since this web build targets that same "desktop" path.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<MainScreen />} />
        <Route path="/quest" element={<QuestPage />} />
        <Route path="/maps" element={<MapsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />

        <Route path="/org/hands-on-greater-phoenix" element={<HandsOnGreaterPhoenixPage />} />
        <Route path="/org/arizona-state-parks" element={<ArizonaStateParksPage />} />
        <Route path="/org/city-of-flagstaff" element={<CityOfFlagstaffPage />} />
        <Route path="/org/junior-achievement" element={<JuniorAchievementPage />} />
        <Route path="/org/feed-my-starving-children" element={<FeedMyStarvingChildrenPage />} />
        <Route path="/org/az-sustainability-alliance" element={<AZSustainabilityAlliancePage />} />
        <Route path="/org/bureau-of-land-management" element={<BureauOfLandManagementPage />} />
        <Route path="/org/lost-our-homes-pet-rescue" element={<LostOurHomesPetRescuePage />} />
      </Routes>
    </BrowserRouter>
  );
}

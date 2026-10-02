import { Route, Routes } from 'react-router';
import Layout from './components/Layout.tsx';
import ContactPage from './pages/ContactPage.tsx';
import ExperiencePage from './pages/ExperiencePage.tsx';
import HomePage from './pages/HomePage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import ProjectDetailPage from './pages/ProjectDetailPage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:slug" element={<ProjectDetailPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Service from './pages/Service';
import Process from './pages/Process';
import Samples from './pages/Samples';
import Demo from './pages/Demo';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Inquiry from './pages/Inquiry';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Map from './pages/Map';
import MapRegion from './pages/MapRegion';
import Admin from './pages/Admin';
import ContentDemoLoader from './components/ContentDemoLoader';
import AdminCustomers from './pages/admin/AdminCustomers';
import AdminStats from './pages/admin/AdminStats';
import AdminFraud from './pages/admin/AdminFraud';

function Layout() {
  const { pathname } = useLocation();
  const isDemo = pathname.startsWith('/demo') || pathname.startsWith('/p/');
  const isAdmin = pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      {!isDemo && !isAdmin && <Header />}
      <main className="flex-1">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/process" element={<Process />} />
            <Route path="/samples" element={<Samples />} />
            <Route path="/demo/:slug/:subpage" element={<Demo />} />
            <Route path="/demo/:slug" element={<Demo />} />
            <Route path="/demo/:slug/business/:subpage" element={<Demo />} />
            <Route path="/demo/:slug/complex/:subpage" element={<Demo />} />
            <Route path="/demo/:slug/unit/:subpage" element={<Demo />} />
            <Route path="/p/:projectId" element={<ContentDemoLoader />} />
            <Route path="/p/:projectId/:subpage" element={<ContentDemoLoader />} />
            <Route path="/p/:projectId/business/:subpage" element={<ContentDemoLoader />} />
            <Route path="/p/:projectId/complex/:subpage" element={<ContentDemoLoader />} />
            <Route path="/p/:projectId/unit/:subpage" element={<ContentDemoLoader />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/map" element={<Map />} />
            <Route path="/map/:slug" element={<MapRegion />} />
            <Route path="/admin" element={<Admin />}>
              <Route index element={<Navigate to="/admin/customers" replace />} />
              <Route path="customers" element={<AdminCustomers />} />
              <Route path="stats" element={<AdminStats />} />
              <Route path="fraud" element={<AdminFraud />} />
            </Route>
        </Routes>
      </main>
      {!isDemo && !isAdmin && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}

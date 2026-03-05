import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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

function Layout() {
  const { pathname } = useLocation();
  const isDemo = pathname.startsWith('/demo') || pathname.startsWith('/p/');

  return (
    <div className="flex flex-col min-h-screen">
      {!isDemo && <Header />}
      <main className="flex-1">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/process" element={<Process />} />
            <Route path="/samples" element={<Samples />} />
            <Route path="/demo/:slug" element={<Demo />} />
            <Route path="/p/:projectId" element={<Demo />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/map" element={<Map />} />
            <Route path="/map/:slug" element={<MapRegion />} />
        </Routes>
      </main>
      {!isDemo && <Footer />}
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

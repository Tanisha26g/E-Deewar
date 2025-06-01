import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Event from "./pages/Event";
import MyEvents from "./pages/MyEvents";
import ExploreEvents from "./pages/ExploreEvents";
import RecommEvents from "./pages/RecommEvents";
import GoogleCal from "./pages/GoogleCal";
import SingleEventPage from './pages/SingleEventPage';

function App() {
  const backgroundClass = 'first-color';
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/browse" element={<Event />} />
          <Route path="/my-events" element={<MyEvents />} />
          <Route path="/explore" element={<ExploreEvents />} />
          <Route path="/recommended" element={<RecommEvents />} />
          <Route path="/calendar" element={<GoogleCal />} />
          <Route path="/sell" element={<SingleEventPage />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

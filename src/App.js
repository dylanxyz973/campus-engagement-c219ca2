import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import EventList from "./pages/EventList";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent";
import "./App.css";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout route wraps all child routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/events/new" element={<AddEvent />} />
          <Route path="/events/:id/edit" element={<EditEvent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


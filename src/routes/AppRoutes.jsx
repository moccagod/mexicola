import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";

// Public Pages
import Home from "../pages/Home";
import Activity from "../pages/Activity";
import Members from "../pages/Members";
import Recruitment from "../pages/Recruitment";
import Resources from "../pages/Resources";
import Community from "../pages/Community";

// // Admin Pages
// import AdminDashboard from "../pages/admin/Dashboard";
// import AdminEvents from "../pages/admin/Events";
// import AdminMembers from "../pages/admin/Members";
// import AdminPosts from "../pages/admin/Posts";
// import AdminGallery from "../pages/admin/Gallery";

export default function AppRoutes() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/activity" element={<Activity />} />
                <Route path="/members" element={<Members />} />
                <Route path="/recruitment" element={<Recruitment />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/community" element={<Community />} />
            </Route>

            {/* Admin Routes (nanti bisa pakai AdminLayout sendiri)
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/events" element={<AdminEvents />} />
            <Route path="/admin/members" element={<AdminMembers />} />
            <Route path="/admin/posts" element={<AdminPosts />} />
            <Route path="/admin/gallery" element={<AdminGallery />} /> */}
        </Routes>
    );
}

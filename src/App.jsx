import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Jobs from "./pages/Jobs/Jobs";

function ComingSoon({ title }) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">

        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl">
          🚀
        </div>

        <h1 className="text-2xl font-bold text-slate-900">
          {title}
        </h1>

        <p className="mt-3 text-sm text-slate-500">
          This page is coming soon.
        </p>

        <a
          href="/dashboard"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Back to Dashboard
        </a>

      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing */}
        <Route path="/" element={<Landing />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Jobs */}
        <Route path="/jobs" element={<Jobs />} />

        <Route
          path="/jobs/:jobId"
          element={<ComingSoon title="Job Details" />}
        />

        <Route
          path="/jobs/:jobId/analysis"
          element={<ComingSoon title="Job Analysis" />}
        />

        <Route
          path="/jobs/:jobId/apply-prep"
          element={<ComingSoon title="Application Preparation" />}
        />

        {/* Resume */}
        <Route
          path="/resume"
          element={<ComingSoon title="My Resume" />}
        />

        {/* Applications */}
        <Route
          path="/applications"
          element={<ComingSoon title="Applications" />}
        />

        <Route
          path="/applications/:id"
          element={<ComingSoon title="Application Details" />}
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={<ComingSoon title="Profile" />}
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={<ComingSoon title="Settings" />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<ComingSoon title="Page Not Found" />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
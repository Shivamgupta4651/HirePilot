import DashboardLayout from "../../components/layout/DashboardLayout";
import { Link } from "react-router-dom";

const stats = [
  { title: "Jobs Found", value: "128", change: "+12 this week", icon: "💼" },
  { title: "High Match Jobs", value: "24", change: "+5 this week", icon: "🎯" },
  { title: "Applications", value: "12", change: "+3 this week", icon: "📤" },
  { title: "Interviews", value: "4", change: "2 upcoming", icon: "🎤" },
  { title: "Saved Jobs", value: "18", change: "6 new", icon: "🔖" },
  { title: "Resume Status", value: "Ready", change: "Updated today", icon: "📄" },
];

const jobs = [
  {
    title: "Junior Data Analyst",
    company: "TechNova",
    location: "Remote",
    salary: "₹5–8 LPA",
    match: 92,
  },
  {
    title: "Data Analyst",
    company: "DataSphere",
    location: "Bangalore",
    salary: "₹6–10 LPA",
    match: 87,
  },
  {
    title: "Business Analyst",
    company: "InnovateLabs",
    location: "Hyderabad",
    salary: "₹5–9 LPA",
    match: 81,
  },
];

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              Good morning, Shivam 👋
            </p>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              Your job search dashboard
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Track your job search, applications and opportunities in one place.
            </p>
          </div>

          <Link
            to="/jobs"
            className="rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
          >
            Discover Jobs →
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {stat.title}
                  </p>

                  <p className="mt-2 text-3xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  {stat.icon}
                </div>
              </div>

              <p className="mt-4 text-xs font-semibold text-emerald-600">
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">

          {/* Jobs */}
          <div className="xl:col-span-2">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Recommended Jobs
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Jobs that match your profile
                  </p>
                </div>

                <Link
                  to="/jobs"
                  className="text-sm font-semibold text-blue-600"
                >
                  View all
                </Link>
              </div>

              <div className="divide-y divide-slate-100">
                {jobs.map((job) => (
                  <div
                    key={job.title}
                    className="p-6 hover:bg-slate-50"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-600">
                          {job.company.charAt(0)}
                        </div>

                        <div>
                          <h3 className="font-semibold text-slate-900">
                            {job.title}
                          </h3>

                          <p className="mt-1 text-sm text-slate-500">
                            {job.company}
                          </p>

                          <p className="mt-2 text-xs text-slate-400">
                            📍 {job.location} &nbsp; • &nbsp; 💰 {job.salary}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-600">
                          {job.match}% Match
                        </span>

                        <Link
                          to="/jobs"
                          className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                        >
                          View
                        </Link>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">

            {/* Resume */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    My Resume
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Current resume status
                  </p>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                  Ready
                </span>
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-xl shadow-sm">
                    📄
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Shivam_Gupta_Resume.pdf
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Updated today
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-xs">
                  <span className="font-medium text-slate-600">
                    Profile completeness
                  </span>

                  <span className="font-bold text-blue-600">
                    85%
                  </span>
                </div>

                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 w-[85%] rounded-full bg-blue-600" />
                </div>
              </div>

              <Link
                to="/resume"
                className="mt-6 block rounded-lg border border-slate-200 py-2.5 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Manage Resume
              </Link>
            </div>

            {/* Tip */}
            <div className="rounded-xl bg-blue-600 p-6">
              <div className="text-2xl">💡</div>

              <h3 className="mt-3 font-semibold text-white">
                Improve your match score
              </h3>

              <p className="mt-2 text-sm leading-6 text-blue-100">
                Complete your profile and keep your resume updated to find more relevant opportunities.
              </p>

              <Link
                to="/profile"
                className="mt-4 inline-block text-sm font-semibold text-white underline"
              >
                Complete profile →
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">
                Ready for your next opportunity? 🚀
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Explore jobs that match your skills.
              </p>
            </div>

            <Link
              to="/jobs"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700"
            >
              Explore Jobs
            </Link>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;

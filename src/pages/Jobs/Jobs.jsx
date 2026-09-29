import { useMemo, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

const jobsData = [
  {
    id: 1,
    title: "Junior Data Analyst",
    company: "TechNova",
    location: "Remote",
    type: "Full-time",
    salary: "₹5–8 LPA",
    match: 92,
    posted: "2 days ago",
    skills: ["Python", "SQL", "Excel"],
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "DataSphere",
    location: "Bangalore",
    type: "Full-time",
    salary: "₹6–10 LPA",
    match: 87,
    posted: "1 day ago",
    skills: ["Python", "SQL", "Power BI"],
  },
  {
    id: 3,
    title: "Business Analyst",
    company: "InnovateLabs",
    location: "Hyderabad",
    type: "Full-time",
    salary: "₹5–9 LPA",
    match: 81,
    posted: "3 days ago",
    skills: ["Excel", "SQL", "Tableau"],
  },
  {
    id: 4,
    title: "Data Science Intern",
    company: "AI Labs",
    location: "Remote",
    type: "Internship",
    salary: "₹25–40K/month",
    match: 78,
    posted: "4 days ago",
    skills: ["Python", "Pandas", "Machine Learning"],
  },
  {
    id: 5,
    title: "MIS Analyst",
    company: "GrowthWorks",
    location: "Delhi",
    type: "Full-time",
    salary: "₹4–7 LPA",
    match: 75,
    posted: "5 days ago",
    skills: ["Excel", "Power BI", "SQL"],
  },
  {
    id: 6,
    title: "Reporting Analyst",
    company: "FinEdge",
    location: "Mumbai",
    type: "Full-time",
    salary: "₹5–8 LPA",
    match: 72,
    posted: "1 week ago",
    skills: ["Excel", "Tableau", "SQL"],
  },
];

function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All locations");
  const [type, setType] = useState("All types");
  const [match, setMatch] = useState("Any match");

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        job.title.toLowerCase().includes(searchText) ||
        job.company.toLowerCase().includes(searchText) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(searchText)
        );

      const matchesLocation =
        location === "All locations" || job.location === location;

      const matchesType =
        type === "All types" || job.type === type;

      const matchesMatch =
        match === "Any match" ||
        (match === "80%+" && job.match >= 80) ||
        (match === "70%+" && job.match >= 70) ||
        (match === "60%+" && job.match >= 60);

      return (
        matchesSearch &&
        matchesLocation &&
        matchesType &&
        matchesMatch
      );
    });
  }, [search, location, type, match]);

  const clearFilters = () => {
    setSearch("");
    setLocation("All locations");
    setType("All types");
    setMatch("Any match");
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium text-blue-600">
              Job Discovery
            </p>

            <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
              Find your next opportunity
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Discover jobs that match your skills, experience and career goals.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
            <p className="text-sm text-slate-500">Available jobs</p>
            <p className="text-xl font-bold text-slate-900">
              {filteredJobs.length}
            </p>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="flex flex-col gap-3 lg:flex-row">

            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                ⌕
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search jobs, companies or skills..."
                className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </div>

            <button
              onClick={clearFilters}
              className="rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Clear Filters
            </button>

          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500"
            >
              <option>All locations</option>
              <option>Remote</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Delhi</option>
              <option>Mumbai</option>
            </select>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500"
            >
              <option>All types</option>
              <option>Full-time</option>
              <option>Internship</option>
            </select>

            <select
              value={match}
              onChange={(e) => setMatch(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500"
            >
              <option>Any match</option>
              <option>80%+</option>
              <option>70%+</option>
              <option>60%+</option>
            </select>

          </div>
        </div>

        {/* Job List */}
        <div className="space-y-4">

          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex flex-col justify-between gap-5 lg:flex-row">

                <div className="flex gap-4">

                  {/* Company Logo */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-blue-600">
                    {job.company.charAt(0)}
                  </div>

                  <div>

                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-bold text-slate-900">
                        {job.title}
                      </h2>

                      {job.match >= 90 && (
                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                          Top Match
                        </span>
                      )}
                    </div>

                    <p className="mt-1 font-medium text-slate-700">
                      {job.company}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500">
                      <span>📍 {job.location}</span>
                      <span>💼 {job.type}</span>
                      <span>💰 {job.salary}</span>
                      <span>◷ {job.posted}</span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center justify-between gap-5 lg:flex-col lg:items-end lg:justify-center">

                  <div className="text-right">
                    <p className="text-xs text-slate-400">
                      Profile Match
                    </p>

                    <p className="mt-1 text-2xl font-bold text-emerald-600">
                      {job.match}%
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                      ☆ Save
                    </button>

                    <a
                      href={`/jobs/${job.id}`}
                      className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                    >
                      View Details
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <div className="text-4xl">🔎</div>

            <h2 className="mt-4 text-lg font-bold text-slate-900">
              No jobs found
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Try changing your search or filters.
            </p>

            <button
              onClick={clearFilters}
              className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </DashboardLayout>
  );
}

export default Jobs;
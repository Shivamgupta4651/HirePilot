import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const jobsData = [
  {
    id: 1,
    title: "Junior Data Analyst",
    company: "TechNova",
    location: "Remote",
    type: "Full-time",
    salary: "₹5–8 LPA",
    match: 92,
    skills: ["Python", "SQL", "Excel"],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "DataSphere",
    location: "Bangalore",
    type: "Full-time",
    salary: "₹6–10 LPA",
    match: 87,
    skills: ["Python", "SQL", "Tableau"],
    posted: "1 day ago",
  },
  {
    id: 3,
    title: "Business Analyst",
    company: "InnovateLabs",
    location: "Hyderabad",
    type: "Full-time",
    salary: "₹5–9 LPA",
    match: 81,
    skills: ["Excel", "SQL", "Power BI"],
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "MIS Analyst",
    company: "GrowthWorks",
    location: "Pune",
    type: "Full-time",
    salary: "₹4–7 LPA",
    match: 78,
    skills: ["Excel", "Power BI", "Reporting"],
    posted: "4 days ago",
  },
  {
    id: 5,
    title: "Data Science Intern",
    company: "AI Labs",
    location: "Remote",
    type: "Internship",
    salary: "₹20–30K/month",
    match: 76,
    skills: ["Python", "Pandas", "Machine Learning"],
    posted: "5 days ago",
  },
  {
    id: 6,
    title: "Product Data Analyst",
    company: "FinEdge",
    location: "Mumbai",
    type: "Full-time",
    salary: "₹7–11 LPA",
    match: 74,
    skills: ["SQL", "Python", "Analytics"],
    posted: "1 week ago",
  },
];

function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All locations");
  const [jobType, setJobType] = useState("All types");
  const [minMatch, setMinMatch] = useState("Any match");
  const [savedJobs, setSavedJobs] = useState([]);

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        job.title.toLowerCase().includes(searchText) ||
        job.company.toLowerCase().includes(searchText) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(searchText)
        );

      const matchesLocation =
        location === "All locations" || job.location === location;

      const matchesType =
        jobType === "All types" || job.type === jobType;

      const matchesScore =
        minMatch === "Any match" ||
        job.match >= Number(minMatch);

      return (
        matchesSearch &&
        matchesLocation &&
        matchesType &&
        matchesScore
      );
    });
  }, [search, location, jobType, minMatch]);

  const toggleSave = (id) => {
    setSavedJobs((current) =>
      current.includes(id)
        ? current.filter((jobId) => jobId !== id)
        : [...current, id]
    );
  };

  return (
    <div className="mx-auto max-w-7xl">

      {/* Page Header */}
      <div className="mb-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              Job Discovery
            </p>

            <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
              Find your next opportunity
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Discover jobs that match your skills, experience and career goals.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm">
            <span className="font-semibold text-slate-900">
              {filteredJobs.length}
            </span>{" "}
            <span className="text-slate-500">
              jobs found
            </span>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

        <div className="grid gap-4 lg:grid-cols-[1fr_180px]">

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              ⌕
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search jobs, companies or skills..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button
            onClick={() => {
              setSearch("");
              setLocation("All locations");
              setJobType("All types");
              setMinMatch("Any match");
            }}
            className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Clear Filters
          </button>

        </div>

        {/* Filters */}
        <div className="mt-4 grid gap-3 sm:grid-cols-3">

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500"
          >
            <option>All locations</option>
            <option>Remote</option>
            <option>Bangalore</option>
            <option>Hyderabad</option>
            <option>Pune</option>
            <option>Mumbai</option>
          </select>

          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500"
          >
            <option>All types</option>
            <option>Full-time</option>
            <option>Internship</option>
          </select>

          <select
            value={minMatch}
            onChange={(e) => setMinMatch(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500"
          >
            <option>Any match</option>
            <option value="90">90%+ Match</option>
            <option value="80">80%+ Match</option>
            <option value="70">70%+ Match</option>
          </select>

        </div>
      </div>

      {/* Content */}
      <div className="mt-7">

        {filteredJobs.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="text-4xl">🔎</div>

            <h2 className="mt-4 text-lg font-semibold text-slate-900">
              No jobs found
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Try changing your search or filters.
            </p>
          </div>
        ) : (
          <div className="space-y-4">

            {filteredJobs.map((job) => {
              const isSaved = savedJobs.includes(job.id);

              return (
                <div
                  key={job.id}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    {/* Job Info */}
                    <div className="flex min-w-0 gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-blue-600">
                        {job.company.charAt(0)}
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="text-lg font-semibold text-slate-900">
                            {job.title}
                          </h2>

                          {job.match >= 90 && (
                            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
                              Top Match
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-sm font-medium text-slate-600">
                          {job.company}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
                          <span>📍 {job.location}</span>
                          <span>💼 {job.type}</span>
                          <span>💰 {job.salary}</span>
                          <span>🕒 {job.posted}</span>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
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
                    <div className="flex shrink-0 flex-col items-start gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-end">

                      <div className="text-right">
                        <p className="text-xs font-medium text-slate-400">
                          Profile Match
                        </p>

                        <p className="mt-1 text-2xl font-bold text-emerald-600">
                          {job.match}%
                        </p>
                      </div>

                      <div className="flex gap-2">

                        <button
                          onClick={() => toggleSave(job.id)}
                          className={`rounded-lg border px-3 py-2 text-sm font-semibold ${
                            isSaved
                              ? "border-blue-200 bg-blue-50 text-blue-600"
                              : "border-slate-200 text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          {isSaved ? "★ Saved" : "☆ Save"}
                        </button>

                        <Link
                          to={`/jobs/${job.id}`}
                          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                        >
                          View Details
                        </Link>

                      </div>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        )}
      </div>

    </div>
  );
}

export default Jobs;
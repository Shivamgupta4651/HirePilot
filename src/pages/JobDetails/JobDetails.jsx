import { useNavigate, useParams } from "react-router-dom";

const jobs = [
  {
    id: "1",
    title: "Junior Data Analyst",
    company: "TechNova",
    location: "Remote",
    type: "Full-time",
    salary: "₹5–8 LPA",
    source: "HirePilot",
    posted: "2 days ago",
    matchScore: 92,

    skills: ["Python", "SQL", "Excel", "Tableau"],

    description:
      "We are looking for a Junior Data Analyst to support business teams with data analysis, reporting and dashboard development.",

    responsibilities: [
      "Analyze business and operational data.",
      "Prepare reports and dashboards.",
      "Clean and transform datasets.",
      "Identify trends and useful insights.",
      "Work with different teams to understand business requirements.",
    ],

    requirements: [
      "Strong knowledge of Python and SQL.",
      "Good understanding of Excel and data visualization.",
      "Basic knowledge of statistics.",
      "Good analytical and problem-solving skills.",
      "Ability to communicate insights clearly.",
    ],
  },

  {
    id: "2",
    title: "Data Analyst",
    company: "DataSphere",
    location: "Bangalore",
    type: "Full-time",
    salary: "₹6–10 LPA",
    source: "HirePilot",
    posted: "1 day ago",
    matchScore: 87,

    skills: ["Python", "SQL", "Power BI", "Excel"],

    description:
      "DataSphere is looking for a Data Analyst to analyze datasets and create business reports and dashboards.",

    responsibilities: [
      "Analyze large datasets.",
      "Create dashboards and reports.",
      "Track business KPIs.",
      "Identify trends and patterns.",
      "Present insights to stakeholders.",
    ],

    requirements: [
      "Python and SQL knowledge.",
      "Experience with Excel or BI tools.",
      "Understanding of data analysis.",
      "Good communication skills.",
    ],
  },
];

function JobDetails() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((item) => item.id === jobId) || jobs[0];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Top Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <button
            onClick={() => navigate("/jobs")}
            className="text-sm font-medium text-slate-600 hover:text-blue-600"
          >
            ← Back to Jobs
          </button>

          <button
            onClick={() => navigate(`/jobs/${job.id}/analysis`)}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Analyze My Match
          </button>

        </div>
      </header>


      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-8">

        {/* Job Header */}
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

          <div className="flex flex-col justify-between gap-6 lg:flex-row">

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-600">
                  {job.company.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {job.company}
                  </p>

                  <p className="text-xs text-slate-400">
                    {job.source}
                  </p>
                </div>

              </div>

              <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
                {job.title}
              </h1>

              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">

                <span>📍 {job.location}</span>

                <span>💼 {job.type}</span>

                <span>💰 {job.salary}</span>

                <span>🕒 {job.posted}</span>

              </div>

            </div>


            {/* Match */}
            <div className="flex min-w-[160px] flex-col items-center justify-center rounded-xl bg-emerald-50 p-5">

              <p className="text-xs font-medium text-slate-500">
                Profile Match
              </p>

              <p className="mt-1 text-4xl font-bold text-emerald-600">
                {job.matchScore}%
              </p>

              <p className="mt-1 text-xs font-medium text-emerald-700">
                Strong Match
              </p>

            </div>

          </div>


          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">

            <button
              onClick={() => navigate(`/jobs/${job.id}/analysis`)}
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Analyze My Match →
            </button>

            <button
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              ☆ Save Job
            </button>

            <button
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Apply on Company Site
            </button>

          </div>

        </section>


        {/* Content */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* Left */}
          <div className="space-y-6 lg:col-span-2">

            {/* Description */}
            <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

              <h2 className="text-xl font-bold text-slate-900">
                Job Description
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {job.description}
              </p>

            </section>


            {/* Responsibilities */}
            <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

              <h2 className="text-xl font-bold text-slate-900">
                Responsibilities
              </h2>

              <ul className="mt-5 space-y-3">

                {job.responsibilities.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span className="mt-1 text-blue-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}

              </ul>

            </section>


            {/* Requirements */}
            <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

              <h2 className="text-xl font-bold text-slate-900">
                Requirements
              </h2>

              <ul className="mt-5 space-y-3">

                {job.requirements.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span className="mt-1 text-blue-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}

              </ul>

            </section>

          </div>


          {/* Right */}
          <aside className="space-y-6">

            {/* Skills */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h2 className="font-bold text-slate-900">
                Required Skills
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">

                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </section>


            {/* Match Card */}
            <section className="rounded-2xl bg-blue-600 p-6 text-white shadow-sm">

              <p className="text-sm text-blue-100">
                Your Profile Match
              </p>

              <p className="mt-2 text-4xl font-bold">
                {job.matchScore}%
              </p>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                Analyze this job to understand your matched skills and
                identify missing skills.
              </p>

              <button
                onClick={() => navigate(`/jobs/${job.id}/analysis`)}
                className="mt-5 w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50"
              >
                Analyze Job
              </button>

            </section>

          </aside>

        </div>

      </main>

    </div>
  );
}

export default JobDetails;
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-lg">
              🚀
            </div>

            <span className="text-xl font-bold tracking-tight">
              HirePilot
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              How It Works
            </a>

            <a
              href="#benefits"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Benefits
            </a>
          </nav>

          {/* Auth */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 sm:block"
            >
              Sign In
            </Link>

            <Link
              to="/register"
              className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <main>

        <section className="relative overflow-hidden bg-slate-50">

          {/* Background decoration */}
          <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

          <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

            <div className="mx-auto max-w-4xl text-center">

              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
                <span>✨</span>
                AI-powered job search copilot
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Your smarter way to
                <span className="block text-blue-600">
                  find and apply for jobs.
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                HirePilot helps you discover relevant jobs, understand your
                match, identify skill gaps, and prepare personalized
                applications — all from one workspace.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

                <Link
                  to="/register"
                  className="w-full rounded-lg bg-blue-600 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 sm:w-auto"
                >
                  Start Your Job Search →
                </Link>

                <Link
                  to="/login"
                  className="w-full rounded-lg border border-slate-300 bg-white px-7 py-3.5 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
                >
                  Sign In
                </Link>

              </div>

              <p className="mt-4 text-xs text-slate-500">
                Upload your resume and start discovering opportunities.
              </p>

            </div>


            {/* Dashboard Preview */}
            <div className="mx-auto mt-16 max-w-5xl">

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">

                {/* Browser header */}
                <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-5 py-3">

                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                  <div className="h-3 w-3 rounded-full bg-slate-300" />

                  <div className="ml-4 flex-1 rounded-md bg-white px-4 py-1.5 text-xs text-slate-400">
                    app.hirepilot.com/dashboard
                  </div>

                </div>

                {/* Preview content */}
                <div className="grid min-h-[320px] grid-cols-1 md:grid-cols-[180px_1fr]">

                  {/* Sidebar */}
                  <div className="hidden border-r border-slate-200 bg-slate-950 p-5 md:block">

                    <div className="mb-8 text-lg font-bold text-white">
                      HirePilot
                    </div>

                    <div className="space-y-2 text-sm">

                      <div className="rounded-lg bg-blue-600 px-3 py-2 text-white">
                        Dashboard
                      </div>

                      <div className="px-3 py-2 text-slate-400">
                        Jobs
                      </div>

                      <div className="px-3 py-2 text-slate-400">
                        My Resume
                      </div>

                      <div className="px-3 py-2 text-slate-400">
                        Applications
                      </div>

                    </div>

                  </div>

                  {/* Dashboard */}
                  <div className="bg-slate-50 p-6">

                    <div className="mb-5">
                      <div className="text-xl font-bold text-slate-900">
                        Good morning 👋
                      </div>

                      <div className="mt-1 text-sm text-slate-500">
                        Here's what's happening with your job search.
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

                      <PreviewCard
                        label="Jobs Found"
                        value="128"
                      />

                      <PreviewCard
                        label="High Match"
                        value="24"
                      />

                      <PreviewCard
                        label="Applications"
                        value="12"
                      />

                      <PreviewCard
                        label="Interviews"
                        value="4"
                      />

                    </div>

                    <div className="mt-4 grid gap-4 lg:grid-cols-2">

                      <div className="rounded-xl border border-slate-200 bg-white p-5">
                        <div className="text-sm font-semibold text-slate-900">
                          Resume Match
                        </div>

                        <div className="mt-5 flex items-center gap-4">

                          <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-blue-600 text-lg font-bold">
                            87%
                          </div>

                          <div>
                            <div className="font-medium text-slate-900">
                              Strong Match
                            </div>

                            <div className="mt-1 text-xs text-slate-500">
                              Your profile matches most requirements.
                            </div>
                          </div>

                        </div>
                      </div>


                      <div className="rounded-xl border border-slate-200 bg-white p-5">

                        <div className="text-sm font-semibold text-slate-900">
                          Recommended Jobs
                        </div>

                        <div className="mt-4 space-y-3">

                          <JobPreview
                            company="Tech Company"
                            role="Data Analyst"
                            match="92%"
                          />

                          <JobPreview
                            company="Analytics Inc."
                            role="Business Analyst"
                            match="88%"
                          />

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= FEATURES ================= */}
        <section id="features" className="bg-white py-20 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Everything you need
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                One workspace for your entire job search
              </h2>

              <p className="mt-4 text-slate-600">
                From discovering opportunities to tracking applications,
                HirePilot keeps everything organized.
              </p>

            </div>


            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              <Feature
                icon="🔎"
                title="Job Discovery"
                description="Discover relevant opportunities and organize them in one place."
              />

              <Feature
                icon="📄"
                title="Resume Management"
                description="Upload and manage your resume while keeping your profile ready."
              />

              <Feature
                icon="📊"
                title="Match Analysis"
                description="Understand your match score and identify important skill gaps."
              />

              <Feature
                icon="✨"
                title="AI Application Prep"
                description="Prepare tailored resumes, cover letters and screening answers."
              />

              <Feature
                icon="📋"
                title="Application Tracker"
                description="Track every application and monitor your progress."
              />

              <Feature
                icon="⚙️"
                title="Personalized Profile"
                description="Manage your profile, preferences and job-search settings."
              />

            </div>

          </div>

        </section>


        {/* ================= HOW IT WORKS ================= */}
        <section
          id="how-it-works"
          className="border-y border-slate-200 bg-slate-50 py-20 lg:py-24"
        >

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Simple workflow
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                From resume to application
              </h2>

              <p className="mt-4 text-slate-600">
                HirePilot guides you through the complete job-search journey.
              </p>

            </div>


            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <Step
                number="01"
                title="Upload Resume"
                description="Add your resume and build your candidate profile."
              />

              <Step
                number="02"
                title="Discover Jobs"
                description="Find opportunities that match your profile."
              />

              <Step
                number="03"
                title="Analyze Match"
                description="Review your match score and skill gaps."
              />

              <Step
                number="04"
                title="Prepare & Apply"
                description="Create tailored content and track your application."
              />

            </div>

          </div>

        </section>


        {/* ================= BENEFITS ================= */}
        <section id="benefits" className="bg-white py-20 lg:py-24">

          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Built for job seekers
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Spend less time managing applications.
                <span className="block text-blue-600">
                  Spend more time preparing for success.
                </span>
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                HirePilot brings your resume, jobs, match insights,
                application preparation and tracking into one focused
                workspace.
              </p>

              <div className="mt-8 space-y-4">

                <Benefit text="Keep your job search organized" />

                <Benefit text="Understand where your profile matches" />

                <Benefit text="Identify skills you may need to improve" />

                <Benefit text="Prepare personalized application content" />

              </div>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex items-center justify-between">

                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      Senior Data Analyst
                    </div>

                    <div className="mt-1 text-xs text-slate-500">
                      Analytics Company
                    </div>
                  </div>

                  <div className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                    92% Match
                  </div>

                </div>


                <div className="mt-6">

                  <div className="mb-2 flex justify-between text-xs">

                    <span className="text-slate-500">
                      Profile match
                    </span>

                    <span className="font-semibold text-slate-900">
                      92%
                    </span>

                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">

                    <div className="h-full w-[92%] rounded-full bg-blue-600" />

                  </div>

                </div>


                <div className="mt-6">

                  <div className="text-xs font-semibold text-slate-900">
                    Relevant Skills
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700">
                      Python
                    </span>

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700">
                      SQL
                    </span>

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700">
                      Tableau
                    </span>

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700">
                      Analytics
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="bg-slate-950 py-20">

          <div className="mx-auto max-w-3xl px-6 text-center">

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to take control of your job search?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Create your HirePilot workspace and start organizing your
              job-search journey.
            </p>

            <Link
              to="/register"
              className="mt-8 inline-flex rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get Started →
            </Link>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <div className="font-semibold text-slate-900">
            HirePilot 🚀
          </div>

          <p className="text-sm text-slate-500">
            AI-powered job search copilot
          </p>

          <p className="text-sm text-slate-500">
            © 2026 HirePilot
          </p>

        </div>

      </footer>

    </div>
  );
}


/* ================= SMALL COMPONENTS ================= */

function Feature({ icon, title, description }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">

      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-xl">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>

    </div>
  );
}


function Step({ number, title, description }) {
  return (
    <div className="relative rounded-xl border border-slate-200 bg-white p-6">

      <div className="text-sm font-bold text-blue-600">
        {number}
      </div>

      <h3 className="mt-4 font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>

    </div>
  );
}


function Benefit({ text }) {
  return (
    <div className="flex items-start gap-3">

      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
        ✓
      </div>

      <span className="text-sm text-slate-700">
        {text}
      </span>

    </div>
  );
}


function PreviewCard({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">

      <div className="text-xs text-slate-500">
        {label}
      </div>

      <div className="mt-2 text-2xl font-bold text-slate-900">
        {value}
      </div>

    </div>
  );
}


function JobPreview({ company, role, match }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-100 p-3">

      <div>
        <div className="text-xs font-semibold text-slate-900">
          {role}
        </div>

        <div className="mt-1 text-[11px] text-slate-500">
          {company}
        </div>
      </div>

      <div className="text-xs font-semibold text-green-600">
        {match}
      </div>

    </div>
  );
}

export default Landing;
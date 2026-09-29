import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary mock login
    // Backend API later yahan connect hoga
    console.log("Login:", { email, password });

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-lg">
              🚀
            </div>

            <span className="text-xl font-bold text-slate-900">
              HirePilot
            </span>
          </Link>

          <div className="text-sm text-slate-600">
            Don't have an account?
            <Link
              to="/register"
              className="ml-1 font-semibold text-blue-600 hover:text-blue-700"
            >
              Sign up
            </Link>
          </div>

        </div>
      </header>


      {/* Login Section */}
      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-6 py-12">

        <div className="w-full max-w-md">

          {/* Heading */}
          <div className="mb-8 text-center">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl shadow-lg shadow-blue-600/20">
              🚀
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Welcome back
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Sign in to continue your job search with HirePilot.
            </p>

          </div>


          {/* Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

              </div>


              {/* Password */}
              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-medium text-blue-600 hover:text-blue-700"
                  >
                    Forgot password?
                  </button>

                </div>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

              </div>


              {/* Remember */}
              <div className="flex items-center gap-2">

                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-slate-600"
                >
                  Remember me
                </label>

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                Sign In
              </button>

            </form>


            {/* Divider */}
            <div className="my-6 flex items-center gap-3">

              <div className="h-px flex-1 bg-slate-200" />

              <span className="text-xs text-slate-400">
                OR
              </span>

              <div className="h-px flex-1 bg-slate-200" />

            </div>


            {/* Register */}
            <div className="text-center text-sm text-slate-600">

              Don't have an account?

              <Link
                to="/register"
                className="ml-1 font-semibold text-blue-600 hover:text-blue-700"
              >
                Create one
              </Link>

            </div>

          </div>


          {/* Back */}
          <div className="mt-6 text-center">

            <Link
              to="/"
              className="text-sm text-slate-500 hover:text-slate-700"
            >
              ← Back to HirePilot
            </Link>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Login;
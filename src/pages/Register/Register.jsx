import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Temporary mock registration
    console.log("Register:", {
      name,
      email,
      password,
    });

    // Later backend API will be connected here
    navigate("/login");
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
            Already have an account?
            <Link
              to="/login"
              className="ml-1 font-semibold text-blue-600 hover:text-blue-700"
            >
              Sign in
            </Link>
          </div>

        </div>
      </header>


      {/* Register */}
      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-6 py-10">

        <div className="w-full max-w-md">

          {/* Heading */}
          <div className="mb-7 text-center">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl shadow-lg shadow-blue-600/20">
              🚀
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Create your account
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Start your smarter job search with HirePilot.
            </p>

          </div>


          {/* Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full name
                </label>

                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>


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
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>


              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  required
                  minLength={6}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>


              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Confirm password
                </label>

                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                  minLength={6}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>


              {/* Terms */}
              <div className="flex items-start gap-2 pt-1">

                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600"
                />

                <label
                  htmlFor="terms"
                  className="text-xs leading-5 text-slate-500"
                >
                  I agree to the Terms of Service and Privacy Policy.
                </label>

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                Create Account
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


            {/* Login */}
            <div className="text-center text-sm text-slate-600">

              Already have an account?

              <Link
                to="/login"
                className="ml-1 font-semibold text-blue-600 hover:text-blue-700"
              >
                Sign in
              </Link>

            </div>

          </div>


          {/* Back */}
          <div className="mt-5 text-center">

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

export default Register;
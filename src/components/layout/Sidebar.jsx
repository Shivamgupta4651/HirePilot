import { NavLink } from "react-router-dom";

const navigation = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "▦",
  },
  {
    name: "Jobs",
    path: "/jobs",
    icon: "⌕",
  },
  {
    name: "My Resume",
    path: "/resume",
    icon: "▤",
  },
  {
    name: "Applications",
    path: "/applications",
    icon: "✓",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "○",
  },
  {
    name: "Settings",
    path: "/settings",
    icon: "⚙",
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-slate-200 bg-white">

      {/* Logo */}
      <div className="flex h-16 items-center border-b border-slate-200 px-6">

        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-lg">
            🚀
          </div>

          <span className="text-xl font-bold text-slate-900">
            HirePilot
          </span>

        </div>

      </div>


      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-6">

        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Workspace
        </p>

        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            <span className="w-5 text-center text-base">
              {item.icon}
            </span>

            {item.name}
          </NavLink>
        ))}

      </nav>


      {/* Bottom */}
      <div className="border-t border-slate-200 p-4">

        <div className="rounded-xl bg-slate-50 p-4">

          <p className="text-sm font-semibold text-slate-900">
            Job search progress
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Keep your profile updated.
          </p>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-3/4 rounded-full bg-blue-600" />
          </div>

          <p className="mt-2 text-xs font-medium text-slate-500">
            75% complete
          </p>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;
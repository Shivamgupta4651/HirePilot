function Navbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-8">

      {/* Search */}
      <div className="hidden md:block">

        <div className="flex w-80 items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5">

          <span className="text-slate-400">
            ⌕
          </span>

          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />

        </div>

      </div>


      {/* Right */}
      <div className="ml-auto flex items-center gap-4">

        <button className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100">

          🔔

          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-blue-600" />

        </button>


        <div className="h-8 w-px bg-slate-200" />


        <button className="flex items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-slate-50">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
            SG
          </div>

          <div className="hidden text-left sm:block">

            <p className="text-sm font-semibold text-slate-900">
              Shivam Gupta
            </p>

            <p className="text-xs text-slate-500">
              Job Seeker
            </p>

          </div>

        </button>

      </div>

    </header>
  );
}

export default Navbar;
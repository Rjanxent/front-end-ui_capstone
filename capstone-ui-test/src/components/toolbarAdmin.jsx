import { useState } from "react";
import PPEInventoryForm from "./PPEInventoryForm";
import RPCSPInventoryForm from "./RPCSPInventoryForm";

export default function ToolBar() {
  const [search, setSearch] = useState("");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortKey, setSortKey] = useState("Sort by:");
  const [showTypeOverlay, setShowTypeOverlay] = useState(false);
  const [showPPEForm, setShowPPEForm] = useState(false);
  const [showRPCSPForm, setShowRPCSPForm] = useState(false);

  const sortOptions = [
    "Name (A-Z)",
    "Name (Z-A)",
    "Category",
    "Date (oldest)",
    "Date (newest)",
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-4">
        {/* white card with soft shadow */}
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Left: search + sort */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:flex-1">
            {/* Search bar */}
            <div className="relative sm:flex-1 sm:max-w-xs">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F549A]"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Sort by dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <span className="text-sm text-gray-700">{sortKey}</span>
                <svg
                  className={`h-4 w-4 text-gray-500 transition-transform ${
                    sortOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {sortOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setSortKey(opt);
                        setSortOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: action buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowTypeOverlay(true)}
              className="px-4 py-2 rounded-lg bg-white shadow-sm hover:bg-[#FCFC62] transition"
            >
              Add Item
            </button>
            <button className="px-4 py-2 rounded-lg hover:bg-[#FCFC62] text-black shadow hover:bg-[#FCFC62] transition">
              Schedule Maintenance
            </button>
          </div>

          {/* ---------- overlays – siblings of the card ---------- */}
          {showTypeOverlay && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25">
              <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Select Equipment Type
                </h2>

                {/* PPE */}
                <button
                  onClick={() => {
                    setShowTypeOverlay(false);
                    setShowPPEForm(true);
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  PPE
                </button>

                {/* RPCSP */}
                <button
                  onClick={() => {
                    setShowTypeOverlay(false);
                    setShowRPCSPForm(true);
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  RPCSP
                </button>

                {/* Cancel */}
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setShowTypeOverlay(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* PPE form */}
      {showPPEForm && (
        <PPEInventoryForm
          onSave={(data) => {
            console.log("Saved PPE:", data);
            setShowPPEForm(false);
          }}
          onDiscard={() => setShowPPEForm(false)}
        />
      )}

      {/* RPCSP form */}
      {showRPCSPForm && (
        <RPCSPInventoryForm
          onSave={(data) => {
            console.log("Saved RPCSP:", data);
            setShowRPCSPForm(false);
          }}
          onDiscard={() => setShowRPCSPForm(false)}
        />
      )}
    </>
  );
}

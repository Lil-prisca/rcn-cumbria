import { Suspense, useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { adminPages } from "./schema";

const linkCls = ({ isActive }) =>
  `block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? "bg-neutral-900 text-white"
      : "text-neutral-700 hover:bg-neutral-200"
  }`;

export default function AdminLayout() {
  const { pathname } = useLocation();
  const [email, setEmail] = useState("");
  const [openPath, setOpenPath] = useState(null);
  const open = openPath === pathname;
  const setOpen = (value) => setOpenPath(value ? pathname : null);

  useEffect(() => {
    supabase.auth
      .getUser()
      .then(({ data }) => setEmail(data.user?.email ?? ""));
  }, []);

  return (
    <div className="min-h-screen bg-neutral-100 md:flex">
      {/* Mobile top bar */}
      <header className="md:hidden sticky top-0 z-30 flex items-center justify-between bg-white border-b border-neutral-200 px-4 py-3">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="text-2xl leading-none px-1"
        >
          ☰
        </button>
        <span className="font-semibold">RCN Cumbria Admin</span>
        <span className="w-6" />
      </header>

      {/* Backdrop (mobile) */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 flex flex-col bg-white border-r border-neutral-200
          transform transition-transform duration-200
          md:sticky md:top-0 md:h-screen md:shrink-0 md:translate-x-0 md:z-auto
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-neutral-100">
          <div>
            <p className="font-semibold leading-tight">RCN Cumbria</p>
            <p className="text-xs text-neutral-500">Website admin</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="md:hidden text-xl px-2"
          >
            ✕
          </button>
        </div>

        <nav
          className="flex-1 overflow-y-auto p-3 space-y-1"
          aria-label="Admin pages"
        >
          <NavLink to="/admin" end className={linkCls}>
            Overview
          </NavLink>

          <p className="px-3 pt-4 pb-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
            Pages
          </p>
          {Object.entries(adminPages).map(([slug, p]) => (
            <NavLink key={slug} to={`/admin/${slug}`} className={linkCls}>
              {p.title}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-neutral-100 p-3 space-y-1">
          {email && (
            <p className="px-3 pb-1 text-xs text-neutral-500 truncate">
              {email}
            </p>
          )}
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-200"
          >
            View live site ↗
          </a>
          <button
            type="button"
            onClick={() => supabase.auth.signOut()}
            className="w-full text-left rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            Sign out
          </button>
        </div>
      </aside>

      {/* Page content */}
      <main className="flex-1 min-w-0 p-4 md:p-8">
        <div className="max-w-3xl mx-auto">
          <Suspense fallback={<p className="text-neutral-500">Loading…</p>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

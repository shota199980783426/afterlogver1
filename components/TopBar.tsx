// components/TopBar.tsx
"use client";

type Props = {
  active: "journal" | "todo";
  onChange: (v: "journal" | "todo") => void;
  syncState: "synced" | "syncing" | "offline";
  onTheme: () => void;
};

export default function TopBar({ active, onChange, syncState, onTheme }: Props) {
  return (
    <header className="topbar glass">
      <div className="topbar-row">
        <div className="brand">
          <div className="brand-name">Afterlog</div>
          <div className="brand-sub">v1</div>
        </div>

        <nav className="tabs" aria-label="Primary tabs">
          <button
            className="tab"
            data-active={active === "journal"}
            onClick={() => onChange("journal")}
            type="button"
          >
            Journal
          </button>
          <button
            className="tab"
            data-active={active === "todo"}
            onClick={() => onChange("todo")}
            type="button"
          >
            Todo
          </button>
        </nav>

        <div className="right-tools">
          <div className="sync-pill" title="Sync status">
            <span className="sync-dot" data-state={syncState} />
            <span>
              {syncState === "synced" ? "Synced" : syncState === "syncing" ? "Syncing" : "Offline"}
            </span>
          </div>

          <button className="ui-btn ui-btn-ghost" onClick={onTheme} type="button">
            Theme
          </button>
        </div>
      </div>
    </header>
  );
}

// app/page.tsx
"use client";

import { useMemo, useState } from "react";
import TopBar from "@/components/TopBar";

type Tab = "journal" | "todo";

export default function Page() {
  const [tab, setTab] = useState<Tab>("journal");
  const [sync, setSync] = useState<"synced" | "syncing" | "offline">("synced");

  const [journalText, setJournalText] = useState("");
  const [journalList, setJournalList] = useState<string[]>(() => [
    "夕方、雲が燃えてた。",
    "今日は静かに締める。",
  ]);

  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<{ text: string; done: boolean }[]>(() => [
    { text: "5分だけ片付ける", done: false },
    { text: "水を飲む", done: true },
  ]);

  const title = useMemo(() => (tab === "journal" ? "Journal" : "Todo"), [tab]);

  return (
    <div className="afterlog-shell">
      <TopBar
        active={tab}
        onChange={(v) => setTab(v)}
        syncState={sync}
        onTheme={() => {
          // ここは後で「テーマ5種ワンタップ切替」に置き換える
          setSync((s) => (s === "synced" ? "syncing" : s === "syncing" ? "offline" : "synced"));
        }}
      />

      <main className="screen">
        {/* Screen title */}
        <section className="glass card card-pad">
          <div style={{ opacity: 0.65, fontSize: 12 }}>{title}</div>
          <div style={{ fontSize: 26, fontWeight: 650, letterSpacing: "0.01em" }}>
            Focused, Quiet, Premium
          </div>
          <div style={{ opacity: 0.75, marginTop: 6, lineHeight: 1.7 }}>
            機能は最小。触感は最大。背景が生きていて、UIは負けない。
          </div>
        </section>

        {tab === "journal" ? (
          <>
            {/* Journal input */}
            <section className="glass card card-pad">
              <div style={{ display: "grid", gap: 10 }}>
                <input
                  className="ui-input"
                  placeholder="1行だけ書く（最大160）"
                  value={journalText}
                  maxLength={160}
                  onChange={(e) => setJournalText(e.target.value)}
                />

                <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
                  <button
                    className="ui-btn ui-btn-primary"
                    type="button"
                    onClick={() => {
                      if (!journalText.trim()) return;
                      setSync("syncing");
                      setJournalList((p) => [journalText.trim(), ...p]);
                      setJournalText("");
                      window.setTimeout(() => setSync("synced"), 450);
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </section>

            {/* Journal list */}
            <section className="glass card card-pad">
              {journalList.map((t, i) => (
                <div className="ui-row" key={`${t}-${i}`}>
                  <div style={{ opacity: 0.75, fontSize: 12 }}>{new Date().toLocaleTimeString()}</div>
                  <div>
                    <div className="ui-row-title">{t}</div>
                    <div className="ui-row-sub">mood: (v1 later)</div>
                  </div>
                  <button
                    className="ui-btn"
                    type="button"
                    onClick={() => setJournalList((p) => p.filter((_, idx) => idx !== i))}
                    title="Delete"
                  >
                    ×
                  </button>
                </div>
              ))}
            </section>
          </>
        ) : (
          <>
            {/* Todo input */}
            <section className="glass card card-pad">
              <div style={{ display: "grid", gap: 10 }}>
                <input
                  className="ui-input"
                  placeholder="タスクを追加（EnterでもOK）"
                  value={todoText}
                  onChange={(e) => setTodoText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key !== "Enter") return;
                    const v = todoText.trim();
                    if (!v) return;
                    setSync("syncing");
                    setTodos((p) => [{ text: v, done: false }, ...p]);
                    setTodoText("");
                    window.setTimeout(() => setSync("synced"), 350);
                  }}
                />
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button
                    className="ui-btn ui-btn-primary"
                    type="button"
                    onClick={() => {
                      const v = todoText.trim();
                      if (!v) return;
                      setSync("syncing");
                      setTodos((p) => [{ text: v, done: false }, ...p]);
                      setTodoText("");
                      window.setTimeout(() => setSync("synced"), 350);
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </section>

            {/* Active / Completed */}
            <section className="glass card card-pad">
              <div style={{ display: "grid", gap: 14 }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <div style={{ fontWeight: 650 }}>Active</div>
                  <div style={{ fontSize: 12, opacity: 0.6 }}>期限UIなし（v1）</div>
                </div>

                {todos
                  .filter((t) => !t.done)
                  .map((t, i) => (
                    <div className="ui-row" key={`a-${t.text}-${i}`}>
                      <input
                        type="checkbox"
                        checked={t.done}
                        onChange={() => {
                          setSync("syncing");
                          setTodos((p) =>
                            p.map((x) => (x === t ? { ...x, done: !x.done } : x))
                          );
                          window.setTimeout(() => setSync("synced"), 250);
                        }}
                      />
                      <div className="ui-row-title">{t.text}</div>
                      <button
                        className="ui-btn"
                        type="button"
                        onClick={() => setTodos((p) => p.filter((x) => x !== t))}
                        title="Delete"
                      >
                        ×
                      </button>
                    </div>
                  ))}

                <div style={{ marginTop: 6, opacity: 0.65, fontSize: 12 }}>Completed（折りたたみは次）</div>

                {todos
                  .filter((t) => t.done)
                  .map((t, i) => (
                    <div className="ui-row" key={`c-${t.text}-${i}`}>
                      <input
                        type="checkbox"
                        checked={t.done}
                        onChange={() => {
                          setSync("syncing");
                          setTodos((p) =>
                            p.map((x) => (x === t ? { ...x, done: !x.done } : x))
                          );
                          window.setTimeout(() => setSync("synced"), 250);
                        }}
                      />
                      <div className="ui-row-title" style={{ opacity: 0.7, textDecoration: "line-through" }}>
                        {t.text}
                      </div>
                      <button
                        className="ui-btn"
                        type="button"
                        onClick={() => setTodos((p) => p.filter((x) => x !== t))}
                        title="Delete"
                      >
                        ×
                      </button>
                    </div>
                  ))}
              </div>
            </section>
          </>
        )}
      </main>

      {/* Logout（誤タップしにくい小さめ） */}
      <button
        className="ui-btn ui-btn-ghost logout-fab"
        type="button"
        onClick={() => alert("ログアウトは後で実装（v1）")}
      >
        Log out
      </button>
    </div>
  );
}

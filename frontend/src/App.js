import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetch("/api/notices").then(r => r.json()).then(setRows).catch(() => setRows([]));
  }, []);
  return (
    <main className="container">
      <header className="hero">
        <h1>📢 Digital Notice Board</h1>
        <p className="tagline">Azure App Service • Node • React</p>
      </header>

      <section className="card">
        <h2>Latest Notices</h2>
        <ul className="list">
          {rows.length ? rows.map(n => <li key={n.id ?? n.title}>{n.title}</li>) : <li>No notices yet</li>}
        </ul>
      </section>

      <footer className="footer">
        <a href="/api/health">API health</a>
      </footer>
    </main>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Editor } from "./components";

export default function Home() {
  const [html, setHTML] = useState("");
  const [css, setCSS] = useState("");
  const [js, setJS] = useState("");

  useEffect(() => {
    setTimeout(() => {}, 300);
  }, [html, css, js]);

  const sourceFile = `
  <html>
    <head>
      <style>
      ${css}
      </style>
    </head>
    <body>${html}</body>
    <script>${js}</script>

  </html>
  `;
  return (
    <main>
      <div className="pane top-pane bg-[#080808] h-[50vh] flex">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHTML}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCSS}
        />
        <Editor language="javascript" displayName="JS" value={js} onChange={setJS} />
      </div>
      <div className="pane">
        <iframe
          srcDoc={sourceFile}
          className="border-0 w-full h-[50vh]"
          title="output"
          height={400}
        ></iframe>
      </div>
    </main>
  );
}

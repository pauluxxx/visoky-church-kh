/**
 * Generates pre-rendered HTML from the React app and injects it into dist/index.html.
 * Run after `vite build`. Keeps crawler content in sync with App and components.
 */
import { readFileSync, writeFileSync, existsSync } from "fs"
import { dirname, join } from "path"
import { fileURLToPath } from "url"
import { renderToString } from "react-dom/server"
import React from "react"
import App from "../src/App.tsx"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")
const distPath = join(root, "dist", "index.html")

if (!existsSync(distPath)) {
  console.error("prerender: dist/index.html not found. Run `npm run build` first.")
  process.exit(1)
}

const appHtml = renderToString(React.createElement(App))
let html = readFileSync(distPath, "utf-8")

// Replace content inside <div id="app">...</div> with pre-rendered HTML.
// Find the matching closing </div> by counting nested divs.
const appOpen = '<div id="app">'
const openIndex = html.indexOf(appOpen)
if (openIndex === -1) {
  console.error("prerender: could not find <div id=\"app\"> in dist/index.html")
  process.exit(1)
}

const contentStart = openIndex + appOpen.length
let depth = 1
let i = contentStart
while (i < html.length && depth > 0) {
  const nextOpen = html.indexOf("<div", i)
  const nextClose = html.indexOf("</div>", i)
  if (nextClose === -1) break
  if (nextOpen !== -1 && nextOpen < nextClose) {
    depth++
    i = nextOpen + 1
  } else {
    depth--
    i = nextClose + 6
    if (depth === 0) {
      const before = html.slice(0, contentStart)
      const after = html.slice(nextClose)
      html = before + appHtml + after
      break
    }
  }
}

writeFileSync(distPath, html, "utf-8")
console.log("prerender: injected pre-rendered content into dist/index.html")

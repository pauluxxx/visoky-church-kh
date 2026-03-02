import fs from "node:fs/promises"
import express from "express"
import { createServer as createViteServer } from "vite"

const isProd = process.argv.includes("--prod")
const port = Number(process.env.PORT || 5173)
const app = express()

let vite
let template
let render

if (!isProd) {
  vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  })
  app.use(vite.middlewares)
} else {
  app.use("/assets", express.static("dist/client/assets"))
  app.use(express.static("dist/client"))
  template = await fs.readFile("dist/client/index.html", "utf-8")
  ;({ render } = await import("./dist/server/entry-server.js"))
}

app.use("*", async (req, res) => {
  try {
    const url = req.originalUrl
    let htmlTemplate
    let appHtml

    if (!isProd) {
      htmlTemplate = await fs.readFile("index.html", "utf-8")
      htmlTemplate = await vite.transformIndexHtml(url, htmlTemplate)
      const ssrModule = await vite.ssrLoadModule("/src/ssr/entry-server.tsx")
      appHtml = ssrModule.render()
    } else {
      htmlTemplate = template
      appHtml = render()
    }

    const html = htmlTemplate.replace(`<!--ssr-outlet-->`, appHtml)
    res.status(200).set({ "Content-Type": "text/html" }).end(html)
  } catch (e) {
    if (!isProd && vite) {
      vite.ssrFixStacktrace(e)
    }
    res.status(500).end(e instanceof Error ? e.stack : String(e))
  }
})

app.listen(port, () => {
  console.log(`SSR server running on http://localhost:${port}`)
})

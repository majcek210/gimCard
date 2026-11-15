import { writeFileSync } from "node:fs"
import { renderStatsCard } from "../src/lib/card/renderer"
import { themes } from "../src/lib/card/themes"

const previewSvg = renderStatsCard({name: "majcek210", stars: 42, commits: 310, prs:7}, themes.dark)

writeFileSync("preview.svg", previewSvg)
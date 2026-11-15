import { renderStatsCard } from "../lib/card/renderer";
import { themes } from "../lib/card/themes"

export default async function handleCardDelivery(req: any, res: any) {
    const svg = renderStatsCard({name: "majcek210", stars: 67, commits: 32, prs: 67}, themes.dark)
    res.writeHead(200, {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=1800"
    })

    res.end(svg)
}
import { themes } from "../lib/card/themes"

import { renderErrorCard, renderStatsCard } from "../lib/card/renderer";
import { fetchUserStats } from "../github/fetch-user";
import { toStatsData } from "../lib/stats/convert"
import { error } from "node:console";


const USERNAME_REGEX = /^[a-zA-Z0-9-]{1,39}$/; //idk where did i find this.

export default async function handleCardDelivery(req: any, res: any) {
    const url = new URL(req.url ?? "/", "http://localhost")

    const username = url.searchParams.get("username") ?? "";

    let svg: string;

    if (!USERNAME_REGEX.test(username)) {
        svg = renderErrorCard("Invalid username or theme!")
    } else {
        try {
            const user = await fetchUserStats(username);
            svg = renderStatsCard(toStatsData(user), themes.dark)
        } catch(err) {
            console.log("Error: "+ err)
            svg = renderErrorCard("Couldnt not render this user.")
        }
    }

   
    res.writeHead(200, {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=1800"
    })

    res.end(svg)
}
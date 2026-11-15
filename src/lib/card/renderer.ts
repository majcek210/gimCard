import { themes, type Theme } from "./themes";
import { statRow } from "./builder";
import { escapeXml } from "./sanitize"

export function svgWrapper(
  width: number,
  height: number,
  theme: Theme,
  body: string,
) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" rx="6" fill="${theme.background}" />
    ${body}
    </svg>`;
}


export interface StatsData {
    name: string;
    stars: number;
    commits: number;
    prs: number;
}

export function renderStatsCard(data: StatsData, theme: Theme): string {
    const body = [
    `<text x="25" y="35" fill="${theme.title}" font-size="18" font-weight="bold">${escapeXml(data.name)} GitHub stats</text>`,
    statRow("Total stars", data.stars, 70, theme),
    statRow("Commits", data.commits, 95, theme),
    statRow("Pull requests", data.prs, 120, theme),
  ].join("\n");

  return svgWrapper(300, 150, theme, body)
}

export function renderErrorCard(message: string) : string {
    const body = `<text x="15" y="35" fill="#f85149" font-size="14">${escapeXml(message)}</text>`;
    return svgWrapper(300, 60, themes.dark, body)
}
import { FunctionOrConstructorTypeNode } from "./../../../node_modules/typescript/lib/typescript.d";
import { escapeXml } from "./sanitize";
import type { Theme } from "./themes";

export function statRow(
  label: string,
  value: number,
  y: number,
  theme: Theme,
): string {
  return `
  <text x="25" y="${y}" fill="${theme.text}" font-size="14">${escapeXml(label)}:</text>
  <text x="250" y="${y}" fill="${theme.text}" font-size="14" font-weight="bold">${value}</text>`;
}

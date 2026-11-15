export interface Theme {
    background: string;
    title: string;
    text: string;
}


export const themes: Record<string, Theme> = {
    dark: { background: "#0d1117", title: "#58a6ff", text: "#c9d1d9"}
}
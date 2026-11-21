import express from "express";
import { config } from "dotenv";
import path from "path";
import helmet from "helmet"

import handleCardDelivery from "./api/card"

config();

const PORT = process.env.PORT || 3000;

const pagesFolder = path.join(__dirname, "pages");
const assetsFolder = path.join(__dirname,"assets");
const scriptsFolder = path.join(__dirname,"scripts");


function getPage(pageName: string) {
    return path.join(pagesFolder, `${pageName}.html`);
}

const app = express();

// for security
app.use(helmet());
app.disable("x-powered-by");

// main page

app.get("/", (req,res) => {
    res.sendFile(getPage("index"))
})

//other parts of the site
app.get("/selfhost", (req, res) => {
    res.sendFile(getPage("selfhost"))
})

// card webpage
app.get("/generate", (req,res) => {
    res.sendFile(getPage("generate"))
})

//card delivery api
app.get("/api/generate", handleCardDelivery)

//assets
app.use("/assets", express.static(assetsFolder))

//scripts
app.use("/scripts", express.static(scriptsFolder))

// 404
app.use((req, res) => {
    res.status(404).sendFile(getPage("404"))
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});


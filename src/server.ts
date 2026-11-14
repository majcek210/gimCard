import express from "express";
import { config } from "dotenv";
import path from "path";
import helmet from "helmet"

config();

const PORT = process.env.PORT || 3000;

const pagesFolder = path.join(__dirname, "pages");
const assetsFolder = path.join(__dirname,"assets");


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

// generate stuff
app.get("generate", (req,res) => {
    res.sendFile(getPage("generate"))
})

//assets
app.use("/assets", express.static(assetsFolder))

// 404
app.use((req, res) => {
    res.status(404).sendFile(getPage("404"))
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});


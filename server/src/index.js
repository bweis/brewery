import path from "path";
import express from "express";
import apiRouter from "./api/apiRouter";
import brewery from "./models/Brewery";

const PORT = process.env.PORT || 3001;

const app = express();

const b = brewery;
console.log(b)

// register all /api routes
app.use(apiRouter)

// serve client react app
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "..", "client/build")));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT} 🚀`);
});

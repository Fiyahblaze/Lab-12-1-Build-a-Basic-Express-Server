import express from "express";
import path from "path";

const app = express();
const port = 3000;

const publicDirectory = path.join(import.meta.dirname, "public");

app.get("/", (req, res) => {
  res.sendFile(path.join(publicDirectory, "index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(publicDirectory, "contact.html"));
});

app.use(express.static(publicDirectory));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
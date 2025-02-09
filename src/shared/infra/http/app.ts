import express from "express";
import routers from "./routes";

const app = express();
const PORT = process.env || 3000;

app.use("/api", routers);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

import express from "express";
import routes from "./routes";

const app = express();
const PORT = process.env || 3000;

routes(app)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

export default app
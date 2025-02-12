import express from "express";
import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;
const API_PREFIX = '/api/v1';

app.use(express.json())


app.use(API_PREFIX, routes);


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

export default app
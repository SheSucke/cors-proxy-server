import express from "express";
import proxy from "express-http-proxy";
import { PORT, SOURCE_URL, TARGET_URL } from "./utils";

const app = express();

app.use(
  "/",
  proxy(TARGET_URL, {
    userResHeaderDecorator(headers) {
      headers["Access-Control-Allow-Origin"] = SOURCE_URL;
      return headers;
    },
  })
);

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});

import Koa from "koa";
import mongoose from "mongoose";
import bodyParser from "koa-bodyparser";

import router from "./router";

const app = new Koa();

const mongooseOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose.connect(
  "mongodb+srv://public:123@onthepiknic.x4rrw.mongodb.net/onthepiknic?retryWrites=true&w=majority",
  mongooseOption
);

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log("The server is listeneing to port 4000");
});

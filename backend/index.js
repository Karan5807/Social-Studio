import Express from "express";
import Cors from "cors";
import CookieParser from "cookie-parser";
import connectDB from "./services/DBconnection.js";
import dotenv from "dotenv";
dotenv.config();

const Port = process.env.PORT;
const Origin_Url = process.env.CORS_ORIGIN;

const App = Express();
connectDB();


App.use(Cors({origin: Origin_Url,methods: "GET,HEAD,PUT,PATCH,POST,DELETE",credentials: true,}));
App.use(Express.json({ limit: "1024kb" }));
App.use(Express.urlencoded({ extended: true, limit: "1024kb" }));
App.use(CookieParser());

const welcome = (req, res) => {
    res.json({ FutureBlink: "Build a Email Marketing App" });
  };

App.get("/", welcome);
;
App.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});
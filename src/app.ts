import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import authRouter from "./routes/auth.router";
import blogRouter from "./routes/blog.router";
import sampleRouter from "./routes/sample.router";

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use("/samples", sampleRouter);
app.use("/auth", authRouter);
app.use("/blogs", blogRouter);

// middleware error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send(err.message);
});

export default app;

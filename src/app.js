//* Dependencies
const express = require("express");

//*Route files
const userRouter = require("./users/users.router").router;
const authRouter = require("./auth/auth.router").router;
const postRouter = require("./posts/posts.router").router;

//* Initial configurations
const app = express();

//? This setting is to enable the req.body
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "All ok!" });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", postRouter)

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
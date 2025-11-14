const express = require("express");
const { addJob } = require("./producer")
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Docker + Node.js!");
});

app.get("/post", (req,res)=>{
  res.send("hits the posts endpoint")
})

app.post("/run-queue", (req,res)=>{
  addJob();
  return res.send(200);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

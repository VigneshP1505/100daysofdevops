const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Docker + Node.js!");
});

app.get("/post", (req,res)=>{
  res.send("hits the posts endpoint")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

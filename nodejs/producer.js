const { myQueue } = require("./queue");

async function addJob() {
  for (let i = 0; i < 85000; i++) {
    await myQueue.add("sendEmail", {
      id: i,
      to: "vicky@gmail.com",
      subject: "Hello"
    });
  }
}

module.exports = { addJob };

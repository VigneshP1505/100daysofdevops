const { Worker } = require("bullmq");

const connection = { host: "redis", port: 6379 };

new Worker(
  "emailQueue",
  async (job) => {
    console.log(`Processing email ${job.data.id}`);
    await fakeSend(job.data);
  },
  { connection }
);

async function fakeSend(data) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

const { Worker } = require("bullmq");

const connection = { host: "redis", port: 6379 };

new Worker(
  "emailQueue",
  async (job) => {
    console.log(`Processing email ${job.data.id}`);
    await fakeSend(job.data);
  },
  { connection, concurrency: 20, lockDuration: 180000, removeOnComplete:{count:100}, removeOnFail:{count:100} }
);

async function fakeSend(data) {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  }).then(()=>{
    console.log("done:",data.id)
  });
}

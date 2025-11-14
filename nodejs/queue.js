const {Queue} = require("bullmq");

const connection = {host: "redis", port: 6379}

const myQueue = new Queue("emailQueue", {
    connection
});

module.exports = {myQueue}
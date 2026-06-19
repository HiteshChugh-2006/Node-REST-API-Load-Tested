const redis = require("redis");

const client = redis.createClient({
  url: process.env.REDIS_URL,
});

async function connectRedis() {
  client.on("error", (err) => {
    console.error("Redis Error:", err);
  });

  try {
    await client.connect();
    console.log("🟢 Redis Connected");
  } catch (err) {
    console.error("🔴 Redis connection failed:", err.message);
    console.log("⚠️ Server running without Redis caching...");
  }
}

module.exports = {
  client,
  connectRedis,
};
import mongoose from "mongoose";
import { User } from "./src/models/user.model.js";

const run = async () => {
  await mongoose.connect(
    "mongodb://anuradhaniranjan59_db_user:IPh0IWPyTK5yE82L@ac-ftfde2p-shard-00-00.dqhdwqx.mongodb.net:27017,ac-ftfde2p-shard-00-01.dqhdwqx.mongodb.net:27017,ac-ftfde2p-shard-00-02.dqhdwqx.mongodb.net:27017/?ssl=true&replicaSet=atlas-3gw1be-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
  );
  const users = await User.find({});
  console.log("Users:", users.map(u => ({ username: u.username, name: u.name })));
  process.exit(0);
};
run();

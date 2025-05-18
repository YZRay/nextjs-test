const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "../data");

const outputPath = path.join(dataDir, "merged_users.json");

const inputFiles = fs
  .readdirSync(dataDir)
  .filter((file) => file.endsWith(".json") && file !== "merged_users.json")
  .map((file) => path.join(dataDir, file));

const mergedUsers = inputFiles.reduce((acc, filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const users = JSON.parse(data);
    return acc.concat(users);
  } catch (error) {
    console.error(`${filePath}`, error);
    return acc;
  }
}, []);

const sortedUsers = mergedUsers.sort((a, b) => a.id - b.id);

fs.writeFileSync(outputPath, JSON.stringify(sortedUsers, null, 2), "utf8");

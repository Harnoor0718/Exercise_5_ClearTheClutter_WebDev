import fs from "fs/promises";
import fsn from "fs";
import path from "path";

// Correct basepath — match your actual folder
const basepath = "C:\\Web Dev Course\\Video 93 Exercise 15 S";

let files = await fs.readdir(basepath);

for (const item of files) {
    let ext = item.split(".").pop();

    // Skip .js and .json files
    if (ext === "js" || ext === "json") continue;

    let oldPath = path.join(basepath, item);
    let folderPath = path.join(basepath, ext);
    let newPath = path.join(folderPath, item);

    // Create folder if it doesn't exist
    if (!fsn.existsSync(folderPath)) {
        await fs.mkdir(folderPath);
    }

    // Move file into its folder
    await fs.rename(oldPath, newPath);

    console.log(`Moved ${item} to ${ext}/`);
}

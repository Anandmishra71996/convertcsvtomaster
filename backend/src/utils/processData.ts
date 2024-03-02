import client from "./redis";
import fs from "fs";
import csv from "csv-parser";

async function readAndProcessData() {
  await client.connect();
  let fileRecord = await client.lRange("process-data", 0, -1);
  for (let i = 0; i < fileRecord.length; i++) {
    let file = JSON.parse(fileRecord[i]);
    let readStream = fs.createReadStream(file.path).pipe(csv());
    readStream.on("data", (chunk) => {
      console.log(chunk);
    });
  }
}

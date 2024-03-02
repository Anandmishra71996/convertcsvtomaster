import fs from "fs";
import csv from "csv-parser";
import mongoose from "mongoose";

async function processData(data: any[]) {
  console.log(data);
}

export async function readDataFromFile(bufferSize: number) {
  console.log("Entry point");
  let rowData: any[] = [];

  try {
    fs.stat(
      "./temp/my-uploads/file-1709213666857-20448142.csv",
      function (error, stat) {
        console.log(stat);
        if (error) {
          throw error;
        }
      }
    );
    let readStream = fs
      .createReadStream("./temp/my-uploads/myFile0.csv")
      .pipe(csv());

    readStream.on("data", async (data) => {
      console.log("data");
      try {
        console.log("pause");
        rowData.push(data);
        if (rowData.length === bufferSize) {
          readStream.pause();
          await processData(data);
          rowData = [];
          readStream.resume();
        }
      } catch (error) {
        console.log(error);
      }
    });
    readStream.on("end", async () => {
      await processData(rowData);
      console.log("end of reading");
    });
  } catch (error) {
    console.log(error, "error");
  }
}
readDataFromFile(500);

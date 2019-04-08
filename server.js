const express = require("express");
const puppeteer = require("puppeteer");

const createPdf = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const options = {
    path: "web.pdf",
    format: "A4"
  };

  try {
    await page.goto("https://solutionmap.it", { waitUntil: "networkidle2" });
    await page.pdf(options);

    await browser.close();
  } catch (error) {
    console.log(error);
  }
};

createPdf();

// read enviroment variables
require("dotenv").config();
const { EXPRESS_PORT } = process.env;

const app = express();

app.listen(EXPRESS_PORT, () =>
  console.log(`Express started on port ${EXPRESS_PORT}`)
);

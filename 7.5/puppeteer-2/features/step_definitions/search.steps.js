const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { putText, getText, clickElement } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("Пользователь находится на странице {string}", async function (string) {
  return await this.page.goto(string, {
    setTimeout: 20000,
  });
});

When("Пользователь выбирает день {string}", async function (string) {
  await clickElement(this.page, string);
});

When("Пользователь выбирает фильм и сеанс {string}", async function (string) {
  return await clickElement(this.page, string);
});

When("Пользователь выбирает места {string}", async function (string) {
  return await clickElement(this.page, string);
});

When("Пользователь бронирует", async function () {
  return await clickElement(this.page, "body > main > section > button");
});

Then("Места забронированы {string}", async function (string) {
  const actual = await getText(
    this.page,
    "body > main > section > header > h2"
  );
  const expected = await string;
  await expect(actual).contain(expected);
});

When("user search by {string}", async function (string) {
  return await putText(this.page, "input", string);
});

Then("user sees the course suggested {string}", async function (string) {
  const actual = await getText(this.page, "a[data-name]");
  const expected = await string;
  expect(actual).contain(expected);
});

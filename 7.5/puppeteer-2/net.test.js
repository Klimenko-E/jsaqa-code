const { clickElement, getText } = require("./lib/commands.js");

let page;

describe("Let's go to the cinema tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });

  test("The first test'", async () => {
    await clickElement(page, "body > nav > a:nth-child(2)");
    await clickElement(
      page,
      "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(2) > a"
    );
    await clickElement(
      page,
      "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(8) > span:nth-child(6)"
    );
    await clickElement(page, "body > main > section > button");
    const actual = await getText(page, "body > main > section > header > h2");
    await expect(actual).toContain("Вы выбрали билеты:");
  });

  test("The second test'", async () => {
    await clickElement(page, "body > nav > a:nth-child(2)");
    await clickElement(
      page,
      "body > main > section:nth-child(3) > div:nth-child(3) > ul > li > a"
    );
    await clickElement(
      page,
      "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(1)"
    );
    await clickElement(
      page,
      "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(10)"
    );
    await clickElement(page, "body > main > section > button");
    const actual = await getText(page, "body > main > section > header > h2");
    await expect(actual).toContain("Вы выбрали билеты:");
  });

  test("The third test negative", async () => {
    await clickElement(page, "body > nav > a:nth-child(2)");
    await clickElement(
      page,
      "body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a"
    );
    await clickElement(
      page,
      "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(6)"
    );
    const actual = await getText(page, "body > main > section > header > h2");
    await expect(actual).toContain("Место уже забронировано");
  });

  afterEach(() => {
    page.close();
  });
});

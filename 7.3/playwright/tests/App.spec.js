const { test, expect } = require("@playwright/test");
import { email, password } from "../user";

test("Successful authorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').fill(email);
  await page.locator('[placeholder="Пароль"]').fill(password);
  await page.locator('[data-testid="login-submit-btn"]').click();
  await page.waitForURL("https://netology.ru/profile/8663057");
  await page.isVisible("text=Мои курсы и профессии");
});

test("Unsuccessful authorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').fill("1@mail.ru");
  await page.locator('[placeholder="Пароль"]').fill("@");
  await page.locator('[data-testid="login-submit-btn"]').click();
  await expect(page.locator("data-testid=login-error-hint")).toContainText(
    "Вы ввели неправильно логин или пароль"
  );
});

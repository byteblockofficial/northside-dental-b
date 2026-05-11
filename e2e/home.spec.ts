import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("h1 is visible and contains 'Manchester'", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Manchester");
});

test("GDC badge is visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("GDC Registered").first()).toBeVisible();
});

test("phone CTA links to dental number", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("a[href='tel:01610000001']").first()).toBeVisible();
});

test("CQC badge is visible in trust bar", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("CQC Rated Good")).toBeVisible();
});

test("3 testimonial blockquotes are visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("blockquote")).toHaveCount(3);
});

test("home page has no critical a11y violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
  expect(results.violations.filter((v) => v.impact === "critical" || v.impact === "serious")).toHaveLength(0);
});

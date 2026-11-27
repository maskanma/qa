# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshots\local.spec.js >> Скриншот усієї сторінки
- Location: tests\screenshots\local.spec.js:3:1

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  1362 pixels (ratio 0.01 of all image pixels) are different.

  Snapshot: index-page.png

Call log:
  - Expect "toHaveScreenshot(index-page.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 1362 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 1362 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "Вітаємо на локальній зміненій сторінці!" [level=1] [ref=e2]
  - generic [ref=e3]:
    - textbox "Ім'я користувача" [ref=e4]
    - textbox "Пароль" [ref=e5]
    - button "Увійти" [ref=e6]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Скриншот усієї сторінки', async ({ page }) => {
  4  |   await page.goto('/');
> 5  |   await expect(page).toHaveScreenshot('index-page.png');
     |                      ^ Error: expect(page).toHaveScreenshot(expected) failed
  6  | });
  7  | 
  8  | test('Скриншот заголовка h1', async ({ page }) => {
  9  |   await page.goto('/');
  10 |   await expect(page.locator('h1')).toHaveScreenshot('index-page-h1.png');
  11 | });
  12 | 
```
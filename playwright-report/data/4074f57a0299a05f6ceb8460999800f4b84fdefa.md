# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshots\local.spec.js >> Скриншот заголовка h1
- Location: tests\screenshots\local.spec.js:8:1

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('h1')
  1362 pixels (ratio 0.03 of all image pixels) are different.

  Snapshot: index-page-h1.png

Call log:
  - Expect "toHaveScreenshot(index-page-h1.png)" locator('h1') with timeout 5000ms
    - verifying given screenshot expectation
  - waiting for locator('h1')
    - locator resolved to <h1>Вітаємо на локальній зміненій сторінці!</h1>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 1362 pixels (ratio 0.03 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for locator('h1')
    - locator resolved to <h1>Вітаємо на локальній зміненій сторінці!</h1>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - captured a stable screenshot
  - 1362 pixels (ratio 0.03 of all image pixels) are different.

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
  5  |   await expect(page).toHaveScreenshot('index-page.png');
  6  | });
  7  | 
  8  | test('Скриншот заголовка h1', async ({ page }) => {
  9  |   await page.goto('/');
> 10 |   await expect(page.locator('h1')).toHaveScreenshot('index-page-h1.png');
     |                                    ^ Error: expect(locator).toHaveScreenshot(expected) failed
  11 | });
  12 | 
```
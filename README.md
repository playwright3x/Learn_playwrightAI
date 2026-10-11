# LearningPlayWrightWithParmod

Playwright + TypeScript end-to-end test automation practice project, built while following along with Parmod's Playwright course.

## Tech Stack

- [Playwright Test](https://playwright.dev/) `^1.63.0`
- TypeScript (via `@types/node`)

## Project Structure

```
LearningPlayWrightWithParmod/
├── playwright.config.ts   # Playwright test configuration (chromium, firefox, webkit)
├── tests/
│   ├── example.spec.ts       # Default Playwright starter test
│   └── tta-LoginTest.spec.ts # Login flow test against TheTestingAcademy demo app
├── package.json
└── package-lock.json
```

## Getting Started

**Requirements:** Node.js 18+

```bash
# Install dependencies
npm install

# Install Playwright browsers (first time only)
npx playwright install
```

## Running Tests

```bash
# Run all tests (headed, since headless is disabled in the config)
npx playwright test

# Run a specific test file
npx playwright test tests/tta-LoginTest.spec.ts

# Run in a specific browser project
npx playwright test --project=chromium

# Open the HTML report after a run
npx playwright show-report
```

## Notes

- `playwright.config.ts` runs tests in headed mode (`headless: false`) across Chromium, Firefox, and WebKit.
- Traces are captured on first retry (`trace: 'on-first-retry'`) and can be viewed with `npx playwright show-trace`.

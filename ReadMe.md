# 🎭 SDET Journey — Playwright Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-1.x-brightgreen?logo=playwright)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Node](https://img.shields.io/badge/Node.js-24.x-green?logo=node.js)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Status](https://img.shields.io/badge/Status-In%20Progress-orange)

> A professional End-to-End (E2E) UI Automation Framework built with Playwright and TypeScript.  
> This project documents my SDET learning journey — from setup to CI/CD integration.

---

## 📁 Project Structure

```
sdet-journey/
├── .github/
│   └── workflows/
│       └── playwright.yml        # CI/CD pipeline — runs tests on every push
├── tests/
│   └── login.spec.ts             # Login test suite (happy path + negative cases)
├── .gitignore
├── package.json
├── playwright.config.ts          # Playwright configuration (browsers, timeouts, reporters)
└── README.md
```

---

## 🧪 What This Framework Tests

| Test File | Feature Tested | Status |
|---|---|---|
| `login.spec.ts` | SauceDemo Login Flow | ✅ Done |
| `inventory.spec.ts` | Product Listing Page | 🔄 Coming Soon |
| `cart.spec.ts` | Add to Cart Flow | 🔄 Coming Soon |
| `checkout.spec.ts` | End-to-End Purchase | 🔄 Coming Soon |

---

## 🚀 Tech Stack

| Tool | Purpose | Version |
|---|---|---|
| [Playwright](https://playwright.dev/) | Browser automation framework | Latest |
| TypeScript | Strongly typed JavaScript | 5.x |
| Node.js | JavaScript runtime | 24.x |
| GitHub Actions | CI/CD pipeline | - |
| Allure (coming) | Test reporting | - |

---

## ⚙️ Prerequisites

Make sure you have the following installed before running this project:

- [Node.js](https://nodejs.org/) v18 or above
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/) (recommended editor)

---

## 🛠️ Local Setup — How to Run

### Step 1 — Clone the repository
```bash
git clone https://github.com/CyberPhantomX1/sdet-journey.git
cd sdet-journey
```

### Step 2 — Install dependencies
```bash
npm install
```

### Step 3 — Install Playwright browsers
```bash
npx playwright install
```

### Step 4 — Run all tests
```bash
npx playwright test
```

### Step 5 — Run tests on a specific browser
```bash
# Chrome only
npx playwright test --project=chromium

# Firefox only
npx playwright test --project=firefox

# Safari (WebKit) only
npx playwright test --project=webkit
```

### Step 6 — Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Step 7 — View HTML Test Report
```bash
npx playwright show-report
```

---

## 🔍 Test Scenarios Covered

### `login.spec.ts` — Login Feature

| Test ID | Test Name | Type | Status |
|---|---|---|---|
| TC_001 | User can login successfully | Happy Path | ✅ Pass |
| TC_002 | Login with wrong password | Negative | 🔄 Coming |
| TC_003 | Login with locked out user | Negative | 🔄 Coming |
| TC_004 | Login with empty fields | Boundary | 🔄 Coming |

---

## 🌐 Application Under Test

| Detail | Value |
|---|---|
| App Name | Sauce Demo (by Sauce Labs) |
| URL | https://www.saucedemo.com |
| Purpose | Practice e-commerce web app for QA automation |
| Test Users | `standard_user`, `locked_out_user`, `problem_user` |

---

## 🔄 CI/CD Pipeline

This project uses **GitHub Actions** for continuous integration.

Every time code is pushed to the `main` branch:
1. GitHub spins up an Ubuntu runner
2. Node.js is installed
3. Playwright browsers are installed
4. All tests run automatically
5. Results are reported in the Actions tab

**View live pipeline:**  
👉 [GitHub Actions](https://github.com/CyberPhantomX1/sdet-journey/actions)

---

## 📊 Browser Compatibility

| Browser | Engine | Supported |
|---|---|---|
| Chrome | Chromium | ✅ |
| Firefox | Gecko | ✅ |
| Safari | WebKit | ✅ |
| Edge | Chromium | ✅ |

---

## 📖 What I Learned — Day by Day

### Day 1
- Set up Playwright with TypeScript from scratch
- Understood project structure — `tests/`, `playwright.config.ts`, `.github/workflows/`
- Wrote first login test for SauceDemo
- Learned locator strategies: `getByPlaceholder`, `getByRole`, `data-test` attribute
- Learned assertions: `toHaveURL`, `toBeVisible`
- Used Playwright Codegen (`npx playwright codegen`) to inspect real locators
- Debugged failing test — identified wrong locator, fixed using `data-test` attribute
- Pushed project to GitHub with proper commit message

### Day 2 _(coming)_
- Negative test cases — wrong password, locked out user, empty fields
- Page Object Model (POM) introduction

---

## 🗺️ Roadmap

- [x] Project setup with Playwright + TypeScript
- [x] First login test (happy path)
- [x] GitHub repository + CI/CD pipeline
- [ ] Negative test cases for login
- [ ] Page Object Model (POM) architecture
- [ ] Inventory page tests
- [ ] Cart and checkout tests
- [ ] Allure reporting integration
- [ ] API testing with Playwright API mode
- [ ] Docker + Selenium Grid integration

---

## 👨‍💻 Author

**CyberPhantomX1**  
SDET Learner | Playwright | TypeScript | CI/CD  
🔗 [GitHub Profile](https://github.com/CyberPhantomX1)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

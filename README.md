# Automated UI testing Cypress
Automated UI testing using Cypress, JavaScript and Allure reports. This project follows best practices with environment variables and CI/CD integration.

## 📑 Table of Contents

- [Overview](#overview)
- [Reports](#reports)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [CI/CD Pipeline](#cicd-pipeline)
- [Author](#author)
- [License](#license)

## 🔍 Overview

This project provides automated UI testing for a financial application using modern JavaScript testing tools. It demonstrates how to implement a comprehensive test suite with proper organization, reusable commands, and integrated reporting.


> 🚨 **Note:** The `Should create a transaction` scenario is intentionally designed to fail for the Allure report demonstration.  
> To make it pass, simply uncomment the assertion.

## 📊 Reports

Allure reports are automatically generated after test runs. You can access them in two ways:

1. **Locally**: After running tests with `npm run allure:open`
2. **Online**: Visit the <a href="https://josinaldogjunior.github.io/cypress-automation-interface" target="_blank">GitHub Pages site</a> for the latest reports from CI/CD pipeline.



## 🏆 Features
- **Complete Test Coverage**: E2E flows from login to transaction management
- **Smart Reporting**:
  - 🔍Allure reports with screenshots/videos 
  - 🌐GitHub Pages integration for report hosting 
- **CI/CD Ready**:
  - 🛠️GitHub Actions workflow 
  - ⚡Parallel execution support 
- **Advanced Features**:
  - 🧩Custom commands for test abstraction 
  - 🧹Automatic video cleanup on success 
  - 🔒Environment variables management 
- **Test Architecture**
  - 📁 Organized test files following Cypress best practices.
  - 🧩 Reusable custom commands for common actions.
  - 📌 Centralized locators for maintainable and scalable selectors (`/support/locators.js`).

## 🗂️ Project Structure

```
financial-test-cypress/
├── .github/
│   └── workflows/
│       └── cypress-test.yml            # GitHub Actions workflow
├── allure-results/                     # Allure raw data (auto-generated) 
├── cypress/
│   ├── artifacts/                      # Test artifacts (ignored by git)
│   ├── e2e/
│   │   ├── account.cy.js               # Account tests
│   │   ├── login.cy.js                 # Login tests
│   │   └── transaction.cy.js           # Transaction tests
│   ├── fixtures/                       # Test data
│   └── support/
│       ├── commands/
│       │   ├── account.commands.js     # Account-related commands
│       │   ├── auth.commands.js        # Authentication commands
│       │   ├── index.js                # Commands entry point
│       │   └── transaction.commands.js # Transaction commands
│       ├── e2e.js                      # Support file for e2e tests
│       └── locators.js                 # UI element selectors
├── .env                                # Environment variables (local)
├── .gitignore                          # Git ignore file
├── cypress.config.js                   # Cypress configuration
├── package-lock.json                   # Dependency lock file
└── package.json                        # Project configuration
```

## 🛠️ Technology Stack

- **JavaScript**: Primary programming language
- **Cypress**: Test automation framework
- **Allure**: Test reporting
- **GitHub Actions**: CI/CD pipeline automation
- **Custom Commands**: Domain-specific test helpers
- **Artifacts Management**: Smart handling of videos and screenshots

## 📋 Requirements

- Node.js 18+ (LTS recommended)
- npm 9+
- Cypress 14.2
- Allure Report 2.41
- Dotenv 16.4
- Windows/macOS/Linux (tested on Windows 11)
- Git 2.35+

## 📥 Installation

1. Clone the repository:
   ```bash
   git clone project-link
   cd financial-test-cypress
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## ⚙️ Configuration

1. Create a `.env` file in the project root with the following variables:
   ```
   CYPRESS_EMAIL=your-email@example.com
   CYPRESS_PASSWORD=your-password
   CYPRESS_BASE_URL=https://barrigareact.wcaquino.me/
   ```

2. Modify the baseUrl in `cypress.config.js` if needed.

⚠️ Security Note: Never commit sensitive data. The .env file is already in .gitignore.

## 🚀 Running Tests

### Run all tests:
```bash
npx cypress run && npm run allure:generate && npm run allure:open
```

### Run specific test:
```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

### Run in interactive mode:
```bash
npx cypress open
```

## 🔄 CI/CD Pipeline

This project uses GitHub Actions for continuous integration. The workflow is defined in `.github/workflows/cypress-test.yml`.

Key features of the pipeline:
- Runs tests on push to main and pull requests
- Uploads screenshots and videos as artifacts for failed tests
- Generates and publishes Allure reports to GitHub Pages
- Secures sensitive information using GitHub Secrets

The GitHub Actions workflow:

- Uses Ubuntu 22.04 runner
- Caches npm dependencies for faster execution
- Stores artifacts for 7 days
- Requires these secrets:
    - CYPRESS_EMAIL: Test account username
    - CYPRESS_PASSWORD: Test account password
    - CYPRESS_BASE_URL: Environment URL

## 👤 Author

Created and maintained by [Josinaldo Junior](https://github.com/josinaldogjunior)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
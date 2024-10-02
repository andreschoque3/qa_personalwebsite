# Selenium Mocha Automated Tests

## Tech stack
<img align="left" alt="Selenium" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" />
<img align="left" alt="Mocha" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mocha/mocha-original.svg" />
<img align="left" alt="JavaScript" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
<img align="left" alt="Git" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
<img align="left" alt="GitHub" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
<br />          

## File structure
```
├── test_suite/
│   ├── blogPageTest.js
│   ├── blogPostsTest.js
│   ├── homePageTest.js
│   └── newsletterPageTest.js
├── .gitignore
├── package-lock.json
├── package.json
├── pipeline.yml
├── README.md
├── runTest.js
└── scheduler.js
```

## How to execute the test scripts

1. Execute directly
```
node runTest.js
```

2. Execute using a schedule
```
node scheduler.js
```
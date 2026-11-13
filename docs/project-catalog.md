# Project catalog inventory

Compared with all 27 public repositories returned for [danserot](https://github.com/danserot) on 2026-10-19. The portfolio now contains 29 projects: 19 additions and 10 existing entries. Repository descriptions were checked against README files and, where the README was a template or absent, source files. External project runtimes were not tested.

## Added projects

| Category | Project | Repository |
| --- | --- | --- |
| Web applications | Plannaer | [Planear](https://github.com/danserot/Planear) |
| Web applications | SecureGuard landing and dashboard | [Secure-guard-landing](https://github.com/danserot/Secure-guard-landing) |
| Web applications | Chernoyarskaya Zhemchuzhina resort | [The-website-development](https://github.com/danserot/The-website-development) |
| AI & data | SupplyAI | [AI-Search](https://github.com/danserot/AI-Search) |
| AI & data | ReadDocument | [Normalization_Of_CP](https://github.com/danserot/Normalization_Of_CP) |
| AI & data | Procurement Graph Lab | [solution_vectorization](https://github.com/danserot/solution_vectorization) |
| Practice | Schedual | [Schedual](https://github.com/danserot/Schedual) |
| Practice | TanStack To-do | [To-do-list-](https://github.com/danserot/To-do-list-) |
| Practice | Furniture catalog | [Online-shop](https://github.com/danserot/Online-shop) |
| Coursework | RentoCar | [Web-Technology-Midterm](https://github.com/danserot/Web-Technology-Midterm) |
| Coursework | HTML/CSS basics | [First-assigment-Web-Technologies](https://github.com/danserot/First-assigment-Web-Technologies) |
| Coursework | Field Notes: Flexbox/Grid | [2_Assigment_Web-Technology](https://github.com/danserot/2_Assigment_Web-Technology) |
| Coursework | Forms and validation | [4-Assigment-Web-technology](https://github.com/danserot/4-Assigment-Web-technology) |
| Coursework | JavaScript/DOM basics | [5-Assigment-Web-Technology](https://github.com/danserot/5-Assigment-Web-Technology) |
| Coursework | Computer Builder | [Software_Design_Patterns_Assigment_1](https://github.com/danserot/Software_Design_Patterns_Assigment_1) |
| Coursework | Divide-and-conquer algorithms | [Design_Analysis_Algorithms_Assigment_1](https://github.com/danserot/Design_Analysis_Algorithms_Assigment_1) |
| Coursework | Workload engine | [DAA_Second_Assigment](https://github.com/danserot/DAA_Second_Assigment) |
| Coursework | Game Statistics Analyzer | [-ITP_Final_project](https://github.com/danserot/-ITP_Final_project) |
| Hackathons | Zaman AI prototype | [HackNU](https://github.com/danserot/HackNU) |

The data category includes deterministic vector matching as well as model-based tools. HackNU uses rule-based chat replies and mock financial products. RentoCar is a booking UI demonstration. The catalog descriptions preserve these distinctions.

## Existing projects matched to repositories

| Existing entry | Repository |
| --- | --- |
| Golden Students Club | [Students-platform](https://github.com/danserot/Students-platform) |
| Short landing | [Simple-landing](https://github.com/danserot/Simple-landing) |
| Hangman | [Hangman-Game-on-js](https://github.com/danserot/Hangman-Game-on-js) |
| Tic-tac-toe | [Tic-tac-toe](https://github.com/danserot/Tic-tac-toe) |
| Focus / To-do | [To-Do-List](https://github.com/danserot/To-Do-List) |
| Pomodoro | [Pomidoro-timer](https://github.com/danserot/Pomidoro-timer) |
| Monkey Bounce | [Monket-Bounce](https://github.com/danserot/Monket-Bounce) |

Monkey Bounce is now categorized as a game; its copied Pomodoro URL and screenshots were removed. Focus and TanStack To-do are separate implementations and retain separate entries.

## Other entries

- [My-Portfolio-](https://github.com/danserot/My-Portfolio-) is this portfolio itself and is excluded from its own catalog.
- Goleador, AutoScout, and the birthday site were already present and retain their existing demo URLs. No repository match was established for them, so their previous generic GitHub-profile source links were removed.
- `Online-shop/src/App.js` implements a furniture store, while `src/App.jsx` is a Vite starter. This repository is a separate practice project, not the Goleador store.
- New entries have no live-demo link or screenshot gallery because these were not established during the repository review. Their primary external destination is the actual repository.

## Maintenance

Project metadata lives in `src/app/data/projects.ts`; IDs and categories in `src/app/i18n/types.ts`; localized titles, descriptions, and category names in `src/app/i18n/ru.ts` and `en.ts`. Include each public detail route in `public/sitemap.xml` when adding entries.

## Verification

- TypeScript check and production build passed.
- Existing Jest suite passed: 2 tests.
- Playwright checked all 7 filters in both languages: 29 total, 6 web applications, 3 AI/data, 9 coursework, 1 hackathon, 7 practice, and 3 games.
- All 29 detail pages opened with matching structured-data names and no uncaught browser errors or invalid `undefined` resources.
- Catalog filters and all detail pages fit a 360 px viewport without horizontal overflow. Desktop catalog and mobile catalog/detail screenshots were visually reviewed.
- Plannaer's source link, absent demo/gallery, Russian translation, and return navigation were checked explicitly.
- Sitemap parses successfully with 34 URLs: 5 main pages and 29 project details.

These checks cover the local portfolio. The projects' external demos, backend services, and production deployments were not validated or changed.

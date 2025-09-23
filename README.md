# guestbook
## Project Description
An extremely simple "sign my guestbook" one page app, **BUT** built 100% via AI agents "brought to life" in vscode via the Gemini Code Assist extension chat pane.

## Deliverables
* Work with Gemini 2.5 as a guide on the side for strategy, implementation, persona-building, prompting. 
  * this meant Google One AI Pro ($200 USD/year or $19.99 USD/month) was really almost a prerequisite (yeah he upsold me in the chat), based on the amount of prompts this project required over 24 hours.
* Enlist Gemini to Build a "scrum team" of coding agents via team/<persona>.md definitions, based on a simple prompt of what I wanted in a world class scrum team.
* Enlist Gemini to Build a phased [TASK_LIST.md](TASK_LIST.md) with the key objectives for each persona in each phase.
* Agents then build 100% of the project code and testing through this process: 
  * Via vscode Google Code Assist extension chat window prompt(s)
    * Point an agent to their persona and to the [Product Requirements Document](docs/prd.md)
    * Point an agent to the TASK_LIST.md for project phases and big rocks
  * Agents work on their Tasks in serial mode for this project (I activate agents to do one or more tasks at a time, then i activate another agent through another prompt.) 
  * Agents retain personas and assimilate ongoing project context via the chat pane throughout the project ie: "Activate Agent: Nexus. <follow-up prompt for Nexus>"
* NOT IN SCOPE: using fully automated agents / scripts / tokens through agentic API's. I'm the go-between for Gemini instructing the agents prompt-by-prompt, as well as interjecting my own observations/prompts, so that I can get comfortable with that flow before unleashing full agent API automation in future projects.


## To Run
Simply open your browser to <tbd Render link>. Project is full stack deployed to Render free tier.

## Development Workflow
See [TASK_LIST.md](TASK_LIST.md)
 
## Reflection
|   |   |
|---|---|
| 23-sep-2025 3pm  | kicking myself for not building up and invoking Agent Stella's accessibility credentials. Will upgrade her persona for the next project to be an Accessibility hound.
| 23-sep-2025 11am | local manual testing is flawless; but Agent Vera and Playwright can't get automated tests to work anymore since the component refactor, suffering from db and server timeouts that she and the team have tried to refactor multiple ways. SO i'm pulling the plug on automated testing, will do that part manually myself. We'll shoot for better automation flow on the next project. |
| 22-sep-2025 11pm | Not so fun was setting up the test suite, my agent recommended Playwright which worked flawlessly but then choked when Agent Sentinel added the Captcha pieces and Agent Cap did some refactoring to make the api pathing more robust. | 
| 22-sep-2025 7pm  | we're up and running with v0.1. it occurred to me that i didn't specify nor some rate limiting and/or Captcha security in the PRD, leaving me open to nefarious crawlers spamming out or crashing my db limits. I put Agent Sentinel on the case and they wired that up no problem (as the human I had to do the form submission at Google Cloud for Captcha v2, Gemini walked me through it.)
| 22-sep-2025 5pm  | key data design decision: Upon reading about Render.com free tier I directed Gemini and Agent Schema to "partition" the database i.e. don't devote a whole database to this project but make schemas within a database for guestbook, project2, projectN, so i can get multiple planned projects on the single free db that Render free tier provides. Also, they wipe your data after 30 days anyway so these will be very temporary proof of concept type projects, I'm not worried about data leaking across projects, etc for this case.
| 22-sep-2025 2pm  | Really fun birthing agents to life. I always wanted to be Dr "Frawnk-en-shteen" (Gene Wilder is GOATED.)
| 22-sep-2025 12pm | slight hiccup right out of the gate, Google Code Assist extension couldn't authenticate my google account. The fix was to log out of google, blow away google cookies, and most importantly LOG OUT OF CHROME BROWSER PROFILE TOO. Otherwise the chrome profile was logging me back in every time i would close/reopen.
| 22-sep-2025 11am | I'm really doing this! Investing the $200 in Google AI Pro, let's knock out a quick project in 24-ish hours. First of many! |


## References
Full Chat Log from inception to finish of this project with Gemini 2.5 as the guide on the side.

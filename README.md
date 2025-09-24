# guestbook
## Project Description
An extremely simple "sign my guestbook" one page app, **BUT** built 100% via AI agents "brought to life" in vscode via the Gemini Code Assist extension chat pane.

## Deliverables
* Work with Gemini 2.5 as a guide on the side for strategy, implementation, persona-building, prompting. 
  * this meant Google One AI Pro ($200 USD/year or $19.99 USD/month) was really almost a prerequisite (yeah he upsold me in the chat), based on the amount of prompts this project required over 24 hours.
* Enlist Gemini to Build a "scrum team" of coding agents via the [team/](team/)<persona>.md definitions, based on a simple prompt of what I wanted in a world class scrum team.
* Enlist Gemini to Build a phased [TASK_LIST.md](TASK_LIST.md) with the key objectives for each persona in each phase.
* Agents then build 100% of the project code and testing through this process: 
  * Via vscode Google Code Assist extension chat window prompt(s)
    * Point an agent to their persona and to the [Product Requirements Document](docs/prd.md)
    * Point an agent to the TASK_LIST.md for project phases and big rocks
  * Agents work on their Tasks in serial mode for this project (I activate agents to do one or more tasks at a time, then i activate another agent through another prompt.) 
  * Agents retain personas and assimilate ongoing project context via the chat pane throughout the project ie: "Activate Agent: Nexus. <follow-up prompt for Nexus>"
* NOT IN SCOPE: using fully automated agents / scripts / tokens through agentic API's. I'm the go-between for Gemini instructing the agents prompt-by-prompt, as well as interjecting my own observations/prompts, so that I can get comfortable with that flow before unleashing full agent API automation in future projects.


## To Run
Simply open your browser to [https://guestbook-5po9.onrender.com/](https://guestbook-5po9.onrender.com/). The guestbook project is full stack deployed to Render free tier.

## Development Workflow
See [TASK_LIST.md](TASK_LIST.md)
 
## Reflection
|   |   |
|---|---|
| SUMMARY          | This was a great way to see all the moving parts on a full stack deploy but on a super simple app, which was smart because the environment, test, and deploy problems alone were not trivial. I'm not sold on the expertise or value of agent personas / team members. Or the interplay between them. Individual examples: . For Agent Stella to stand up a left-aligned, non-responsive MVP in monochrome is unacceptable. A design expert would never do that and make me go to colorhunt.co to find something even plausible for a release. Agent Vera not being able to figure out Playwright issues was unacceptable. That cost us hours and would've cost us more if I hadn't pulled the plug on her and Gemini's non-solutioning. And the biggest culprit was Gemini himself literally not having a clue on render.yaml files. None. almost like random sentences written in that file. that cost us more than a half day. Thank God for Arpan Neupane on youtube or i don't think we would have pulled this one out of the fire. And for the interplay and team captain issues, Agent Cap was useless. In my mind, that would be the agent finding bugs like I had to, remembering important steps like initializing the Render db like I had to, etc. Just too little value add from team expertise. I'll try to improve personas and delve into the Agent API process to see if that might make things gel better next time. But as an end result, me writing absolutely 0 lines of code to stand up a working fullstack webapp, I'm pretty pumped for my first try at vibin'. |
| 23-sep-2025 8pm  | got a deploy up using the Arpan method! but we forgot to initialize our db schema so we revised and redeployed. After a couple of Captcha snags for getting our .env successfully on to Render... Success! |
| 23-sep-2025 6pm  | i showed Gemini the youtube vids i WANTED to use, to deploy PERN apps to Render.com, (linked in references below,) if i was building this on my own. Gemini liked it so much he pivoted the project, and now calls it the Arpan Neupane method. lol. |
| 23-sep-2025 5pm  | welp. Gemini 2.5 Pro totally hallucinates on render.yaml files. many, many parameters in that file are wrong to the point of making up words that aren't parameters at all. so i get to dive into render blueprint specs for rest of evening. cool! |
| 23-sep-2025 3pm  | kicking myself for not building up and invoking Agent Stella's accessibility credentials. Will upgrade her persona for the next project to be an Accessibility hound. |
| 23-sep-2025 11am | local manual testing is flawless; but Agent Vera and Playwright can't get automated tests to work anymore since the component refactor, suffering from db and server timeouts that she and the team have tried to refactor multiple ways. SO i'm pulling the plug on automated testing, will do that part manually myself. We'll shoot for better automation flow on the next project. |
| 22-sep-2025 11pm | Not so fun was setting up the test suite, my agent recommended Playwright which worked flawlessly but then choked when Agent Sentinel added the Captcha pieces and Agent Cap did some refactoring to make the api pathing more robust. | 
| 22-sep-2025 7pm  | we're up and running with v0.1. it occurred to me that i didn't specify nor some rate limiting and/or Captcha security in the PRD, leaving me open to nefarious crawlers spamming out or crashing my db limits. I put Agent Sentinel on the case and they wired that up no problem (as the human I had to do the form submission at Google Cloud for Captcha v2, Gemini walked me through it.) |
| 22-sep-2025 5pm  | key data design decision: Upon reading about Render.com free tier I directed Gemini and Agent Schema to "partition" the database i.e. don't devote a whole database to this project but make schemas within a database for guestbook, project2, projectN, so i can get multiple planned projects on the single free db that Render free tier provides. Also, they wipe your data after 30 days anyway so these will be very temporary proof of concept type projects, I'm not worried about data leaking across projects, etc for this case. |
| 22-sep-2025 2pm  | Really fun birthing agents to life. I always wanted to be Dr "Frawnk-en-shteen" (Gene Wilder is GOATED.) |
| 22-sep-2025 12pm | slight hiccup right out of the gate, Google Code Assist extension couldn't authenticate my google account. The fix was to log out of google, blow away google cookies, and most importantly LOG OUT OF CHROME BROWSER PROFILE TOO. Otherwise the chrome profile was logging me back in every time i would close/reopen. |
| 22-sep-2025 11am | I'm really doing this! Investing the $200 in Google AI Pro, let's knock out a quick project in 24-ish hours. First of many! |


## References
* [Arpan Neupane on YouTube #1: How to Create a Express/Node + React Project with Vite | Node Backend + React Frontend](https://www.youtube.com/watch?v=mKmxc8TcWQ8)
* [Arpan Neupane on YouTube #2: How to Bundle a React Frontend with an Express/Node Backend for Deployment](https://www.youtube.com/watch?v=1NhduUZHZEQ)
* [Arpan Neupane on YouTube #3: How to Deploy a Node/Express App to Render | Node/Express Render Deployment](https://www.youtube.com/watch?v=tNpoc86cHrQ)
* [Full Project Chat Log](https://g.co/gemini/share/f4b0f9bb1e11) all prompts and answers from inception to finish of this project with Gemini 2.5 as the guide on the side. See the end of that file for Gemini's response to my reflections.

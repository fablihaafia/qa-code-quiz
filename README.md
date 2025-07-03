# QA Testing Quiz

### Scenario
The frontend team has developed a prototype login portal for an up and coming platform.
However, they have not implemented any testing yet and it is up to you to do so.

As the QA developer, what is tested and how it is tested is up to you.
Management simply asks that these tests provide as much evidence as possible of the platform's reliability.

### Notes
- Submission must include a link to a public fork/clone of this repository
- We typically use Jest for testing node.js/API related logic and Cypress for testing UI functionality, however, you are more than welcome to use any testing framework you desire so long as you are able to provide reasonable justification


## How to run Tests

First lets start the project

**Start Main website -** 
```sh
npm i
npm start
``` 
Site will be opened at http://localhost:8080/

**Start API listening -** 
```sh
cd .\mockedAPI\
node index.js
``` 

### Run Jest test (only)

```sh
npm run test:unit
```

### Jest Output
![Jest_unit_test](https://github.com/user-attachments/assets/3580d1bb-09e6-438f-b589-4f19a5eb1b34)



### Run Cypress Test
```sh
npm run test:end-to-end

```
### E2E Output
1.Login:
![Login_e2e](https://github.com/user-attachments/assets/6efcf4f1-c75d-48a0-8cdf-5d88cf0a7a7c)

2.Profile:
![Profile_e2e](https://github.com/user-attachments/assets/eaacd1b7-08cf-4a5f-b1c1-e4f1bde3621b)

### For Interactive GUI mode run
```sh
npx cypress open
```
### GUI mode Output
1.Login:

![Login_Gui](https://github.com/user-attachments/assets/505695af-375c-4245-8985-950e5648a8b4)

2.Profile:

![Cypress_GUI_mode_profile](https://github.com/user-attachments/assets/528e390a-6c34-4ba2-b4ec-d19fbfc801ec)

## Manual Test
I've did a manual test too, here is the Excel sheet for it - https://docs.google.com/spreadsheets/d/1UwX8klamQv4UF16piZlg3bAIKkLLfmsrMVfECM8Z7Hk/edit?usp=sharing 
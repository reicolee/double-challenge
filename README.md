# [Double](https://withdouble.com) · Full-stack engineering challenge

:wave: If you're looking for an adventure, [look no further](https://withdouble.com/jobs).

## Instructions

- To complete this challenge, you will need `npm`, `node` and `git` installed locally
- Clone this repository (do _not_ fork it)
- Solve each level in order
- Include the `.git` directory when submitting your solution
- Don't spend more than **4 hours** on this test
- To start the app:
  - run `npm i`
  - run `npm start`
  - open `http://localhost:8080/`
- When completed, submit a pull request and we will be in touch soon! Feel free to email jobs@withdouble.com if you have any questions
- If needed, here are the documentation links of: [React](https://reactjs.org/), [Mobx](https://mobx.js.org/index.html) and [Luxon](https://moment.github.io/luxon/index.html)

### Pointers

- Keep in mind you are working on an existing code-base.
- Code should be clean, extensible and robust. Don't overlook edge cases.
- You will have to create some basic UI. While we're not expecting you to be a skilled designer, it should come close to the look and feel of the app. We _are_ looking for engineers with some product-sense.
- We like [emojis](https://gitmoji.carloscuesta.me/) :wink:

### Submitting your results

Send your completed test to your contact at Double or jobs@withdouble.com directly

You can share your Github project link or zip your directory and attach it to your email. If you do not use Github, don't forget to attach your `.git` folder.

Let's do this! :muscle:

## Challenge

**Double helps executives and their assistants work better together**. Managing agendas is an important part of an assistant's job, and we're inviting you to join our mission of making assistants's lives easier.

### Level 1: Agenda's title bug fix

One of our users just submitted a bug report: the agenda's title ("Good morning", "Good afternoon", etc.) does not always update as the day goes by.
Identify the source of this behavior and fix it.

### Level 2: Filter agenda events by calendar

To help our users see at a glance what is happening in their day, we want to add a filtering mechanism on agenda events. The requirements for this feature are:

1. Add a select menu that will filter events by `calendar`
2. When a calendar is selected, only events from that calendar are displayed
3. By default `all` calendars are displayed

### Level 3: Group agenda events by department

Another enhancement would be to show all calendar events in one page, grouping them by `department`. Here is a quick mock-up of what the feature could look like:

<img src="https://user-images.githubusercontent.com/45558407/61964225-5f967b80-af9b-11e9-9e39-b201a5644bf9.png" width="300" />

The requirements for this feature are:

1. Add a button to toggle groups by department
2. When enabled, events will be grouped and each group will be clearly identified
3. In each group, events will be sorted by ascending date-time

### Questions

Please add your answers to the questions below:

1. How long did you spend on this challenge?
   - Before implementing any of my code, it took me 30-35 minutes to understand the flow of the application, read up documentations for TypeScript and mobX since I haven't worked with these technologies before, and plan for my code implementation.
   - It took me 3 hours to complete this challenge, 2 hours to implement Level 2 and 3, with testing & styling (It took me longer to write the css for styling to make sure the style looks/feels right) , and around 35-40 minutes to fix the Level 1 bug.
2. In your opinion, what are features that Double could work on that would be helpful for assistants when managing agendas?

   - Quentin was able to briefly go through some of the product offerings / features Double is offering, however, I wasn't able to recall the specific features available, so the features I provided might overlap with Double's existing features.
   - analytics: a bar chart / graph that shows the number of todos (completed/incomplete), or questions(answered/unanswered) over certain period of time (week/30 days/60 days/ 90 days/ a year) in the past where users are able to use the data from the graph/chart to track and analyze peak days during the week, months or years. This will allow assistants to better predict the executives' schedules and plan ahead, minimize scheduling friction, and maximize assitants' productivity.
   - a way to set up recurring tasks / reminders
   - integrations with hotel / restaurant reservation apps for easier booking experience / flow for assistants (i.e: a interface that allows assistants to type, search, and compare pricing across different booking sites)

3. Do you have any constructive feedback that you would like to share with our team?
   - I noticed `style.scss` files live in each component, I am not sure if this is true to Double's existing production codebase. From my personal experience with work and personal projects, I suggest using `Styled Component` library for styling component instead of having a scss file per component, it encourages code reuse as much as possible throughout the application for easier scaling, make designing/developing components more intential to support visual consistency, directly import the component needed instead of a style sheet, shared vocabulary with product designers, and development feels more like composition rather than reinventing the wheel for styling every component.
   - In addition to using Styled Component, I would refactor the current folder structure to use component as a file instead of component as a folder. i.e: `EventList.js` instead of a `EventList` folder with `index.js` and `style.scss`. This makes navigating the files easier, since it's much easier to identify the styled component instead of all the stylesheet with the same file naming convention. (or simply rename each `style.scss` to `[component name].scss` i.e: `EventList.scss`)
   - Even though the current events are sorted by ascending date-time, however, without the date, it is hard for users to know what date the time refers to (currently it is only showing the time). It maybe better to add a date beside the time on the first occurance of the date on the list.

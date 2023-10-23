# Frontend Mentor - Kanban task management web app solution

This is a solution to the [Kanban task management web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/kanban-task-management-web-app-wgQLt-HlbB). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete boards and tasks
- Receive form validations when trying to create/edit boards and tasks
- Mark subtasks as complete and move tasks between columns
- Hide/show the board sidebar
- Toggle the theme between light/dark modes
- **Bonus**: Allow users to drag and drop tasks to change their status and re-order them in a column
- **Bonus**: Keep track of any changes, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)
- **Bonus**: Build this project as a full-stack application

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

#### I built every App Component with approach: **Structure => Styling => Replacing hard-coded data with dynamic data => Logic**.

1. Initial Setup with **NextJS**, **TypeScript**, **TailwindCSS**, **ReduxToolkit** and **FramerMotion**.
2. Customized Tailwind's config file with predefined colors, fonts, buttons, etc.
3. Built Sidebar and Header.
4. Built Feed with temporary `isEmpty` state.
5. Added Theme switching and passed it to Redux's store to use Theme state where needed.
6. Added state to store to manipulate sidebar visibility.
7. Added some smoothness to changing theme and made Feed and Header's Board title shift by sidebar's width.

#### Meanwhile I started to build data file with appropiate Data Structure.

9. Passed `selectedBoard` state to Redux and added styling and Feed content based on which Board is selected.
10. Added Board Adding modal but only with name input for now, to prevent bugs. _The tricky part was to make modal close when user clicks outside modal div._
11. Instead of displaying error when name input field is empty I decided to name it automatically by "New Board (boards.length + 1)", because name will be changeable later.
12. Each board has optional columns array, so I mapped over it and display them on Feed (of course depending which board with which columns is in `selectedBoard` state).
13. Used UUID to pass unique ID as key for each list element.
14. Did same thing for tasks in columns.
15. Applied some styling for chosen theme and added scrolling in Feed component when content overflows. And styled scrollbar to fit the entire App, why not? 😃
16. Added mini-modal with "Edit Board" and "Delete Board" options. I used `useState` here because I think that using Redux here would be overkill.
17. Then I added [Delete Logic](#delete-logic) that splices boards array by index of `selectedBoard` and changes `selectedBoard` itself conditionally.
18. It forced me to build 'No Board Page' to show it when there is no boards to select. It gave me the idea of Login page which I'm gonna create at the end.
19. Added quick improvement that changes `selectedBoard` to new board when user is creating one.
20. Added new modal which appears when user wants to delete board. User has to confirm deleting board. _This modal forced me to create new Redux Slice for this modal, otherwise it would display both AddBoard and ConfirmDelete modals at the same time._
21. I realised that Frontend Mentor provided me data.json file and I didn't have to create my own data file 😂. Changing TypeScript interfaces and dynamic data paths was required.
22. I had to add Columns and Tasks Lists components to make implementing detail's modals possible to render.

### Built with

- React
- Next.js
- TypeScript
- TailwindCSS
- Redux Toolkit
- UUID

### What I learned

Coming soon.

#### Delete Logic

```tsx
const deleteBoard = () => {
  const index = data.boards.indexOf(selectedBoard);
  data.boards.splice(index, 1);
  if (index - 1 === -1) {
    dispatch(switchBoard(data.boards[index]));
  } else if (index) {
    dispatch(switchBoard(data.boards[index - 1]));
  } else {
    dispatch(switchBoard(null));
  }
  onClose();
};
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

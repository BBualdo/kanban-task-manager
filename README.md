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
  - [Code Snippets](#code-snippets-im-proud-of)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Features

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete boards and tasks
- Receive form validations when trying to create/edit boards and tasks
- Mark subtasks as complete and move tasks between columns
- Hide/show the board sidebar
- Toggle the theme between light/dark modes

### Screenshot

![Main Page](/screenshots/main-menu.png)
![Board](/screenshots/board-dark.png)
![Board with Sidebar](/screenshots/board-light-sidebar.png)
![Task Details](/screenshots/task-details-dark.png)
![Edit Task](/screenshots/edit-task-light.png)
![Delete Board](/screenshots/delete-board-light.png)

### Links

- Solution URL: [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/react-nextjs-typescript-tailwindcss-redux-toolkit-kanban-mrTZmpcoZ6)
- Live Site URL: [Kanban - Task Manager](https://bbualdo-kanban.vercel.app)

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

8. Passed `selectedBoard` state to Redux and added styling and Feed content based on which Board is selected.
9. Added Board Adding modal but only with name input for now, to prevent bugs. _The tricky part was to make modal close when user clicks outside modal div._
10. Instead of displaying error when name input field is empty I decided to name it automatically by "New Board (boards.length + 1)", because name will be changeable later.
11. Each board has optional columns array, so I mapped over it and display them on Feed (of course depending which board with which columns is in `selectedBoard` state).
12. Used UUID to pass unique ID as key for each list element.
13. Did same thing for tasks in columns.
14. Applied some styling for chosen theme and added scrolling in Feed component when content overflows. And styled scrollbar to fit the entire App, why not? 😃
15. Added mini-modal with "Edit Board" and "Delete Board" options. I used `useState` here because I think that using Redux here would be overkill.
16. Then I added [Delete Logic](#delete-logic) that splices boards array by index of `selectedBoard` and changes `selectedBoard` itself conditionally.
17. It forced me to build 'No Board Page' to show it when there is no boards to select. It gave me the idea of Login page which I'm gonna create at the end.
18. Added quick improvement that changes `selectedBoard` to new board when user is creating one.
19. Added new modal which appears when user wants to delete board. User has to confirm deleting board. _This modal forced me to create new Redux Slice for this modal, otherwise it would display both AddBoard and ConfirmDelete modals at the same time._
20. I realised that Frontend Mentor provided me data.json file and I didn't have to create my own data file 😂. Changing TypeScript interfaces and dynamic data paths was required.
21. I had to add Columns and Tasks Lists components to make implementing detail's modals possible to render.
22. Created new `selectedTask` Redux Slice similar to `selectedBoard`. When user clicks on Task it is selected.
23. Created slice for another modal and now clicking on Task displays modal.
24. Task Details Modal has `selectedTask` title, description and status. Also I've made custom dropdown (for now it doesn't let user to change it).
25. Added SubtasksList and Subtask Component to show in Task Details Modal. For now it checks if subtask `isCompleted` to check the checkbox, but I will add a function that will mark subtasks as completed or not.
26. Added completed subtasks counter and displayed it instead of X in "X of (subtasks.length) subtasks.
27. I started to implementing ability to add columns with custom names to new board. I added `ColumnInputsList` which is rendered by `AddBoardModal` and `ColumnInput` which is rendered by `ColumnInputsList` by mapping over `columnToAdd` state. For now it is hard coded.
28. Added ability to add new columns when creating board or delete it.
29. Added ability to change columns names when creating board. That was a tough one to add:

- First I added onChange event to input and passed a function to it.
- Then I declared that [Function](#update-column).
- After that I passed that function through ColumnInputsList to ColumnInput.
- A bug occured - Every keystroke on input rerendered component and focus was lost.
- So I declared state with `inputValue` initially equal to passed default name.
- I set value to `inputValue` and declared that onChange it is set to `event.target.value` and passed `updateColumnName` function to onBlur.

30. I've added if condition to `addBoard` function to check if any name in created columns is an empty string: [Check](#Array.some). I've also added `isEmpty` state to `ColumnInput` component to add proper styling when field is empty.
31. I had to rename all reducers in Redux slices to easier read which reducer manipulates which modal. I've also copy-pasted `AddBoard` modal as `EditBoard` modal because they are very similar.
32. I customized `EditBoard` modal to let user edit `selectedBoard` info such as name and columns in there. I'm thinking about adding warning when user click 'Save Changes', when these changes include removing columns which had some tasks.
33. I've implemented showing `EditBoard` modal when user clicks `Add New Column` button either on `Empty` page or next to the existing columns.
34. Added another modal: This time for adding tasks.
35. I built `AddTask` modal based on `AddBoard` modal. For now user can Add and remove subtasks, change Task's title and description, but none of these changes will affect anything. It's time to build it properly.
36. `AddTask` modal now allows user to Add tasks to `selectedBoard` and to proper column by selecting status from `Dropdown`. I had to create new copy of entire board when `Add Task` button is clicked, otherwise strange error occured, like tasks array wasn't array. It means that I have to prevent mutating data directly everywhere in my code. But I will leave it for future.
37. Meanwhile I've realised that `AddBoard` modal and `EditBoard` modal are conditionally rendered in 2 places, so setting Redux state to true affected displaying each of them twice.
38. I've added possibility to change each tasks status, and if so, that task is moved into selected status (column). That was a tough one. I aslo have to start commenting my code, because I started to lose myself in there... [Changing Status](#changing-status)
39. I made a lot of changes:

- Changed `Options` mini modal into `BoardOptions` because same modal has been used in `TaskOptions`.
- It also has `EditTask` and `DeleteTask` options, which displays proper modals.
- `EditTask` looks like `AddTask` and changing options there affects `selectedTask` [Edit Task](#edit-task)
- `DeleteTask` for now only displays modal with `selectedTask` name and let's user to cancel that action.

40. `DeleteTask` works fine.
41. Fixed bug that was deleting task if user was changing task's status to the same as selected.
42. I've implemented checking the subtask as completed or not. [Toggle Complition](#check-as-completed) That was another opportunity to help me understand working with data. It affects `completedAmount` counter. One thing: Editing complition status of the task forces it to go at the bottom of tasks list, but I think that is not an issue. At least for now. I'm proud of myself, because I finished logic for entire Application, at least the basic logic, because I'm gonna setup a database for this app and provide some Authentication. But for now I have to make it responsive.
43. I've styled app for tablets and styled `Header` and `Sidebar` for Mobile Devices. Sidebar works, looks and is called differently. [Mobile Sidebar Call](#mobile-sidebar-call)
44. I've finished RWD. Probably some issues will apear later, but I will solve them.

### Built with

- React
- Next.js
- TypeScript
- TailwindCSS
- Redux Toolkit
- UUID

### What I learned

This project helped me get comfortable with **TypeScript** and **Redux Toolkit**. I'm also happy that I've learned that it's not okay to mutate data direcly, but to create copy of existing data and working on it. However I probably shouldn't use **Next.js** here, because there is no routing and no actually need for SSR. But it should be helpful when I will make that App Fullstack. I also plan to add some animations via **Framer Motion**.

### Code snippets I'm proud of

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

#### Update Column

```tsx
const updateColumnName = (
  event: React.ChangeEvent<HTMLInputElement>,
  columnToUpdate: BoardColumnInterface
) => {
  const newName = event.target.value;

  setColumnsToAdd((prevColumns) => {
    return prevColumns.map((column) => {
      if (column === columnToUpdate) {
        return { ...column, name: newName };
      } else {
        return column;
      }
    });
  });
};
```

#### Array.some

```tsx
const addNewBoard = () => {
  const newBoard: BoardInterface = {
    name:
      boardNameInput.current!.value || `New Board #${data.boards.length + 1}`,
    columns: columnsToAdd,
  };

  if (columnsToAdd.some((column) => column.name == "")) {
    return;
  } else {
    data.boards.push(newBoard);
    dispatch(switchBoard(newBoard));
    onClose();
  }
};
```

#### Changing status

```tsx
const changeStatus = (status: string) => {
  setSelectedStatus(status);

  const updatedTask: TaskInterface = {
    ...selectedTask!,
    status: status,
  };

  const updatedColumns = selectedBoard.columns.map((column) => {
    if (column.name === selectedTask!.status) {
      const updatedTasks = column.tasks.filter(
        (task) => task.id !== selectedTask!.id
      );
      return { ...column, tasks: updatedTasks };
    } else if (column.name === status) {
      return { ...column, tasks: [...column.tasks, updatedTask] };
    } else {
      return column;
    }
  });

  const newBoard = { ...selectedBoard, columns: updatedColumns };

  const updatedBoards = data.boards.map((board) => {
    if (board.id === newBoard.id) {
      return newBoard;
    } else {
      return board;
    }
  });

  data.boards = updatedBoards;

  dispatch(switchTask(updatedTask));
  dispatch(switchBoard(newBoard));
};
```

#### Edit Task

```tsx
const saveChanges = () => {
  console.log(selectedBoard);
  if (subtasksToEdit.some((subtask) => subtask.title == "")) {
    return;
  } else if (editedTask!.title == "") {
    editedTask!.title = "New Task";
  }

  const updatedTask: TaskInterface = {
    ...editedTask!,
    title: editedTask!.title,
    description: editedTask!.description,
    status: selectedStatus,
    subtasks: subtasksToEdit,
  };

  const updatedColumns = selectedBoard.columns.map((column) => {
    if (column.name === selectedTask!.status) {
      const updatedTasks = column.tasks.filter((task) => {
        task.id !== updatedTask.id;
      });
      if (selectedTask!.status === updatedTask.status) {
        return { ...column, tasks: [...updatedTasks, updatedTask] };
      } else {
        return { ...column, tasks: updatedTasks };
      }
    } else if (column.name === selectedStatus) {
      return { ...column, tasks: [...column.tasks, updatedTask] };
    } else {
      return column;
    }
  });

  const newBoard = { ...selectedBoard, columns: updatedColumns };

  const updatedBoards = data.boards.map((board) => {
    if (board.id === newBoard.id) {
      return newBoard;
    } else {
      return board;
    }
  });

  data.boards = updatedBoards;

  dispatch(switchBoard(newBoard));
  onClose();
};
```

#### Check as completed;

```tsx
const toggleCompleted = (subtaskToToggle: SubtaskInterface) => {
  const newSubtask: SubtaskInterface = {
    ...subtaskToToggle,
    isCompleted: !subtaskToToggle.isCompleted,
  };

  const updatedSubtasks: SubtaskInterface[] = selectedTask!.subtasks.map(
    (subtask) => {
      if (subtask.title === subtaskToToggle.title) {
        return newSubtask;
      } else {
        return subtask;
      }
    }
  );

  const updatedTask: TaskInterface = {
    ...selectedTask!,
    subtasks: updatedSubtasks,
  };

  const updatedColumns = selectedBoard.columns.map((column) => {
    if (column.name === selectedTask!.status) {
      const updatedTasks = column.tasks.filter(
        (task) => task.id !== selectedTask!.id
      );
      return { ...column, tasks: [...updatedTasks, updatedTask] };
    } else {
      return column;
    }
  });

  const newBoard = { ...selectedBoard, columns: updatedColumns };

  const updatedBoards = data.boards.map((board) => {
    if (board.id === newBoard.id) {
      return newBoard;
    } else {
      return board;
    }
  });

  data.boards = updatedBoards;

  dispatch(switchBoard(newBoard));
  dispatch(switchTask(updatedTask));
};
```

#### Mobile Sidebar Call

```tsx
const [width, setWidth] = useState(window.innerWidth);

const handleResize = () => {
  setWidth(window.innerWidth);
};

useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, [width]);

/* ... */

{
  width > 666 && <Sidebar />;
}
```

### Continued development

There is one thing that I have to practice for sure - making my code more clean and reusable. It was my first touch with Redux and I have a lot of similar slices, what forces me to use a lot of `is{ModalName}Open` checks. And for each check I had to write 2 functions. One for opening and one for closing modal. I've also built few very similar Modals. I could probably write is as one modal but had to pass some unconvinient parameters to component function. So I did it a hard way.

### Useful resources

I built this app working with documentations:

- [Next.js](https://nextjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Author

- Website - [BBualdo](https://bbualdo-portfolio.netlify.app)
- Frontend Mentor - [@bbualdo](https://www.frontendmentor.io/profile/bbualdo)

# TodoList App

![Interface of the App](https://github.com/Tejasshack/APTCODER_FrontEnd_Assignment/assets/114883554/b3f97477-db12-4929-9b66-5a86ea09604d)

## Description

This TodoList application is developed as part of an assignment for a frontend task. It showcases skills in building and styling applications using React.js.

## Features

- **Task Management**: Add, edit, and delete tasks effortlessly.
- **Task Details**: Each task includes a title, description, creation date, and status (indicating whether it's done or not).

## Tech Stack

- **React**: Utilizing hooks such as `useState` and `useEffect` for effective state management and side effects.
- **Axios**: Used for making API calls to the backend server.

## How It Works

1. **State Management**:
   - The application employs React hooks to manage tasks, including the new task being added and the current editing state.

2. **Fetching Tasks**:
   - On app initialization, it communicates with the server using `useEffect` to retrieve the initial list of tasks.

3. **Adding Tasks**:
   - A dedicated function, `handleAddTask`, is implemented to add new tasks. It validates input, creates a task object, updates the list, and sends a POST request to the server.

4. **Toggling Task Status**:
   - The `handleToggleDone` function allows users to toggle the completion status of tasks. This updates both the local list and the server via a PUT request.

5. **Deleting Tasks**:
   - Want to remove a task? The `handleDeleteTask` function takes care of that by removing the task locally and notifying the server with a DELETE request.

6. **Editing Tasks**:
   - The application supports editing through the `handleEditTask` function, which sets the task for editing, preparing it for the next steps.

7. **Saving Edits**:
   - Once edits are complete, the `handleSaveEdit` function saves the changes. It updates the task list and informs the server of the modifications through another PUT request.

## User Interface

- The app displays all tasks with their details and includes a checkbox for marking them as done. Users can easily edit or delete each task as needed.

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/Tejasshack/APTCODER_FrontEnd_Assignment.git
   cd APTCODER_FrontEnd_Assignment
Install dependencies:


Copy code
npm install
Start the application:


Copy code
npm start
Feedback
I know it's not overly complex, but it represents a solid start. I'm still on my learning journey, so any feedback is greatly appreciated!

License
This project is open-source and available under the MIT License.

markdown
Copy code

### Instructions for Use

1. **Copy and Paste**: Simply copy the above Markdown content into a file named `README.md` in the root directory of your TodoList project.
2. **Adjust Links**: If necessary, adjust any URLs or links based on your project's actual repository structure or license information.
3. **Commit Changes**: Add, commit, and push your `README.md` to your GitHub repository.

Feel free to customize any part of the README as per your preference! If you need further assistance

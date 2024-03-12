**TodoList App Description**
**Below are Screenshots of the app**

Hey there!
This application is created as a part of assignment for FrontEnd task

I dont know Anything about Vue js but tried my best to showcase my skills in terms of developing and styling the application in Reactjs

**Features:**

- Add, edit, and delete tasks.
- Each task has a title, description, creation date, and a status (you know, whether it's done or not).

**Tech Stack:**

- React hooks like useState and useEffect for managing state and side effects.
- Axios for talking to the backend server.

**How It Works:**

1. **State Management:**

   - I'm using React hooks to keep track of tasks, the new task I'm adding, the one I'm editing, and the text I'm editing.

2. **Fetching Tasks:**

   - When the app starts, it talks to the server using useEffect to get the initial list of tasks.

3. **Adding Tasks:**

   - I created a function (`handleAddTask`) to add new tasks. It checks if the task isn't empty, creates a new task object, adds it to the list, and sends a POST request to the server.

4. **Toggling Task Status:**

   - There's this cool function (`handleToggleDone`) that toggles if a task is done or not. It updates the list and lets the server know with a PUT request.

5. **Deleting Tasks:**

   - Wanna get rid of a task? No problem! There's a function (`handleDeleteTask`) for that. It deletes the task locally and tells the server to forget about it with a DELETE request.

6. **Editing Tasks:**

   - Editing is covered too! Use the `handleEditTask` function to set a task for editing. It's like a warm-up before the main event!

7. **Saving Edits:**
   - After editing, just hit `handleSaveEdit` to save those changes. It updates the list and gives the server a heads up with another PUT request.

**UI Magic:**

- The app shows all tasks with their details and a checkbox for marking them done. You can also edit or delete each task.

That's about it! I know it's not super fancy, but it's a good start. I'm still learning, so any feedback is welcome!

**Interface Of APP**
![image](https://github.com/Tejasshack/APTCODER_FrontEnd_Assignment/assets/114883554/b3f97477-db12-4929-9b66-5a86ea09604d)


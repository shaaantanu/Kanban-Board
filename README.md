## Features

- Create new tasks with titles and descriptions.
- Edit existing task details.
- Delete tasks permanently.
- Move tasks between "To Do," "Doing," and "Done" categories.
- Responsive design for mobile devices.

## Installation

1. **Clone the Repository:**

git clone https://github.com/yourusername/kanban-board.git
cd kanban-board


2. **Set Up the Server:**

- Make sure you have Node.js installed.
- Install the required dependencies by running:

  ```
  npm install
  ```

- Start the server:

  ```
  node server.js
  ```

The server will run on http://localhost:4000 by default. You can change the port in the `server.js` file if needed.

3. **Access the Application:**

Open your web browser and navigate to [http://localhost:4000](http://localhost:4000) (or the appropriate URL based on your server configuration).

## Usage

- To add a new task, fill out the "Title" and "Description" fields in the form at the bottom of the page and click "Add Task."
- To edit a task, click the "Edit" button on the task card and make your changes.
- To delete a task, click the "Delete" button on the task card.
- To move a task between categories, simply drag and drop it from one column to another.

## Technology Stack

- Front-end: HTML5, CSS3, JavaScript
- Back-end: Node.js, Express.js
- Database: SQLite (you can replace this with your preferred database)


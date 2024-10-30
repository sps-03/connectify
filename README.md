# Real-Time Chat Application

This is a real-time chat application built using **Socket.IO**, **React**, **Express**, **Node** and **MongoDB**. The application allows users to send and receive messages instantly in a user-friendly interface.

## Features

- **Real-time Messaging**: Users can chat with each other in real time using WebSockets.
- **User Authentication**: Secure user login and registration.
- **Responsive Design**: Built with **Tailwind CSS** and **Daisy UI** for a modern look.
- **Message History**: Conversations are stored in MongoDB.

## Technologies Used

- **Frontend**:

  - React
  - Tailwind CSS
  - Daisy UI
  - Socket.IO

- **Backend**:
  - Express
  - Node
  - MongoDB
  - Socket.IO

## Folder Structure

```The project structure is organized such that the frontend and backend are in the same repository:
/project-root
  ├── /backend # Backend application
  └── /frontend # Frontend application
```

## Installation

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: You need to have MongoDB set up and running. You can use a local installation or a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/sps-03/connectify.git
   cd connectify
   ```
2. Install dependencies for the frontend and backend:
   ```bash
   npm install
   cd frontend && npm install
   ```
3. Rename _.env_sample_ to _.env_ and set all environment variables.
4. Start the backend server:
   ```bash
   npm run server
   ```
5. Start the frontend server:
   ```bash
   npm run dev
   ```

## Contributing

Feel free to submit issues or pull requests. Contributions are welcome!

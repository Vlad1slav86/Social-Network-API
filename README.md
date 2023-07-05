# Social-Network-API

This is a backend API for a social network application. It provides endpoints to manage users, thoughts, and friend connections.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

To get started with the API, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install the dependencies: `npm install`
3. Set up the MongoDB database connection in the `.env` file or provide the connection URI directly.
4. Start the server: `npm start`

By default, the server runs on `http://localhost:3000`.

## API Endpoints

### Users

- `GET /users`: Get all users.
- `GET /users/:id`: Get a user by ID.
- `POST /users`: Create a new user.
- `PUT /users/:id`: Update a user by ID.
- `DELETE /users/:id`: Delete a user by ID.

### Thoughts

- `GET /thoughts`: Get all thoughts.
- `GET /thoughts/:id`: Get a thought by ID.
- `POST /thoughts`: Create a new thought.
- `PUT /thoughts/:id`: Update a thought by ID.
- `DELETE /thoughts/:id`: Delete a thought by ID.

### Friend Connections

- `POST /users/:userId/friends/:friendId`: Add a friend connection between two users.
- `DELETE /users/:userId/friends/:friendId`: Remove a friend connection between two users.

### Reactions

- `POST /thoughts/:thoughtId/reactions`: Add a reaction to a thought.
- `DELETE /thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought.

## Error Handling

The API returns appropriate error responses with status codes and error messages in case of any issues. Make sure to handle these responses in your client application.

## Screenshots

Read Users:

![Users](/public/images/Users.png)

Read Thoughts:

![Thoughts](/public/images/Thoughts.png)

Add Friend:

![Friend](/public/images/Friend.png)



## Links

GitHub: https://github.com/Vlad1slav86/Social-Network-API

Walkthrough: https://drive.google.com/file/d/1ApzNFWdyAgcjSBld0xg6LNTHH6SQJTuS/view

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

You can contact me with any questions at vladkb@yahoo.com.
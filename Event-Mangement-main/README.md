# EventSphere



EventSphere is a comprehensive event management platform built with modern web technologies. It allows users to create, delete, and view events, while providing administrators with user management capabilities.


## Features

- User authentication and authorization
- Event creation, deletion, and viewing
- Image upload for events using Cloudinary
- Admin dashboard with user management
- Responsive design for various screen sizes

## Technologies Used

- Frontend:
  - React
  - Tailwind CSS
  - Daisy UI
  - React Hook Form for validation
- Backend:
  - Node.js
  - Express.js
- Database:
  - MongoDB (or your chosen database)
- Image Upload:
  - Cloudinary

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nikhilbn19/Event-Mangement.git
   cd Event-Mangement
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # Install backend dependencies
   npm install

   # Install frontend dependencies
   cd client
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Start the development server:
   ```bash
   # Start backend server
   npm run server

   # In a new terminal, start frontend
   cd client
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

### User Features

1. **Sign Up / Log In**: Create a new account or log in to an existing one.
  

2. **Create Event**: Fill in event details and upload an image.
   

3. **All Events**: Browse through your events and events created by others.
  

4. **My Event**:  Logged user Events.
 

### Admin Features

1. **User Management**: View all users, suspend, remove, or activate user accounts.
   

2. **Analytics**: View graphs and statistics about events and users.
   





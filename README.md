
# Car Insurance AI

This project is an AI-powered system to assist with car insurance processes, such as predicting insurance costs, handling customer queries, and managing claims. The system integrates machine learning models with a user-friendly frontend for seamless interaction between users and insurance services.

---

## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Backend Structure](#backend-structure)
- [How It Works](#how-it-works)
- [Frontend Display](#frontend-display)
- [Usage Instructions](#usage-instructions)
- [Contribution](#contribution)
- [License](#license)
- [Contact Information](#contact-information)

---

## Technologies Used

### Libraries and Frameworks:
- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **AI/ML**: TensorFlow, scikit-learn
- **Others**: 
  - Axios (for API calls)
  - Chart.js (for data visualization)
  - dotenv (for environment configuration)

---

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Avacia/car_insurance_AI.git
   cd car_insurance_AI
   ```

2. **Install dependencies:**

   For **Backend**:
   ```bash
   cd backend
   npm install
   ```

   For **Frontend**:
   ```bash
   cd ../frontend
   npm install
   ```

3. **Set up environment variables**:  
   Create a .env file in the backend folder with the following:
   ```bash
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the development server:**

   **Backend**:
   ```bash
   npm run dev
   ```

   **Frontend**:
   ```bash
   cd ../frontend
   npm start
   ```

5. **Open the application:**  
   Go to `http://localhost:3000` to access the frontend.

---

## Backend Structure

The backend structure follows a typical MVC (Model-View-Controller) pattern for easy scalability and maintenance. Here is a brief overview of the structure:

```
backend/
│
├── controllers/
│   ├── authController.js  # Handles user authentication logic
│   ├── insuranceController.js  # Manages insurance-related actions (prediction, claims)
│   └── adminController.js  # Handles admin operations (user management, analytics)
│
├── models/
│   ├── userModel.js  # User schema for MongoDB
│   ├── claimModel.js  # Claim schema for insurance claims
│   └── insuranceModel.js  # Model for insurance data
│
├── routes/
│   ├── authRoutes.js  # Routes for user login/signup
│   ├── insuranceRoutes.js  # Routes for insurance prediction and claims
│   └── adminRoutes.js  # Routes for admin dashboard
│
├── middleware/
│   ├── authMiddleware.js  # JWT authentication middleware
│   └── errorHandler.js  # Error handling middleware
│
├── utils/
│   └── AI_model.js  # Machine learning model handling and prediction logic
│
├── config/
│   └── db.js  # MongoDB connection configuration
│
├── app.js  # Main entry point for the backend server
└── server.js  # Server setup and initialization
```

This structure keeps the code modular and organized, making it easy to extend and manage as the project grows.

---

## How It Works

### Components:
- **Authentication (Login/Signup)**: Handles user authentication, allowing users to create accounts and log in securely.
- **Insurance Predictor**: Uses machine learning to predict insurance costs based on user input (e.g., car model, age, accident history).
- **Claims Management**: Manages the user's insurance claims, allowing them to submit new claims and track the status.
- **Admin Dashboard**: For admins to manage users and view analytics related to claims and insurance processes.
- **API Integration**: Axios is used to handle API calls between the frontend and backend.

### Backend:
- **AI Model Integration**: TensorFlow or scikit-learn is used to predict insurance costs, and the backend serves the model predictions to the frontend.

---

## Frontend Display

Here are some images showcasing the user interface:

- **Login Page**
  ![Login Page](path/to/image1.png)

- **Insurance Prediction Page**
  ![Insurance Prediction](path/to/image2.png)

- **Claims Management Page**
  ![Claims Management](path/to/image3.png)

---

## Usage Instructions

To use the system, follow these steps:

1. **Create an Account or Login**:  
   Go to the login page, create an account or log in using your credentials.

2. **Submit Details for Prediction**:  
   Navigate to the insurance predictor page, fill in the required details (age, car type, accident history), and submit.

3. **View Claims**:  
   On the claims management page, submit a new claim or view the status of your existing claims.

---

## Contribution

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact Information

If you have any questions or suggestions, feel free to reach out at:
- **GitHub**: [Avacia](https://github.com/Avacia)
- **Email**: wang80139@gmail.com

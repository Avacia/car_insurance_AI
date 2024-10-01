
# Car Insurance AI

This project is an AI-powered system to assist users in understanding and selecting the appropriate type of car insurance. The system features an AI assistant that guides users through different insurance options without requiring a login or handling insurance claims.

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
- **AI**: TensorFlow, scikit-learn
- **Others**: 
  - Axios (for API calls)
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
   PORT=the_port_you_wish_your_backend_to_be_run_at
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
│   └── insuranceController.js  # Handles AI-based assistance for insurance queries
│
├── routes/
│   └── insuranceRoutes.js  # Routes for interacting with AI assistance and insurance options
|
└── server.js  # Server setup and initialization
```

This structure keeps the code modular and organized, making it easy to extend and manage as the project grows.

---

## How It Works

### Components:
- **AI Assistance**: Helps users to determine which type of car insurance is suitable for them, based on their specific needs and understanding.
- **Insurance Information**: Users can browse insurance options and get a brief understanding of different insurance types.
- **API Integration**: Axios is used to handle API calls between the frontend and backend.

### AI Assistance:
- Realtime communication.
- Navigate user to the most suit insurance.

---

## Frontend Display

Here are some images showcasing the user interface:

- **Home Page**
  ![Home Page](readMeImage/frontendImage.mp4)

- **Insurance Help Page**
  ![Insurance Help](readMeImage/AIResponse.mp4)

---

## Usage Instructions

To use the system, follow these steps:

1. **Open the Website**:  
   No login is required. You can access the homepage directly.

2. **Browse Insurance Options**:  
   Get a brief overview of different insurance types and use the AI assistant for further guidance.

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

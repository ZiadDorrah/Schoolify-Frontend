<div align="center">

# 📚 Schoolify

### Modern Educational Platform for Enhanced Learning Management

![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=flat&logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-7952b3?style=flat&logo=bootstrap&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.22.3-CA4245?style=flat&logo=react-router&logoColor=white)

**Schoolify** is a comprehensive educational platform designed to streamline learning, assessment, and academic administration for students, teachers, and administrators.

[Demo Video](#-demo-video) • [Features](#-features) • [Getting Started](#-getting-started)

</div>

---

## 📖 About

Schoolify is a feature-rich web application that transforms the traditional educational experience by providing:

- **Interactive Learning Environment**: Students can browse subjects, explore units and lessons, and access educational content in an organized manner
- **Comprehensive Assessment System**: Multiple exam types including lesson exams, unit tests, and challenging problem sets
- **Performance Analytics**: Real-time results tracking, answer reviews, and leaderboards to motivate student achievement
- **Administrative Dashboard**: Complete management system for teachers and administrators to oversee content, students, and academic progress
- **Accessibility**: Full RTL (Right-to-Left) support for Arabic language interface

Built with modern web technologies, Schoolify ensures a responsive, intuitive experience across all devices.

---

## ✨ Features

### 🎓 Student Features

- **Subject Navigation**: Browse and explore multiple subjects (Mathematics, Science, History, Arabic, English, French)
- **Structured Learning**: Navigate through subjects → units → lessons hierarchy
- **Multiple Exam Types**:
  - Lesson-specific exams to test understanding of individual topics
  - Unit tests to assess comprehensive knowledge
  - Challenge mode for advanced problem-solving
- **Wechsler Intelligence Tests**: Integrated cognitive assessment tools
- **Performance Tracking**:
  - Real-time exam results and scoring
  - Detailed answer review and explanations
  - Top students leaderboard to track rankings
- **Profile Management**: Customize and manage personal account settings

### 🔐 Authentication & Security

- **User Registration**: Comprehensive sign-up process with validation
- **Secure Login**: JWT-based authentication system
- **OTP Verification**: Two-factor authentication for enhanced security
- **Session Management**: Secure token storage with js-cookie

### 👨‍🏫 Dashboard (Admin/Teacher)

- **Subject Management**: Create, edit, and organize subjects
- **Level Administration**: Manage academic levels and grades
- **Content Management**: Upload and organize educational materials
- **Unit & Lesson Control**: Add, modify, and structure curriculum units
- **Teacher Management**: Administer teacher accounts and permissions
- **Student Oversight**: Track student progress and manage enrollments
- **Challenge Creation**: Design and deploy challenging problem sets

### 🎨 User Experience

- **RTL Support**: Native Arabic language support with right-to-left layout
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive UI**: Smooth transitions and engaging user interface with React Slick carousels
- **Smart Notifications**: SweetAlert2 integration for intuitive user feedback

---

## 🛠️ Technology Stack

### Frontend Framework

- **React** 18.2.0 - Modern component-based UI library
- **React Router DOM** 6.22.3 - Client-side routing and navigation
- **React Scripts** 5.0.1 - Create React App build system

### UI & Styling

- **Bootstrap** 5.3.2 - Responsive CSS framework
- **React Bootstrap** 2.9.1 - Bootstrap components for React
- **CSS Modules** - Scoped styling for components
- **React Icons** 5.1.0 - Icon library
- **React Slick** 0.29.0 - Carousel component

### State Management & Data

- **React Context API** - Global state management (AuthContext, AuthDashProvider)
- **Axios** 1.6.8 - HTTP client for API requests
- **JWT Decode** 4.0.0 - JWT token parsing
- **js-cookie** 3.0.5 - Cookie management

### Form Handling & Validation

- **Joi** 17.12.0 - Schema validation library

### User Feedback

- **SweetAlert2** 11.12.1 - Beautiful, responsive popup boxes
- **SweetAlert2 React Content** 5.0.7 - React integration for SweetAlert2

### Additional Features

- **React Mic** 12.4.6 - Audio recording capabilities

### Testing

- **Jest** & **React Testing Library** - Unit and integration testing

---

## 📁 Project Structure

```
Schoolify-Frontend/
├── public/                      # Static public assets
│   ├── index.html              # HTML template
│   ├── favicon.ico             # App icon
│   └── schoolify-removebg-preview.png
├── src/
│   ├── components/             # Reusable components
│   │   ├── HomePage/          # Home page components
│   │   ├── PlatformContent/   # Content delivery components
│   │   ├── Uitily/            # Utility components (Header, Sidebar)
│   │   ├── Wechsler/          # Wechsler test components
│   │   ├── landingComponents/ # Landing page sections
│   │   ├── popupComponents/   # Modal and popup components
│   │   └── revisionComponents/# Review and revision tools
│   ├── dashboard/             # Admin dashboard
│   │   ├── components/        # Dashboard-specific components
│   │   └── page/              # Dashboard pages
│   │       ├── Dashboard page/
│   │       ├── subject/       # Subject management
│   │       ├── Teachers/      # Teacher administration
│   │       ├── Levels/        # Level management
│   │       ├── StudentsPage/  # Student oversight
│   │       ├── ContentPage/   # Content management
│   │       ├── AddUnits/      # Unit creation
│   │       └── Challenges/    # Challenge management
│   ├── page/                  # Main application pages
│   │   ├── LandingPage.jsx   # Landing page
│   │   ├── LoginPage.jsx     # User login
│   │   ├── SignUp.jsx        # Registration
│   │   ├── AllUnits.jsx      # Unit listing
│   │   ├── AllLessons.jsx    # Lesson listing
│   │   ├── Subject.jsx       # Subject view
│   │   ├── Exam.jsx          # Exam interface
│   │   ├── Challenges.jsx    # Challenge mode
│   │   ├── ExamResults.jsx   # Results display
│   │   └── TopGrades.jsx     # Leaderboard
│   ├── store/                 # State management
│   │   ├── AuthContext.js    # Authentication context
│   │   ├── ProtectedRoute.js # Route protection
│   │   └── getAuthToken.js   # Token utilities
│   ├── dashStore/             # Dashboard state
│   │   └── AuthContextDash.js
│   ├── assets/                # Images and media
│   ├── App.js                 # Main app component
│   ├── App.css                # Global styles
│   └── index.js               # Application entry point
├── video_demo/                # Demo video
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Backend API Server** - Laravel backend required for full functionality

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/ZiadDorrah/Schoolify-Frontend.git
cd Schoolify-Frontend
```

2. **Install dependencies**

```bash
npm install
```

or with yarn:

```bash
yarn install
```

3. **Configure environment variables**

Create a `.env` file in the root directory and configure your backend API endpoint:

```env
REACT_APP_API_URL=http://your-backend-api-url.com/api
```

4. **Start the development server**

```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Available Scripts

- **`npm start`** - Runs the app in development mode
- **`npm test`** - Launches the test runner
- **`npm run build`** - Builds the app for production to the `build` folder
- **`npm run eject`** - Ejects from Create React App (⚠️ irreversible)

---

## ⚙️ Configuration

### Backend Integration

Schoolify Frontend requires a Laravel backend API. Ensure your backend is configured to:

- Accept CORS requests from the frontend origin
- Provide JWT authentication endpoints
- Implement all required API routes for subjects, units, lessons, exams, and user management

### API Endpoints

The frontend expects the following API structure:

- Authentication: `/api/auth/login`, `/api/auth/register`, `/api/auth/verify-otp`
- Subjects: `/api/subjects`
- Units: `/api/units`
- Lessons: `/api/lessons`
- Exams: `/api/exams`
- Results: `/api/results`
- Dashboard: `/api/dashboard/*`

_Refer to your Laravel backend documentation for complete API specifications._

---

## 🎬 Demo Videos

### Platform Demo

https://github.com/ZiadDorrah/Schoolify-Frontend/assets/demo.mp4

### Market Overview

https://github.com/ZiadDorrah/Schoolify-Frontend/assets/Market.mp4

> **Download**: You can also download the videos from the [`video_demo`](./video_demo) folder: [demo.mp4](./video_demo/demo.mp4) | [Market.mp4](./video_demo/Market.mp4)

---

## 🎯 Features Walkthrough

### For Students

1. **Sign Up/Login**: Create an account or log in with existing credentials
2. **Browse Subjects**: Navigate to the platform and select your subject
3. **Explore Content**: Drill down through Units → Lessons to access learning materials
4. **Take Exams**: Test your knowledge with lesson and unit exams
5. **Challenge Mode**: Push your limits with advanced problem sets
6. **Track Performance**: View your results and ranking on the leaderboard

### For Administrators

1. **Dashboard Access**: Log in with admin credentials at `/dashboard/login`
2. **Manage Content**: Add subjects, units, lessons, and educational materials
3. **Administer Users**: Manage student and teacher accounts
4. **Create Assessments**: Design exams and challenges
5. **Monitor Progress**: Track student performance and engagement

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Style

- Follow the existing code structure and naming conventions
- Use meaningful variable and function names
- Write comments for complex logic
- Ensure all tests pass before submitting PR

---

## 📄 License

This project is part of an educational platform. Please contact the maintainers for licensing information.

---

## 📞 Contact & Support

- **GitHub Repository**: [ZiadDorrah/Schoolify-Frontend](https://github.com/ZiadDorrah/Schoolify-Frontend)
- **Issues**: [Report a bug or request a feature](https://github.com/ZiadDorrah/Schoolify-Frontend/issues)

---

<div align="center">

**Built with ❤️ for better education**

⭐ Star this repository if you find it helpful!

</div>

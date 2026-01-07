<div align="center">

# ðŸ“š Schoolify

### Modern Educational Platform for Enhanced Learning Management

![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=flat&logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-7952b3?style=flat&logo=bootstrap&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.22.3-CA4245?style=flat&logo=react-router&logoColor=white)

**Schoolify** is a comprehensive educational platform designed to streamline learning, assessment, and academic administration for students, teachers, and administrators.

[Demo Video](#-demo-video) â€¢ [Features](#-features) â€¢ [Getting Started](#-getting-started)

</div>

---

## ðŸ“– About

Schoolify is a feature-rich web application that transforms the traditional educational experience by providing:

- **Interactive Learning Environment**: Students can browse subjects, explore units and lessons, and access educational content in an organized manner
- **Comprehensive Assessment System**: Multiple exam types including lesson exams, unit tests, and challenging problem sets
- **Performance Analytics**: Real-time results tracking, answer reviews, and leaderboards to motivate student achievement
- **Administrative Dashboard**: Complete management system for teachers and administrators to oversee content, students, and academic progress
- **Accessibility**: Full RTL (Right-to-Left) support for Arabic language interface

Built with modern web technologies, Schoolify ensures a responsive, intuitive experience across all devices.

---

## âœ¨ Features

### ðŸŽ“ Student Features

- **Subject Navigation**: Browse and explore multiple subjects (Mathematics, Science, History, Arabic, English, French)
- **Structured Learning**: Navigate through subjects â†’ units â†’ lessons hierarchy
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

### ðŸ” Authentication & Security

- **User Registration**: Comprehensive sign-up process with validation
- **Secure Login**: JWT-based authentication system
- **OTP Verification**: Two-factor authentication for enhanced security
- **Session Management**: Secure token storage with js-cookie

### ðŸ‘¨â€ðŸ« Dashboard (Admin/Teacher)

- **Subject Management**: Create, edit, and organize subjects
- **Level Administration**: Manage academic levels and grades
- **Content Management**: Upload and organize educational materials
- **Unit & Lesson Control**: Add, modify, and structure curriculum units
- **Teacher Management**: Administer teacher accounts and permissions
- **Student Oversight**: Track student progress and manage enrollments
- **Challenge Creation**: Design and deploy challenging problem sets

### ðŸŽ¨ User Experience

- **RTL Support**: Native Arabic language support with right-to-left layout
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive UI**: Smooth transitions and engaging user interface with React Slick carousels
- **Smart Notifications**: SweetAlert2 integration for intuitive user feedback

---

## ðŸ› ï¸ Technology Stack

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

## ðŸ“ Project Structure

```
Schoolify-Frontend/
â”œâ”€â”€ public/                      # Static public assets
â”‚   â”œâ”€â”€ index.html              # HTML template
â”‚   â”œâ”€â”€ favicon.ico             # App icon
â”‚   â””â”€â”€ schoolify-removebg-preview.png
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ components/             # Reusable components
â”‚   â”‚   â”œâ”€â”€ HomePage/          # Home page components
â”‚   â”‚   â”œâ”€â”€ PlatformContent/   # Content delivery components
â”‚   â”‚   â”œâ”€â”€ Uitily/            # Utility components (Header, Sidebar)
â”‚   â”‚   â”œâ”€â”€ Wechsler/          # Wechsler test components
â”‚   â”‚   â”œâ”€â”€ landingComponents/ # Landing page sections
â”‚   â”‚   â”œâ”€â”€ popupComponents/   # Modal and popup components
â”‚   â”‚   â””â”€â”€ revisionComponents/# Review and revision tools
â”‚   â”œâ”€â”€ dashboard/             # Admin dashboard
â”‚   â”‚   â”œâ”€â”€ components/        # Dashboard-specific components
â”‚   â”‚   â””â”€â”€ page/              # Dashboard pages
â”‚   â”‚       â”œâ”€â”€ Dashboard page/
â”‚   â”‚       â”œâ”€â”€ subject/       # Subject management
â”‚   â”‚       â”œâ”€â”€ Teachers/      # Teacher administration
â”‚   â”‚       â”œâ”€â”€ Levels/        # Level management
â”‚   â”‚       â”œâ”€â”€ StudentsPage/  # Student oversight
â”‚   â”‚       â”œâ”€â”€ ContentPage/   # Content management
â”‚   â”‚       â”œâ”€â”€ AddUnits/      # Unit creation
â”‚   â”‚       â””â”€â”€ Challenges/    # Challenge management
â”‚   â”œâ”€â”€ page/                  # Main application pages
â”‚   â”‚   â”œâ”€â”€ LandingPage.jsx   # Landing page
â”‚   â”‚   â”œâ”€â”€ LoginPage.jsx     # User login
â”‚   â”‚   â”œâ”€â”€ SignUp.jsx        # Registration
â”‚   â”‚   â”œâ”€â”€ AllUnits.jsx      # Unit listing
â”‚   â”‚   â”œâ”€â”€ AllLessons.jsx    # Lesson listing
â”‚   â”‚   â”œâ”€â”€ Subject.jsx       # Subject view
â”‚   â”‚   â”œâ”€â”€ Exam.jsx          # Exam interface
â”‚   â”‚   â”œâ”€â”€ Challenges.jsx    # Challenge mode
â”‚   â”‚   â”œâ”€â”€ ExamResults.jsx   # Results display
â”‚   â”‚   â””â”€â”€ TopGrades.jsx     # Leaderboard
â”‚   â”œâ”€â”€ store/                 # State management
â”‚   â”‚   â”œâ”€â”€ AuthContext.js    # Authentication context
â”‚   â”‚   â”œâ”€â”€ ProtectedRoute.js # Route protection
â”‚   â”‚   â””â”€â”€ getAuthToken.js   # Token utilities
â”‚   â”œâ”€â”€ dashStore/             # Dashboard state
â”‚   â”‚   â””â”€â”€ AuthContextDash.js
â”‚   â”œâ”€â”€ assets/                # Images and media
â”‚   â”œâ”€â”€ App.js                 # Main app component
â”‚   â”œâ”€â”€ App.css                # Global styles
â”‚   â””â”€â”€ index.js               # Application entry point
â”œâ”€â”€ video_demo/                # Demo video
â”œâ”€â”€ package.json               # Dependencies and scripts
â””â”€â”€ README.md                  # This file
```

---

## ðŸš€ Getting Started

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
- **`npm run eject`** - Ejects from Create React App (âš ï¸ irreversible)

---

## âš™ï¸ Configuration

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

## ðŸŽ¬ Demo Video

To see Schoolify in action, open or download the demo video:

**[ðŸ“¥ Download Demo Video](./video_demo/demo.mp4)**

> The video demonstration is located in the [`video_demo`](./video_demo) folder of this project.

---

## ðŸŽ¯ Features Walkthrough

### For Students

1. **Sign Up/Login**: Create an account or log in with existing credentials
2. **Browse Subjects**: Navigate to the platform and select your subject
3. **Explore Content**: Drill down through Units â†’ Lessons to access learning materials
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

## ðŸ¤ Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   <<<<<<< HEAD
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

## ðŸ“„ License

This project is part of an educational platform. Please contact the maintainers for licensing information.

---

## ðŸ“ž Contact & Support

- **GitHub Repository**: [ZiadDorrah/Schoolify-Frontend](https://github.com/ZiadDorrah/Schoolify-Frontend)
- **Issues**: [Report a bug or request a feature](https://github.com/ZiadDorrah/Schoolify-Frontend/issues)

---

<div align="center">

**Built with â¤ï¸ for better education**

â­ Star this repository if you find it helpful!

# </div>

git clone https://github.com/ZiadDorrah/Schoolify-Frontend.git
cd schoolify

> > > > > > > cb3986d82837840ee49e118b50791d4bf259a3a2


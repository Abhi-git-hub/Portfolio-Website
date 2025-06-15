# Personal Portfolio Website - Frontend

Welcome to the frontend repository for my personal portfolio website! This project showcases my skills in full-stack development, UI/UX design, and various projects across web development, video editing, and content writing.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Responsive Design**: Optimized for various screen sizes, from mobile to desktop.
- **Dynamic Theme Toggling**: Seamless light and dark mode switching for enhanced user experience.
- **Interactive Home Section**: Engaging hero section with a profile image and social links.
- **Categorized Projects**: Projects are organized into Web Development, Video Editing, and Content Writing with a tabbed interface.
- **Certifications Showcase**: Dedicated section to display earned certifications.
- **Contact Form**: A functional contact section for inquiries (backend integration required for full functionality).
- **Smooth Scrolling & Animations**: Utilizes `framer-motion` for fluid transitions and animations.
- **SEO Optimized**: Includes Helmet for dynamic meta tags to improve search engine visibility.
- **Lazy Loading**: Components are lazy-loaded for improved performance.

## Technologies Used

- **React**: Frontend JavaScript library for building user interfaces.
- **Framer Motion**: Library for production-ready motion and animations.
- **React Icons**: A collection of popular SVG icons.
- **React Helmet Async**: Manages document head tags for SEO.
- **CSS**: For styling and responsive design.

## Setup and Installation

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js (v14 or higher) and npm (or yarn) installed.
- Git installed.

### Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
    cd YOUR_REPO_NAME/portfolioWebsite/frontend
    ```
    *(Remember to replace `YOUR_GITHUB_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub details.)*

2.  **Install dependencies:**
    ```bash
    npm install
    # or if you use yarn
    # yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm start
    # or
    # yarn start
    ```
    This will open the application in your browser at `http://localhost:3000` (or another available port).

## Usage

- Navigate through the different sections (Home, About, Projects, Certifications, Contact) using the navigation bar.
- Use the theme toggle button (top-left corner) to switch between light and dark modes.
- On the Projects page, click on the tabs (Web Development, Video Editing, Content Writing) to view categorized projects.

## Deployment

This project is designed for easy deployment to platforms like Vercel. Assuming your project is connected to a Git repository:

1.  **Install Vercel CLI (if not already installed):**
    ```bash
    npm install -g vercel
    ```

2.  **Login to Vercel (if not already logged in):**
    ```bash
    vercel login
    ```

3.  **Deploy your project:**
    Navigate to the `portfolioWebsite/frontend` directory and run:
    ```bash
    vercel
    ```
    Follow the prompts. Vercel will detect it's a React project and configure it automatically.

## Project Structure

```
portfolioWebsite/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── assets/ # For static assets like hero.jpg
│   ├── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── assets/ # For images imported directly into JS/JSX
│   │   ├── components/
│   │   │   └── LoadingSpinner.jsx
│   │   └── pages/
│   │       ├── About.css
│   │       ├── About.jsx
│   │       ├── Certifications.css
│   │       ├── Certifications.jsx
│   │       ├── Contact.css
│   │       ├── Contact.jsx
│   │       ├── Footer.css
│   │       ├── Footer.jsx
│   │       ├── Home.css
│   │       ├── Home.jsx
│   │       ├── Projects.css
│   │       └── Projects.jsx
│   ├── .gitignore
│   ├── package.json
│   └── README.md
└── ... (other parts of your portfolio website, e.g., backend)
```

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open-source and available under the [MIT License](LICENSE.md). (You may need to create a LICENSE.md file if you haven't already).  

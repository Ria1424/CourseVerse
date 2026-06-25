# 🎓 Courseverse - AI-Powered E-Learning Platform

Live Demo Link: **[https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/](https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/)**
*(Note: Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub details after deploying!)*

---

Courseverse is a premium, state-of-the-art E-Learning platform designed with a sleek glassmorphic dark-mode interface, custom gradient accents, and dynamic micro-animations. It runs **100% client-side** using standard web technologies (HTML, CSS, JS) and persists all states locally, making it perfect for free hosting on **GitHub Pages**.

## 🧠 Core Features

### 1. AI-Powered Course Recommender System
- **Profile Interest Mapping**: An interactive sidebar widget allows users to select topics they are interested in (`Coding`, `AI`, `Design`, `Business`).
- **Content-Based Scoring Engine**: Recommendations recalculate in real-time by weighting category matches from completed courses (weight: 3) and selected interests (weight: 2) with beginner/intermediate progression boosts.
- **Instant UI Refresh**: Toggle options update recommended courses instantly without reloading the page.

### 2. Expanded 10-Course Curriculum
A rich database of 10 courses with complete multi-unit syllabi, summary keys, coding blocks, and quiz databases:
1. *Introduction to Python Programming* (Coding, Free)
2. *AI & Machine Learning Foundations* (AI, Premium)
3. *UI/UX Design Masterclass* (Design, Premium)
4. *JavaScript Basics & DOM* (Coding, Free)
5. *Advanced Data Science with Python* (AI & Coding, Premium)
6. *Figma Prototyping Techniques* (Design, Free)
7. *Business Strategy & Entrepreneurship* (Business, Free)
8. *Digital Marketing Essentials* (Business, Premium)
9. *Introduction to Deep Learning & NLP* (AI, Premium)
10. *Web Development with HTML & CSS* (Coding, Free)

### 3. Smart Student Dashboard
- **Dynamic Track Progress**: Live progress bars tracking completion percentages of active courses.
- **Core Progress Metrics**: Real-time counter cards showing enrolled tracks, completed lessons, quizzes taken, and certificates earned.
- **Verified Credentials**: Automatically issues a graduation certificate card with a unique serial ID (e.g. `AAC-PYTHON-101-2026`) when a course reaches 100% progress.

### 4. Interactive Course Player
- **Syllabus Navigation Outline**: Checked indicators highlighting completed lessons and bookmark outlines showing the active unit.
- **Interactive AI Tutor Chat**: A context-aware chatbot simulation. Enter prompts like *Summarize*, *Explain Code*, or *Key Concepts* to receive dynamic study guides.
- **Simulated AI Quizzes**: Multiple-choice assessment questions per lesson with automated grading, instant performance scores, and detailed text explanations for correct answers.

### 5. Secure Checkout Simulation
- Integrated simulated checkout system that unlocks premium courses instantly across the website upon virtual membership upgrade.
- **State Reset**: A footer utility to flush browser `localStorage` clean and restore default platform stats for fresh presentations.

---

## 🛠️ Technology Stack
- **Structure**: Semantic HTML5
- **Styling**: Modern Vanilla CSS (CSS Custom Variables, Flexbox, CSS Grid, Glassmorphic overlays, vibrant gradients)
- **Logic**: Vanilla ES6 JavaScript (using browser `localStorage` for state management, client-side session handlers, and algorithmic recommendation scoring)
- **Icons**: FontAwesome v6.4.0 CDN

---

## 📂 Repository File Structure
```bash
├── index.html            # Main Landing / Homepage
├── courses.html          # Interactive Catalog with filters and search
├── subscription.html      # Pricing Plans and simulated payment gateway
├── dashboard.html        # Student Dashboard with AI recommender and certificates
├── course_detail.html    # Classroom layout with lesson player, AI tutor, and quizzes
├── css/
│   └── style.css         # Unified Premium styling framework
├── js/
│   ├── db.js             # 10-course database, chatbot responses, and scoring logic
│   ├── main.js           # LocalStorage initializer and header state syncer
│   └── course.js         # Player navigator, quiz grader, and tutor coordinator
└── README.md             # Documentation file

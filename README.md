# Haydrian's Portfolio Website

A modern, responsive portfolio website showcasing my coding projects and skills. Built with beautiful glassmorphism design and interactive games.

## Live Demo

Visit the live website: [Haydrian's Portfolio](https://codecubca.github.io/profile-website-hayhay192/)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Projects Showcase](#projects-showcase)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [License](#license)

## About

Hi! I'm Haydrian, a 13-year-old passionate developer at KLO school. This portfolio website showcases my journey in web development, featuring interactive games, AI projects, and modern web design techniques.

## Features

### Design & UI
- **Glassmorphism Design** - Modern frosted glass effect with backdrop blur
- **Gradient Backgrounds** - Beautiful purple gradient themes throughout
- **Responsive Layout** - Fully mobile-friendly and adaptive design
- **Smooth Animations** - Fade-in, slide-up, and hover effects
- **Interactive Elements** - Hover states and transform effects

### Pages
1. **Home (`index.html`)**
   - Welcome section with personal info
   - About Me section with age, school, and bio
   - Embedded Mines Game for interactive experience
   - Navigation to Projects and About pages

2. **Projects (`projects.html`)**
   - Grid layout showcasing all projects
   - Project cards with icons, descriptions, and tech tags
   - Two featured AI projects with detailed layouts
   - Links to live demos and GitHub repositories

3. **About (`about.html`)**
   - Who I Am section
   - Skills showcase (Frontend, Backend, Tools)
   - My Journey narrative
   - Interests & Hobbies tags

## Projects Showcase

### 1. 3D Wave Shooter
**Description:** An immersive 3D survival shooter game with wave-based gameplay, realistic 3D graphics, and increasing difficulty.

**Features:**
- Full 3D graphics using Three.js
- Wave-based enemy spawning system
- Health and score tracking
- Game over screen with stats
- Crosshair cursor and shooting mechanics

**Technologies:**
- Three.js (3D graphics library)
- WebGL
- JavaScript
- HTML5 Canvas

**File:** `shooting-game.html`

---

### 2. Clash Royale Strategy Game
**Description:** A comprehensive tower defense strategy game with deck building, AI opponents, and real-time combat.

**Features:**
- 12 unique cards (troops, spells, buildings)
- Elixir management system
- AI opponent with strategic card selection
- Tower health and crown system
- Authentic Clash Royale mechanics
- Card deck customization
- Real-time battle timer

**Technologies:**
- HTML5 Canvas
- JavaScript
- Game AI algorithms
- Custom fonts (Fredoka One)

**Files:**
- `clash-royale-game.html` - Main game
- `clash-royale-tests.html` - Test suite
- `clash-royale-fixes-validation.html` - Validation tests
- `clash-royale-improvements.js` - Game enhancements
- `clash_royale_test_suite.js` - Automated tests

---

### 3. Mines Gambling Game
**Description:** A thrilling gambling game with a 5x5 grid where players bet money, avoid bombs, and cash out winnings.

**Features:**
- 5x5 grid with random mine placement
- Adjustable mine count (1-10 mines)
- Bet system with balance tracking
- Dynamic multipliers based on mine count
- Potential winnings calculator
- Cash out system
- Auto-reset on bankruptcy

**Technologies:**
- JavaScript
- HTML5
- CSS3
- Game logic algorithms

**Files:**
- `mines-game.html` - Standalone game page
- `index.html` - Embedded version on homepage
- `mines-game-tests.html` - Test suite

---

### 4. Study Buddy AI Assistant
**Description:** An intelligent AI-powered chatbot built with Streamlit and Groq API for student learning support.

**Features:**
- Real-time AI conversation
- Context-aware responses
- Cloud deployment with CI/CD
- Perfect for homework help and explanations
- Multi-subject support

**Technologies:**
- Python
- Streamlit
- Groq API
- Git
- Streamlit Cloud

**Links:**
- [Live Demo](https://ai-chatbox-haydrian-codecub.streamlit.app)
- [GitHub Repository](https://github.com/CodeCubCA/ai-chatbox-hayhay192)

---

### 5. AI Assistant (Featured Project)
**Description:** An intelligent conversational AI assistant powered by advanced language models with real-time responses and context awareness.

**Features:**
- Real-time conversation processing
- Context-aware AI responses
- Modern API integration
- Natural language processing

**Technologies:**
- Python
- JavaScript
- Groq API
- Streamlit
- Git
- Streamlit Cloud

**Links:**
- [Live Demo](https://hayhay192)
- [GitHub Repository](https://github.com/CodeCubCA/ai-chatbox-hayhay192)

---

### 6. Portfolio Website
**Description:** This very website! A modern, responsive portfolio with beautiful glassmorphism design.

**Technologies:**
- HTML5
- CSS3
- Responsive Design
- Glassmorphism effects

## Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Styling, animations, and glassmorphism effects
- **JavaScript (ES6+)** - Interactive functionality and game logic
- **Three.js** - 3D graphics rendering
- **WebGL** - Hardware-accelerated graphics

### Design Patterns
- **Glassmorphism** - Frosted glass UI elements
- **Gradient Backgrounds** - Purple-themed color schemes
- **Responsive Grid Layouts** - Mobile-first design
- **Flexbox & CSS Grid** - Modern layout techniques

### Game Development
- **Canvas API** - 2D game rendering
- **Object-Oriented Programming** - Game classes and state management
- **Event Handling** - Mouse, keyboard, and touch events
- **Animation Loops** - requestAnimationFrame for smooth gameplay

### AI & Backend (External Projects)
- **Python** - Backend development
- **Streamlit** - Web app framework
- **Groq API** - AI language model integration
- **Git** - Version control
- **Streamlit Cloud** - Deployment platform

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Internet connection (for CDN resources)

### Installation

1. Clone the repository
```bash
git clone https://github.com/CodeCubCA/profile-website-hayhay192.git
```

2. Navigate to the project directory
```bash
cd profile-website-hayhay192
```

3. Open the website
```bash
# Simply open index.html in your browser
# Or use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

### Usage

- **Home Page:** View my introduction and play the embedded Mines Game
- **Projects Page:** Explore all my projects with descriptions and links
- **About Page:** Learn more about my skills and journey
- **Games:** Click on game projects to play them directly in your browser

## File Structure

```
profile-website-hayhay192/
├── index.html                              # Homepage with intro and mines game
├── projects.html                           # Projects showcase page
├── about.html                              # About me page
├── shooting-game.html                      # 3D Wave Shooter game
├── clash-royale-game.html                  # Clash Royale strategy game
├── mines-game.html                         # Standalone mines game
├── clash-royale-tests.html                 # Clash Royale test suite
├── clash-royale-fixes-validation.html      # Validation tests
├── mines-game-tests.html                   # Mines game tests
├── clash-royale-improvements.js            # Game improvements
├── clash_royale_test_suite.js             # Automated test suite
├── automated-test-runner.js                # Test automation
├── bug-fix-recommendations.md              # Bug fix documentation
├── manual-testing-checklist.md             # Testing checklist
├── clash-royale-implementation-report.md   # Implementation notes
├── clash-royale-fixes-summary.md           # Fixes summary
├── .gitignore                              # Git ignore rules
├── README.md                               # This file
└── .claude/                                # Claude Code agents
    └── agents/
        ├── full-stack-developer.md
        └── test-generator.md
```

## Key Features by File

### index.html
- Welcome section with glassmorphism container
- About Me section with info cards
- Embedded interactive Mines Game
- Smooth animations and transitions
- Responsive navigation

### projects.html
- Projects grid with 4 standard project cards
- Study Buddy AI Assistant featured section
- AI Assistant featured project section
- Color-coded tech stack badges
- GitHub and live demo buttons
- Hover effects and animations

### about.html
- Who I Am section with personal motto
- Skills grid (Frontend, Backend, Tools)
- My Journey narrative
- Interests & Hobbies with tags
- Responsive design with stacked sections

### Game Files
- **shooting-game.html:** Full 3D shooter with Three.js
- **clash-royale-game.html:** Tower defense strategy game
- **mines-game.html:** Gambling-style puzzle game

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Efficient CSS animations using transforms
- Optimized game loops with requestAnimationFrame
- Responsive images and layouts
- Minimal external dependencies
- CDN-hosted libraries for faster loading

## Future Enhancements

- [ ] Add more interactive projects
- [ ] Implement dark/light theme toggle
- [ ] Add contact form
- [ ] Create blog section
- [ ] Add more AI-powered projects
- [ ] Implement project filtering
- [ ] Add loading animations
- [ ] Create custom cursor effects

## Contributing

This is a personal portfolio project, but feedback and suggestions are always welcome! Feel free to open an issue or reach out.

## Author

**Haydrian**
- Age: 13
- School: KLO
- GitHub: [@CodeCubCA](https://github.com/CodeCubCA)

## Acknowledgments

- Three.js for 3D graphics capabilities
- Google Fonts for typography
- Inspiration from modern web design trends
- Claude Code for development assistance

## License

This project is open source and available under the MIT License.

---

Made with passion by Haydrian | 2025

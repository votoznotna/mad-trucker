# Mad Trucker 🚛

A fun and interactive truck racing betting game built with AngularJS. Place your bets on colorful trucks and watch them race to the finish line!

## 🎮 Live Demo

**Play the game now:** https://mad-trucker.vercel.app/#/

## 📖 Description

Mad Trucker is a web-based racing game where players can:

- Set up their player profile with custom name and starting funds
- Choose the number of trucks participating in the race (2-7 trucks)
- Place bets on different colored trucks before each race
- Watch animated trucks race across the screen
- Win or lose money based on the race results
- Manage their betting funds throughout multiple races

The game features a clean, responsive UI built with Bootstrap and includes smooth animations for the racing trucks. It's a perfect example of an interactive web application using AngularJS with routing, custom directives, and real-time game mechanics.

## 🛠️ Technology Stack

- **Frontend:** AngularJS 1.3.20, Bootstrap 3.3.7, jQuery
- **Routing:** Angular UI Router
- **Styling:** Custom CSS with Bootstrap components
- **Backend:** Node.js with Express-like server setup
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v12 or higher recommended)
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/votoznotna/mad-trucker.git
   cd mad-trucker
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

### Alternative: Local Development (No Server)

If you prefer to run without a web server:

1. **Simply open `index.html`** in any modern web browser
2. **If you encounter security restrictions** (especially on Windows), use a local server:

   ```bash
   # Install http-server globally
   npm install -g http-server

   # Run from project root
   http-server -p 8088

   # Navigate to http://localhost:8088
   ```

## 🎯 How to Play

1. **Setup:** Enter your player name and starting funds
2. **Configure:** Choose how many trucks will race (2-7)
3. **Bet:** Place bets on your favorite colored trucks
4. **Race:** Click "Start Race" and watch the trucks compete
5. **Win/Lose:** Collect winnings or lose your bets based on results
6. **Repeat:** Continue betting and racing until you run out of funds

## 📁 Project Structure

```
mad-trucker/
├── components/          # Custom AngularJS directives
│   ├── truck.js        # Truck racing component
│   ├── player-bets.js  # Betting interface
│   └── numeric-mask.js # Input formatting
├── controllers/         # Application controllers
│   ├── main.js         # Main game controller
│   └── setup.js        # Game setup controller
├── services/           # Business logic services
│   ├── constants.js    # Game constants
│   ├── settings.js     # User settings
│   └── run.js          # Race mechanics
├── views/              # HTML templates
│   ├── pages/          # Main page templates
│   └── components/     # Component templates
├── css/                # Stylesheets
├── images/             # Game assets
└── index.html          # Main application file
```

## 🎨 Features

- **Responsive Design:** Works on desktop and mobile devices
- **Custom Animations:** Smooth truck racing animations
- **Betting System:** Place and manage bets on multiple trucks
- **Fund Management:** Track your winnings and losses
- **Customizable Setup:** Choose player name, funds, and truck count
- **Real-time Updates:** Dynamic UI updates during races

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Anton Zotov** - [GitHub Profile](https://github.com/votoznotna)

---

_Morning Exercise • 2017_

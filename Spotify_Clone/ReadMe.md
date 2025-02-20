# Spotify Clone - README

## Introduction
This project is a simple Spotify clone built using **HTML, Tailwind CSS, and JavaScript**. It features a music player interface where users can play, pause, and switch between songs. The project also demonstrates how to integrate FontAwesome icons and Tailwind CSS for styling.

## Features
- Responsive UI built with **Tailwind CSS**
- Play, Pause, and Next/Previous controls
- Custom audio player functionality
- Dynamic song list rendering
- Song progress tracking with a seekbar

## Technologies Used
- **HTML** - Structuring the web page
- **Tailwind CSS** - Styling and layout
- **JavaScript** - Audio functionality and event handling
- **FontAwesome** - Icons for player controls

## Installation & Setup
Follow these steps to set up the project on your local system:

### 1. Clone the Repository
```sh
 git clone https://github.com/your-username/spotify-clone.git
 cd spotify-clone
```

### 2. Install Tailwind CSS
Tailwind CSS is used for styling. You can install it via **CDN** or **NPM**:

#### Using CDN (Recommended for Beginners)
The following Tailwind CSS link is already included in the `<head>` of `index.html`:
```html
<script src="https://cdn.tailwindcss.com"></script>
```

#### Using NPM (For Advanced Users)
If you want to install Tailwind via npm, run:
```sh
npm install -D tailwindcss
npx tailwindcss init
```
Then, configure Tailwind to process your CSS:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto Condensed', 'sans-serif']
      }
    },
  },
  plugins: [],
}
```

### 3. Running the Project
Simply open `index.html` in your browser:
```sh
 open index.html
```
Or use **Live Server** (if you have VSCode):
```sh
npm install -g live-server
live-server
```

## File Structure
```
spotify-clone/
├── index.html        # Main HTML file
├── style.css         # Custom CSS file (if needed)
├── script.js         # JavaScript functionality
├── tailwind.config.js# Tailwind Configuration
├── songs/            # Folder containing MP3 files
├── cover/            # Folder containing song cover images
```

## JavaScript Functionality
### 1. Playing & Pausing Songs
```js
masterplay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime <= 0){
    audioElement.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
```

### 2. Updating Seekbar
```js
audioElement.addEventListener('timeUpdate', ()=>{
  let progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
  progressbar.value = progress;
});
```

### 3. Changing Songs
```js
document.getElementById('next').addEventListener('click', ()=>{
  songIndex = (songIndex >= 6) ? 0 : songIndex + 1;
  audioElement.src = `songs/${songIndex+1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove('fa-circle-play');
  masterplay.classList.add('fa-circle-pause');
});
```

## Conclusion
This project demonstrates a simple yet functional music player with a clean UI. It utilizes JavaScript for dynamic interactions and Tailwind CSS for styling. Future improvements could include:
- Adding a playlist feature
- Implementing user authentication
- Fetching songs dynamically from a server

**Enjoy building your Spotify Clone! 🎵**



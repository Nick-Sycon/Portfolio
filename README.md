# Animated Nicky Sycon-style Video Editor Portfolio

Open `index.html` in a browser.

## Animations included
- Intro page loader
- Hero text reveal
- Floating gradient/orb motion
- Scroll indicator
- Infinite marquee
- Scroll-triggered reveals
- Mouse parallax
- Magnetic buttons
- Project-card 3D tilt
- Project hover shine/zoom
- Hover video preview
- Animated stats count-up
- Process-row hover motion
- Reduced-motion accessibility support

## Add your own media

Create an `assets` folder beside `index.html`.

Example:
assets/
  project-01.mp4
  project-02.jpg
  project-03.mp4
  project-04.jpg

In `index.html`, find comments beginning with `PROJECT PLACEHOLDER`.

For a video:
<video src="assets/project-01.mp4" muted loop playsinline></video>

For an image:
<img src="assets/project-02.jpg" alt="Project 02">

The hover-video JavaScript automatically detects videos inside `.project-media`.

You can also use YouTube/Vimeo embeds, but those will need an iframe instead of the automatic local-video hover behavior.

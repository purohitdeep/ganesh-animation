# Interactive Ganesh Chaturthi Animation

This project creates an interactive animation for Ganesh Chaturthi using p5.js. It features an image of Lord Ganesha and allows users to trigger animations of offerings like modak, incense stick, diya, and flowers.

## Features

* **Animated Offerings:** Click buttons to activate animations for various offerings.
* **Snowflake Effect:** Offerings appear as animated snowflakes falling towards Lord Ganesha.
* **Base Items:** Some offerings (like diya) have a fixed position and animate towards their final position when activated.
* **Customizable:** Easily add or modify offerings and their animations by editing the `config.json` file.

## Getting Started

1. **Prerequisites:** HTTP server should be started
3. **Open `index.html`:** Open the `index.html` file in browser with server.
4. **Interact with the Animation:** Click the buttons to activate the animations for different offerings.

## Improvements

* More Interactive Animations: Instead of just appearing and moving linearly, the offerings could have more engaging animations. For example:
* Diya flame: Flicker realistically using Perlin noise or similar techniques.
* Incense stick: Smoke could rise in a curvy, dissipating pattern.
* Modak: Could gently rotate or bounce slightly.
* Flowers: Could fall with a slight sway or spin.

* Sound Effects:
Add sound effects corresponding to each animation to enhance the experience. For example, a gentle bell sound when flowers are offered, or a crackling sound for the incense stick.

* Music/Chanting:
Include an option to play background music or chants related to Lord Ganesh, creating a more immersive atmosphere.

* User Interaction:
Allow users to interact more directly with the offerings, like dragging and placing them at different spots on the image.
Implement a feature to let users write and "offer" their prayers/wishes in a text box.

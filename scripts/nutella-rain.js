// just a little script to make it rain nutella
//document.addEventListener("DOMContentLoaded", 
function startRain() {
  const nutellas = []; // array to track the nutella images we create
  const nutellaCount = 33; // how many nutellas we want to spawn
  const nutellaSpeed = 2; // how many pixels the nutella falls each frame

  // loop from zero to nutellaCount - 1
  // to create nutellaCount nutellas
  for (let i = 0; i < nutellaCount; i++) {
    // create an img element
    // with the nutella sprite from images/nutella.gif as its src
    const nutellaSprite = document.createElement("img");
    nutellaSprite.src = "images/nutella.gif";

    // css styles to make it a small thing floating around on top of everything else
    nutellaSprite.style.width = "32px";
    nutellaSprite.style.position = "fixed";
    nutellaSprite.style.zIndex = "33";

    // starting it at a random position on the screen
    nutellaSprite.style.top =
      Math.floor(Math.random() * window.innerHeight) + "px";
    nutellaSprite.style.left =
      Math.floor(Math.random() * window.innerWidth) + "px";

    // add the sprite to our array
    nutellas.push(nutellaSprite);

    // add the sprite to the body of the page
    document.querySelector("body").appendChild(nutellaSprite);
  }

  // a function to animate the nutellas
  function animate() {
    // iterate through each nutella to animate them
    nutellas.forEach(function (nutellaSprite) {
      // parse the yCoordinate of the sprite from it's style.top
      const yCoordinate = parseInt(nutellaSprite.style.top, 10);

      if (yCoordinate >= window.innerHeight) {
        // move the sprite back to a random position when it falls off the screen
        nutellaSprite.style.top =
          Math.floor(Math.random() * window.innerHeight) + "px";
        nutellaSprite.style.left =
          Math.floor(Math.random() * window.innerWidth) + "px";
      } else {
        // move the sprite down the screen nutellaSpeed pixels
        nutellaSprite.style.top = yCoordinate + nutellaSpeed + "px";
      }
    });
    requestAnimationFrame(animate);
  }

  // animate the nutella at the framerate of the browser (usually 60 fps)
  requestAnimationFrame(animate);
};

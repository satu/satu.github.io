package;

import haxe.Timer;
import js.html.ImageElement;
import js.Browser.document;
import js.Browser.window;

import js.html.Event;

class NutellaRainEventListener {
    var nutellas = []; // array to track the nutella images we create
    var nutellaCount = 33; // how many nutellas we want to spawn
    var nutellaSpeed = 2; // how many pixels the nutella falls each frame

    public function new() {}

    public function handleEvent(event: Event) {
        // loop over nutellas with proper haxe loop
        for (i in 0...nutellaCount) {
            // create an img element
            // with the nutella sprite from images/nutella.gif as its src
            var nutellaSprite = document.createImageElement();
            nutellaSprite.src = "images/nutella.gif";
            
            // css styles to make it a small thing floating around on top of everything else
            var style = nutellaSprite.style;
            style.width = "32px";
            style.position = "fixed";
            style.zIndex = "33";

            initializeNutella(nutellaSprite);

            // add the sprite to our array
            nutellas.push(nutellaSprite);

            // add the sprite to the body of the page
            document.body.appendChild(nutellaSprite);
        }

        // Use timer to call animate at roughly 60 fps
        var timer = new Timer(16);
        timer.run = animate;
    }

    static function initializeNutella(nutellaSprite:ImageElement) {
        // starting it at a random position on the screen
        nutellaSprite.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
        nutellaSprite.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    }

    function animate() {
        // iterate through each nutella to animate them
        for (nutellaSprite in nutellas) {
            var yCoord = Std.parseInt(nutellaSprite.style.top);
            if (yCoord >= window.innerHeight) {
                initializeNutella(nutellaSprite);
            } else {
                nutellaSprite.style.top = yCoord + nutellaSpeed + "px";
            }
        }
    }
}

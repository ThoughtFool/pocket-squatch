let timerSpan = document.querySelector("#timer-span");
// timerSpan.innerHTML = gamespace.data[space_key.index].gameInstance.data.timer;

const animateFrame = function (num, gamespace, space_key) {

    
    let stop = false;
    let frameCount = 0;
    let shiftCount = 0;
    let isDaytime, hasQueen, isCooldown, isSummoned, biome;
    // let $results = $("#results");
    let fps, fpsInterval, startTime, now, then, elapsed;
    
    
    startAnimating(num);

    function startAnimating(fps) {
        // converts requested fps to seconds:
        fpsInterval = 1000 / fps;

        then = Date.now();
        startTime = then;
        console.info(startTime);

        // get current time
        animate();
    };

    function animate() {

        // stop
        if (stop) {
            return;
        };

        // request another frame:
        requestAnimationFrame(animate);

        // calc elapsed time since last loop:
        now = Date.now();
        elapsed = now - then;

        if (shiftCount % 1000 == 0) {
                        
            if (shiftCount >= 10000) {
                shiftCount = 0;
            };
        };
        
        // if enough time has elapsed, draw the next frame:
        if (elapsed > fpsInterval) {
            shiftCount++;

            // Get ready for next frame by setting then=now, but...
            // Also, adjust for fpsInterval not being multiple of 16.67
            then = now - (elapsed % fpsInterval);

            // draw stuff here:
            let world = gamespace.data[space_key.index].gameInstance.data.data;
            gamespace.data[space_key.index].gameInstance.player.sprite.physics.movePos(world);
            // gamespace.data[space_key.index].gameInstance.player.sprite.physics.animateMove(elem);

            // TESTING...Report #seconds since start and achieved fps.
            var sinceStart = now - startTime;
            var currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100;
            // $results.text("Elapsed time= " + Math.round(sinceStart / 1000 * 100) / 100 + " secs @ " + currentFps + " fps.");

        };
    };
};

module.exports = animateFrame;
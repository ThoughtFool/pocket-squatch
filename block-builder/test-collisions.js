elem_array.forEach(elemToCheck => {
    elem_coords = elemToCheck.getBoundingClientRect();
    if (
        this.left < elem_coords.right &&
        this.left + this.width > elem_coords.left &&
        this.top < elem_coords.bottom &&
        this.top + this.height > elem_coords.top
    ) {
        // Testing ONLY:
        let spriteHolderElem = document.getElementById("sprite-holder");
        spriteHolderElem.classList.add("collision");
        setTimeout(() => {
            spriteHolderElem.classList.remove("collision");
        }, 50);
        result = true;

        let left_Percent = this.left + (this.width * .2); // minumum dist: between left and left_Percent;
        let right_Percent = this.left + (this.width * .8); // minumum dist: between right_Percent and left + width (right);
        let median = this.left + (this.width / 2);

        if (this.top + this.height > elem_coords.top && this.top + (this.height * .75) < elem_coords.top &&
            this.left + (this.width * .80) > elem_coords.left && this.left + (this.width * .20) < elem_coords.right) {
            this.velocity = 0;
            this.onGround = true;
            return this.top = elem_coords.top - this.height; // lands on top of obstacle

        } else if (this.top < elem_coords.bottom && this.top + (this.height * .20) > elem_coords.bottom &&
            this.left + (this.width * .80) > elem_coords.left && this.left + (this.width * .20) < elem_coords.right) {
            this.velocity = 0;
            return this.top = elem_coords.bottom; // lands under obstacle

        } else if (this.left + this.width > elem_coords.left && this.left + (this.width / 2) < elem_coords.left &&
            this.top + this.height > elem_coords.top && this.top + (this.height / 2) < elem_coords.top) { // bottom-right side collison
            // console.info(`bottom-right side collision:`);
            return this.left = elem_coords.left - this.width - 1; // lands next to obstacle (left-side)

        } else if (this.left < elem_coords.right && this.left + (this.width / 2) > elem_coords.right &&
            this.top + this.height > elem_coords.top && this.top + (this.height / 2) < elem_coords.top) { // bottom-left side collison
            // console.info(`bottom-left side collision:`);
            return this.left = elem_coords.right + 1; // lands next to obstacle (right-side)

        } else if (this.left < elem_coords.right && this.left + (this.width * .80) > elem_coords.right &&
            this.top < elem_coords.bottom && this.top + (this.height * .80) > elem_coords.bottom) { // top-left side collison
            // console.info(`top-left side collision: this.left:`);
            return this.left = elem_coords.right + 1; // lands next to obstacle (right-side)

        } else if (this.left + this.width > elem_coords.left && this.left + (this.width * .80) < elem_coords.left &&
            this.top < elem_coords.bottom && this.top + (this.height * .80) > elem_coords.bottom) { // top-right side collison
            // console.info(`top-right side collision:`);
            return this.left = elem_coords.left - this.width - 1; // lands next to obstacle (left-side)

        } else {
            return;
        };

    };
});
animateCount: function (
    // preMove_pos, // 0
    // dist_tot, // 50
    // step_tot, // 20
    // step_counter, // 0
    // step_dist, // 2.5 TODO: default = null?
    // current_new_pos // 0 + 2.5 + "px" TODO: default = null?
) {
    console.log("this[this.keyPressed].step_counter");
    console.log(this[this.keyPressed].step_counter);
    let step_counter = this[this.keyPressed].step_counter;

    if (step_counter <= 0) {
        let preMove_pos = this[this.keyPressed].preMove_pos;
    };
    let postMove_pos = preMove_pos + dist_tot;
    let preMove_pos = this[this.keyPressed].preMove_pos,
        dist_tot,
        step_tot;
    // console.log(postMove_pos);

    let delay = 20;

    let step_dist = dist_tot / step_tot;

    if (step_counter <= step_tot) {
        current_new_pos = preMove_pos + step_dist + "px";
        step_counter += 1;
        setTimeout(this.animateCountLoop, delay);
    } else {
        step_counter = 0;
        return;
    };
},
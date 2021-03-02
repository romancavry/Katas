// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

function bouncingBall(h,  bounce,  window) {
    if ((h <= 0) || (bounce < 0) || (bounce >= 1) || (window >= h)) { return -1 }
    
    let result = 1;

    for (let i = window; i < (h * bounce);) {
        result += 2;
        h *= bounce;
    }

    return result;

    // 1 - когда мяч летел
    // 2 - отпрыгнул - 3 * 0.66 = 1.98 -> мяч выше окна, значит мать видела мяч 2 раза
    // 3 - 1.98 -> мяч выше окна, значит мать видела мяч 2 раза
}

// Сколько раз мама увидит мяч у своего окна (включая случаи, когда он подпригивает и отпрыгивает)?

console.log(bouncingBall(3, 0.66, 1.5)); // 3
// h - высота этажа, с которой кинули мяч
// bounce - 0.66 от высоты, с которой кинули мяч
// window - на этом расстоянии окно, с которого мать смотрит на мяч
console.log(bouncingBall(3, 1, 1.5)); // -1


// The ball falls down,         first time the mother sees it
// (First rebound)
// The ball goes up,            second time the mother sees it
// (The ball reaches a local maximum)
// The ball falls down again,   third and last time the mother sees it because it can't reach/pass the window anymore
// (Second rebound)
let l, c = 0, mvpx = 480, cirate = 25;
let t1 = setInterval(() => {
    c++;
    l = c * 10;
    document.getElementById("ia").style.backgroundPosition = "-" + l.toString(10) + "px -" + l.toString(10) + "px";
    if (c == mvpx) {
        c = 0;
    }
}, cirate)
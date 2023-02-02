if (
    document.getElementById(
        "timeremaining_e-e5e2d2b0-2509-412b-a3d9-7c1d92df2120"
    )
) {
    document
        .getElementById("timeremaining_e-e5e2d2b0-2509-412b-a3d9-7c1d92df2120")
        .remove();
} else {
    const timeRemainingClock = document.createElement("div");
    timeRemainingClock.id =
        "timeremaining_e-e5e2d2b0-2509-412b-a3d9-7c1d92df2120";

    const timeRemainingClockP = document.createElement("p");
    timeRemainingClockP.innerText = "00:00";
    timeRemainingClock.appendChild(timeRemainingClockP);

    document.body.appendChild(timeRemainingClock);

    function currentTime() {
        let date = new Date();
        let mm = date.getMinutes();
        let ss = 59 - date.getSeconds();

        let top = `${((window.innerHeight - 46) * mm) / 59}px`;
        timeRemainingClock.style.top = top;
        console.log(window.innerHeight);
        console.log(top);

        mm = 59 - mm;

        mm = mm < 10 ? "0" + mm : mm;
        ss = ss < 10 ? "0" + ss : ss;

        let time = mm + ":" + ss + " ";
        timeRemainingClockP.innerHTML = time;
    }

    currentTime();
    setInterval(currentTime, 1000);
}

window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.body.scrollTop > 510 || document.documentElement.scrollTop > 510) {
        document.getElementById("stiki").classList.add("animate__animated", "animate__fadeIn",  "animate__delay-0.7s");
        document.getElementById("stiki").classList.add("sticky-top");
    } else {
        document.getElementById("stiki").classList.remove("sticky-top");
        document.getElementById("stiki").classList.remove("animate__animated", "animate__fadeIn", "animate__delay-0.7s");
    }
}
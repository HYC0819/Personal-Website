document.getElementById("citationButton").onclick = function() {
    if (document.querySelector(".citations").style.visibility == "hidden") {
        document.getElementById("citationButton").textContent = "Click To Hide Citations:"
        document.querySelector(".citations").style.visibility = "visible"
    } else {
        document.getElementById("citationButton").textContent = "Click To Show Citations:"
        document.querySelector(".citations").style.visibility = "hidden"
    }
}
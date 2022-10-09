AOS.init()
setTimeout(() => {
    document.getElementById("thirdLine").classList.add("show")
    document.getElementById("backend").classList.add("show")
}, 3000)
anime({
    delay: 2500,
    targets: "#frontEndGif",
    translateY: -screen.height,
    easing: 'easeInOutQuad',
})

anime({
    delay: 3500,
    targets: "#backEndGif",
    translateY: -screen.height,
    easing: 'easeInOutQuad',
    duration: 1000,
    complete: function(anim2) {
        anime({
            delay: 3000,
            targets: ".wiper",
            translateY: window.innerHeight,
            duration: 1000,
            easing: 'easeInOutQuad',
            complete: function(anim3) {
                document.body.style.backgroundColor = "rgb(0, 95, 133)"
                readTextFile("thirdScene.html", function(text){
                    document.body.innerHTML = text
                });
                var script = document.createElement('script');
                script.src = "js/thirdScene.js";
                document.body.appendChild(script)
            }
        })
    }
})
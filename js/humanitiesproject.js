var coords = [25.04,121.535]

var map = L.map('map').setView(coords, 14);

L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

var negativeCircle = L.circle([25.024943, 121.543451], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(map);

var positiveCircle = L.circle([25.041, 121.571116], {
    color: 'lime',
    fillColor: 'green',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(map);

positiveCircle.bindPopup("<p><p style='color: lime;' >Opportunities</p> of Urban Growth</p>", {
    minWidth : 350
});

negativeCircle.bindPopup("<p><p style='color: red;' >Challenges</p> of Urban Growth</p>", {
    minWidth : 320
});

positiveCircle.on('mouseover',function(ev) {
    ev.target.openPopup();
});

negativeCircle.on('mouseover',function(ev) {
    ev.target.openPopup();
});

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

var animation = anime({
    targets: '.wiper',
    translateX: -window.innerWidth,
    translateY: -window.innerHeight,
    delay: function (el, i) { return i * 100; },
    duration: 500,
    direction: 'alternate',
    loop: false,
    autoplay: false,
    easing: 'easeInOutQuad',
    complete: function(anim) {
        document.body.style.background = "rgb(56,72,63)"
        setTimeout(() => {
            document.location.href = "challenge.html"
        }, 500)
    }
});

negativeCircle.on("click", function(ev) {
    animation.play();
})
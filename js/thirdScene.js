AOS.init()

function createRepoCard(name) {
    fetch("https://api.github.com/repos/"+name)
        .then((response) => response.json())
        .then((data) => {
            var repoCard = document.createElement("div")
            repoCard.classList.add("repo-card")
            var repoCardTitle = document.createElement("div")
            repoCardTitle.classList.add("title")
            var repoIcon = document.createElement("img")
            repoIcon.src = "media/repo-icon.png"
            var repoCardName = document.createElement("a")
            repoCardName.textContent = data.name
            var repoDescription = document.createElement("p")
            repoDescription.textContent = data.description
            repoCardTitle.appendChild(repoIcon)
            repoCardTitle.appendChild(repoCardName)
            repoCard.appendChild(repoCardTitle)
            repoCard.appendChild(repoDescription)
            document.body.appendChild(repoCard)

            repoCard.onclick = function(event) {
                window.open("https://github.com/"+name, '_blank', '')
            }
        })
}

createRepoCard("CraftYun83/ShooterBot")
createRepoCard("CraftYun83/Slingshot")
createRepoCard("CraftYun83/Lorainne")
createRepoCard("CraftYun83/JWST")
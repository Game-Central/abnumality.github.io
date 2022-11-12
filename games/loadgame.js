function loadGame(element) {
    const wrapper = document.getElementById("wrapper")
    wrapper.style.display = "none";

    //var gamescreen = document.createElement(iframe)
    var gamepath = (("https://").concat(window.location.hostname).concat("/games/games/").concat(element.id))
    var gamescreen = document.getElementById("gameScreen")
    var iframe = document.createElement("iframe")
    gamescreen.style.display = "block";
    iframe.setAttribute("id", "gameFrame")
    iframe.src = gamepath
    gamescreen.appendChild(iframe)

    var cloakButton = document.createElement("div")
    cloakButton.setAttribute("id", "cloakbutton")
    cloakButton.textContent = "Open in AB Cloak/Fullscreen"
    var winopened = false
    cloakButton.onclick = (function() {
        if (winopened == false) {
            winopened = true
            var win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            win.document.body.style.margin = '0';
            var frame2 = iframe.cloneNode()
            frame2.setAttribute("id", "frame2")
            frame2.src = "replace.html"
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            win.document.body.appendChild(iframe);
            gamescreen.appendChild(frame2)
            win.document.body.appendChild(iframe);
            win.onbeforeunload = function() {
                gamescreen.removeChild(frame2)
                gamescreen.appendChild(iframe)
                winopened = false
                cloakButton.textContent = "Open in AB Cloak/Fullscreen"
                console.log(winopened)
                iframe.style.width = "60%";
                iframe.style.height = "65%";
                iframe.style.marginTop = "5%";
            }
        } else {
            cloakButton.textContent = "Close the current window!"
        }
    })
    gamescreen.appendChild(cloakButton)
    
    var closeGame = document.createElement("div")
    closeGame.setAttribute("id", "closeGame")
    closeGame.textContent = "Close Game"
    closeGame.onclick = function() {
        cloakButton.remove()
        iframe.remove()
        gamescreen.style.display = 'none'
        wrapper.style.display = 'grid'
        closeGame.remove()
    }
    gamescreen.appendChild(closeGame)
}
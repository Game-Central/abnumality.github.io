let elems = document.getElementsByClassName("button")
Array.prototype.forEach.call(elems, function(el) {
    el.onclick = function() {
        el.onclick = loadGame(this)
    }
});
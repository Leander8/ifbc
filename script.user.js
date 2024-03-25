// ==UserScript==
// @name         Is registration open
// @namespace    http://tampermonkey.net/
// @version      2024-03-25
// @description  try to take over the world!
// @author       You
// @match        https://*.events.the-west.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=the-west.net
// @updateURL https://leander8.github.io/ifbc/script.user.js
// @downloadURL https://leander8.github.io/ifbc/script.user.js
// @grant        none
// ==/UserScript==

(async function() {
    if(!document.URL.includes("www"))
        return;
    await new Promise(s => setTimeout(s, 30000))
    if(Worlds.data[1].register){
        while(true){
            (new Audio('https://www.myinstants.com/media/sounds/lets-go_1.mp3')).play()
            await new Promise(s => setTimeout(s, 5000))
        }
        return;
    }
    location.reload();
})();

(async function() {
    await new Promise(s => setTimeout(s, 10000))
    if(document.URL.includes("www"))
        return;

    let general = (function(){
        for(key in Chat.MyClient.rooms)
            if(key.includes("general"))
                return key
    })()
    Chat.sendMessage("/join deServer", Chat.Resource.Manager.getRoom(general))

})();

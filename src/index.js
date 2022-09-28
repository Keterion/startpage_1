function background(){

    var list = [
        "cliff_water.png",
        "frozen_birdeye_mountain.png",
        "grass_mountainView_landscape.png",
        "laboratory.png",
        "nature_waterfall.png",
        "violet_mountain.png"];
    let chosenOne = list[Math.floor(Math.random()*list.length)];
    document.documentElement.style.setProperty('--image', 'url(assets/backgrounds/' + chosenOne + ')');
}
function greeting(){
    var greetings = [
        "Bonjour",
        "¿Qué tal?",
        "Privet",
        "Nǐ hǎo",
        "Ciao",
        "Konnichiwa",
        "Hallo",
        "Olá",
        "Anyoung"
    ];
    let chosenOne = greetings[Math.floor(Math.random()*greetings.length)];
    msg = "";
    document.getElementById("greeting").innerHTML = chosenOne;
}

function hidePage(page){
    document.getElementById(page).style.setProperty("--display", "none");
}
function showPage(page){
    document.getElementById(page).style.setProperty("--display", "block");
}
function goPage(page) {
    hidePage(currPage);
    showPage(page);
    document.getElementById('switch-display').innerHTML = page;
    currPage = page;
}

function colorScheme(){
    var schemes = [
        "cc241d",
        "98971a",
        "d79927",
        "458588",
        "b16286",
        "689d6a",
        "fe8019"];
    let chosenOne = schemes[Math.floor(Math.random()*schemes.length)];
    document.documentElement.style.setProperty('--accent', '#' + chosenOne);
    console.log(chosenOne);
}

function showLayoutBorders(){
    document.documentElement.style.setProperty('--luBorder', '1px dashed black')
}

function init(){
    pages = [1, 2];
    currPage = 1;
    background();
    colorScheme();
    showPage(1);
    document.getElementById('switch-display').innerHTML = currPage;

    document.getElementById('loadFocus').focus();

    
    greeting();
}
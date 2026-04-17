/*-------------------------Constants-------------------------*/
/*Music*/
const playPauseButton = document.getElementById('play-pause');
/*Overlays*/
const welcomeOverlay = document.querySelector('.welcome-overlay');
const cardOverlay = document.querySelector('.card-overlay');
const notebookOverlay = document.querySelector('.notebook-overlay');
/*Card*/
const title = document.getElementById('card-title');
const description = document.getElementById('card-description');
const image = document.getElementById('card-image');
/*notebook*/
const notebook = document.getElementById('notebook');
const notebookContent = document.getElementById('notebookContent');


/*-------------------------Utility Functions-------------------------*/
function getRandomIndex(list) {
    return list[Math.floor(Math.random() * list.length)];
}


/*--------------------------Datas--------------------------*/

const roomItemContent = {
    poodle: {
        title: "Beibei",
        image: "images/poodle.png",
        description: "The most spoiled member of the family. Loves to sneak snacks and steal slippers."
    },
    guitar: {
        title: "Guitar",
        image: "images/guitar.png",
        description: "Accompanied Jessica on her musical journey, and participated in many performances and competitions."
    },
    me: {
        title: "Jessica",
        image: "images/me.png",
        description: "Hey! Welcome to my Pixel universe. I'm Jessica. Feel free to explore, but be careful not to make a mess—oh wait, it’s already a mess anyway! 🙂"
    }
};

const funfactsList = [
    "I Love pop music, and I was the lead singer of my pop band called “694.” We performed at school events and local venues. Highlight of our career was when we won the local talent show and got to perform at the city festival.",
    "I have a secret talent for doing crocheting.",
    "I can speak three languages: English, Mandarin, and a little bit of Korean.",
    "My life goal is to travel around the world and try every cuisine out there.",
    "I wrote a song about I met a goodlooking guy at a bar, and the song won a local music competition.",
    "I have a collection of stickers that I've been collecting since I was a kid, and I still add to it whenever I find a cool one.",
    "My favorite cartoon is Phineas and Ferb, and I still watch it.",
    "My favorite movie is now Project Hail Mary. I LOVE science fiction.",
    "If I can do any job without worrying about money, I would be a dog groomer.",
    "I had a pet hamster named Bobo."
];

const musicList = [
    "assets/music/music1.mp3",
    "assets/music/music2.mp3",
    "assets/music/music3.mp3",
    "assets/music/music4.mp3",
    "assets/music/music5.mp3",
    "assets/music/music6.mp3"
];


/*--------------------------Music--------------------------*/
let currentMusic = null;

function playRandomMusic() {
    let randomMusicUrl = getRandomIndex(musicList);
    let music = new Audio(randomMusicUrl);

    if (currentMusic) {
        currentMusic.pause();
    }
    currentMusic = music;
    currentMusic.play();
    playPauseButton.textContent = 'Next Music';
}


/*--------------------------Functions for the cards--------------------------*/


function closeWelcomeCard() {    
    welcomeOverlay.style.display = 'none';
}


function openCard(itemname) {    
    
    
    cardOverlay.style.display = 'flex';

    let item = roomItemContent[itemname];

    if (item) {
        title.innerText = item.title;
        description.innerText = item.description;
        image.src = item.image;
        cardOverlay.style.display = 'flex';
    }
}

function closeCard() {
    cardOverlay.style.display = 'none';
}


/*--------------------------Functions for the notebook--------------------------*/



function getRandomFunfactToNotebook() {
    notebookContent.innerText = getRandomIndex(funfactsList);
}

function openNotebook() {  
    notebookOverlay.style.display = 'flex';    
    notebook.style.display = 'flex';
    getRandomFunfactToNotebook();
}


function closenotebook() {
    notebookOverlay.style.display = 'none';
}

function nextFunfact() {
    getRandomFunfactToNotebook();
}
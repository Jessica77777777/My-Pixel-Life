/*-------------------------Constants-------------------------*/
/*Music*/
const musicElement = document.getElementById('music');
const playPauseButton = document.getElementById('play-pause');
const music1 = "assets/1-02. The Star Festival.mp3"
/*Overlays*/
const welcomeOverlay = document.querySelector('.welcome-overlay');
const cardOverlay = document.querySelector('.card-overlay');
const notebookOverlay = document.querySelector('.notebook-overlay');
/*notebook*/
const notebook = document.getElementById('notebook');
const notebookContent = document.getElementById('notebookContent');

/*--------------------------Music--------------------------*/


function handleMusic() {
    if (musicElement.paused) {
        musicElement.play();
        playPauseButton.textContent = 'Pause';
    } else {
        musicElement.pause();
        playPauseButton.textContent = 'Play';
    }
}

/*--------------------------Data for the cards--------------------------*/

const objectContent = {
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
        description: "Hey! Welcome to my Pixel universe. I'm Jessica. I have a hundred hobbies (and counting)—if it’s something new and interesting, I want to give it a try. In this room, every pixel holds a piece of my curiosity. Feel free to explore, but be careful not to make a mess—oh wait, it’s already a mess anyway! 🙂"
    }
};

const funfacts = [
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







/*--------------------------Functions for the cards--------------------------*/


function closeWelcomeCard() {    
    welcomeOverlay.style.display = 'none';
}


function openCard(itemname) {    
    let title = document.getElementById('card-title');
    let description = document.getElementById('card-description');
    let image = document.getElementById('card-image');
    
    cardOverlay.style.display = 'flex';

    let itemData = objectContent[itemname];

    if (itemData) {
        title.innerText = itemData.title;
        description.innerText = itemData.description;
        image.src = itemData.image;
        cardOverlay.style.display = 'flex';
    }
}

function closeCard() {
    cardOverlay.style.display = 'none';
}


/*--------------------------Functions for the notebook--------------------------*/



function getRandomFunfactToNotebook() {
    let randomFunfact = funfacts[Math.floor(Math.random() * funfacts.length)];
    notebookContent.innerText = randomFunfact;
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
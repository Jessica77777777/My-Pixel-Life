
const data = {
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

const funfects = [
    "I love pop music, and I was the lead singer of my pop band called “694.” We performed at school events and local venues. Highlight of our career was when we won the local talent show and got to perform at the city festival.",
    "I have a secret talent for doing crocheting.",
    "I can speak three languages: English, Mandarin, and a little bit of Korean.",
    "My life goal is to travel around the world and try every cuisine out there.",
    "I wrote a song about I met a goodlooking guy at a bar, and the song won a local music competition.",
    "I have a collection of stickers that I’ve been collecting since I was a kid, and I still add to it whenever I find a cool one.",
    "My favorite cartoon is Phineas and Ferb, and I still watch it.",
    "My favorite movie is now Project Hail Mary. I LOVE science fiction.",
    "If I can do any job without worrying about money, I would be a dog groomer.",
    "I had a pet hamster named Bobo."
];

function closeWelcomeCard() {
    const welcomeOverlay = document.querySelector('.welcome-overlay');
    welcomeOverlay.style.display = 'none';
}


function openCard(itemname) {
    const cardOverlay = document.querySelector('.card-overlay');
    const title = document.getElementById('card-title');
    const description = document.getElementById('card-description');
    const image = document.getElementById('card-image');
    cardOverlay.style.display = 'flex';


    const itemData = Data[itemname];

    if (itemData) {
        title.innerText = itemData.title;
        description.innerText = itemData.description;
        image.src = itemData.image;
        cardOverlay.style.display = 'flex';
    }
}

function closeCard() {
    const cardOverlay = document.querySelector('.card-overlay');
    cardOverlay.style.display = 'none';
}



function openNotebook() {
    /*alert("This notebook is currently under construction. Please check back later for updates!");*/
    const cardOverlay = document.querySelector('.notebook-overlay');
    cardOverlay.style.display = 'flex';
    const card = document.getElementById('notebook');
    card.style.display = 'flex';
    const randomFunfact = funfects[Math.floor(Math.random() * funfects.length)];
    const notebookContent = document.getElementById('notebookContent');
    notebookContent.innerText = randomFunfact;

}



function closenotebook() {
    const cardOverlay = document.querySelector('.notebook-overlay');
    cardOverlay.style.display = 'none';
}
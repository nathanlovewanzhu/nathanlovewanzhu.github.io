const answers_no = {
    english: [
        "No",
        "Are you sure?",
        "Are you really sure??",
        "Are you really really sure???",
        "Think again?",
        "Don't believe in second chances?",
        "Why are you being so cold?",
        "Maybe we can talk about it?",
        "I am not going to ask again!",
        "Ok now this is hurting my feelings!",
        "You are now just being mean!",
        "Why are you doing this to me?",
        "Please give me a chance!",
        "I am begging you to stop!",
        "Ok, Let's just start over.."
    ],
    french: [
        "Non",
        "Tu es sûr ?",
        "Tu es vraiment sûr ??",
        "Tu es vraiment vraiment sûr ???",
        "Réfléchis encore?",
        "Tu ne crois pas aux deuxièmes chances ?",
        "Pourquoi tu es si froid?",
        "Peut-être, on peut en parler ?",
        "Je ne vais pas demander encore une fois!",
        "D'accord, maintenant ça me fait mal!",
        "Tu es juste méchant!",
        "Pourquoi tu me fais ça?",
        "Donne-moi une chance plz!",
        "Je te supplie d'arrêter!",
        "D'accord, recommençons.."
    ],
    thai: [
        "ไม่อ่ะ",
        "แน่ใจจริงๆหรอคะ?",
        "แน่ใจจริงๆ จริงๆนะคะ?",
        "อย่าบอกนะว่านี่แน่ใจสุดๆแล้วจริงๆ ?",
        "ลองคิดดูอีกทีหน่อยสิคะ..",
        "ขอโอกาสที่สองทีค่ะ..",
        "อย่าเย็นชาสิคะ กระซิกๆ",
        "ขอร้องนะคะ",
        "น้าาาๆๆๆๆๆ",
        "เราจะร้องไห้เอานะ กระซิกๆ",
        "จะเอางี้ๆจริงหรอคะ",
        "ฮือออออ",
        "ขอโอกาสครั้งที่สองที่ค่ะ!",
        "ขอร้องละค่าาา",
        "โอเคค่ะ.. งั้นเริ่มใหม่ !"
    ]
};

const answers_yes = {
    "english": "Yes",
    "french": "Oui",
    "thai": "เย่ คืนดีกันแล้วน้า"
};

let language = "english"; // Default language
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');

    // Randomly change banner image
    let randomnum = Math.floor(Math.random() * 4);
    banner.src = `public/images/no${randomnum}.jpg?t=${new Date().getTime()}`; // Ensure fresh load

    clicks++;

    // Increase "Yes" button size randomly
    const sizes = [40, 50, 30, 35, 45];
    size += sizes[Math.floor(Math.random() * sizes.length)];
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;

    let total = answers_no[language].length;

    // Update "No" button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else {
        alert(answers_no[language][i]); // Final message before reset
        resetGame();
    }
});

yes_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    banner.src = `public/images/yes.gif?t=${new Date().getTime()}`;

    // Hide buttons, show success message
    document.querySelector('.buttons').style.display = "none";
    document.querySelector('.message').style.display = "block";
});

function resetGame() {
    i = 1;
    clicks = 0;
    size = 50;
    no_button.innerHTML = answers_no[language][0];
    yes_button.innerHTML = answers_yes[language];
    yes_button.style.height = "50px";
    yes_button.style.width = "50px";
}

function changeLanguage() {
    const selectedLanguage = document.getElementById("language-select").value;
    language = selectedLanguage;

    // Update heading
    const questionHeading = document.getElementById("question-heading");
    if (language === "french") {
        questionHeading.textContent = "Tu veux être mon valentin?";
    } else if (language === "thai") {
        questionHeading.textContent = "คืนดีกับเราได้อ่ะป่าว?";
    } else {
        questionHeading.textContent = "Will you be my valentine?";
    }

    // Update button text
    yes_button.innerHTML = answers_yes[language];
    no_button.innerHTML = clicks === 0 ? answers_no[language][0] : answers_no[language][clicks];

    // Update success message
    const successMessage = document.getElementById("success-message");
    if (language === "french") {
        successMessage.textContent = "Yepppie, à bientôt :3";
    } else if (language === "thai") {
        successMessage.textContent = "ฮูเร่ คืนดีกันแล้วน้า :3";
    } else {
        successMessage.textContent = "Yepppie, see you sooonnn :3";
    }
}

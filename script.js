const loginForm = document.getElementById("loginForm");
const loginScreen = document.getElementById("loginScreen");
const celebrationLayer = document.getElementById("celebrationLayer");

const decorations = ["🌸", "🌷", "❤️", "💕", "🎓", "✨", "🌹", "💖", "⭐"];

function createCelebration() {
    for (let i = 0; i < 45; i++) {
        const item = document.createElement("span");

        item.classList.add("floating-decoration");
        item.textContent =
            decorations[Math.floor(Math.random() * decorations.length)];

        item.style.left = Math.random() * 100 + "vw";
        item.style.fontSize = (18 + Math.random() * 25) + "px";
        item.style.animationDuration = (4 + Math.random() * 5) + "s";
        item.style.animationDelay = (Math.random() * 3) + "s";

        celebrationLayer.appendChild(item);

        // Ka saar qurxinta marka animation-ku dhammaado
        item.addEventListener("animationend", function () {
            item.remove();
        });
    }
}

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("loginName").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (name === "" || password === "") {
        return;
    }

    // Bilow qurxinta
    createCelebration();

    // Qari login-ka si website-kii hore u muuqdo
    loginScreen.classList.add("hide");

    // Magaca qofka ku soo dhawoow
    const welcomeTitle = document.querySelector(".hero h1");

    if (welcomeTitle) {
        welcomeTitle.textContent = `Welcome, ${name}! 🎓❤️`;
    }

    // Qurxinta ha sii socoto inta website-ku furan yahay
    const celebrationInterval = setInterval(() => {
        if (document.hidden) return;
        createCelebration();
    }, 2500);

    // Jooji marka bogga laga baxo
    window.addEventListener("pagehide", () => {
        clearInterval(celebrationInterval);
    }, { once: true });
});

/* 1. HEL BADHAHA IYO FARriinta */

const messageBtn = document.getElementById("messageBtn");
const hiddenMessage = document.getElementById("hiddenMessage");


/* 2. FUR AMA QARI FARriinta */

messageBtn.addEventListener("click", function () {

    const isHidden = hiddenMessage.hidden;

    if (isHidden) {

        // Farriinta muuji
        hiddenMessage.hidden = false;

        // Badhanka qoraalkiisa beddel
        messageBtn.textContent = "Xir farriinta ❤️";

        // U sheeg browser-ka in farriintu furan tahay
        messageBtn.setAttribute("aria-expanded", "true");

        // Bilow dabaaldegga
        createCelebration();

    } else {

        // Farriinta qari
        hiddenMessage.hidden = true;

        // Badhanka ku celi qoraalkiisii hore
        messageBtn.textContent = "Fur farriintaada 💖";

        messageBtn.setAttribute("aria-expanded", "false");
    }

});


/* 3. MAAREE SAWIRRADA */

const photos = document.querySelectorAll(".photo-frame img");

photos.forEach(function (photo) {

    // Haddii sawirku aanu jirin, meesha bannaan reeb
    photo.addEventListener("error", function () {
        photo.style.display = "none";
    });

    // Haddii sawirku si sax ah u furmo, muuji
    photo.addEventListener("load", function () {
        photo.style.display = "block";
    });

    // Hubi sawirka marka boggu furmo
    if (photo.complete && photo.naturalWidth === 0) {
        photo.style.display = "none";
    }
});


/* 4. DABAALDEGGA EMOJIS-KA */

function createCelebration() {

    const emojis = ["💖", "✨", "🌸", "💕", "🎉", "💗"];

    for (let i = 0; i < 25; i++) {

        const item = document.createElement("span");

        item.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        item.style.position = "fixed";
        item.style.left = Math.random() * 100 + "vw";
        item.style.top = "-35px";

        item.style.fontSize =
            (18 + Math.random() * 16) + "px";

        item.style.pointerEvents = "none";
        item.style.zIndex = "9999";

        item.style.transition =
            "top 3s ease-in, opacity 3s ease-in";

        document.body.appendChild(item);

        // Dhaqdhaqaaqa bilow
        requestAnimationFrame(function () {
            item.style.top = "105vh";
            item.style.opacity = "0";
        });

        // Ka saar emojis-ka marka ay dhammaadaan
        setTimeout(function () {
            item.remove();
        }, 3100);

    }

}

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

function openMenu() {
  mobileMenu.classList.add("open");
  mobileMenu.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  hamburger.textContent = "✕";
}

function closeMenuFunc() {
  mobileMenu.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  hamburger.textContent = "☰";
}

hamburger.addEventListener("click", () => {
  mobileMenu.classList.contains("open") ? closeMenuFunc() : openMenu();
});

closeMenu.addEventListener("click", closeMenuFunc);
const bgMusic = document.getElementById("bgMusic");

if (bgMusic) {
  bgMusic.volume = 0.6;
  bgMusic.loop = true;

  function playBackgroundMusic() {
    bgMusic.play().catch((error) => {
      console.log("Autoplay diblokir oleh browser:", error);
    });
  }

  document.addEventListener("click", playBackgroundMusic, { once: true });
  document.addEventListener("touchstart", playBackgroundMusic, { once: true });

  window.addEventListener("load", () => {
    setTimeout(playBackgroundMusic, 1000);
  });
}

const welcomePopup = document.getElementById("welcome-popup");
const popupClose = document.getElementById("popup-close");
const popupOpenBtn = document.getElementById("popup-open-btn");

window.addEventListener("load", () => {
  setTimeout(() => {
    welcomePopup.style.display = "flex";
  }, 600);
});

function closeWelcomePopup() {
  welcomePopup.style.display = "none";
}

popupClose.addEventListener("click", closeWelcomePopup);

popupOpenBtn.addEventListener("click", () => {
  closeWelcomePopup();
  document.querySelector(".hero").scrollIntoView({ behavior: "smooth" });
});

welcomePopup.addEventListener("click", (e) => {
  if (e.target === welcomePopup) closeWelcomePopup();
});

const appleModal = document.getElementById("apple-modal");
const modalIconBig = document.getElementById("modal-icon-big");
const modalTitleBig = document.getElementById("modal-title-big");
const modalText = document.getElementById("modal-text");
const appleClose = document.getElementById("apple-close");

const appleCardData = {
  1: {
    icon: `<img src="./src/melodi3.png" alt="emoji" class="popup-emoji-img"/>`,
    title: "First Mail",
    content: `
            <p>okay I don't fully know how to say this without it sounding like a bigger deal than I'm trying to make it, but here we go anyway.
I like you. And honestly? I've been sitting with that for a while now, trying to figure out if it was just me being in my head about things but the more time passes, the more I'm pretty sure it isn't.
<br>
Which is a little funny, because we're not even that close. Same circle, same familiar faces, same group of people but not really us, not in the way I think I'd want. And maybe that's part of why I'm saying something at all, because every time we're in the same space I catch myself thinking I want to know what you're actually like. Not just the version of you I see when everyone else is around.
<br>
I've noticed things though, even from where I'm standing. The way you talk when you actually mean something. The way you make people around you feel at ease without even trying. Little things that probably don't seem significant but somehow keep adding up. And at some point I stopped being able to chalk it up to nothing.
<br>
I'm not trying to put any pressure on this I genuinely mean that. I'm not expecting anything, and I'm not asking you to feel the same way. But I'd be lying if I said I wasn't a little hopeful. Because I think there's something there worth at least being curious about. And I think if we actually gave ourselves the chance to just talk, properly, without everyone else in the background it might turn into something kind of good.
<br>
Maybe I'm reading into things. But I don't think I'm entirely off either.
So yeah. That's it. That's what I wanted to say. And whatever you do with it, I hope at minimum it doesn't make things weird because I do genuinely like having you around, even just the way things are now.</p>
        `,
  },
  2: {
    icon: `<img src="./src/melodi2.png" alt="emoji" class="popup-emoji-img"/>`,
    title: "Baca judulnya aja...",
    content: `
            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1aFts9L50ZXXwO1AbUtWNY?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        `,
  },
  rhythms: {
    title: "Dreams",
    content: `<video src="./src/inmydreams.mp4" style="width:100%;max-width:400px;border-radius:12px;display:block;margin:0 auto;" controls></video>`,
  },
};

document.querySelectorAll(".card").forEach((card) => {
  card.style.cursor = "pointer";

  card.addEventListener("click", () => {
    const id = card.getAttribute("data-card");
    if (!id || !appleCardData[id]) return;

    const data = appleCardData[id];

    modalIconBig.innerHTML = data.icon;
    modalTitleBig.textContent = data.title;
    modalText.innerHTML = data.content;

    appleModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

function closeAppleModal() {
  appleModal.style.display = "none";
  document.body.style.overflow = "";
}

appleClose.addEventListener("click", closeAppleModal);
appleModal.addEventListener("click", (e) => {
  if (e.target === appleModal) closeAppleModal();
});

document.querySelectorAll("a[data-card]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("data-card");
    if (!id || !appleCardData[id]) return;
    const data = appleCardData[id];
    modalIconBig.textContent = data.icon;
    modalTitleBig.textContent = data.title;
    modalText.innerHTML = data.content;
    appleModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

document.addEventListener(
  "play",
  (e) => {
    if (e.target.tagName === "VIDEO" && bgMusic) {
      bgMusic.pause();
    }
  },
  true,
);

document.addEventListener(
  "pause",
  (e) => {
    if (e.target.tagName === "VIDEO" && bgMusic) {
      bgMusic.play().catch(() => {});
    }
  },
  true,
);

document.addEventListener(
  "ended",
  (e) => {
    if (e.target.tagName === "VIDEO" && bgMusic) {
      bgMusic.play().catch(() => {});
    }
  },
  true,
);

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
            <p>I don't even know if this is the right move, honestly. I've thought about it for a while and I keep talking myself out of it, but then I keep coming back to the same conclusion which is that I'd rather say something and deal with whatever comes after than just keep pretending everything's normal.
So. Here goes.
I like you. And I know that probably sounds weird coming from me because we're not even that close like, we exist in the same space, same people, same group chats, but we've never really had a proper conversation just the two of us. Which is maybe why this feels so strange to admit, because it's not like I have a long list of reasons backed up by years of knowing you. It's more like… I've just been paying attention. From the sidelines, I guess.
And the more I pay attention, the more I notice things about you that I can't really stop thinking about. The way you carry yourself in a room. The things you say when the conversation gets real. The way you treat people not just the ones you're close to, but everyone around you. Small things that probably nobody else clocks, but I do. I always do.
I'm not trying to make this into a bigger deal than it needs to be. I'm not asking for anything, and I'm definitely not trying to make things weird between us or with everyone else. That's honestly one of the reasons I kept putting this off because the last thing I want is for this to become something that changes the dynamic of everything around us.
But I also think there's something worse than the risk of it being awkward, and that's just never saying anything at all.
So if you're open to it even just talking more, getting to know each other properly I'd really like that. And if not, I promise I'm not going to make it a whole thing. I just needed you to know.</p>
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

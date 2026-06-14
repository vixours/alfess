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
  // Pengaturan
  bgMusic.volume = 0.6; // Ubah sesuai keinginan (0.0 - 1.0)
  bgMusic.loop = true;

  function playBackgroundMusic() {
    bgMusic.play().catch((error) => {
      console.log("Autoplay diblokir oleh browser:", error);
    });
  }

  // Mainkan setelah user berinteraksi (paling efektif)
  document.addEventListener("click", playBackgroundMusic, { once: true });
  document.addEventListener("touchstart", playBackgroundMusic, { once: true });

  // Cadangan: coba mainkan setelah halaman load
  window.addEventListener("load", () => {
    setTimeout(playBackgroundMusic, 1000);
  });
}

// ====================== WELCOME POP-UP ======================
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
  // Scroll ke atas (opsional)
  document.querySelector(".hero").scrollIntoView({ behavior: "smooth" });
});

welcomePopup.addEventListener("click", (e) => {
  if (e.target === welcomePopup) closeWelcomePopup();
});

// ====================== APPLE-STYLE MODAL ======================
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
            <p>Warna-warna yang kaya dan penuh kehidupan. Setiap elemen visual di halaman ini menggunakan saturasi tinggi agar terasa hangat dan emosional.</p>
            <p>Seperti perasaan aku setiap kali melihat senyummu — cerah, hidup, dan selalu membuat hati berbunga-bunga. Gradasi pink dan ungu yang kamu lihat adalah representasi langsung dari betapa indahnya perasaan ini.</p>
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

// ── Video & bgMusic sinkronisasi ──
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


const nextButton = document.querySelector(".next-btn");
const video = document.querySelector(".hero-video");

const videoList = [
    "videos/hero-1.mp4",
    "videos/hero-2.mp4",
    "videos/hero-3.mp4",
    "videos/hero-4.mp4"
];

let index = 0;

nextButton.addEventListener("click", () => {
    index = (index + 1) % videoList.length;

    video.src = videoList[index];
    video.load();

    video.play().catch(() => {
        // The video can still play after the visitor interacts again.
    });
});

// Update the footer year automatically.
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
const nextButton = document.querySelector(".next-btn");
const video = document.querySelector(".hero-video");

const videoList = [
    "videos/hero-1.mp4",
    "videos/hero-2.mp4",
    "videos/hero-3.mp4"
];

let index = 0;

if (nextButton && video) {
    nextButton.addEventListener("click", () => {
        index = (index + 1) % videoList.length;
        video.src = videoList[index];
        video.load();
        video.play().catch(() => {
            // Playback can begin after the next user interaction if required.
        });
    });
}

// Select the chosen service when a visitor clicks a service card.
// The contact action opens WhatsApp with the relevant details.
document.querySelectorAll("[data-service]").forEach(link => {
    link.addEventListener("click", () => {
        const service = link.dataset.service || "Project Enquiry";
        sessionStorage.setItem("orangeSelectedService", service);
    });
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

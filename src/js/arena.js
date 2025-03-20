const CHANNEL_NAME = "scans-seufrfkyrpq";
const API_URL = `https://api.are.na/v2/channels/${CHANNEL_NAME}?per=100`;

async function fetchImage() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch Are.na data");

        const data = await response.json();

        const images = data.contents
            .filter(item => item.class === "Image" && item.image?.original?.url);

        if (images.length === 0) return;

        let randomImage = images[Math.floor(Math.random() * images.length)];

        document.getElementById("arena-image").src = randomImage.image.original.url;
        document.getElementById("arena-image").alt = randomImage.title || "Untitled";
    } catch (error) {
        console.error("Error fetching Are.na image:", error);
    }
}

window.onload = fetchImage;

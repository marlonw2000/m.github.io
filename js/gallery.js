// In gallery.js
fetch('data/images.json')
    .then(response => response.json())
    .then(images => renderGallery(images));


const API_URL = "https://your-repl-name.username.repl.co";

async function loadGallery() {
    const response = await fetch(`${API_URL}/api/images`);
    const images = await response.json();
    
    document.getElementById('portfolio-grid').innerHTML = images
        .map(img => `
            <div class="portfolio-item">
                <img src="${img.src}" alt="${img.title}">
                <div class="portfolio-overlay">
                    <h3>${img.title}</h3>
                    <p>${img.category}</p>
                </div>
            </div>
        `).join('');
}

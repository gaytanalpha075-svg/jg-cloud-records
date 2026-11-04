


const catalogContainer = document.getElementById("catalog-container");

const API_URL =
    "https://s75tshdfn6.execute-api.us-east-2.amazonaws.com/albums";


async function loadCatalog() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Could not load catalog from AWS.");
        }

        const cloudCatalogData = await response.json();

        renderCatalog(cloudCatalogData);

        console.log("Catalog loaded from AWS.");

    } catch (error) {

        console.error("AWS error:", error);

        if (catalogContainer) {
        catalogContainer.innerHTML =
        "<p>Unable to load catalog from AWS.</p>";
}
    }
}


function renderCatalog(data) {

    if (!catalogContainer) {
        return;
    }

    catalogContainer.innerHTML = "";

    data.forEach((genre) => {

        const genreSection = document.createElement("section");
        genreSection.classList.add("catalog-genre");
        genreSection.id = genre.id;

        genreSection.innerHTML = `
            <p class="section-label">Genre</p>
            <h2>${genre.genre}</h2>
        `;

        genre.artists.forEach((artist) => {

            const artistBlock = document.createElement("div");
            artistBlock.classList.add("artist-block");

            artistBlock.innerHTML = `
                <div class="artist-image">
                    <img src="${artist.image}" alt="${artist.name}">
                </div>

                <div class="artist-info">
                    <h3>${artist.name}</h3>
                </div>
            `;

            const albumsContainer = document.createElement("div");
            albumsContainer.classList.add("albums-container");

            artist.albums.forEach((album) => {

                const albumCard = document.createElement("div");
                albumCard.classList.add("album-card");

                albumCard.innerHTML = `
                    <h4>${album.title}</h4>

                    <p class="album-details">
                        ${album.year} · ${album.price}
                    </p>

                    <p class="album-description">
                        ${album.description}
                    </p>

                    <button
                      class="select-album"
                     data-album="${album.title}">
                      Select Album
                    </button>
                `;

                albumsContainer.appendChild(albumCard);
            });

            artistBlock.appendChild(albumsContainer);
            genreSection.appendChild(artistBlock);
        });

        catalogContainer.appendChild(genreSection);
    });

    const albumButtons = document.querySelectorAll(".select-album");

albumButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const albumName = button.dataset.album;

        document.getElementById("selected-album").textContent = albumName;

        document.getElementById("order-section").scrollIntoView({
            behavior: "smooth"
        });

    });

});

}


if (catalogContainer) {
    loadCatalog();
}

const orderForm = document.getElementById("order-form");

if (orderForm) {

    orderForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const customerName =
            document.getElementById("customer-name").value;

        const customerEmail =
            document.getElementById("customer-email").value;

        const selectedAlbum =
            document.getElementById("selected-album").textContent;

        if (selectedAlbum === "None") {
            document.getElementById("order-message").textContent =
                "Please select an album first.";
            return;
        }

        console.log("Name:", customerName);
        console.log("Email:", customerEmail);
        console.log("Album:", selectedAlbum);

       try {

    const response = await fetch(
        "https://s75tshdfn6.execute-api.us-east-2.amazonaws.com/order",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: customerName,
                email: customerEmail,
                album: selectedAlbum
            })
        }
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || "Order failed.");
    }

    document.getElementById("order-message").textContent =
        result.message;

} catch (error) {

    console.error("Order error:", error);

    document.getElementById("order-message").textContent =
        "There was a problem sending your order.";
}

    });

}
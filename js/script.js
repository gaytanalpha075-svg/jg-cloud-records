const COGNITO_DOMAIN =
    "https://us-east-2ecaylshx1.auth.us-east-2.amazoncognito.com";

const COGNITO_CLIENT_ID =
    "20o0ungdk55a1lk5eam7unn7oh";

const COGNITO_REDIRECT_URI =
    "https://jg-cloud-records-juan-gaytan.s3.us-east-2.amazonaws.com/catalog.html";
function generateRandomString(length = 64) {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);

    return Array.from(array, byte =>
        byte.toString(16).padStart(2, "0")
    ).join("");
}

async function createCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await crypto.subtle.digest("SHA-256", data);

    return btoa(
        String.fromCharCode(...new Uint8Array(digest))
    )
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}

async function startSignIn() {
    const codeVerifier = generateRandomString();
    const codeChallenge =
        await createCodeChallenge(codeVerifier);

    const state = generateRandomString(16);

    sessionStorage.setItem(
        "pkce_verifier",
        codeVerifier
    );

    sessionStorage.setItem(
        "oauth_state",
        state
    );

    const params = new URLSearchParams({
        response_type: "code",
        client_id: COGNITO_CLIENT_ID,
        redirect_uri: COGNITO_REDIRECT_URI,
        scope: "openid email",
        state: state,
        code_challenge: codeChallenge,
        code_challenge_method: "S256"
    });

    window.location.href =
        `${COGNITO_DOMAIN}/oauth2/authorize?${params.toString()}`;
}

const signInButton =
    document.getElementById("signIn");

if (signInButton) {
    signInButton.addEventListener("click", (event) => {
        event.preventDefault();
        startSignIn();
    });
}    

async function handleCognitoCallback() {
    const params = new URLSearchParams(window.location.search);

    const code = params.get("code");
    const returnedState = params.get("state");

    if (!code) {
        return;
    }

    const expectedState =
        sessionStorage.getItem("oauth_state");

    const codeVerifier =
        sessionStorage.getItem("pkce_verifier");

    if (
        !returnedState ||
        returnedState !== expectedState ||
        !codeVerifier
    ) {
        console.error("Invalid Cognito callback.");
        return;
    }

    const body = new URLSearchParams({
        grant_type: "authorization_code",
        client_id: COGNITO_CLIENT_ID,
        code: code,
        redirect_uri: COGNITO_REDIRECT_URI,
        code_verifier: codeVerifier
    });

    const response = await fetch(
        `${COGNITO_DOMAIN}/oauth2/token`,
        {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded"
            },
            body: body.toString()
        }
    );

    if (!response.ok) {
        console.error("Could not exchange Cognito code.");
        return;
    }

    const tokens = await response.json();

    sessionStorage.setItem(
        "id_token",
        tokens.id_token
    );

    sessionStorage.setItem(
        "access_token",
        tokens.access_token
    );

    sessionStorage.removeItem("oauth_state");
    sessionStorage.removeItem("pkce_verifier");

    window.history.replaceState(
        {},
        document.title,
        window.location.pathname
    );
}

function updateAuthUI() {
    const idToken = sessionStorage.getItem("id_token");

    const signInButton = document.getElementById("signIn");
    const signOutButton = document.getElementById("signOut");
    const userGreeting = document.getElementById("userGreeting");

    if (!signInButton || !signOutButton || !userGreeting) {
        return;
    }

    if (idToken) {
        const payload = JSON.parse(
            atob(
                idToken
                    .split(".")[1]
                    .replace(/-/g, "+")
                    .replace(/_/g, "/")
            )
        );

        userGreeting.textContent =
            `Hi, ${payload.email}`;

        userGreeting.style.display = "inline";
        signInButton.style.display = "none";
        signOutButton.style.display = "inline";
    } else {
        userGreeting.style.display = "none";
        signInButton.style.display = "inline";
        signOutButton.style.display = "none";
    }
}

const signOutButton =
    document.getElementById("signOut");

if (signOutButton) {
    signOutButton.addEventListener("click", (event) => {
        event.preventDefault();

        sessionStorage.removeItem("id_token");
        sessionStorage.removeItem("access_token");

        const params = new URLSearchParams({
            client_id: COGNITO_CLIENT_ID,
            logout_uri: COGNITO_REDIRECT_URI
        });

        window.location.href =
            `${COGNITO_DOMAIN}/logout?${params.toString()}`;
    });
}

handleCognitoCallback().then(updateAuthUI);


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

        const accessToken =
    sessionStorage.getItem("access_token");

if (!accessToken) {
    document.getElementById("order-message").textContent =
        "Please sign in before placing an order.";
    return;
}

        const customerName =
            document.getElementById("customer-name").value;

        const customerEmail =
            document.getElementById("customer-email").value;

        const selectedAlbum =
            document.getElementById("selected-album").textContent;
        
        const cleanName = customerName.trim();
const cleanEmail = customerEmail.trim().toLowerCase();

const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!cleanName) {
    document.getElementById("order-message").textContent =
        "Please enter your name.";
    return;
}

if (!emailPattern.test(cleanEmail)) {
    document.getElementById("order-message").textContent =
        "Please enter a valid email address.";
    return;
}

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
    "Content-Type": "application/json",
    "Authorization": `Bearer ${accessToken}`
},

            body: JSON.stringify({
                name: cleanName,
                email: cleanEmail,
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
        error.message || "There was a problem sending your order.";

}

    });

}
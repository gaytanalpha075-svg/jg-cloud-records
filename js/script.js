const catalogData = [
    {
        genre: "Rock",
        id: "rock",
        artists: [
            {
                name: "Pink Floyd",
                image: "images/rock-artist-1.jpg",
                albums: [
                    {
                        title: "The Dark Side of the Moon",
                        year: "1973",
                        price: "$18.99",
                        description: "An iconic progressive rock concept album exploring themes of time, mental health, money, and mortality through groundbreaking sound design and psychedelic soundscapes."
                    },
                    {
                        title: "The Wall",
                        year: "1979",
                        price: "$19.99",
                        description: "A legendary double concept album that tells the story of an isolated rock star constructing an emotional wall between himself and the world due to trauma, isolation, and societal pressure.."
                    }
                ]
            },
            {
                name: "The Beatles",
                image: "images/rock-artist-2.jpg",
                albums: [
                    {
                        title: "Revolver",
                        year: "1966",
                        price: "$17.99",
                        description: "A groundbreaking rock album that marked a major experimental shift for the band, incorporating studio innovation, psychedelic textures, and iconic tracks like Eleanor Rigby and Tomorrow Never Knows."
                    },
                    {
                        title: "Abbey Road",
                        year: "1969",
                        price: "$20.99",
                        description: "A masterpiece of modern rock recorded as the band's final collaborative effort, featuring polished production, iconic tracks like Come Together and Here Comes the Sun, and a legendary multi-song medley on side two."
                    }
                ]
            },
            {
                name: "The Eagles",
                image: "images/rock-artist-3.jpg",
                albums: [
                    {
                        title: "Hotel California",
                        year: "1976",
                        price: "$18.99",
                        description: "A landmark classic rock album centered around themes of disillusionment, decadence, and the dark underbelly of the American Dream, headlined by its iconic title track."
                    },
                    {
                        title: "One of These Nights",
                        year: "1975",
                        price: "$21.99",
                        description: "A breakthrough studio album that blended smooth country rock with disco-influenced rhythms, featuring hit tracks like Take It to the Limit and the haunting title track."
                    }
                ]
            }
        ]
    },

    {
        genre: "Hip-Hop",
        id: "hiphop",
        artists: [
            {
                name: "Drake",
                image: "images/hiphop-artist-1.jpg",
                albums: [
                    {
                        title: "Take Care",
                        year: "2011",
                        price: "$18.99",
                        description: "A critically acclaimed sophomore album that refined the moody, introspective blend of R&B and hip-hop, diving deep into themes of fame, heartbreak, personal relationships, and emotional vulnerability."
                    },
                    {
                        title: "Honestly, Nevermind",
                        year: "2022",
                        price: "$19.99",
                        description: "A surprise dance and club-oriented project that showcases Drake exploring house and Baltimore club music, blending upbeat electronic rhythms with introspective vocal melodies."
                    }
                ]
            },
            {
                name: "Travis Scott",
                image: "images/hiphop-artist-2.jpg",
                albums: [
                    {
                        title: "Utopia",
                        year: "2023",
                        price: "$17.99",
                        description: "A sprawling, experimental hip-hop album featuring heavily distorted production, psychedelic soundscapes, and high-profile collaborations exploring themes of ambition, fame, and perfection."
                    },
                    {
                        title: "Rodeo",
                        year: "2015",
                        price: "$20.99",
                        description: "Travis Scott's landmark debut studio album, blending dark, trap-infused beats with psychedelic soundscapes and energetic anthems like Antidote and 3500."
                    }
                ]
            },
            {
                name: "Future",
                image: "images/hiphop-artist-3.jpg",
                albums: [
                    {
                        title: "I Never Liked You",
                        year: "2022",
                        price: "$18.99",
                        description: "A chart-topping trap album exploring themes of toxic romance, fame, and wealth, highlighted by hit tracks like Wait for U (featuring Drake and Tems) and 712PM."
                    },
                    {
                        title: "FUTURE",
                        year: "2017",
                        price: "$21.99",
                        description: "A defining trap masterpiece that cemented Future's superstar status, blending dark, atmospheric production with raw, unfiltered lyrics about fame, substance abuse, and personal struggles."
                    }
                ]
            }
        ]
    },

    {
        genre: "Pop",
        id: "pop",
        artists: [
            {
                name: "Harry Styles",
                image: "images/pop-artist-1.jpg",
                albums: [
                    {
                        title: "Fine Line",
                        year: "2019",
                        price: "$18.99",
                        description: "A critically acclaimed pop-rock record blending 1970s soft-rock influences with modern pop, exploring themes of heartbreak, joy, and self-discovery through hits like Watermelon Sugar and Adore You."
                    },
                    {
                        title: "Harry's House",
                        year: "2022",
                        price: "$19.99",
                        description: "A critically acclaimed, Grammy-winning album blending synth-pop, funk, and soft rock to explore intimate themes of domesticity, belonging, and emotional warmth, featuring the global hit As It Was."
                    }
                ]
            },
            {
                name: "Olivia Rodrigo",
                image: "images/pop-artist-2.jpg",
                albums: [
                    {
                        title: "GUTS",
                        year: "2023",
                        price: "$17.99",
                        description: "A critically acclaimed sophomore pop-rock album capturing the messy, chaotic transitions of young adulthood with sharp lyrical wit, explosive punk-rock energy, and intimate piano ballads."
                    },
                    {
                        title: "SOUR",
                        year: "2021",
                        price: "$20.99",
                        description: "A blockbuster debut album capturing the raw grief and angst of adolescent heartbreak, blending alt-pop vulnerability with mid-2000s pop-punk energy on hit singles like drivers license and good 4 u."
                    }
                ]
            },
            {
                name: "Bruno Mars",
                image: "images/pop-artist-3.jpg",
                albums: [
                    {
                        title: "The Romantic",
                        year: "2026",
                        price: "$18.99",
                        description: "A smooth, retro-infused album celebrating classic soul and R&B romance, filled with lush instrumentation, captivating grooves, and heartfelt vocal performances."
                    },
                    {
                        title: "24K Magic",
                        year: "2016",
                        price: "$21.99",
                        description: "A critically acclaimed, multi-Grammy-winning album celebrating 1980s and 90s funk, pop, and R&B, packed with chart-topping hits like 24K Magic, That's What I Like, and Versace on the Floor."
                    }
                ]
            }
        ]
    },

    {
        genre: "Latin",
        id: "latin",
        artists: [
            {
                name: "Bad Bunny",
                image: "images/latin-artist-1.jpg",
                albums: [
                    {
                        title: "X 100PRE",
                        year: "2018",
                        price: "$18.99",
                        description: "A groundbreaking debut studio album that redefined Latin trap and reggaeton, blending infectious Latin rhythms with introspective lyrics, punk-pop influences, and hits like MIA and Caro."
                    },
                    {
                        title: "YHLQMDLG",
                        year: "2020",
                        price: "$19.99",
                        description: "A vibrant, energy-packed homage to late-90s and early-2000s reggaeton, bursting with party anthems and massive global hits like Safaera, La Difícil, and Yo Perreo Sola."
                    }
                ]
            },
            {
                name: "Jhayco",
                image: "images/latin-artist-2.jpg",
                albums: [
                    {
                        title: "Famouz",
                        year: "2019",
                        price: "$17.99",
                        description: "A landmark Latin trap and reggaeton debut featuring chart-topping anthems like No Me Conoce, blending hypnotic synth melodies with smooth, distinct vocal flows."
                    },
                    {
                        title: "Timelezz",
                        year: "2021",
                        price: "$20.99",
                        description: "A futuristic, multi-genre studio album packed with vibrant club hits, slick electronic textures, and major Latin urban collaborations like Dákiti and Fiel."
                    }
                ]
            },
            {
                name: "Peso Pluma",
                image: "images/latin-artist-3.jpg",
                albums: [
                    {
                        title: "Genesis",
                        year: "2023",
                        price: "$18.99",
                        description: "A landmark album in the regional Mexican movement that propelled corridos tumbados to global superstardom, featuring chart-topping anthems like PRC and LADY GAGA."
                    },
                    {
                        title: "Exodo",
                        year: "2024",
                        price: "$21.99",
                        description: "A massive double-disc album showcasing Peso Pluma's versatility, splitting between his signature dark corridos tumbados on the first disc and high-profile urban, trap, and reggaeton collaborations on the second."
                    }
                ]
            }
        ]
    },

    {
        genre: "R&B",
        id: "rnb",
        artists: [
            {
                name: "Daniel Ceasar",
                image: "images/rnb-artist-1.jpg",
                albums: [
                    {
                        title: "Freudian",
                        year: "2017",
                        price: "$18.99",
                        description: "A critically acclaimed debut album blending gospel-infused soul with modern R&B, featuring intimate ballads and breakout hits like Get You and Best Part."
                    },
                    {
                        title: "Never Enough",
                        year: "2023",
                        price: "$19.99",
                        description: "A introspective and richly textured R&B album exploring themes of vulnerability, fame, and self-reflection with soulful vocals and acoustic-driven arrangements on tracks like Always and Do You Like Me?."
                    }
                ]
            },
            {
                name: "Thee Sacrad Souls",
                image: "images/rnb-artist-2.jpg",
                albums: [
                    {
                        title: "Thee Sacred Souls",
                        year: "2022",
                        price: "$17.99",
                        description: "A soulful, sweet retro-R&B debut blending classic 1960s and 70s San Diego warm soul with lush instrumentation, heartfelt vocal harmonies, and hits like Can I Call You Rose?."
                    },
                    {
                        title: "Got a Story to Tell",
                        year: "2024",
                        price: "$20.99",
                        description: "A rich, deeply emotional sophomore album expanding their signature souldies sound with polished grooves, strings, and introspective lyrics on love, resilience, and personal growth."
                    }
                ]
            },
            {
                name: "Frank Ocean",
                image: "images/rnb-artist-3.jpg",
                albums: [
                    {
                        title: "Channel Orange",
                        year: "2012",
                        price: "$18.99",
                        description: "A landmark modern R&B album blending storytelling, soulful melodies, and vibrant synth production, featuring acclaimed tracks like Thinkin Bout You and Pyramids."
                    },
                    {
                        title: "Blonde",
                        year: "2016",
                        price: "$21.99",
                        description: "An avant-garde R&B masterpiece exploring intimacy, memory, and heartbreak through minimalist production, experimental pitch-shifted vocals, and deeply personal songwriting on tracks like Nights and White Ferrari."
                    }
                ]
            }
        ]
    }
];


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

        // Local catalog used as backup
        renderCatalog(catalogData);
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

                    <button class="select-album">
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
}


if (catalogContainer) {
    loadCatalog();
}
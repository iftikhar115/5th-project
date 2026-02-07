document.addEventListener("DOMContentLoaded", () => {
    const URL = "https://api.github.com/repos/iftikhar115/ihr115-portfolio";
    const accessbtn = document.getElementById('fatch');
    const repodiv = document.getElementById('repo-card');

    const descriptions = [
        "This is my first GitHub project 🚀",
        "A frontend project built with HTML, CSS & JS 💻",
        "Learning APIs and fetch method 🔥",
        "Practice project for portfolio ⭐"
    ];

    let index = 0;
    let clickcount = 0;
    async function loadRepo() {
        try {
            repodiv.innerText = "Loading data...";
            const res = await fetch(URL);
            const data = await res.json();
            let desctext;
            if (clickcount === 0) {
                desctext = data.description || "No description available";
            } else {
                desctext = descriptions[index];
                index = (index + 1) % descriptions.length;
            }
            repodiv.innerHTML = `
                <h2>${data.name}</h2>
                <p>${desctext}</p>
                <p>⭐ Stars: ${data.stargazers_count}</p>
                <p>🛠 Language: ${data.language || "N/P"}</p>
            `;

            clickcount++;

        } catch (err) {
            repodiv.innerHTML = "❌ Error fetching data";
            console.error(err);
        }
    }
    accessbtn.addEventListener('click', loadRepo);
});

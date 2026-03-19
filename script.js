document.addEventListener("DOMContentLoaded", () => {

    function updateTime() {
        const now = new Date();
        const timeElement = document.getElementById("current-time");
        const dayElement = document.getElementById("current-day");

        if (!timeElement || !dayElement) return;

        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

        timeElement.textContent = now.toLocaleTimeString();
        dayElement.textContent = now.toLocaleDateString(undefined, options);
    }

    setInterval(updateTime, 1000);
    updateTime();

    async function getQuote() {
        try {
            const response = await fetch("https://api.alquran.cloud/v1/ayah/random/en.asad");
            const data = await response.json();

            console.log("Quote fetched:", data);

            document.getElementById("ayah").innerText = '"' + data.data.text + '"';
            document.getElementById("reference").innerText =
                "Surah " + data.data.surah.englishName + " (" + data.data.numberInSurah + ")";
        } catch (error) {
            console.error(error);
        }
    }

    getQuote();
});
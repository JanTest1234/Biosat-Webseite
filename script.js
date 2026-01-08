document.addEventListener("DOMContentLoaded", () => {
    const panels = document.querySelectorAll('.panel, .mission-step');

    function revealOnScroll() {
        const triggerPoint = window.innerHeight * 0.85;

        panels.forEach(panel => {
            const top = panel.getBoundingClientRect().top;
            if(top < triggerPoint){
                if(!panel.classList.contains('visible')){
                    panel.classList.add('visible');
                }
            }
        });
    }

    // Initial check
    revealOnScroll();

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('resize', revealOnScroll);
});

window.addEventListener("scroll", () => {
    const y = window.scrollY;
    const h = window.innerHeight;

    // Scroll-Fortschritt von 0 → 1
    const p = Math.min(y / (h * 1.5), 1);

    const stars = document.querySelector(".stars");
    const deep  = document.querySelector(".deep");

    // --- Crossfade ---
    stars.style.opacity = 1 - p;
    deep.style.opacity = p;

    // --- Parallax / leichte Animation ---
    stars.style.transform = `translateY(${p * -50}px) scale(${1 + p * 0.05}) rotate(${p * 1}deg)`;
    deep.style.transform  = `scale(${1 + p * 0.1}) rotate(${p * -2}deg)`;
});

const texts = {
    de: {
        headText: "Unsere Mission: Biologische Proben aus der Luft messen mit unserem innovativen CanSat.",
        teamTitle: "Unser Team",
        teamMembers: [
            {name: "Noah Heinrich", role: "Projektleiter"},
            {name: "Martin Reichart", role: "Technische Leitung"},
            {name: "Jan Koo", role: "Software"}
        ],
        missionTitle: "Unsere Mission",
        missionSteps: [
            {title: "Aufbau des CanSat", text: "Die Platine ist gebogen, in der Mitte befindet sich ein Ventilator sowie die biologische Probe. Die Konstruktion ist stabil und leicht, um präzise Messungen zu ermöglichen."},
            {title: "Sensorik & Datenerfassung", text: "Unsere Sensoren erfassen diverse Parameter aus der Umwelt in Echtzeit. Der Ventilator sorgt für konstante Luftzufuhr über die Probe. Alle Daten werden digital gespeichert."},
            {title: "Analyse & Auswertung", text: "Nach der Landung wird die biologische Probe analysiert."}
        ],
        sponsorsTitle: "Unsere Sponsoren",
        socialTitle: "Folge uns auf Instagram",
        footerText: "2025 Bio SatTeam.",
        impressum: "Impressum",
        blogTitle: "Blog"
    },
    es: {
        headText: "Nuestra misión: Medir muestras biológicas del aire con nuestro innovador CanSat.",
        teamTitle: "Nuestro equipo",
        teamMembers: [
            {name: "Noah Heinrich", role: "Líder del proyecto"},
            {name: "Martin Reichart", role: "Responsable técnico"},
            {name: "Jan Koo", role: "Software"}
        ],
        missionTitle: "Nuestra misión",
        missionSteps: [
            {title: "Construcción del CanSat", text: "La placa está doblada, en el centro hay un ventilador y la muestra biológica. La construcción es estable y ligera para permitir mediciones precisas."},
            {title: "Sensores y recopilación de datos", text: "Nuestros sensores registran diversos parámetros del entorno en tiempo real. El ventilador garantiza un flujo constante de aire sobre la muestra. Todos los datos se almacenan digitalmente."},
            {title: "Análisis y evaluación", text: "Después del aterrizaje, se analiza la muestra biológica."}
        ],
        sponsorsTitle: "Nuestros patrocinadores",
        socialTitle: "Síguenos en Instagram",
        footerText: "2025 Bio SatTeam.",
        impressum: "Aviso legal",
        blogTitle: "Blog"
    }
};

function changeLanguage(lang) {
    // Header Text
    document.getElementById("headText").textContent = texts[lang].headText;

    // Team
    document.querySelector("#team h2").textContent = texts[lang].teamTitle;
    const teamMembers = document.querySelectorAll("#team .team-member");
    teamMembers.forEach((member, index) => {
        if (texts[lang].teamMembers[index]) {
            member.querySelector("h3").textContent = texts[lang].teamMembers[index].name;
            member.querySelector("p").textContent = texts[lang].teamMembers[index].role;
        }
    });

    // Mission
    document.querySelector("#mission h2").textContent = texts[lang].missionTitle;
    const missionSteps = document.querySelectorAll("#mission .mission-text");
    missionSteps.forEach((step, index) => {
        if (texts[lang].missionSteps[index]) {
            step.querySelector("h3").textContent = texts[lang].missionSteps[index].title;
            step.querySelector("p").textContent = texts[lang].missionSteps[index].text;
        }
    });

    // Sponsoren
    document.querySelector("#sponsoren h2").textContent = texts[lang].sponsorsTitle;

    // Social Media
    document.querySelector("#socialMedia h2").textContent = texts[lang].socialTitle;

    // Footer
    document.querySelector("footer p").textContent = texts[lang].footerText;
    document.querySelector("footer a").textContent = texts[lang].impressum;

    // Blog
    const blog = document.querySelector("#blog");
    if (blog) blog.previousElementSibling.textContent = texts[lang].blogTitle;
}


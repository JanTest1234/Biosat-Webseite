document.addEventListener("DOMContentLoaded", () => {
    const panels = document.querySelectorAll('.panel, .mission-step');

    function revealOnScroll() {
        const triggerPoint = window.innerHeight * 0.85;

        panels.forEach(panel => {
            const top = panel.getBoundingClientRect().top;
            if (top < triggerPoint) {
                if (!panel.classList.contains('visible')) {
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
    const deep = document.querySelector(".deep");

    if (!stars || !deep) {
        return;
    }

    // --- Crossfade ---
    stars.style.opacity = 1 - p;
    deep.style.opacity = p;

    // --- Parallax / leichte Animation ---
    stars.style.transform = `translateY(${p * -50}px) scale(${1 + p * 0.05}) rotate(${p * 1}deg)`;
    deep.style.transform = `scale(${1 + p * 0.1}) rotate(${p * -2}deg)`;
});

const texts = {
    de: {
        headText: "Unsere Mission: Biologische Proben aus der Luft messen mit unserem innovativen CanSat.",
        teamTitle: "Unser Team",
        teamMembers: [
            { name: "Noah Heinrich", role: "Projektleiter" },
            { name: "Martin Reichart", role: "Technische Leitung" },
            { name: "Jan Koo", role: "Software" }
        ],
        missionTitle: "Unsere Mission",
        missionSteps: [
            { title: "Aufbau des CanSat", text: "Die gebogene Platine trägt Ventilator, Filter und Probenträger. Eine vibrationsarme Aufhängung schützt die Probe bei der Landung." },
            { title: "Sensorik & Datenerfassung", text: "Temperatur, Feuchte, Partikel und Luftdruck werden im Sekundentakt erfasst. Die Telemetrie sendet Live-Daten an die Bodenstation." },
            { title: "Analyse & Auswertung", text: "Nach der Bergung werden die Filter im Labor ausgewertet und mit den Flugparametern korreliert. So entsteht eine vollständige Bio-Luftkarte." }
        ],
        techTitle: "Technik im Überblick",
        timelineTitle: "Meilensteine",
        faqTitle: "FAQ",
        contactTitle: "Kontakt",
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
            { name: "Noah Heinrich", role: "Líder del proyecto" },
            { name: "Martin Reichart", role: "Responsable técnico" },
            { name: "Jan Koo", role: "Software" }
        ],
        missionTitle: "Nuestra misión",
        missionSteps: [
            { title: "Construcción del CanSat", text: "La placa está doblada y lleva ventilador, filtro y soporte de muestras. La suspensión amortigua el aterrizaje." },
            { title: "Sensores y recopilación de datos", text: "Temperatura, humedad, partículas y presión se registran cada segundo. La telemetría envía datos en directo." },
            { title: "Análisis y evaluación", text: "Tras la recuperación, los filtros se analizan en el laboratorio y se comparan con los datos del vuelo." }
        ],
        techTitle: "Tecnología en resumen",
        timelineTitle: "Hitos",
        faqTitle: "Preguntas frecuentes",
        contactTitle: "Contacto",
        sponsorsTitle: "Nuestros patrocinadores",
        socialTitle: "Síguenos en Instagram",
        footerText: "2025 Bio SatTeam.",
        impressum: "Aviso legal",
        blogTitle: "Blog"
    }
};

function changeLanguage(lang) {
    // Header Text
    const headText = document.getElementById("headText");
    if (headText) {
        headText.textContent = texts[lang].headText;
    }

    // Team
    const teamTitle = document.querySelector("#team h2");
    if (teamTitle) {
        teamTitle.textContent = texts[lang].teamTitle;
    }
    const teamMembers = document.querySelectorAll("#team .team-member");
    teamMembers.forEach((member, index) => {
        if (texts[lang].teamMembers[index]) {
            member.querySelector("h3").textContent = texts[lang].teamMembers[index].name;
            member.querySelector("p").textContent = texts[lang].teamMembers[index].role;
        }
    });

    // Mission
    const missionTitle = document.querySelector("#mission h2");
    if (missionTitle) {
        missionTitle.textContent = texts[lang].missionTitle;
    }
    const missionSteps = document.querySelectorAll("#mission .mission-text");
    missionSteps.forEach((step, index) => {
        if (texts[lang].missionSteps[index]) {
            step.querySelector("h3").textContent = texts[lang].missionSteps[index].title;
            step.querySelector("p").textContent = texts[lang].missionSteps[index].text;
        }
    });

    const techTitle = document.querySelector("#technik h2");
    if (techTitle) {
        techTitle.textContent = texts[lang].techTitle;
    }

    const timelineTitle = document.querySelector("#timeline h2");
    if (timelineTitle) {
        timelineTitle.textContent = texts[lang].timelineTitle;
    }

    const faqTitle = document.querySelector("#faq h2");
    if (faqTitle) {
        faqTitle.textContent = texts[lang].faqTitle;
    }

    const contactTitle = document.querySelector("#kontakt h2");
    if (contactTitle) {
        contactTitle.textContent = texts[lang].contactTitle;
    }

    // Sponsoren
    const sponsorTitle = document.querySelector("#sponsoren h2");
    if (sponsorTitle) {
        sponsorTitle.textContent = texts[lang].sponsorsTitle;
    }

    // Social Media
    const socialTitle = document.querySelector("#socialMedia h2");
    if (socialTitle) {
        socialTitle.textContent = texts[lang].socialTitle;
    }

    // Footer
    const footerText = document.querySelector("footer p");
    if (footerText) {
        footerText.textContent = texts[lang].footerText;
    }
    const footerLink = document.querySelector("footer a");
    if (footerLink) {
        footerLink.textContent = texts[lang].impressum;
    }

    // Blog
    const blogTitle = document.querySelector("#blog h2");
    if (blogTitle) {
        blogTitle.textContent = texts[lang].blogTitle;
    }
}

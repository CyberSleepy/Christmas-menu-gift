// ---------------- MENU DATA ----------------
const menuData = {
    title: "Seasonal Tasting Menu",
    subtitle: "A Cayman Winter Culinary Experience",
    iconLegend: [
        { icon: "V", label: "Vegan" },
        { icon: "VG", label: "Vegetarian" }
    ],
    courses: [
        {
            number: "Course I - Appetizer",
            name: "Christmas Crostini",
            description: "Crusty French bread topped with melty Brie, paired with crisp pear and fruity apple chutney.",
            vegetarian: true
        },
        {
            number: "Course II - Soup",
            name: "Tomato & Bell Pepper Velouté",
            description: "Slow-roasted tomatoes and bell peppers blended with garlic and shallot into a smooth, aromatic soup.",
            vegan: true
        },
        {
            number: "Course III - Palate Cleanser",
            name: "Lemon & Basil Granita",
            description: "A refreshing icy granita with bright lemon and fresh basil. Recipe link: https://example.com/granita",
            pairing: "Sparkling Limoncello Water",
            vegan: true
        },
        {
            number: "Course IV - Main Course",
            name: "Red Mushroom Pasta",
            description: "Earthy mushrooms simmered in a rich, herb-infused tomato sauce.",
            pairing: "Merlot",
            vegan: true
        },
        {
            number: "Course V - Pre-Dessert",
            name: "Roasted Pear with Vanilla Ice Cream",
            description: "Gently roasted pear served with vanilla ice cream.",
            vegetarian: true
        },
        {
            number: "Course VI - Assorted Desserts",
            name: "Seasonal Selection",
            description: "A curated assortment of desserts from Betty's in York, England.",
            vegetarian: true
        }
    ]
};

// ---------------- RENDER MENU ----------------
document.addEventListener("DOMContentLoaded", () => {
    const titleEl = document.getElementById("menu-title");
    const subtitleEl = document.getElementById("menu-subtitle");
    const menuEl = document.getElementById("menu");
    const legendEl = document.getElementById("icon-legend");

    if (titleEl) titleEl.textContent = menuData.title;
    if (subtitleEl) subtitleEl.textContent = menuData.subtitle;

    // Icon legend
    if (legendEl) {
        menuData.iconLegend.forEach(item => {
            const span = document.createElement("span");
            span.className = "legend-item";
            span.innerHTML = `<strong>${item.icon}</strong> ${item.label}`;
            legendEl.appendChild(span);
        });
    }

    // Menu courses
    if (!menuEl) return;

    menuData.courses.forEach((course, index) => {
        const section = document.createElement("section");
        section.className = "course";
        section.style.animationDelay = `${index * 0.08}s`;

        // Determine icon
        let icon = "";
        if (course.vegan) icon = `<span class="icon vegan">V</span>`;
        else if (course.vegetarian) icon = `<span class="icon vegetarian">VG</span>`;

        // Linkify description and pairing
        const descriptionHtml = linkifyHtml(course.description, { target: "_blank" });
        const pairingHtml = course.pairing
            ? linkifyHtml(`<strong>Pairing:</strong> ${course.pairing}`, { target: "_blank" })
            : "";

        // Insert HTML
        section.innerHTML = `
            <span class="course-number">${course.number}</span>
            <h2>${course.name} ${icon}</h2>
            <p>${descriptionHtml}</p>
            ${pairingHtml ? `<p class="pairing">${pairingHtml}</p>` : ""}
        `;

        menuEl.appendChild(section);
    });
});


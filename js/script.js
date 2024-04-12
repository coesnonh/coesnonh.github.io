document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function highlightNavLink() {
        let scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 70; // Offset to account for fixed navbar

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                const sectionId = current.getAttribute("id");
                const correspondingNavLink = document.querySelector(`#nav-${sectionId}`);

                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove("active");
                });

                // Add active class to corresponding nav link
                if (correspondingNavLink) {
                    correspondingNavLink.classList.add("active");
                }
            }
        });
    }

    // Call highlightNavLink on scroll and page load
    window.addEventListener("scroll", highlightNavLink);
    highlightNavLink(); // Highlight initially on page load
});
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");

    function toggleFooterVisibility() {
        const windowHeight = window.innerHeight;
        const fullDocumentHeight = document.body.offsetHeight;
        const scrollY = window.scrollY;

        // Calculer la position de défilement à partir du bas de la page
        const scrollPositionFromBottom = fullDocumentHeight - (scrollY + windowHeight);

        // Afficher le footer si l'utilisateur a atteint le bas de la page
        if (scrollPositionFromBottom < 50) {
            footer.style.display = "block"; // Afficher le footer
        } else {
            footer.style.display = "none"; // Cacher le footer
        }
    }

    // Ajouter un gestionnaire d'événement de défilement
    window.addEventListener("scroll", toggleFooterVisibility);

    // Appeler la fonction une fois au chargement de la page pour vérifier l'état initial
    toggleFooterVisibility();
});

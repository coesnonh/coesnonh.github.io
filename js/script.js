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
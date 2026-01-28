// ============================================
// Card Flipping Functionality
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  // Flip competency cards on click
  let last = null;
  document.querySelectorAll(".card-container").forEach(c =>
    c.addEventListener("click", () => {
      if (last && last !== c) last.classList.remove("flipped");
      c.classList.toggle("flipped");
      last = c.classList.contains("flipped") ? c : null;
    })
  );

  // Close navbar when a link is clicked
  const navbarLinks = document.getElementById('navbarLinks');
  if (navbarLinks) {
    navbarLinks.querySelectorAll('a.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const bsCollapse = new bootstrap.Collapse(navbarLinks, { toggle: false });
        bsCollapse.hide();
      });
    });
  }
});

// Flip project card
function flipCard(cardId) {
    const card = document.getElementById(cardId);
    if (card) {
        card.classList.toggle('flipped');
    }
}

// Flip hobby card
function fliphobby(cardId) {
    const card = document.getElementById(cardId);
    if (card) {
        card.classList.toggle('flipped');
    }
}

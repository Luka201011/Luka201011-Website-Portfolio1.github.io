document.addEventListener("DOMContentLoaded", () => {

  let last = null;
  document.querySelectorAll(".card-container").forEach(c =>
    c.addEventListener("click", () => {
      if (last && last !== c) last.classList.remove("flipped");
      c.classList.toggle("flipped");
      last = c.classList.contains("flipped") ? c : null;
    })
  );


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


function flipCard(cardId) {
    const card = document.getElementById(cardId);
    if (card) {
        card.classList.toggle('flipped');
    }
}

  // Mehr anzeigen Button
  const btn = document.getElementById("mehr-anzeigen-btn");
  const mehrSkills = document.getElementById("mehr-skills");

  if (btn && mehrSkills) {
    btn.addEventListener("click", () => {
      if (mehrSkills.style.display === "none" || mehrSkills.style.display === "") {
        mehrSkills.style.display = "flex";
        btn.textContent = "Weniger anzeigen";
      } else {
        mehrSkills.style.display = "none";
        btn.textContent = "Mehr anzeigen";
      }
    });
  }



function fliphobby(cardId) {
    const card = document.getElementById(cardId);
    if (card) {
        card.classList.toggle('flipped');
    }
}

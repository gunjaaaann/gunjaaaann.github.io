document.addEventListener("DOMContentLoaded", () => {
  const texts = [
    "Painting",
    "Sketching",
    "Illustrations",
    "Screenprinting",
    "Printmaking"
  ];

  const typingSpeed = 100; 
  const erasingSpeed = 50; 
  const delayBetweenTexts = 1500; 

  const rotatingCard = document.getElementById('rotating-card');

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      rotatingCard.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentText.length) {
        setTimeout(() => {
          isDeleting = true;
          type();
        }, delayBetweenTexts);
        return;
      }
    } else {
      rotatingCard.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }

    setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
  }

  type();

  // ✅ Card click handling
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      const url = card.dataset.href;
      card.classList.add("expand");
      setTimeout(() => {
        window.location.href = url;
      }, 700);
    });
  });
});

  const texts = [
    "Painting",
    "Sketching",
    "Illustrations",
    "Screenprinting",
    "Printmaking"
  ];

  const typingSpeed = 100; // ms per character
  const erasingSpeed = 50; // ms per character erased
  const delayBetweenTexts = 1500; // pause before erase

  const rotatingCard = document.getElementById('rotating-card');

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      // typing
      rotatingCard.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        // done typing, pause then start deleting
        setTimeout(() => {
          isDeleting = true;
          type();
        }, delayBetweenTexts);
        return;
      }
    } else {
      // deleting
      rotatingCard.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }

    setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
  }

  type(); // start the effect

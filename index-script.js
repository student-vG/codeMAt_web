
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll('.box-anim ');

  const observerOptions = {
    threshold: 0.5, // 50% of the element must be visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  }, observerOptions);

  boxes.forEach(box => {
    observer.observe(box);
  });
});

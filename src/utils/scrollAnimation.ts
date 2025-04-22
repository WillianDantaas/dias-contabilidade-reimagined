
export const setupScrollAnimation = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll('.animate-on-scroll, .slide-on-scroll, .scale-on-scroll');
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });

  return observer;
};

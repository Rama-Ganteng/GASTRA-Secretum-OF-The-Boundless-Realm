 let lastScrollTop = 0;
    window.addEventListener("scroll", function() {
      const navbar = document.getElementById("navbar");
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      navbar.style.top = scrollTop > lastScrollTop ? "-80px" : "0";
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));

    const hero = document.querySelector(".hero-content");
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        hero.classList.toggle("visible", entry.isIntersecting);
      });
    }, { threshold: 0.5 });
    heroObserver.observe(hero);

    document.addEventListener("DOMContentLoaded", () => {
      const animContainer = document.querySelector(".animated-elements");

      const uburubur = document.createElement("img");
      uburubur.src = "uburubur.png";
      uburubur.classList.add("jellyfish");
      animContainer.appendChild(uburubur);

      const paus = document.createElement("img");
      paus.src = "paus.png";
      paus.classList.add("whale");
      animContainer.appendChild(paus);

      const nemo = document.createElement("img");
      nemo.src = "nemo.png";
      nemo.classList.add("nemo");
      animContainer.appendChild(nemo);

      for (let i = 0; i < 15; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = Math.random() * 100 + "vw";
        bubble.style.bottom = Math.random() * 50 + "px";
        bubble.style.animationDuration = (3 + Math.random() * 3) + "s";
        animContainer.appendChild(bubble);
      }

      const seagrassLeft = document.createElement("img");
      seagrassLeft.src = "seaweed.png";
      seagrassLeft.classList.add("seagrass", "left");
      animContainer.appendChild(seagrassLeft);

      const seagrassRight = document.createElement("img");
      seagrassRight.src = "seaweed.png";
      seagrassRight.classList.add("seagrass", "right");
      animContainer.appendChild(seagrassRight);

      const hamburger = document.getElementById("hamburger");
      const navlist = document.querySelector(".navlist");
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navlist.classList.toggle("open");
      });
    });

    const eventDate = new Date("Sep 20, 2025 19:00:00").getTime();
    const countdownElement = document.getElementById("time");

    setInterval(function () {
    const now = new Date().getTime();
    const distance = eventDate - now;
    if (distance < 0) {
        countdownElement.innerHTML = "Acara Sedang Berlangsung!";
        return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdownElement.innerHTML = `Waktu menuju acara: ${days}h ${hours}j ${minutes}m ${seconds}d`;
    }, 1000);

    document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery-grid img");

  galleryImages.forEach(img => {
    img.addEventListener("mouseover", () => {
      img.style.transition = "transform 0.4s ease, box-shadow 0.4s ease";
      img.style.transform = "scale(1.1) rotate(2deg)";
      img.style.boxShadow = "0 8px 20px rgba(0, 255, 255, 0.5)";
    });

    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1) rotate(0deg)";
      img.style.boxShadow = "none";
    });
  });
});

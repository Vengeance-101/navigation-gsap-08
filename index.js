document.addEventListener("DOMContentLoaded", () => {
  const menuOpen = document.querySelector(".menu-open");
  const menuClose = document.querySelector(".menu-close");
  let isOpen = true;
  const defaultEase = "power2.inOut";

  gsap.set(".menu-logo", { y: 50 });
  gsap.set(".menu-link p", { y: 40 });
  gsap.set(".menu-sub-item p", { y: 12 });
  gsap.set("#img-2,#img-3,#img-4", { top: "150%" });

  menuOpen.addEventListener("click", () => {
    if (isOpen) {
      openMenu();
      console.log("hello");
    }
  });
  menuClose.addEventListener("click", () => {
    if (!isOpen) {
      closeMenu();
    }
    isOpen = !isOpen;
  });

  const openMenu = () => {
    gsap.to(".menu", {
      clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 1.25,
      ease: defaultEase,
    });

    gsap.to(".hero", {
      top: "-50%",
      opacity: 0,
      duration: 1.25,
      ease: defaultEase,
    });

    gsap.to(".menu-logo", {
      y: 0,
      duration: 1,
      opacity: 1,
      delay: 0.75,
      ease: "power3.out",
    });

    gsap.to(".menu-link p", {
      y: 0,
      duration: 1,
      delay: 1,
      opacity: 1,
      stagger: 0.075,
      ease: "power3.out",
    });
    gsap.to(".menu-sub-item p", {
      y: 0,
      duration: 0.075,
      stagger: 0.05,
      opacity: 1,
      delay: 1,
      ease: "power3.out",
    });

    gsap.to("#img-2,#img-3,#img-4", {
      top: "50%",
      duration: 1.25,
      ease: defaultEase,
      stagger: 0.1,
      delay: 0.25,
      onComplete: () => {
        gsap.set(".hero", { top: "50%" });
        isOpen = !isOpen;
      },
    });
  };

  const closeMenu = () => {
    gsap.to(".menu", {
      clipPath: "polygon(0 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1.25,
      ease: defaultEase,
    });

    gsap.to(".menu-items", {
      top: "-300px",
      opacity: 0,
      duration: 1.25,
      ease: defaultEase,
    });

    gsap.to(".hero", {
      top: "0%",
      opacity: 1,
      duration: 1.25,
      ease: defaultEase,
      onComplete: () => {
        gsap.set(".menu-logo", { y: 50 });
        gsap.set(".menu-link p", { y: 40 });
        gsap.set(".menu-sub-item p", { y: 12 });
        gsap.set(".menu-items", { opacity: 1, top: "0px" });
        gsap.set("#img-2,#img-3,#img-4", { top: "150%" });
      },
    });
  };
});

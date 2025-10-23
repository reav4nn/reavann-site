// ------- Osmo [https://osmo.supply/] ------- //

document.addEventListener("DOMContentLoaded", () => {
	// Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger);
  // Parallax Layers
  document.querySelectorAll('[data-parallax-layers]').forEach((triggerElement) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "0% 0%",
        end: "100% 0%",
        scrub: 0
      }
    });
    const layers = [
      { layer: "1", yPercent: 70 },
      { layer: "2", yPercent: 55 },
      { layer: "3", yPercent: 40 },
      { layer: "4", yPercent: 10 }
    ];
    layers.forEach((layerObj, idx) => {
      tl.to(
        triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
        {
          yPercent: layerObj.yPercent,
          ease: "none"
        },
        idx === 0 ? undefined : "<"
      );
    });
  });
});
/* Lenis */
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {lenis.raf(time * 1000);});
gsap.ticker.lagSmoothing(0);

// Contact form (Formspree) handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('contact-status');
  if (!form || !status) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.hidden = false;
    status.textContent = 'Sending…';

    try {
      const formData = new FormData(form);
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });
      if (res.ok) {
        status.textContent = 'Message sent successfully ✅';
        form.reset();
      } else {
        status.textContent = 'Failed to send message ❌ Please try again.';
      }
    } catch (err) {
      status.textContent = 'Failed to send message ❌ Please try again.';
    }
  });
});
// Content fade-in on scroll
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.parallax__content div').forEach((element) => {
    gsap.fromTo(element, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 1, scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });
});

// Extend fade-in to contact and footer sections
document.addEventListener("DOMContentLoaded", () => {
  const targets = [
    '#contact .contact__inner',
    '.site-footer .footer__inner',
    '.section'
  ];
  targets.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      gsap.fromTo(el, { opacity: 0, y: 40 }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  });
});

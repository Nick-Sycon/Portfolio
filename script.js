document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".site-header nav");

menuBtn.addEventListener("click", () => {
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  if (!open) {
    nav.style.position = "absolute";
    nav.style.top = "70px";
    nav.style.left = "6vw";
    nav.style.right = "6vw";
    nav.style.flexDirection = "column";
    nav.style.alignItems = "flex-start";
    nav.style.padding = "20px";
    nav.style.background = "#070909ee";
    nav.style.border = "1px solid #ffffff15";
    nav.style.borderRadius = "18px";
  }
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", () => {
    if (window.innerWidth <= 760) nav.style.display = "";
  });
});

document.getElementById("inquiryForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formMessage").textContent =
    "Thanks — your inquiry is ready to be connected to your email/WhatsApp backend.";
});

// Scroll reveal
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:.12});
document.querySelectorAll(".reveal,[data-reveal]").forEach(el => revealObserver.observe(el));

// Hero parallax
const hero = document.querySelector(".hero");
const orbA = document.querySelector(".orb-a"), orbB = document.querySelector(".orb-b");
hero.addEventListener("pointermove", e => {
  const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
  orbA.style.marginLeft = `${x*35}px`; orbA.style.marginTop = `${y*25}px`;
  orbB.style.marginLeft = `${x*-25}px`; orbB.style.marginTop = `${y*-20}px`;
});

// Magnetic buttons
document.querySelectorAll(".button,.nav-cta").forEach(button => {
  button.addEventListener("pointermove", e => {
    const r = button.getBoundingClientRect();
    button.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px)`;
  });
  button.addEventListener("pointerleave", () => button.style.transform = "");
});

// Hover video preview — automatically works when you replace a placeholder with <video>.
document.querySelectorAll(".project-media").forEach(card => {
  const video = card.querySelector("video");
  if (!video) return;
  video.muted = true; video.loop = true; video.playsInline = true;
  card.addEventListener("mouseenter", () => video.play().catch(()=>{}));
  card.addEventListener("mouseleave", () => {video.pause(); video.currentTime=0;});
});

// 3D tilt
document.querySelectorAll(".work-card").forEach(card => {
  card.addEventListener("pointermove", e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX-r.left)/r.width-.5, y = (e.clientY-r.top)/r.height-.5;
    card.style.transform = `translateY(-8px) perspective(900px) rotateX(${y*-2.5}deg) rotateY(${x*2.5}deg)`;
  });
  card.addEventListener("pointerleave", () => card.style.transform = "");
});

// Animated statistics
const statObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting || entry.target.dataset.done) return;
    entry.target.dataset.done = "1";
    const text = entry.target.textContent, m = text.match(/\d+/);
    if (!m) return;
    const target = +m[0], suffix = text.replace(m[0],"");
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now-start)/1100,1), eased = 1-Math.pow(1-p,3);
      entry.target.textContent = Math.round(target*eased)+suffix;
      if(p<1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
},{threshold:.6});
document.querySelectorAll(".stats strong").forEach(el=>statObserver.observe(el));

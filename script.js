emailjs.init("WpDuwWDXfzn4IfOk-");

const form=document.getElementById("contact-form");
const toast=document.getElementById("toast");

form.addEventListener("submit",e=>{
  e.preventDefault();
  emailjs.sendForm("service_fwtcadj","template_wnfe4xm",form).then(()=>{
    form.reset();
    toast.style.display="block";
    setTimeout(()=>toast.style.display="none",4000);
  });
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.2});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

/* IMAGE OPEN */
const modal=document.getElementById("imageModal");
const modalImg=document.getElementById("modalImage");

document.querySelectorAll(".zoomable").forEach(img=>{
  img.addEventListener("click",()=>{
    modalImg.src=img.src;
    modal.classList.add("active");
  });
});

modal.addEventListener("click",()=>{
  modal.classList.remove("active");
  modalImg.src="";
});

/* MOBILE SIDEBAR TOGGLE */
const hamburger=document.getElementById("hamburger");
const mobileSidebar=document.getElementById("mobileSidebar");
const mobileOverlay=document.getElementById("mobileOverlay");

function closeSidebar(){
  hamburger.classList.remove("active");
  mobileSidebar.classList.remove("active");
  mobileOverlay.classList.remove("active");
}

hamburger.addEventListener("click",()=>{
  const isActive=hamburger.classList.toggle("active");
  mobileSidebar.classList.toggle("active",isActive);
  mobileOverlay.classList.toggle("active",isActive);
});

mobileOverlay.addEventListener("click",closeSidebar);

document.querySelectorAll(".mobile-link").forEach(link=>{
  link.addEventListener("click",closeSidebar);
});
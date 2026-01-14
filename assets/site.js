const WHATSAPP_PHONE = "393409666810"; // 39 + numero
const CALENDLY_URL = "https://calendly.com/INSERISCI-LINK"; // <-- sostituisci

function scrollToId(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:"smooth"});
}

function toggleMobile(){
  const m = document.getElementById("mobile");
  if(!m) return;
  const open = m.style.display === "flex";
  m.style.display = open ? "none" : "flex";
}

function openWhatsApp(message){
  const text = encodeURIComponent(message || "Ciao NovaCasa, vorrei informazioni.");
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, "_blank");
}

function openCalendly(){
  window.open(CALENDLY_URL, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if(year) year.textContent = new Date().getFullYear();
});

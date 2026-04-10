/* ---  Header effect when scroll --- */

window.addEventListener('scroll', () => {
    const auheader = document.querySelector('.aura_header');
    auheader.style.background = window.scrollY > 50 ? 'rgba(0, 0, 0, 0.9)' : '#000';
    auheader.style.backdropFilter = window.scrollY > 50 ? 'blur(10px)' : 'none';
});

/* --- Effect of the form (submit button) --- */

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); 
    const btn = document.getElementById('sender_b');
    btn.innerText = 'DONE √';
    btn.style.color = '#db51ed'; 
    setTimeout(() => {
        btn.innerText = 'SEND_DATA';
        btn.style.color = ''; 
    }, 3000);
});


/* --- Typewriter effect of the tittle --- */

const auraHntxt = document.getElementById('first-text_a');
const textA = "AURA UI HN"; 
auraHntxt.textContent = ''; 
let i = 0;

function typeWriter() {
    if (i < textA.length) {
        auraHntxt.textContent += textA.charAt(i);
        i++;
        setTimeout(typeWriter, 80); 
    }
}

typeWriter();

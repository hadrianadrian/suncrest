document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  navToggle && navToggle.addEventListener('click', ()=> {
    if(nav.style.display === 'flex'){ nav.style.display = ''; }
    else { nav.style.display = 'flex'; nav.style.flexDirection = 'column'; nav.style.gap = '12px'; }
  });

  const download = document.getElementById('downloadDeck');
  if(download){
    download.addEventListener('click', (e)=>{
      e.preventDefault();
      alert('Investor deck download placeholder. Attach your PDF to the site and update this link.');
    });
  }
});

function submitForm(e){
  e.preventDefault();
  const f = document.getElementById('contactForm');
  const data = {
    name: f.name.value,
    email: f.email.value,
    message: f.message.value
  };
  console.log('Contact request:', data);
  alert('Thanks — your request was sent (placeholder). We will contact you shortly.');
  f.reset();
  return false;
}

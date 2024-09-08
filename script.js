document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const numero = document.getElementById('numero').value;
    
    const mailtoLink = `mailto:doanyo@gmail.com?subject=Contact%20de%20${nom}%20${prenom}&body=Email:%20${email}%0ANuméro%20de%20téléphone:%20${numero}`;
    window.location.href = mailtoLink;
});

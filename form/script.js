$(document).ready(function() {
    $('#etudiantForm').submit(function(event) {
        event.preventDefault();
        
        var cne = $('#cne').val();
        if (cne.trim() === '') {
            alert('Veuillez saisir le CNE.');
            return;
        }
        
        var nom = $('#nom').val();
        if (nom.trim() === '') {
            alert('Veuillez saisir le nom.');
            return;
        }
        
        var prenom = $('#prenom').val();
        if (prenom.trim() === '') {
            alert('Veuillez saisir le prénom.');
            return;
        }
        
        var email = $('#email').val();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Veuillez saisir une adresse email valide.');
            return;
        }
        
        var tel = $('#tel').val();
        if (tel.trim() === '') {
            alert('Veuillez saisir le numéro de téléphone.');
            return;
        }
        if (isNaN(tel) || tel.length !== 10) {
            alert('Veuillez saisir un numéro de téléphone valide (10 chiffres).');
            return;
        }
        
        alert('Le formulaire est valide. Envoi des données...');

        var formData = $(this).serializeArray();
        
        var infoDiv = $('#info');
        infoDiv.empty(); 
        
        for (var i = 0; i < formData.length; i += 6) {
            var nom = formData[i+2].value;
            var prenom = formData[i + 1].value;
            var cne = formData[i ].value;
            var email = formData[i + 3].value;
            var tel = formData[i + 4].value;
            var ville = formData[i + 5].value;
            
            var studentInfo = nom + ' ' + prenom + ' <ul><li>CNE: ' + cne + '</li><li>Email: ' + email + '</li><li>Tel: ' + tel + '</li><li>Ville: ' + ville + '</li></ul>';
            
            infoDiv.append(studentInfo);
        }
    });
});

 function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
$(document).ready(function() {
    // Lorsque je soumets le formulaire
    $('#contact-form-apple').on('submit', function(e) {
        e.preventDefault(); // J'empêche le comportement par défaut du navigateur, c-à-d de soumettre le formulaire

        var $this = $(this); // L'objet jQuery du formulaire


        // Je récupère les valeurs

        console.log('ok');
        console.log($('#name-apple'));
        var name = $('#name-apple').val();
        var email = $('#email-apple').val();
        var message = $('#message-apple').val();
        console.log(name);
        console.log(email);
        // Je vérifie une première fois pour ne pas lancer la requête HTTP
        // si je sais que mon PHP renverra une erreur

        if (!name || !email || !IsEmail(email)){
            alert('Veuillez entrer un nom et/ou une addresse mail valide');
        }
        else
        {
            var mailContent = "Nouvelle demande beta test sur iphone"+name+"\n Adresse mail : "+email;
            if(message)
                mailContent += " \n Message : "+message;

            // Envoi de la requête HTTP en mode asynchrone
            $.ajax({
                url: $this.attr('action'), // Le nom du fichier indiqué dans le formulaire
                method:"POST",
                dataType: "json", // La méthode indiquée dans le formulaire (get ou post)
                data: {message: mailContent}, // Je sérialise les données (j'envoie toutes les valeurs présentes dans le formulaire)
                success: function(data, textStatus, xhr) {
                    if(xhr.status==200)
                        alert('Nous vous tiendrons au courant de nos dernières actu ! \n Wefoot');
                    $('.getinfo').val('');
                }
            });
        }
    });

    // Lorsque je soumets le formulaire
    $('#contact-form-google').on('submit', function(e) {
        e.preventDefault(); // J'empêche le comportement par défaut du navigateur, c-à-d de soumettre le formulaire

        var $this = $(this); // L'objet jQuery du formulaire


        // Je récupère les valeurs

        console.log('ok');
        console.log($('#name-google'));
        var name = $('#name-google').val();
        var email = $('#email-google').val();
        var message = $('#message-google').val();
        console.log(name);
        console.log(email);
        // Je vérifie une première fois pour ne pas lancer la requête HTTP
        // si je sais que mon PHP renverra une erreur

        if (!name || !email || !IsEmail(email)){
            alert('Veuillez entrer un nom et/ou une addresse mail valide');
        }
        else
        {
            var mailContent = "Nouvelle demande beta test sur android"+name+"\n Adresse mail : "+email;
            if(message)
                mailContent += " \n Message : "+message;

            // Envoi de la requête HTTP en mode asynchrone
            $.ajax({
                url: $this.attr('action'), // Le nom du fichier indiqué dans le formulaire
                method:"POST",
                dataType: "json", // La méthode indiquée dans le formulaire (get ou post)
                data: {message: mailContent}, // Je sérialise les données (j'envoie toutes les valeurs présentes dans le formulaire)
                success: function(data, textStatus, xhr) {
                    if(xhr.status==200)
                        alert('Nous vous tiendrons au courant de nos dernières actu ! \n Wefoot');
                    $('.getinfo').val('');

                }
            });
        }
    });


    $('#contact-form-newsletter').on('submit', function(e) {
        e.preventDefault(); // J'empêche le comportement par défaut du navigateur, c-à-d de soumettre le formulaire

        var $this = $(this); // L'objet jQuery du formulaire


        // Je récupère les valeurs

        console.log('ok');
        console.log($('#name-newsletter'));
        var name = $('#name-newsletter').val();
        var email = $('#email-newsletter').val();
        var message = $('#message-newsletter').val();
        console.log(name);
        console.log(email);
        // Je vérifie une première fois pour ne pas lancer la requête HTTP
        // si je sais que mon PHP renverra une erreur

        if (!name || !email || !IsEmail(email)){
            alert('Veuillez entrer un nom et/ou une addresse mail valide');
        }
        else
        {
            var mailContent = "Nouvelle demande beta test "+name+"\n Adresse mail : "+email;
            if(message)
                mailContent += " \n Message : "+message;

            // Envoi de la requête HTTP en mode asynchrone
            $.ajax({
                url: $this.attr('action'), // Le nom du fichier indiqué dans le formulaire
                method:"POST",
                dataType: "json", // La méthode indiquée dans le formulaire (get ou post)
                data: {message: mailContent}, // Je sérialise les données (j'envoie toutes les valeurs présentes dans le formulaire)
                success: function(data, textStatus, xhr) {
                    if(xhr.status==200)
                      alert('Nous vous tiendrons au courant de nos dernières actu ! \n Wefoot');
                      $('.getinfo').val('');
                }
            });
        }
    });

});

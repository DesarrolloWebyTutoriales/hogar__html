$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow':'visible'});
});


$(document).ready(function(){ 
  $("#slider-testimonios").owlCarousel({
    items:1, 
    margin: 20,
    nav: true,
    dots: false,
    autoplay:true, 
    loop:true, 
    animateOut: 'fadeOut'
  });

  $('#ventana_suscripcion').on('show.bs.modal', function (e) {
      var email = $('#email').val();
      
      //Pass Values in modal
      var value = $('#Email').val(email);
      $('input[name=email_2]').attr('name');
      
  });

    // cuanndo le doy clic en cerrar la ventana modal, se limpia el valor del input text
    // que he ingresado
  $('#ventana_suscripcion').on('hidden.bs.modal', function () {
      $('input[name=correo]').val("");
  });

  // Si el boton es submit para enviar la suscripcion del usuario, le doy clic.
  $('.enviar_suscripcion').click(function() {
      
      // Envio los datos de todos los campos del html
      var name           = $('input[name=nombres]');
      var company        = $('input[name=empresa]');
      var country        = $('input[name=ciudad_pais]');
      var returnError    = false;

      var formsend       = $('#fsolicitud').serialize();        
      
      if (name.val()=='') 
      {
          name.addClass('error');
          returnError = true;
      } else name.removeClass('error');

      if (company.val()=='') 
      {
          company.addClass('error');
          returnError = true;
      } else company.removeClass('error');

      if (country.val()=='') 
      {
          country.addClass('error');
          returnError = true;
      } else country.removeClass('error');

      // A continuacion se resalta todos los campos que contengan errores.
      if(returnError == true)
      {
          return false;   
      }        
              
      // Se inicia el ajax
      $.ajax({
          // Colocamos la base url y el nombre de la ruta para que realize el proceso de envio de suscripcion.
          url: 'enviar.php',
          
          // el metodo que se usara es POST
          type: "POST",

          // colocamos la variable data para enviar los datos del formulario.
          data: formsend,   
          
          // No almacenar los temporales en la pagina
          cache: false,
          
          //success
          success: function(data){            
              
              $('#estado').fadeOut("fast",function()
              {
                  $('#estado').html(data);
              });
              
              $('#estado').fadeIn("slow");
              $("#fsolicitud").find('input[type=text]').val("");
              $('input:checkbox').removeAttr('checked');

          }

      });
      
      return false;
  
  }); 

  // jquery rate yo

  $("#rateYo_1").rateYo({
    rating: 3.6
  }); 

  $("#rateYo_2").rateYo({
    rating: 3.6
  });

  $("#rateYo_3").rateYo({
    rating: 3.6
  });

  $("#rateYo_4").rateYo({
    rating: 3.6
  });

  $("#rateYo_5").rateYo({
    rating: 3.6
  }); 

  $("#rateYo_6").rateYo({
    rating: 3.6
  });

  $("#rateYo_7").rateYo({
    rating: 3.6
  });

  $("#rateYo_8").rateYo({
    rating: 3.6
  });

  //prettyPhoto
  $("a[rel^='portfolio-image']").prettyPhoto();  
  // gallery lightbox
  $(".gallery .gallery-item a").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});

});   
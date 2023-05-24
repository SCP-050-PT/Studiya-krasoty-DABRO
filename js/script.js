$(document).ready(function(){
    $('.slider').slick({
       arrow:true,
       dots:true,
       adaptiveHeight:true,
       slidesToShow:2,
        autoplay:true,
        autopalySpeed:3000
    });
  });

  /*-------Форма обратной связи--------*/

  $('#forma').validate({
    rules: {
      text: 'required',
      name: {
          required: true,
          minlength: 3,
          },
      mail: {
        required: true,
        email: true,
      },
      date: {
        required: true,
      }
    },
    messages: {
      name: {
          required:'Заполните поле',
          minlength: 'Минимум 3 символа!',
      },
      message:{
          required:'Заполните поле',
      },
      /*profession:{
          required:'Выберите профессию!',
      }, */
      mail:{
          required:'Заполните поле',
          email:'Формат не соответствует email',
      }, 
      date: {
          required:'Выберите дату визита'
      }
    },
  
       submitHandler:function() {
  
  // Отправка формы Ajax -----------
     
   /* $("#form_prof").submit(function () {*/
      var form  = $("#forma");
     /* $("#form_prof").fancybox("closeClick");*/
          $.ajax({
              type: "POST",
              url: '../send-message.php',
              data: form.serialize(),
              beforeSend: function () {
                  // Вывод текста в процессе отправки
                  $(".result").css('display', 'block');
                  $(".result").html('<p style="text-align:center">Отправка...</p>');
                  $("#forma")[ 0 ].reset();
              },
              success: function (data) {
                // Вывод текста результата отправки
                  $(".result").css('display', 'block');
                  $(".result").html('<p style="text-align:center">'+data+'</p>');
                 $("#forma")[ 0 ].reset();
                 $(function(){
                    $(".result").delay(4000).fadeOut(800);
                });
              },
              error: function (jqXHR, text, error) {
                  $.fancybox.close();
  
                  // Вывод текста ошибки отправки
                  $(".result").css('display', 'block');
                  $(".result").html(error);
                  $("#forma")[ 0 ].reset();
              },
          });
          return false;
      }
      
      });/// Валидатор
  
    /*-------Форма обратной связи--------*/
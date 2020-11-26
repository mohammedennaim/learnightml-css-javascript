$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
        $('nav').addClass("sticky");
        }
        else{
        $('nav').removeClass("sticky");
        }
    });
});

$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY > 200) {
      $('.fa-arrow-alt-circle-up').addClass("sticky");
      }
      else{
      $('.fa-arrow-alt-circle-up').removeClass("sticky");
      }
  });
});
$(document).ready(function(){
  $('.fa-search').click(function(){
    $('search').toggle();
    $('.navbar').css('margin-top',60);
    $('main').css('margin-top',60);
  });
  $('#times1').click(function(){
    $('search').toggle();
    $('.navbar').css('margin-top',0);
    $('main').css('margin-top',0);
  });
});
$(document).ready(function(){
  $('.fa-bars').click(function(){
    $('.ul-block').toggle();
    $('.search').css('width',1159);
    $('.navbar').css('width',500);
    $('main').css('margin-left',-60);
  });
  $('#times2').click(function(){
    $('.ul-block').toggle();
    $('.search').css('width',1349);
    $('.navbar').css('width',850);
    $('main').css('margin-left',0);
  });
  
});
$(document).ready(function(){
  $('.fa-search').click(function(){
      $('.search').toggle();
  });
  $('#times1').click(function(){
    $('.search').toggle();
  });

});$(document).ready(function(){
  $('.fa-shopping-bag').click(function(){
      $('.main').toggle();
  });
});

  
  $(document).ready(function(){
    $('#para1').click(function(){
      $('.para-lorem1').toggle();
    });
    $('#para2').click(function(){
      $('.para-lorem2').toggle();
    });
    $('#para3').click(function(){
      $('.para-lorem3').toggle();
    });
    $('#para4').click(function(){
      $('.para-lorem4').toggle();
    });
  });
  
  
  /*var btnContainer = document.getElementById("myDIV");
  
  var btns = btnContainer.getElementsByClassName("rect");
  
  for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
  };*/
  
  
  /*var btnContainer = document.getElementById("myDIV");
  
  var btns = btnContainer.getElementsByClassName("rect");
  
  for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("");
    current[0].className = current[0].className.replace("");
    this.className += "";
  });
  };*/
  
  /*$(document).ready(function(){
    $('#jl1').click(function(){
      $('.para-lorem1').addClass('sticky');
    });
    $('#jl1.after').click(function(){
      $('.para-lorem1').removeClass('sticky');
    });

  });*/
  $(".rect").click(function(){
    $(".rect").each(function(){
      $(this).parent().removeClass("active");
      $(this).removeClass("active");
    });
    $(this).parent().addClass("active");
    $(this).addClass("active");
});
  
  
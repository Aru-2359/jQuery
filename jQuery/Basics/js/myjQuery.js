$(document).ready(function () {
  //ensures that jQuery code is executed only after the document is ready
  console.log("Document is ready.");
  // $('selector').action() -> syntax of jQuery
  //   $("p").click(function () {
  //     console.log("You clicked on <p> tag", this);
  //     //$('p').hide(); // hides all <p> tag
  //     //$(this).hide(); // hides only the one that has been clicked
  //   });

  //1. example of element selector
  //$('p').click();

  //2. example of id selector
  //$('#third').click();

  //3. example of class selector
  //$('.odd').click();

  //other selectors
  //$('*').click() //clicks on all the elements

  //$('p.odd').click(); //clicks <p> whose class = "odd"
  //$('p:first').click(); //clicks the first <p>

  //   $('p').dblclick(function(){
  //     console.log("<p> was double-clicked", this);
  //   });

  // $('p').mouseenter(function(){
  //     console.log("you entered", this);
  // });

  // $('p').mouseleave(function(){
  //     console.log("you left", this);
  // });

  // $('p').mousedown(function(){
  //     console.log("mouse down", this);
  // });

  // $('p').mouseup(function(){
  //     console.log("mouse up", this);
  // });

  // $('p').hover(function(){
  //     console.log("you hovered on ", this);
  // },
  // function(){
  //     console.log("Hola");
  // }
  // );

  //on method
  $("p").on({
    click: function () {
      console.log("yohoo this is", this);
    },
    mouseleave: function () {
      console.log("Thanks! mouse leave");
    },
  });

  // $('#what').hide(1000, function(){
  //     console.log("hidden"); //this callback function works after the paragraph is hidden
  // });
  // $('#what').show(1000, function(){
  //     console.log("shown"); //this callback function works after the paragraph is hidden
  // });

  $("#btn").click(function () {
    $("#what").toggle(1000); //if hidden then show, if shown then hide
  });
  //fadeOut(), fadeIn(), fadeToggle(), fadeTo()

//   $('#what').slideUp(1000, function(){
//     console.log("slid up");
//   });
//   $('#what').slideDown(1000, function(){
//     console.log("slid down");
//   });
//   $('#what').slideToggle(1000, function(){
//     console.log("toggled?")
//   });

  //Animations
//   $('#what').animate({
//     opacity: 0.3,
//     height: '150px',
//     width: '350px'
//   }, 1000);
    $('#what').animate({opacity: 0.3}, 4000);
    $('#what').animate({opacity: 0.9}, 4000);
    $('#what').animate({width: '300px'}, 1000);
    //$('#what').stop(); //stops the animation

    //to work with forms
    // $('#ta').val();
    // $('#ta').val('meww');
    // $('input').val("setting it to...");

    // $('#what').empty();
    // $('#what').text('you nice keep going');
    // $('#what').remove();
    // $('#what').addClass('myClass');

    $('#what').css('background-color' , 'DodgerBlue');

    //AJAX jQuery
    // $.get("https://code.jquery.com/jquery-3.7.1.js")

    // $.get("https://code.jquery.com/jquery-3.7.1.js", function(data, stuatus){alert(data)})

    // $.get("https://code.jquery.com/jquery-3.7.1.js", function(data, status){alert(status)})

    // $.post("https://code.jquery.com/jquery-3.7.1.js", {name: 'aru', age: 21}, function(data, status){alert(status)})
    

});

// JQuery
$(document).ready(function(){
	$('#hide').click(function(){
		$('h2').hide(2000);
	});
	$('#show').click(function(){
		$('h2').show(2000);
	});
	$('#toggle').click(function(){
		$('h2').toggle("slow");
	});
	$('.box1').click(function(){
		$('.box2').slideToggle();
	});
	$( "#draggable" ).draggable();
	
	$( "#accordion" ).accordion();
	$( "#accordiom" ).accordion({
      collapsible: true
    });
	
	var info=[
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#input" ).autocomplete({
      source: info
    });
	
	// $( "#draggabl" ).draggable();
    // $( "#droppabl" ).droppable({
      // drop: function( event, ui ) {
        // $( this )
          // .addClass( "ui-state-highlight" )
          // .find( "p" )
            // .html( "Dropped!" );
      // }
    // });
	
	$( "#resizable" ).resizable();
	
	$( "#datepicker" ).datepicker();
	
	$( document ).tooltip();
	
	
	
});

$( function() {
   $( "#button" ).on( "click", function() {
     $( "#effect" ).addClass( "newClass", 1000, callback );
   });
 
   function callback() {
    setTimeout(function() {
      $( "#effect" ).removeClass( "newClass" );
    }, 1500 );
  };
  $( "#butto" ).on( "click", function() {
    $( "#effec" ).removeClass( "newClas", 1000, callback );
	
	
  });
 
  function callback() {
    setTimeout(function() {
      $( "#effec" ).addClass( "newClas" );
    }, 1500 );
  };
  
  $( "#butt" ).on( "click", function() {
      $( "#effe" ).toggleClass( "newCla", 1000 );
    });
	
  $( "#but" ).on( "click", function() {
    $( ".newCl" ).switchClass( "newCl", "anotherNewClass", 1000 );
	  $( ".anotherNewClass" ).switchClass( "anotherNewClass", "newCl", 1000 );
    });
	
	$( "#tabs" ).tabs();
	
	var state = true;
    $( "#buttonn" ).on( "click", function() {
      if ( state ) {
        $( "#ef" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#ef" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
	
	// run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#effecct" ).hide( selectedEffect, options, 1000, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effecct" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#buttoon" ).on( "click", function() {
      runEffect();
    });
	
	$( "#progressbar" ).progressbar({
      value: 37
    });
	
	$( "#menu" ).menu();
	
	$( "#slider" ).slider();
	
	$( "#speed" ).selectmenu();
    $( "#files" ).selectmenu();
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
    $( "#salutation" ).selectmenu();
} );


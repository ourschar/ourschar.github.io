$(function() {
  // Add smooth scrolling on all links inside the navbar
  $("#bs-example-navbar-collapse-1 a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });

    } // End if
  });



  $('#textBox').keyup(function() {
    var innerTextBox = $('#textBox');
    
    if (innerTextBox.val() === "")  {
        innerTextBox.addClass('error');
    }
    else {
      innerTextBox.removeClass('error');
    } 
    return;
  });


  $("#searchButton").click(function() {
    var textBoxField = $("#textBox");
    var url = "https://api.fda.gov/drug/label.json?search=" + textBoxField.val();

    $.ajax({
      url: url,
      dataType: 'json',
      success: function(data) {

        $('#home').text(data.results[0].indications_and_usage[0]);
        $('#profile').text(data.results[0].adverse_reactions[0]);
        $('#messages').text(data.results[0].overdosage[0]);
      }
    }); 

  });

});

  




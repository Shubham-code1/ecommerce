// adding active class to clicked navlink and removing active class from previously active link
$(document).ready(function() {
    $('.nav-link').on('click', function() {
  
      
      // Remove active class from all links except the clicked one
      $('.nav-link').not(this).removeClass('active');
      
      // Add or toggle active class on the clicked link
      $(this).toggleClass('active');
    });
  });

// navbar color changing as per scroll and screen size
  


  $(document).ready(function () {
    $(window).on("load resize scroll", function() {
      // Check if screen width is greater than 992px
      if ($(window).width() > 992) {
        if ($(this).scrollTop() > 0) {
          $(".myNav").removeClass("nav-trans");
          $(".myNav").addClass("nav-solids");
          $(".nav-link").css("color", "black");
          $(".dropdown-menu").css("background", "linear-gradient(to right, #fee8e8, #ffffff)");
          // ... other changes you want to make
        } else {
          $(".myNav").addClass("nav-trans");
          $(".fa-user").css("color", "gray");
          $(".fa-cart-shopping").css("color", "gray");
          $(".myNav").removeClass("nav-solids");
          $(".nav-link").css("color", "rgb(200, 198, 198)");
          $(".dropdown-menu").css("background", "linear-gradient(to right, #fee8e8, #ffffff)");
          $(".fa-bars").css("color", "rgb(217, 216, 216)");
          // ... other changes for when scrollTop is 0
        }
      } else {
        // If screen width is less than or equal to 992px, revert changes
        $(".myNav").addClass("nav-solids");
        $(".nav-link").css("color", "rgb(200, 198, 198) !important");
      }
    });
  });


  // performing nominal search 

  $(document).ready(function() {
    $('#myForm').on('submit', function(event) {
      event.preventDefault(); // Preventing the form from submitting and refreshing the page
  
      // Getting the input value 
      let userInput = $('#searchbox').val();

      if(userInput){
            userInput = userInput.trim();
      }else{
        $('#searchbox').val("");
        alert('Please enter any alphabets');
        return;
      }
  
      // Regular expression to allow only alphabetic characters
      var regex = /^[a-zA-Z]+$/;
  
      // Checking the input matches the pattern
      if (regex.test(userInput)) {
        // Scrolling to the section with the ID 'category'
        $('html, body').animate({
          scrollTop: $('#category').offset().top
        }, 500); 
      } else {
        // If the input doesn't match, here an error shows in alert.
        $('#searchbox').val("")
        alert('Please enter only alphabetic characters!');
        $('#searchbox').val = "";
        return;
      }
    });
  });


// checking the pin code
  $(document).ready(function(){
    $("#check-btn").on("click",function(e){
      e.preventDefault();
     let pin =  $(".del-ip").val();

     let el = "";
     el = $("#del-msg").html();
     
   
     if(!isNaN(pin) && pin.length ===6){
       
       if(el == ""){
        $("#del-msg").html("Checking.......");
       }
       setTimeout(()=>{
        $("#del-msg").html("We are delievering at you address.");
       },2000)

       setTimeout(()=>{
        $("#del-msg").html("");
       },6000)
       
         
     }else{
      $("#del-msg").html("Invalid Pin code");
       setTimeout(()=>{
        $("#del-msg").html("");
       },2000)
     }
    })
  })


// here adding and removing the cusomer reviews -- product diplay page section
  $(document).ready(function(){

    let reviewsAppended = false;

    $("#viewMore").on("click", function(){
      if (!reviewsAppended) {
        for (let i = 0; i < 2; i++) {

          let myData = `<div class="each-review border-bottom ps-2 mt-2">
            <h6>By Carolina James &#x1F60A;&#x1F60A;</h6>
            <p>Precise Liner Pen</p>
            <p>
              <span class="rating-box btn py-0 px-0 btn-rating fw-medium">4.5<i class="fa-solid fa-star text-black"></i></span>
              I've noticed a visible reduction in my dark circles since using this eye cream. It's gentle and absorbs quickly. My under-eye area looks brighter and feels smoother. Highly recommend!
            </p>
          </div>`;
  
          $("#review-container").append(myData);
        }
        $("#viewMore").text("View Less");
        reviewsAppended = true;
      } else {
        $("#review-container").children().slice(3).remove();
        $("#viewMore").text("View More");
        reviewsAppended = false;
      }
    });
  });



  // updating the total qty of items in cart 


  $(document).ready(function(){
    let productQuantityInCart = JSON.parse(localStorage.getItem("itemsInCart"));
      $(".cart-order").html(productQuantityInCart.length);

  });

  // performing the hiding of chat section

  $(document).ready(function() {
    // Initially hide the chat
    $('.chat').hide();
  
    // Function to show the chat on scroll
    function showChatOnScroll() {
      $('.chat').fadeIn();
      // Removing this particular scroll event listener after showing the chat
      $(window).off('scroll', showChatOnScroll);
    }
  
    // Attaching again the scroll event listener to show the chat
    $(window).on('scroll', showChatOnScroll);
  
    // On clicking of the cross button, hiding the chat
    $('#cross').on('click', function() {
      $('.chat').fadeOut(); // Hiding the chat
    });
  });



  $(document).ready(function(){
    function checkScreenSize() {
      if ($(window).width() < 373) {
        $('#removePara').remove(); // Removes the entire element
      }
    }
    // Initial check on document ready
    checkScreenSize();
    // Check screen size on window resize
    $(window).resize(function() {
      checkScreenSize();
    });
  });


  // subscribe function of footer

  if(!localStorage.getItem("subscribedUser")){
    localStorage.setItem("subscribedUser","[]");
  }

  $(document).ready(function() {
    $('#subscribe_me').click(function() {
      
      // Getting the value from the input field
      var email = $('#subs_email').val();
  
      // Performing a basic email check
      var emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      else{
            let user = JSON.parse(localStorage.getItem("subscribedUser"));
            user.push(email);
            localStorage.setItem('subscribedUser', JSON.stringify(user));
            alert('User subscribed successfully: ' + email);
    }
      setTimeout(function() {
        $('#subs_email').val(""); // Setting the input value to an empty string after 100 milliseconds
      }, 100);

    });
  });

  // adding message to cart when no items are available in cart 

  $(document).ready(function(){
    let cartItems = JSON.parse(localStorage.getItem("itemsInCart"));
    console.log("cart item",cartItems)
    if(cartItems.length <= 0){
      $("#warn_msg").html("No items in Cart, Please Add items to cart");  // adding message
      console.log("no item in cart")
      return;
    }else{
      $("#warn_msg").remove(); // removing the same message
    }
  });
  
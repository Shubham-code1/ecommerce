
//Lipstick products list
const lipsticks = [
  {
      id: 893,
      name: "Mars",
      desc: "Matte Lipstick Lit liquid",
      price: "Rs. 256",
      oldPrice: "Rs. 395",
      off: "35% off",
      rating: 4.5,
      picture: "../assets/images/lipstick/lip1.webp"
  },
  {
      id: 159,
      name: "Venus",
      desc: "Glossy Lip Plumper",
      price: "Rs. 299",
      oldPrice: "Rs. 450",
      off: "33% off",
      rating: 4.8,
      picture: "../assets/images/lipstick/lip3.webp"
  },
  {
      id: 171,
      name: "Jupiter",
      desc: "Long-Lasting Lip Stain",
      price: "Rs. 349",
      oldPrice: "Rs. 500",
      off: "30% off",
      rating: 4.3,
      picture: "../assets/images/lipstick/lip1.webp"
  },
  {
      id: 206,
      name: "Saturn",
      desc: "Creamy Lipstick",
      price: "Rs. 275",
      oldPrice: "Rs. 400",
      off: "31% off",
      rating: 4.6,
      picture: "../assets/images/lipstick/lip2.webp"
  },
  {
      id: 455,
      name: "Mercury",
      desc: "Velvet Matte Lip Color",
      price: "Rs. 289",
      oldPrice: "Rs. 420",
      off: "31% off",
      rating: 4.4,
      picture: "../assets/images/lipstick/lip5.webp"
  },
  {
      id: 402,
      name: "Earth",
      desc: "Hydrating Lip Tint",
      price: "Rs. 315",
      oldPrice: "Rs. 480",
      off: "34% off",
      rating: 4.7,
      picture: "../assets/images/lipstick/lip6.webp"
  },
  {
      id: 164,
      name: "Pluto",
      desc: "Shimmering Lip Gloss",
      price: "Rs. 259",
      oldPrice: "Rs. 380",
      off: "32% off",
      rating: 4.2,
      picture: "../assets/images/lipstick/lip2.webp"
  },
  {
      id: 951,
      name: "Uranus",
      desc: "Metallic Lipstick",
      price: "Rs. 289",
      oldPrice: "Rs. 420",
      off: "31% off",
      rating: 4.5,
      picture: "../assets/images/lipstick/lip5.webp"
  },
  {
      id: 417,
      name: "Neptune",
      desc: "Moisturizing Lip Balm",
      price: "Rs. 199",
      oldPrice: "Rs. 250",
      off: "20% off",
      rating: 4.6,
      picture: "../assets/images/lipstick/lip1.webp"
  },
  {
      id: 128,
      name: "Mars 2.0",
      desc: "Ultra Matte Lipstick",
      price: "Rs. 279",
      oldPrice: "Rs. 410",
      off: "32% off",
      rating: 4.6,
      picture: "../assets/images/lipstick/lip1.webp"
  },
  {
      id: 50,
      name: "Venus Red",
      desc: "Classic Red Lipstick",
      price: "Rs. 299",
      oldPrice: "Rs. 450",
      off: "33% off",
      rating: 4.9,
      picture: "../assets/images/lipstick/lip2.webp"
  },
  {
      id: 49,
      name: "Jupiter Pink",
      desc: "Bold Pink Lip Color",
      price: "Rs. 325",
      oldPrice: "Rs. 480",
      off: "32% off",
      rating: 4.7,
      picture: "../assets/images/lipstick/lip2.webp"
  }
];
// Eyeliner products list
const eyeliners = [
  {
      id: 48,
      name: "Classic Black",
      desc: "Waterproof Liquid Eyeliner",
      price: "Rs. 199",
      oldPrice: "Rs. 250",
      off: "20% off",
      rating: 4.2,
      picture: "../assets/images/eyeliner/eye2.webp"
  },
  {
      id: 47,
      name: "Gel Precision",
      desc: "Smudge-proof Gel Eyeliner",
      price: "Rs. 249",
      oldPrice: "Rs. 350",
      off: "29% off",
      rating: 4.5,
      picture: "../assets/images/eyeliner/eye3.webp"
  },
  {
      id: 46,
      name: "Ultrafine Pen",
      desc: "Precision Liquid Eyeliner Pen",
      price: "Rs. 299",
      oldPrice: "Rs. 400",
      off: "25% off",
      rating: 4.3,
      picture: "../assets/images/eyeliner/eye4.webp"
  },
  {
      id: 45,
      name: "Matte Finish",
      desc: "Matte Black Eyeliner",
      price: "Rs. 279",
      oldPrice: "Rs. 380",
      off: "27% off",
      rating: 4.4,
      picture: "../assets/images/eyeliner/eye6.webp"
  },
  {
      id: 44,
      name: "Bold Marker",
      desc: "Bold Tip Marker Eyeliner",
      price: "Rs. 259",
      oldPrice: "Rs. 350",
      off: "26% off",
      rating: 4.1,
      picture: "../assets/images/eyeliner/eye7.jpg"
  },
  {
      id: 43,
      name: "Colorful Strokes",
      desc: "Colorful Liquid Eyeliner Set",
      price: "Rs. 349",
      oldPrice: "Rs. 450",
      off: "22% off",
      rating: 4.6,
      picture: "../assets/images/eyeliner/eye8.jpg"
  },
  {
      id: 42,
      name: "Long Lasting Ink",
      desc: "Long-lasting Ink Eyeliner",
      price: "Rs. 289",
      oldPrice: "Rs. 380",
      off: "24% off",
      rating: 4.0,
      picture: "../assets/images/eyeliner/eye9.jpg"
  },
  {
      id: 41,
      name: "Precision Liner",
      desc: "Precision Black Eyeliner",
      price: "Rs. 269",
      oldPrice: "Rs. 350",
      off: "23% off",
      rating: 4.7,
      picture: "../assets/images/eyeliner/eye10.jpg"
  },
  {
      id: 40,
      name: "Dramatic Duo",
      desc: "Duo Eyeliner Set",
      price: "Rs. 399",
      oldPrice: "Rs. 500",
      off: "20% off",
      rating: 4.8,
      picture: "../assets/images/eyeliner/eye11.jpg"
  },
  {
      id: 39,
      name: "Sparkle Liner",
      desc: "Glitter Liquid Eyeliner",
      price: "Rs. 279",
      oldPrice: "Rs. 380",
      off: "27% off",
      rating: 4.4,
      picture: "../assets/images/eyeliner/eye12.jpg"
  },
  {
      id: 38,
      name: "Precision Ink",
      desc: "Precision Ink Eyeliner Pen",
      price: "Rs. 299",
      oldPrice: "Rs. 400",
      off: "25% off",
      rating: 4.5,
      picture: "../assets/images/eyeliner/eye13.jpg"
  },
  {
      id: 37,
      name: "Smoky Eye Liner",
      desc: "Smoky Eye Effect Eyeliner",
      price: "Rs. 289",
      oldPrice: "Rs. 380",
      off: "24% off",
      rating: 4.3,
      picture: "../assets/images/eyeliner/eye14.jpg"
  },
  {
      id: 36,
      name: "Ultrafine Liner",
      desc: "Ultrafine Black Eyeliner",
      price: "Rs. 259",
      oldPrice: "Rs. 350",
      off: "26% off",
      rating: 4.6,
      picture: "../assets/images/eyeliner/eye18.webp"
  },
  {
      id: 35,
      name: "Graphic Liner",
      desc: "Graphic Marker Eyeliner",
      price: "Rs. 279",
      oldPrice: "Rs. 380",
      off: "27% off",
      rating: 4.2,
      picture: "../assets/images/eyeliner/eye19.jpg"
  }
];

// foundation products list
const foundations = [
    {
      id: 1,
      name: "Flawless",
      desc: "Med fnd",
      price: "Rs. 499",
      oldPrice: "Rs. 599",
      off: "17% off",
      rating: 4.5,
      picture: "../assets/images/foundation/f1.webp"
    },
    {
      id: 2,
      name: "Radiant",
      desc: "Dewy fnd",
      price: "Rs. 599",
      oldPrice: "Rs. 699",
      off: "15% off",
      rating: 4.8,
      picture: "../assets/images/foundation/f2.webp"
    },
    {
      id: 3,
      name: "Smooth",
      desc: "Silky fnd",
      price: "Rs. 459",
      oldPrice: "Rs. 529",
      off: "13% off",
      rating: 4.3,
      picture: "../assets/images/foundation/f3.webp"
    },
    {
      id: 4,
      name: "Glowy",
      desc: "Glow fnd",
      price: "Rs. 549",
      oldPrice: "Rs. 649",
      off: "15% off",
      rating: 4.6,
      picture: "../assets/images/foundation/f4.webp"
    },
    {
      id: 5,
      name: "Matte",
      desc: "Matte fnd",
      price: "Rs. 479",
      oldPrice: "Rs. 549",
      off: "12% off",
      rating: 4.4,
      picture: "../assets/images/foundation/f5.webp"
    },
    {
      id: 6,
      name: "Dewy",
      desc: "Dewy finish",
      price: "Rs. 509",
      oldPrice: "Rs. 599",
      off: "15% off",
      rating: 4.2,
      picture: "../assets/images/foundation/f6.webp"
    },
    {
      id: 7,
      name: "Cover",
      desc: "Full coverage",
      price: "Rs. 579",
      oldPrice: "Rs. 699",
      off: "17% off",
      rating: 4.7,
      picture: "../assets/images/foundation/f7.webp"
    },
    {
      id: 8,
      name: "Lumin",
      desc: "Luminous fnd",
      price: "Rs. 629",
      oldPrice: "Rs. 749",
      off: "16% off",
      rating: 4.9,
      picture: "../assets/images/foundation/f8.webp"
    },
    {
      id: 9,
      name: "Silk",
      desc: "Smooth finish",
      price: "Rs. 539",
      oldPrice: "Rs. 629",
      off: "14% off",
      rating: 4.6,
      picture: "../assets/images/foundation/f11.webp"
    },
    {
      id: 10,
      name: "Blend",
      desc: "Blended fnd",
      price: "Rs. 499",
      oldPrice: "Rs. 599",
      off: "17% off",
      rating: 4.3,
      picture: "../assets/images/foundation/f13.webp"
    },
    {
      id: 11,
      name: "Sheer",
      desc: "Sheer fnd",
      price: "Rs. 469",
      oldPrice: "Rs. 549",
      off: "15% off",
      rating: 4.2,
      picture: "../assets/images/foundation/f15.webp"
    },
    {
      id: 12,
      name: "Airy",
      desc: "Light fnd",
      price: "Rs. 509",
      oldPrice: "Rs. 599",
      off: "15% off",
      rating: 4.4,
      picture: "../assets/images/foundation/f3.webp"
    }
  ]; 

  // function for showing features not available

  function featurenotAvailable(){
    alert("features not Available right now");
    return;
  }

// function for adding and removing wishlist
function changeColor(id){
    let heart = document.getElementById(`heart${id}`);
    let wishlist = document.getElementById(`wishlist${id}`);
    if(heart.style.color == "pink" ){
        heart.style.color = "";
        wishlist.innerText = "unlisted";
    }else{
        heart.style.color = "pink";
        wishlist.innerText = "Added to wishlist";
    }
// removing text appearing after modifying wishlist
    setTimeout(()=>{
        wishlist.innerText = "";
    },1000);
};

function add(paramsId){

  let element = document.getElementById(`add${paramsId}`);
  let heartElemnt = document.getElementById(`f-heart${paramsId}`);

  if(heartElemnt.style.color == "pink"){
    heartElemnt.style.color = "";
    element.innerHTML = "unlisted";
  }else{
    heartElemnt.style.color = "pink";
    element.innerHTML = "Added to wishlist";
}

setTimeout(()=>{
  element.innerText = "";
},1000);

}

let myItem = null;

function mapProducts(item){

    let obj = {
        "lipstick":lipsticks,
        "eyeliner" : eyeliners,
        "foundation":foundations
    };

let itemToDisplay = obj[item];
// on each function call assigning myItem with current object present on productdisplay section
myItem = [...itemToDisplay];

if(itemToDisplay){
    let productContainer = document.getElementById("productContainer");
    // below removing previously appended product cards
    productContainer.innerHTML = "";


    // adding card after each iteration of products list
    itemToDisplay.map((el,index)=>{
        
        const card = document.createElement("div");
        card.classList.add("col-md-4","col-lg-3","col-sm-6","mb-5");
        card.innerHTML = `
        <div class="card">
        <div class="card-image-holder">
                <img src=${el.picture} class="card-img-top" alt="Product 1">
        </div>
          
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p class="mb-1">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span class="rating">${el.rating}</span>
              </p>

              <p>
                <a id="${el.id}" onclick="changeColor(${el.id})" title="Add to wishlist">
                  <i class="fa-solid fa-heart" id="heart${el.id}"></i>
                </a>
              </p>
            </div>
            
            <h5 class="card-title mb-1">${el.name}</h5>
            <p class="my-0 card-text desc">${el.desc}</p>

            <p class="mt-0 mb-2 ">
            <strong>
              <span class="price">${el.price}</span>
            </strong> 
              <del class="old-price">${el.oldPrice}</del> 
              <span class="price-off">( ${el.off} )</span>
            </p>
            <button  class="btn card-button" onclick="fetchProduct(${el.id})">Buy Now</button>
            <span class="mt-1 my-0 wishlist" id="wishlist${el.id}"></span>
          </div>
        </div>
      `
        productContainer.appendChild(card);
    })
}else{
    return;
}
};


// This function is being called using dropdowns in Navbar
function showProducts(category){
   
  switch (category) {
    case 'lipstick':
                mapProducts("lipstick");
      break;
    case 'foundation':
                mapProducts("foundation");   
      break;
    case 'eyeliner':
                mapProducts("eyeliner");
      break;
    default: 
       mapProducts("lipstick");
  }
};

showProducts();


// dummy function for future use
async function fetchProduct(productId){
  
  // setting currentItem to localStorage
    localStorage.setItem("myItems",JSON.stringify(myItem));

 

  let productToShow = myItem.find((el)=>{
          return productId === el.id;
  });

let response = await fetch('../static/productDisplay.html');
let data = await response.text();

data = data.replace("{{Product Name}}",productToShow.name);
data = data.replace("{{price}}",productToShow.price);
data = data.replace("{{old price}}",productToShow.oldPrice);
data = data.replace("{{off}}",productToShow.off);
data = data.replace("{{rating}}",productToShow.rating);
data = data.replace("path/to/image",productToShow.picture);
data = data.replace("{{Description}}",productToShow.desc);
data = data.replace("addCartId",productToShow.id);

let newWindow = window.open('http://127.0.0.1:5500/productDisplay.html');
newWindow.document.open();
newWindow.document.write(data);
newWindow.document.close();
newWindow.document.title = "Product Description :: " + productToShow.name;

let favIcons = newWindow.document.createElement("link");
favIcons.rel = "icon";
favIcons.href = "../assets/images/logos.png";
newWindow.document.head.appendChild(favIcons);

}


// Adding to cart

// checking either localstorage has cartitem array or not if not it will set a empty array so that items can be pushed into that

if(!localStorage.getItem("itemsInCart")){
  localStorage.setItem("itemsInCart","[]");
}

// adding the item to the cart

function addToCart(id){

    let myCurrentItem = JSON.parse(localStorage.getItem("myItems"));
    let m = document.getElementsByClassName("addCartClass")[0];

    let myId = +m.id;

    let productToAddTotheCart = myCurrentItem.find((el)=>{
          return myId === el.id;
    });


    let confirmToAdd = confirm("Are you sure to Add the item in cart ?");

    if(confirmToAdd){
        let cartArray = JSON.parse(localStorage.getItem("itemsInCart"));
        cartArray.push(productToAddTotheCart);
        
        localStorage.setItem("itemsInCart",JSON.stringify(cartArray));
        
    }else{
      return;
    }
};


// redirecting to the page which shows the items present in cart

async function buyNow(){



  let cartItems = JSON.parse(localStorage.getItem("itemsInCart"));

            let response = await fetch('../static/cartItemsDisplay.html');
            let data = await response.text();

            // Creating a temporary div to hold the HTML content for manipulation
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;



        // Looping through cartItems to insert data at specific position
        cartItems.forEach((el, index) => {
          
            // Create the HTML content for the current item
            let newItemContent = `<div class="card mb-3" >
            <div class="d-flex g-0 ">
              <div class="cart_img_div p-1">
                <img src="${el.picture}" class="img-fluid rounded-start cart_img" alt="...">
              </div>
              <div class="card_desc_div">
                <div class="card-body py-0">
                  <h5 class="card-title pt-1 my-0 fw-normal">${el.name}</h5>
                  <p class="card-text mb-0 fs-6">${el.desc}</p>
                  <p class="my-0">Price ${el.price} <del class="">${el.oldPrice}</del> <span class="text-danger">${el.off}</span></p>

                  <p class="my-0 fw-medium">Qty. 1</p>
                  <p class="card-text" class="removePara"><i class="fa-solid fa-arrow-rotate-left"></i>
                    7 days replacement</p>
                    <button class="btn s-media-btn" onclick="removeItemfromCart(${index})">Remove</button>
                </div>
              </div>
            </div>
          </div>`;
            
            // Finding the specific position in the fetched HTML content to insert the new item
            let targetElement = tempDiv.querySelector(`#CartItemContainer`);
            const card = document.createElement("div");
        card.classList.add("col-md-6","mb-5","main-card");
            // Inserting the new item content at the specific position
           
            card.innerHTML = newItemContent;

            targetElement.appendChild(card)

        });

  // Opening a new window with the modified HTML content
  let newWindow = window.open('', '_blank');
  newWindow.document.write(tempDiv.innerHTML); // Write the modified HTML content

  //Important: Close the document write to ensure content is rendered
  newWindow.document.close();

}

// removing item from cart

function removeItemfromCart(itemIndex){


    
 
    let itemsInCart = JSON.parse(localStorage.getItem("itemsInCart"));

    let newItemWithRemovedItem = itemsInCart.filter((el,index)=>{
      return index !== itemIndex;
    });
   
    localStorage.setItem("itemsInCart",JSON.stringify(newItemWithRemovedItem));
    buyNow();
  

}



// sales ends function

function displaySaleCountdown(endDate){

  const timerElement = document.querySelectorAll(".counter-box");
  const saleEndElement = document.getElementById("sale-ends");

  function updateTimer() {
      const now = new Date().getTime();
      const distance = endDate - now;

      const threshold = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
        if (distance < threshold) {
      // Extend the endDate by one month
      const currentDate = new Date(endDate);
      currentDate.setMonth(currentDate.getMonth() + 1);
      endDate = currentDate.getTime();

      distance = endDate - now; // Recalculating distance with updated endDate
    }

      if (distance < 0) {
        saleEndElement.innerHTML = 'Sale has been ended Already';
          clearInterval(timerInterval);
          return;
      }

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      days = days < 10 ? "0" + days : days;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ?  "0" + seconds : seconds;

      let times = [days,hours,minutes,seconds];

      for(let i=0; i<=3; i++){
            timerElement[i].innerHTML = times[i]; 
      }
  }

  // Updating the timer every second
  const timerInterval = setInterval(updateTimer, 1000);
}

// Setting the end date for the sale
const endDate = new Date('2023-12-31T23:59:59').getTime();

// Calling the function with the end date
displaySaleCountdown(endDate);

















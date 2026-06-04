let count = 0;






const buttons = document.querySelectorAll(".add-cart-button");

const cartCount = document.getElementById("cart-count");


const addProductToCart = (cookieInfo) => {
    const cookieImage = cookieInfo.querySelector("img");
    
    
    const cookieTitle = cookieInfo.querySelector(".cookie-title").textContent;
    
    const cookiePrice = cookieInfo.querySelector(".price").textContent;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-content");

    cartItem.innerHTML = `
        <div class="checkout-image">
            <img src="${cookieImage.src}" alt="">
        </div>
        <div class="checkout-title">
            <h6>${cookieTitle}</h6>
            <p class="checkout-price">${cookiePrice}</p>
        </div>
        
    `;
    

    cartContainer.appendChild(cartItem);
};




buttons.forEach(button => {
    button.addEventListener("click", (event) =>{


        const cookieInfo = event.target.closest(".cookies");

        addProductToCart(cookieInfo);

        count++;
        cartCount.textContent = count;
        cartCount.style.visibility = "visible";



        
    })
});


const cartButton = document.getElementById("cart-logo");


const cartContainer = document.querySelector(".checkout-cart-container");


cartButton.addEventListener("click", ()=>{
    cartContainer.classList.toggle("active")
    
})




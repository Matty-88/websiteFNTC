let count = 0;
const buttons = document.querySelectorAll(".add-cart-button");
const cartCount = document.getElementById("cart-count");
const cartButton = document.getElementById("cart-logo");
const cartContainer = document.querySelector(".checkout-cart-container");

cartButton.addEventListener("click", () => {
    cartContainer.classList.toggle("active")

})

//This is a function that adds the products to the cart
const addProductToCart = (cookieInfo) => {

    const cookieImage = cookieInfo.querySelector("img");
    const cookieTitle = cookieInfo.querySelector(".cookie-title").textContent;
    const cookiePrice = cookieInfo.querySelector(".price").textContent;
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-content");




    //Creates a new item for the cart
    cartItem.innerHTML = `
        <div class="checkout-image">
            <img src="${cookieImage.src}" alt="">
        </div>
        <div class="checkout-title">
            <h6>${cookieTitle}</h6>
            <p class="checkout-price">${cookiePrice}</p>
        </div>
        <div class="remove-item">
            <img class="remove-item-icon" src="images/delete.svg" alt="">
        </div>
    `;


    //Adds the item to the cart
    cartContainer.appendChild(cartItem);

    //Makes the remove button remove the item from the cart
    const trashButton = cartItem.querySelector(".remove-item");
    console.log(trashButton)

    trashButton.addEventListener("click", () => {
        cartContainer.removeChild(cartItem);
        count--;
        cartCount.textContent = count;

        if (count === 0) {
            cartCount.style.visibility = "hidden";
        }
    });


};

//makes the add to cart button call the addProductToCart function
buttons.forEach(button => {
    button.addEventListener("click", (event) => {

        const cookieInfo = event.target.closest(".cookies");



        count++;

        cartCount.textContent = count;
        addProductToCart(cookieInfo);
        cartCount.style.visibility = "visible";
    })
});

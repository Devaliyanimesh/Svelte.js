import { toasts } from "svelte-toasts";
import { goto } from "$app/navigation";

import { writable } from "svelte/store";

// Create a writable store for the cart data
export const cartData = writable([]);

export function addItemToCart(product) {
  alert("Done ")
  cartData.update((cart) => {
    // Check if the product already exists in the cart
    return (cart = [...cart, product]);
  });
}
export function addQty(product) {
  cartData.update((cart) => {
    const index = cart.findIndex((item) => item.id === product.id);
    const maxQuantity = 10;

    if (index !== -1) {
      // If the product exists, increase its quantity up to a maximum of 10
      cart[index].qty = Math.min((cart[index].qty || 0) + 1, maxQuantity);
    } else {
      // If the product is new, add it to the cart with quantity 1
      cart = [...cart, { ...product, qty: 1 }];
    }
    // Return the updated cart data
    return cart;
  });
}

export function removItem(product) {
  cartData.update((cart) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      // If the product exists in the cart and its quantity is greater than 1, decrease its quantity by 1
      if (cart[index].qty > 1) {
        cart[index].qty--;
      } else {
        // If the product's quantity is 1, remove it from the cart
        cart.splice(index, 1);
      }
    }
    // Return the updated cart data
    return cart;
  });
}
export function dataTransfer (){
  let loginCheck = localStorage.getItem("login");
  if (!loginCheck) {
    goto("/Login");
    alert("Please login first ");
  }
  else{
    localStorage.setItem("cartData",JSON.stringify(cartData))
  }

}

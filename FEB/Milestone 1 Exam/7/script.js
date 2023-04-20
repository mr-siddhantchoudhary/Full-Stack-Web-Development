function removeDuplicates(cart) {
    /*
    Removes duplicates from a customer's cart and returns a new array.
    
    Parameters:
    cart (array): The customer's cart as an array of items.
    
    Returns:
    array: A new array with duplicates removed.
    */
    const newCart = [];
    for (let i = 0; i < cart.length; i++) {
      if (newCart.indexOf(cart[i]) === -1) {
        newCart.push(cart[i]);
      }
    }
    return newCart;
  }

let customerCart = Array();

function addItems(){
    customerCart.push(document.getElementById("add").value);
    document.getElementById("add").value = '';
    return customerCart;
}

function sorting(){
    let sortCart = removeDuplicates(customerCart);
    console.log(sortCart);
    document.getElementById("add").style.display = "none";
    document.getElementById("resultPara").style.display = "flex";
    document.getElementById("resultPara").innerText = "Sorted Cart: " + sortCart;
}



<script>
  import { productData } from "./../../store/store.js";
  import { goto } from "$app/navigation";

  // Define selectData store
  let selectData = [];

  // Function to check login status
  function loginHandler() {
    let loginCheck = localStorage.getItem("login");
    if (!loginCheck) {
      goto("/Login");
      alert("Please login first ");
    }
  }

  // Function to add item to cart
  function additemHandler(item) {
    // Find the index of the item in the cart
    const index = selectData.findIndex((e) => e.id === item.id);

    // If the item is already in the cart, increment the quantity
    if (index !== -1) {
      selectData[index].qty++;
    } else {
      // If the item is not in the cart, add it with quantity 1
      selectData = [...selectData, { ...item, qty: 1 }];
    }

    // Find the matched product data based on ID
    let matchdata = $productData.find((e) => e.id === item.id);

    // Check if the product is in stock
    if (matchdata.totalqty > 0) {
      // Decrement totalqty of the matched product
      matchdata.totalqty--;

      // Update the product data in the store
      productData.update((data) => {
        // Map through the existing data and update the matched product
        return data.map((product) => {
          if (product.id === item.id) {
            return matchdata;
          }
          return product;
        });
      });
    } else {
      alert("This item is out of stock!");
    }
  }
</script>

<h2>All product</h2>
<div>
  {#each $productData as e, i}
    <div class="card">
      <figure>
        <img src={e?.img} alt="Shoes" width="210px" height="250px" />
      </figure>
      <div class="card-body">
        <h4 class="card-title">Price:{e?.price}</h4>
        <p>Description:{e?.description}</p>
        <p>totalProduct:{e?.totalqty}</p>
        <div class="mainbtn">
          <button class="btn" on:click={() => additemHandler(e)}
            >Add Item</button
          >
        </div>
      </div>
    </div>
  {/each}
</div>
<!-- Cart List -->
<h2>Cart List</h2>
<div class="buybtn">
  <button class="btn3" on:click={loginHandler}>Buy now</button>
</div>
<table>
  <tr>
    <td>Sr.no</td>
    <td>Img</td>
    <td>Description</td>
    <td>Price</td>
    <td>Qty</td>
  </tr>
  {#each selectData as e, i}
    <tr>
      <td>{i + 1}</td>
      <td><img src={e?.img} alt="" width="50px" height="50px" /></td>
      <td>{e?.description}</td>
      <td>{e?.price}</td>
      <td>{e?.qty}</td>
    </tr>
  {/each}
</table>

<style>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  table td {
    border: 1px solid black;
  }

  * {
    margin: 0px;
    padding: 0px;
  }
  h2 {
    text-align: center;
    background-color: black;
    color: aliceblue;
    margin: 10px 10px;
    padding: 10px 10px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .card {
    border: 1px solid black;
    border-radius: 5px;
    width: fit-content;
    width: 210px;

    padding: 10px 20px;
  }
  .card-body {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .mainbtn .btn {
    width: 100%;
    height: 40px;
    background-color: rgb(229, 234, 235);
    border: none;
    color: black;
    border-radius: 5px;
  }
  table tr td {
    text-align: center;
  }

  .buybtn {
    display: flex;
    justify-content: end;
    margin-bottom: 10px;
  }
  .btn3 {
    width: 100px;
    height: 40px;
    font-size: 15px;
    background-color: black;
    color: aliceblue;
    border: none;
    border-radius: 5px;
  }
</style>

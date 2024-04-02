<script>
  import { addQty, cartData, dataTransfer, removItem } from "../../Store/productData";

  let productTable;
  let unsubscribe = cartData.subscribe((value) => {
    console.log(value);
    productTable = value;
  });
</script>

<!-- Cart List -->
<h2>Cart List</h2>
<div class="buybtn">
  <button class="btn3" on:click={()=>dataTransfer()}>Buy now</button>
  <button class="btn3" on:click={() => (productTable = [])}>Remove item</button>
</div>

<div >

  {#each productTable as e, i}
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img src={e.img} alt="Shoes" width="200px"height="200px" /></figure>
    <div class="card-body">
      <p>Title:{e.title}</p>
      <p>Price:{e?.price}</p>
      <p>Description:  {e?.description}</p>
      <p>Ttal Price:{e?.qty * e?.price || e.price } </p>
      <div class="add">
        <button class="btn btn-outline btn-info" on:click={()=>addQty(e)}>Add qty:-{e.qty||1 }</button>

        <button class="btn btn-outline w-14 text-lg btn-info" on:click={()=>removItem(e)}>-</button>
      
      </div>
      <div class="card-actions justify-end">
        <button class="btn  w-full btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  {/each}
  
</div>
<style>
  h2 {
    text-align: center;
    background-color: black;
    color: aliceblue;
    margin: 10px 10px;
    padding: 10px 10px;
  }
  .add{
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }
div{
  display: flex;
  /* justify-content: center; */
}
  .buybtn {
    display: flex;
    gap: 10px;
    justify-content: end;
    margin-bottom: 10px;
    margin-right: 15px;
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

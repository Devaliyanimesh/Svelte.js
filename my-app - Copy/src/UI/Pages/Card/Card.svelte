<script>
  import { createEventDispatcher } from "svelte";
  import Table from "../../../routes/Table/+page.svelte";

  export let allProduct;
  const dispatch = createEventDispatcher();
  function additem(item) {

    
    dispatch("adaItem", {
      add: item,
    });
  }
</script>

<h2>All product</h2>
<div>
  {#each allProduct as e, i}
    <div class="card">
      <figure>
        <img
          src={e?.img}
          alt="Shoes"
          width="210px"
          height="200px"
          style="height: 200px;"
        />
      </figure>
      <div class="card-body">
        <h4 class="card-title">{e.title}</h4>
        <p>Price:{e?.price}</p>
        <p>Description:{e?.description}</p>
        <p>totalProduct:{e?.totalqty}</p>
        <div class="mainbtn">
          <button class="btn" on:click={() => additem(e)}>Add Item</button>
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
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .card {
    border: 1px solid black;
    border-radius: 5px;
    width: fit-content;
    width: 300px;
  }
  .card-body {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
  .mainbtn .btn {
    width: 100%;
    height: 40px;
    background-color: rgb(229, 234, 235);
    border: none;
    color: black;
    border-radius: 5px;
  }
</style>

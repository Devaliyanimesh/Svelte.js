<script>
  import { goto } from "$app/navigation";
  import Table from "../Table/+page.svelte";
  import Card from "../../UI/Pages/Card/Card.svelte";
  import {addItemToCart} from "./../../Store/productData";
  let item;

  let productData = [
    {
      id: 1,
      title: "shoes",
      img: "https://www.libertyshoesonline.com/pub/media/catalog/product/cache/036e1f77cd3178c76f889f39e301037b/c/l/clq_5499.jpg",
      price: 700,
      description: "Men White And Blue Memory Foam Technology Running Shoes",
      totalqty: 10,
    },
    {
      id: 2,
      title: "shoes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAIczPIufDsH1_6uq7CgELQUJwDUwMMHoivNZ69dwng&s",
      price: 1399,
      description: "Men White And Blue Memory Foam Technology Running Shoes",
      totalqty: 10,
    },
    {
      id: 3,
      title: "shoes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrnggnCnWt4I6XC9FIc8LguHVbHS2X0NAbJPl7oloZmw&s",
      price: 1000,
      description: "Men White And Blue Memory Foam Technology Running Shoes",
      totalqty: 10,
    },
    {
      id: 4,
      title: "shoes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDJHcceJPppzJj-r-F8Pwmg7b8voc09vs3Hnq2WZXDg&s",
      price: 1700,
      description: "Men White And Blue Memory Foam Technology Running Shoes",
      totalqty: 10,
    },
    {
      id: 5,
      title: "shoes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQskNRy1ZCz_1Yi6VgZfU239Eld2WLazRHUBiwPIMGF-g&s",
      price: 2000,
      description: "Men White And Blue Memory Foam Technology Running Shoes",
      totalqty: 10,
    },
    {
      id: 6,
      title: "shoes",
      img: "https://assets.ajio.com/medias/sys_master/root/20220927/CLrU/63332d8ef997dd1f8d20a481/-473Wx593H-469229575-black-MODEL7.jpg",
      price: 900,
      description: "Men White And Blue Memory Foam Technology Running Shoes",
      totalqty: 10,
    },
    {
      id: 7,
      title: "shoes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-cytdWYoMksYbDvw8moD3qCV20-uu575JJwggeyXvQ&s",
      price: 500,
      description: "Men White And Blue Memory Foam Technology Running Shoes",
      totalqty: 10,
    },
    {
      id: 8,
      title: "shoes",
      img: "https://images-cdn.ubuy.co.in/6359aecf9abb5d5b8d3eda43-ukko-running-shoes-men-shoes-sneakers.jpg",
      price: 1500,
      description: "Men White And Blue Memory Foam Technology Running Shoes",
      totalqty: 10,
    },
    {
      id: 9,
      title: "shoes",
      img: "https://m.media-amazon.com/images/I/614ZnW6FAiL._AC_UY1000_.jpg",
      price: 1000,
      description: "Men White And Blue Memory Foam Technology Running Shoes",
      totalqty: 10,
    },
    {
      id: 10,
      title: "shoes",
      img: "https://assets.ajio.com/medias/sys_master/root/20230620/uokZ/6491829a42f9e729d74ffedb/-473Wx593H-466290581-pink-MODEL.jpg",
      price: 800,
      description: "Men White And Blue Memory Foam Technology Running Shoes",
      totalqty: 10,
    },
  ];

 
</script>

<div>
  {#each productData as e, i}
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
          <button class="btn" on:click|once={() => addItemToCart(e)}>Add Item</button>
        </div>
      </div>
    </div>
  {/each}
</div>
<!-- <Card allProduct={data} on:adaItem={additemHandler} />
<Table productTable={selectData} on:click={loginHandler} /> -->

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
    justify-content: center;
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

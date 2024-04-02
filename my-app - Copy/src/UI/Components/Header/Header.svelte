<script>
  import { goto } from "$app/navigation";
  import logo from "./../../Img/Logo.png";
  import { onMount } from "svelte";

  let loginCheck = false;

  onMount(() => {
    loginCheck = localStorage.getItem("login");
  });

  function logoutHandler() {
    localStorage.clear("login");
    goto("/");
  }
</script>

<header>
  <div class="logo">
    <img src={logo} alt="Logo" width="60px" />
  </div>
  <ul>
    <li><a href="/Home">Home</a></li>
    <li><a href="/About">About</a></li>
    <li><a href="/Product">Product</a></li>
    <li><a href="/Table">Table</a></li>
  </ul>
  <div>
    {#if loginCheck}
      <button class="btn" on:click={logoutHandler}>Logout</button>
    {:else}
      <button class="btn" on:click={() => goto("/Login")}>Login</button>
    {/if}
  </div>
</header>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: burlywood;
    margin-bottom: 30px;
  }
  .logo img {
    width: 60px;
  }
  ul {
    display: flex;
    gap: 40px;
    list-style: none;
    font-size: 19px;
    color: aliceblue;
  }
  .btn {
    width: 90px;
    height: 40px;
    background-color: cadetblue;
    border: none;
    border-radius: 5px;
    color: aliceblue;
    cursor: pointer;
  }
  .btn:hover {
    background-color: darkcyan;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
</style>

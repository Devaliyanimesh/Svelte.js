<script>
  import { goto } from "$app/navigation";
  let user = {
    name: "",
    age: "",
    number: "",
    email: "",
    password: "",
  };

  // $:  data =[...data,user]
  function registerHandler() {
    goto("/Login")
    localStorage.setItem("register", JSON.stringify(user));
    user={
    name: "",
    age: "",
    number: "",
    email: "",
    password: "",
  };
  }
</script>

<div class="main">
  <form action="">
    <h2>Register Form</h2>
    <div class="inpsty">
      <label for="">Name</label>
      <input type="text" bind:value={user.name} />
    </div>
    <div class="inpsty">
      <label for="">Age</label>
      <input type="number" bind:value={user.age} />
    </div>
    <div class="inpsty">
      <label for="">Number</label>
      <input type="number" bind:value={user.number} />
    </div>
    <div class="inpsty">
      <label for="">Email</label>
      <input type="email" bind:value={user.email} />
    </div>
    <div class="inpsty">
      <label for="">Password</label>
      <input type="number" bind:value={user.password} />
    </div>
    <div class="button">
      <button on:click={registerHandler}>Submit</button>
      <a href="/Login" style="text-align: center;"> please <span  style="color: blue;">login</span> here ? </a>
    </div>
  </form>
</div>

<style>
  .main {
    display: grid;
    place-content: center;
  }
  form {
    width: 400px;
    height: fit-content;
    border-radius: 10px;
    padding: 20px 10px;
    background-color: rgb(106, 203, 190);
  }
  h2 {
    text-align: center;
  }
  .inpsty {
    display: flex;
    gap: 5px;
    flex-direction: column;
  }
  .inpsty label {
    font-size: 17px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .inpsty input {
    height: 40px;
    width: 100%;
    border: none;
    border-radius: 5px;
  }
  .inpsty input:focus {
    outline: none;
  }
  form .button{
    margin-top: 20px;
    text-align: center;

  }
  form button {

    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: rgb(255, 255, 255);

    margin-bottom: 9px;
  }
</style>

<script>
  import { goto } from "$app/navigation";
  let value = {
    email: "",
    password: "",
  };
  function loginHandler() {
    let check = JSON.parse(localStorage.getItem("register"));
    if (check.email === value.email && check.password === value.password) {
      localStorage.setItem("login", JSON.stringify(value));
      alert("Login successful!");
      goto("/Product");
    } else {
      alert("Invalid email or password");
    }
  }
</script>

<div class="main">
  <form on:submit|preventDefault={loginHandler}>
    <h3>Login Form</h3>
    <div class="inpsty">
      <label for="email">Email</label>
      <input type="email" id="email" bind:value={value.email} />
    </div>
    <div class="inpsty">
      <label for="password">Password</label>
      <input type="number" id="password" bind:value={value.password} />
    </div>
    <div class="button">
      <button type="submit">Submit</button>
      <a href="/Register"
        >Don't have an account? <span style="color: blue;">
          Register here
        </span></a
      >
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
  h3 {
    text-align: center;
  }
  .inpsty {
    display: flex;
    gap: 5px;
    flex-direction: column;
  }
  .inpsty label {
    margin-top: 8px;
    font-size: 17px;
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
  form .button {
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

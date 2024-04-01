<script>
  let value = {
    email: "",
    password: "",
  };

  function loginHandler() {
    console.log(value.email);

    let check = JSON.parse(localStorage.getItem("register"));
    if (check.email === value.email && check.password === value.password) {
      localStorage.setItem("login",JSON.stringify(value))
      alert("Login successful!");
    } else {
      alert("Invalid email or password");
    }
  }
</script>

<div class="main">
  <form on:submit|preventDefault={loginHandler}>
    <h3>Login Form</h3>
    <div class="input">
      <label for="email">Email</label>
      <input type="email" id="email" bind:value={value.email} />
    </div>
    <div class="input">
      <label for="password">Password</label>
      <input type="number" id="password" bind:value={value.password} />
    </div>
    <div class="input">
      <button type="submit">Submit</button>
      <a href="/Register">Don't have an account? Register here</a>
    </div>
  </form>
</div>

<style>
  .main {
    display: grid;
    place-content: center;
  }
  form {
    width: 300px;
    border-radius: 10px;
    background-color: rgb(106, 203, 190);
  }
  h3 {
    text-align: center;
  }
  .input {
    display: flex;
    padding: 20px 20px;
    flex-direction: column;
  }
  .input label {
    font-size: 17px;
    margin-bottom: 8px;
  }
  .input input {
    height: 30px;
    width: 100%;
    border: none;
    border-radius: 5px;
  }
  .input input:focus {
    outline: none;
  }
  form button {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: none;
    margin-bottom: 9px;
  }
</style>

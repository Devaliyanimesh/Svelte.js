<script>
    let user ={
        name :"",
        age:"",
        number:"",
        email:"",
        password:""
    } 
    
    // $:  data =[...data,user]
    function registerHandler (){
        localStorage.setItem("register",JSON.stringify(user))
    }
</script>



<div class="main">
    <form action="">
      <h3>Form</h3>
      <div class="input">
        <label for="">Name</label>
        <input type="text" bind:value={user.name} />
      </div>
      <div class="input">
        <label for="">Age</label>
        <input type="number" bind:value={user.age} />
      </div>
      <div class="input">
        <label for="">Number</label>
        <input type="number" bind:value={user.number} />
      </div> <div class="input">
        <label for="">Email</label>
        <input type="email" bind:value={user.email} />
      </div>
      <div class="input">
        <label for="">Password</label>
        <input type="number" bind:value={user.password} />
      </div>
      <div class="input">
        <button on:click={registerHandler}>Submit</button>
        <a href="/Login"> please login here ? </a>
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
      /* color: aliceblue; */
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

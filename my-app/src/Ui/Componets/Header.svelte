<script>
  import logo from "./../img/Louis-Vuitton-Logo+2021-removebg-preview.png";
</script>

<header>
  <div class="logo">
    <img src={logo} alt="" width="60px" />
  </div>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact Us</li>
  </ul>
  <div class="login">
    <button type="button"> <a href="/Login"> Login </a></button>
  </div>
</header>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
    background-color: burlywood;
  }
  header ul{
    justify-content: space-between;
    display: flex;
    align-items: center;
    gap: 40px;
    list-style: none;
    font-size: 19px;
    color: aliceblue;
  }
  header .login button{
    width: 90px;
    height: 40px;
    background-color: cadetblue;
    border: none;
    border-radius: 5px;
  }
  header .login button a{
    
    color: aliceblue;
    text-decoration: none;
  }
</style>

<script>
import Header from "../UI/Components/Header/Header.svelte";
  import "../app.css";
</script>

<div class="app">
  <Header />

  <main>
      <slot  />
  </main>
</div>

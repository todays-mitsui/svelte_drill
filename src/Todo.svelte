<script>
  export let label;
  export let done;
</script>

<li>
  <label>
    <input type="checkbox" checked={done}>
    <span>{label}</span>
  </label>
</li>

<style>
  input[type=checkbox]:checked + span {
    text-decoration: line-through;
  }
</style>

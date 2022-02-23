<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let labelInput;
  let active = false;
  let label = '';

  function addNewTodo() {
    dispatch('add', label);
    label = '';
  }

  function onClick() {
    active = true;
    console.info({ labelInput })
    setTimeout(() => {
      labelInput.focus();
    }, 25);
  }

  function onKeypress(event) {
    console.info({ KeyboardEvent: event });

    if (label.trim() && 'key' in event && event.key == 'Enter') {
      addNewTodo();
    }
  }

  function onFocusout(event) {
    active = false;

    if (label.trim() && 'ontouchstart' in window && navigator.maxTouchPoints > 0) {
      addNewTodo();
    }
  }
</script>

<li>
  <button
    class:hidden={active}
    on:click={onClick}
  >more Todo...</button>

  <input
    type="text"
    bind:this={labelInput}
    bind:value={label}
    class:hidden={!active}
    on:keypress={onKeypress}
    on:focusout={onFocusout}
    placeholder="more Todo..."
  />
</li>

<style>
  .hidden {
    display: none;
  }
</style>

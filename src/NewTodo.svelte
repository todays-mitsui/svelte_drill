<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let label = '';

  function addNewTodo() {
    dispatch('add', label);
    label = '';
  }

  function onKeypress(event) {
    console.info({ KeyboardEvent: event });

    if (label && 'key' in event && event.key == 'Enter') {
      addNewTodo();
    }
  }

  function onFocusout(event) {
    if ('ontouchstart' in window && navigator.maxTouchPoints > 0) {
      addNewTodo();
    }
  }
</script>

<li>
  <input
    type="text"
    bind:value={label}
    on:keypress={onKeypress}
    on:focusout={onFocusout}
    placeholder="more Todo..."
  />
  <p>more Todo...</p>
</li>

<style>
  li input {
    display: none;
  }
  li input:focus,
  li:hover input {
    display: block;
  }

  li p {
    display: flex;
    align-items: center;
    height: 52px;
    color: #666;
  }
  li input:focus + p,
  li:hover p {
    display: none;
  }
</style>

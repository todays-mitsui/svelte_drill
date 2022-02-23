<script>
  import Todo from './Todo.svelte';
  import NewTodo from './NewTodo.svelte';

  let todos = [
    { done: true, label: '顔を洗う' },
    { done: false, label: '電話する' },
    { done: false, label: '本を読む' },
  ];

  function addTodo(event) {
    console.info({ label: event.detail });
    todos = [ ...todos, { done: false, label: event.detail } ];
  }
</script>

<ul>
  {#each todos as todo }
    <Todo label={todo.label} done={todo.done} />
  {/each}
  <NewTodo on:add={addTodo} />
</ul>

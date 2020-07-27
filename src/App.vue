<template>
  <div id="app">
    <div class="container">
      <div class="notification">
        <list-tasks></list-tasks>
      </div>
    </div>
  </div>
</template>

<script>
import ListTasks from './components/Tasks/ListTasks'

export default {
  name: 'app',

  components: {
    ListTasks
  }
}
</script>

<style>

</style>

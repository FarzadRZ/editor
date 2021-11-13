<template>
  <div id="app">
    <Setting />
    <Preview />
    <Edit />
  </div>
</template>

<script>
import Setting from './components/Setting.vue'
import Preview from './components/Preview.vue'
import Edit from './components/Edit.vue'

export default {
  name: 'App',

  components: {
    Setting,
    Preview,
    Edit
  },

  mounted() {
    this.$store.dispatch('getTemplates')
  }
}
</script>

<style lang="scss">
@import './styles/app';
</style>

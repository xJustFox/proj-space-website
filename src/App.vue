<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
}
</script>

<template>
  <Header />
  <router-view />
</template>

<style lang="scss">
@use './style/generals.scss' as *;

</style>

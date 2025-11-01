<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <AppHeader />
    <main class="flex-1 pb-16 md:pb-0">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

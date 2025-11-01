<template>
  <!-- Desktop Header -->
  <header class="hidden md:block bg-gradient-to-r from-white via-primary-50/30 to-purple-50/30 backdrop-blur-xl border-b border-gradient-to-r from-primary-200/20 to-purple-200/20 sticky top-0 z-50 shadow-large">
    <!-- Top notification bar -->
    <div class="bg-gradient-to-r from-primary-600 to-purple-600 text-white text-center py-2 text-sm font-medium">
      🎉 Yangi mutaxassislar platformasi! Birinchi loyihangiz uchun 20% chegirma
    </div>
    
    <div class="max-w-7xl mx-auto container-padding">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-4 group">
            <div class="relative">
              <div class="w-14 h-14 bg-gradient-to-br from-primary-500 via-primary-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-colored group-hover:shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <span class="text-white font-bold text-2xl">S</span>
              </div>
              <div class="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div class="flex flex-col">
              <span class="text-2xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">ServiceHub</span>
              <span class="text-xs text-gray-500 font-medium">Professional Services</span>
            </div>
          </router-link>
        </div>

        <!-- Creative Navigation -->
        <nav class="flex items-center space-x-2">
          <div class="flex items-center bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-medium border border-gray-200/50">
            <router-link 
              to="/" 
              class="relative px-4 py-2 rounded-xl font-semibold transition-all duration-300 group"
              :class="$route.name === 'home' ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-colored' : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'"
            >
              <Home class="h-4 w-4 inline mr-2" />
              Bosh sahifa
            </router-link>
            <router-link 
              to="/categories" 
              class="relative px-4 py-2 rounded-xl font-semibold transition-all duration-300 group"
              :class="$route.name === 'categories' ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-colored' : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'"
            >
              <Grid class="h-4 w-4 inline mr-2" />
              Kategoriyalar
            </router-link>
            <a href="#" class="relative px-4 py-2 rounded-xl font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 group">
              <Users class="h-4 w-4 inline mr-2" />
              Mutaxassislar
            </a>
            <a href="#" class="relative px-4 py-2 rounded-xl font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 group">
              <Briefcase class="h-4 w-4 inline mr-2" />
              Loyihalar
            </a>
          </div>
        </nav>

        <!-- Creative Action Buttons -->
        <div class="flex items-center space-x-4">
          <!-- Notifications -->
          <button class="relative p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-medium border border-gray-200/50 hover:shadow-large transition-all duration-300 group">
            <Bell class="h-5 w-5 text-gray-600 group-hover:text-primary-600 transition-colors" />
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-full animate-pulse"></div>
          </button>
          
          <!-- User Menu -->
          <div class="flex items-center bg-white/80 backdrop-blur-sm rounded-2xl p-1 shadow-medium border border-gray-200/50">
            <button class="px-4 py-2 text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-300 rounded-xl hover:bg-primary-50">
              <User class="h-4 w-4 inline mr-2" />
              Kirish
            </button>
            <button class="btn-primary text-sm py-2 px-4 ml-2">
              <UserPlus class="h-4 w-4 inline mr-2" />
              Ro'yxatdan o'tish
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Header -->
  <header class="md:hidden bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100 sticky top-0 z-50">
    <div class="container-padding">
      <div class="flex justify-between items-center h-16">
        <!-- Mobile Logo -->
        <router-link to="/" class="flex items-center space-x-3 group">
          <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-colored">
            <span class="text-white font-bold text-lg">S</span>
          </div>
          <span class="text-xl font-bold text-gradient">ServiceHub</span>
        </router-link>

        <!-- Mobile Actions -->
        <div class="flex items-center space-x-3">
          <!-- Search Button -->
          <button 
            @click="showMobileSearch = !showMobileSearch"
            class="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
          >
            <Search class="h-5 w-5 text-gray-600" />
          </button>
          
          <!-- Notifications -->
          <button class="relative p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
            <Bell class="h-5 w-5 text-gray-600" />
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>
        </div>
      </div>

      <!-- Mobile Search Bar -->
      <div v-if="showMobileSearch" class="pb-4 animate-slide-up">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search class="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            v-model="searchQuery"
            @keyup.enter="handleSearch"
            class="block w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-2xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 shadow-soft"
            placeholder="Xizmat yoki mutaxassis qidiring..."
          />
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Bottom Navigation -->
  <nav class="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-50 shadow-large">
    <div class="grid grid-cols-5 h-16">
      <router-link 
        to="/" 
        class="flex flex-col items-center justify-center space-y-1 transition-all duration-300"
        :class="$route.name === 'home' ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'"
      >
        <Home class="h-5 w-5" />
        <span class="text-xs font-medium">Bosh</span>
      </router-link>
      
      <router-link 
        to="/categories" 
        class="flex flex-col items-center justify-center space-y-1 transition-all duration-300"
        :class="$route.name === 'categories' ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'"
      >
        <Grid class="h-5 w-5" />
        <span class="text-xs font-medium">Kategoriya</span>
      </router-link>
      
      <a href="#" class="flex flex-col items-center justify-center space-y-1 text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-all duration-300">
        <Users class="h-5 w-5" />
        <span class="text-xs font-medium">Mutaxassis</span>
      </a>
      
      <a href="#" class="flex flex-col items-center justify-center space-y-1 text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-all duration-300">
        <Briefcase class="h-5 w-5" />
        <span class="text-xs font-medium">Loyiha</span>
      </a>
      
      <a href="#" class="flex flex-col items-center justify-center space-y-1 text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-all duration-300">
        <User class="h-5 w-5" />
        <span class="text-xs font-medium">Profil</span>
      </a>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { Search, Menu, X, Home, Grid, Users, Briefcase, Bell, User, UserPlus } from 'lucide-vue-next'

export default {
  name: 'AppHeader',
  components: {
    Search,
    Menu,
    X,
    Home,
    Grid,
    Users,
    Briefcase,
    Bell,
    User,
    UserPlus
  },
  setup() {
    const searchQuery = ref('')
    const mobileMenuOpen = ref(false)
    const showMobileSearch = ref(false)

    const handleSearch = () => {
      if (searchQuery.value.trim()) {
        // Implement search functionality
        console.log('Searching for:', searchQuery.value)
        showMobileSearch.value = false
      }
    }

    return {
      searchQuery,
      mobileMenuOpen,
      showMobileSearch,
      handleSearch
    }
  }
}
</script>

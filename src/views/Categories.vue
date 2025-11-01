<template>
  <div class="categories-page">
    <!-- Header -->
    <section class="bg-white py-16 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Xizmat Kategoriyalari
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Kerakli xizmat turini tanlang va professional mutaxassislarni toping
          </p>
        </div>
      </div>
    </section>

    <!-- Categories Grid -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Search and Filter -->
        <div class="mb-12">
          <div class="max-w-md mx-auto">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search class="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                v-model="searchQuery"
                class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Kategoriya qidiring..."
              />
            </div>
          </div>
        </div>

        <!-- Categories Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="category in filteredCategories" 
            :key="category.id"
            @click="goToCategory(category.slug)"
            class="group cursor-pointer bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            <!-- Icon -->
            <div class="text-5xl mb-4 text-center">{{ category.icon }}</div>
            
            <!-- Content -->
            <div class="text-center">
              <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {{ category.name }}
              </h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                {{ category.description }}
              </p>
              
              <!-- Stats -->
              <div class="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
                <div class="flex items-center">
                  <Users class="h-4 w-4 mr-1" />
                  {{ category.specialistCount }} mutaxassis
                </div>
              </div>

              <!-- Subcategories -->
              <div class="flex flex-wrap gap-1 justify-center mb-4">
                <span 
                  v-for="subcategory in category.subcategories.slice(0, 3)" 
                  :key="subcategory"
                  class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                >
                  {{ subcategory }}
                </span>
                <span 
                  v-if="category.subcategories.length > 3"
                  class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700"
                >
                  +{{ category.subcategories.length - 3 }}
                </span>
              </div>

              <!-- Action -->
              <div class="flex items-center justify-center text-primary-600 group-hover:text-primary-700">
                <span class="text-sm font-medium mr-1">Ko'rish</span>
                <ArrowRight class="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredCategories.length === 0" class="text-center py-16">
          <div class="text-gray-400 mb-4">
            <Search class="h-16 w-16 mx-auto" />
          </div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">
            Hech narsa topilmadi
          </h3>
          <p class="text-gray-600">
            Qidiruv so'zingizni o'zgartirib ko'ring yoki barcha kategoriyalarni ko'ring
          </p>
          <button 
            @click="searchQuery = ''"
            class="btn-primary mt-4"
          >
            Barcha kategoriyalar
          </button>
        </div>
      </div>
    </section>

    <!-- Popular Categories -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Mashhur Kategoriyalar
          </h2>
          <p class="text-lg text-gray-600">
            Eng ko'p qidirilgan xizmat turlari
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div 
            v-for="category in popularCategories" 
            :key="category.id"
            @click="goToCategory(category.slug)"
            class="group cursor-pointer text-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div class="text-3xl mb-2">{{ category.icon }}</div>
            <div class="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
              {{ category.name }}
            </div>
            <div class="text-xs text-gray-500 mt-1">
              {{ category.specialistCount }} mutaxassis
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useServicesStore } from '../stores/services'
import { Search, ArrowRight, Users } from 'lucide-vue-next'

export default {
  name: 'Categories',
  components: {
    Search,
    ArrowRight,
    Users
  },
  setup() {
    const router = useRouter()
    const servicesStore = useServicesStore()
    const searchQuery = ref('')

    const filteredCategories = computed(() => {
      if (!searchQuery.value.trim()) {
        return servicesStore.categories
      }
      
      const query = searchQuery.value.toLowerCase()
      return servicesStore.categories.filter(category => 
        category.name.toLowerCase().includes(query) ||
        category.description.toLowerCase().includes(query) ||
        category.subcategories.some(sub => sub.toLowerCase().includes(query))
      )
    })

    const popularCategories = computed(() => 
      servicesStore.categories
        .sort((a, b) => b.specialistCount - a.specialistCount)
        .slice(0, 6)
    )

    const goToCategory = (slug) => {
      router.push(`/category/${slug}`)
    }

    return {
      searchQuery,
      filteredCategories,
      popularCategories,
      goToCategory
    }
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

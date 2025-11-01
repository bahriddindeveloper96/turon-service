<template>
  <div class="category-detail" v-if="category">
    <!-- Header -->
    <section class="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="text-6xl mb-4">{{ category.icon }}</div>
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            {{ category.name }}
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            {{ category.description }}
          </p>
          <div class="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div class="flex items-center">
              <Users class="h-5 w-5 mr-2" />
              {{ category.specialistCount }} mutaxassis
            </div>
            <div class="flex items-center">
              <Briefcase class="h-5 w-5 mr-2" />
              {{ specialists.length * 15 }}+ loyiha
            </div>
            <div class="flex items-center">
              <Star class="h-5 w-5 mr-2 text-yellow-400" />
              4.8 o'rtacha reyting
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Subcategories -->
    <section class="py-8 bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-2 justify-center">
          <button 
            v-for="subcategory in category.subcategories" 
            :key="subcategory"
            @click="filterBySubcategory(subcategory)"
            class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
            :class="selectedSubcategory === subcategory 
              ? 'bg-primary-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
          >
            {{ subcategory }}
          </button>
          <button 
            @click="selectedSubcategory = null"
            class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
            :class="selectedSubcategory === null 
              ? 'bg-primary-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
          >
            Barchasi
          </button>
        </div>
      </div>
    </section>

    <!-- Filters and Search -->
    <section class="py-6 bg-gray-50 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <!-- Search -->
          <div class="flex-1 max-w-md">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search class="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                v-model="searchQuery"
                class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Mutaxassis qidiring..."
              />
            </div>
          </div>

          <!-- Filters -->
          <div class="flex items-center space-x-4">
            <!-- Sort -->
            <select 
              v-model="sortBy"
              class="border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="rating">Reyting bo'yicha</option>
              <option value="price-low">Narx: past → yuqori</option>
              <option value="price-high">Narx: yuqori → past</option>
              <option value="experience">Tajriba bo'yicha</option>
            </select>

            <!-- Price Range -->
            <select 
              v-model="priceRange"
              class="border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Barcha narxlar</option>
              <option value="0-15">$0 - $15</option>
              <option value="15-30">$15 - $30</option>
              <option value="30-50">$30 - $50</option>
              <option value="50+">$50+</option>
            </select>

            <!-- View Toggle -->
            <div class="flex border border-gray-300 rounded-lg overflow-hidden">
              <button 
                @click="viewMode = 'grid'"
                class="p-2 transition-colors"
                :class="viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'"
              >
                <Grid class="h-4 w-4" />
              </button>
              <button 
                @click="viewMode = 'list'"
                class="p-2 transition-colors"
                :class="viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'"
              >
                <List class="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <!-- Results count -->
        <div class="mt-4 text-sm text-gray-600">
          {{ filteredSpecialists.length }} mutaxassis topildi
        </div>
      </div>
    </section>

    <!-- Specialists List -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          v-if="filteredSpecialists.length > 0"
          :class="viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-6'"
        >
          <SpecialistCard 
            v-for="specialist in filteredSpecialists" 
            :key="specialist.id"
            :specialist="specialist"
            :view-mode="viewMode"
          />
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-16">
          <div class="text-gray-400 mb-4">
            <Users class="h-16 w-16 mx-auto" />
          </div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">
            Hech kim topilmadi
          </h3>
          <p class="text-gray-600 mb-4">
            Qidiruv parametrlarini o'zgartirib ko'ring
          </p>
          <button 
            @click="resetFilters"
            class="btn-primary"
          >
            Filtrlarni tozalash
          </button>
        </div>
      </div>
    </section>
  </div>

  <!-- Loading State -->
  <div v-else class="flex items-center justify-center min-h-screen">
    <div class="text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
      <p class="text-gray-600">Yuklanmoqda...</p>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useServicesStore } from '../stores/services'
import { Search, Users, Briefcase, Star, Grid, List } from 'lucide-vue-next'
import SpecialistCard from '../components/SpecialistCard.vue'

export default {
  name: 'CategoryDetail',
  components: {
    Search,
    Users,
    Briefcase,
    Star,
    Grid,
    List,
    SpecialistCard
  },
  setup() {
    const route = useRoute()
    const servicesStore = useServicesStore()
    
    const searchQuery = ref('')
    const selectedSubcategory = ref(null)
    const sortBy = ref('rating')
    const priceRange = ref('')
    const viewMode = ref('grid')

    const category = computed(() => 
      servicesStore.getCategoryBySlug(route.params.slug)
    )

    const specialists = computed(() => 
      category.value ? servicesStore.getSpecialistsByCategory(category.value.id) : []
    )

    const filteredSpecialists = computed(() => {
      let filtered = [...specialists.value]

      // Filter by search query
      if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(specialist => 
          specialist.name.toLowerCase().includes(query) ||
          specialist.title.toLowerCase().includes(query) ||
          specialist.skills.some(skill => skill.toLowerCase().includes(query))
        )
      }

      // Filter by subcategory
      if (selectedSubcategory.value) {
        // This would need more sophisticated filtering based on specialist specializations
        // For now, we'll keep all specialists
      }

      // Filter by price range
      if (priceRange.value) {
        const [min, max] = priceRange.value.split('-').map(p => p.replace('+', ''))
        filtered = filtered.filter(specialist => {
          if (max) {
            return specialist.hourlyRate >= parseInt(min) && specialist.hourlyRate <= parseInt(max)
          } else {
            return specialist.hourlyRate >= parseInt(min)
          }
        })
      }

      // Sort
      switch (sortBy.value) {
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating)
          break
        case 'price-low':
          filtered.sort((a, b) => a.hourlyRate - b.hourlyRate)
          break
        case 'price-high':
          filtered.sort((a, b) => b.hourlyRate - a.hourlyRate)
          break
        case 'experience':
          filtered.sort((a, b) => b.completedProjects - a.completedProjects)
          break
      }

      return filtered
    })

    const filterBySubcategory = (subcategory) => {
      selectedSubcategory.value = selectedSubcategory.value === subcategory ? null : subcategory
    }

    const resetFilters = () => {
      searchQuery.value = ''
      selectedSubcategory.value = null
      sortBy.value = 'rating'
      priceRange.value = ''
    }

    return {
      category,
      specialists,
      filteredSpecialists,
      searchQuery,
      selectedSubcategory,
      sortBy,
      priceRange,
      viewMode,
      filterBySubcategory,
      resetFilters
    }
  }
}
</script>

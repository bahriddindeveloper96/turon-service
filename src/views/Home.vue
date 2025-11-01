<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="relative overflow-hidden gradient-bg section-padding">
      <!-- Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200 to-purple-200 rounded-full opacity-20 animate-float"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-200 to-primary-200 rounded-full opacity-20 animate-bounce-subtle"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto container-padding">
        <div class="text-center animate-fade-in">
          <div class="mb-8">
            <span class="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-primary-700 border border-primary-200 shadow-soft animate-scale-in">
              🚀 Professional xizmatlar platformasi
            </span>
          </div>
          
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span class="block text-gray-900 animate-slide-in-left">Professional</span>
            <span class="block text-gradient animate-slide-in-right">Xizmatlar</span>
            <span class="block text-gray-900 animate-slide-in-left">Platformasi</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Eng yaxshi mutaxassislarni toping va loyihalaringizni muvaffaqiyatli amalga oshiring. 
            <span class="font-semibold text-primary-700">1000+ tajribali professional</span> sizning xizmatlaringizda.
          </p>
          
          <!-- Search Bar -->
          <div class="max-w-3xl mx-auto mb-12 animate-scale-in">
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search class="h-6 w-6 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
              </div>
              <input
                type="text"
                v-model="heroSearchQuery"
                @keyup.enter="handleHeroSearch"
                class="block w-full pl-16 pr-40 py-5 text-lg border-2 border-gray-200 rounded-2xl leading-5 bg-white/90 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 shadow-large transition-all duration-300"
                placeholder="Qanday xizmat kerak? Masalan: veb-sayt yaratish"
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                <button 
                  @click="handleHeroSearch"
                  class="btn-primary text-base py-3 px-8"
                >
                  Qidirish
                </button>
              </div>
            </div>
          </div>

          <!-- Popular searches -->
          <div class="flex flex-wrap justify-center gap-3 mb-16 animate-slide-up">
            <span class="text-base text-gray-500 font-medium">Mashhur qidiruvlar:</span>
            <button 
              v-for="tag in popularTags" 
              :key="tag"
              @click="searchByTag(tag)"
              class="text-sm bg-white/80 backdrop-blur-sm text-primary-700 px-4 py-2 rounded-full border border-primary-200 hover:bg-primary-50 hover:border-primary-300 shadow-soft hover:shadow-medium transform hover:-translate-y-0.5 transition-all duration-300"
            >
              {{ tag }}
            </button>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div class="text-center group animate-fade-in">
              <div class="relative mb-4">
                <div class="text-5xl md:text-6xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div class="absolute -inset-4 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div class="text-lg text-gray-600 font-medium">Mutaxassislar</div>
            </div>
            <div class="text-center group animate-fade-in" style="animation-delay: 0.2s;">
              <div class="relative mb-4">
                <div class="text-5xl md:text-6xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">5000+</div>
                <div class="absolute -inset-4 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div class="text-lg text-gray-600 font-medium">Bajarilgan loyihalar</div>
            </div>
            <div class="text-center group animate-fade-in" style="animation-delay: 0.4s;">
              <div class="relative mb-4">
                <div class="text-5xl md:text-6xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">98%</div>
                <div class="absolute -inset-4 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div class="text-lg text-gray-600 font-medium">Mijozlar mamnunligi</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="section-padding bg-white relative">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(14,165,233,0.3) 1px, transparent 0); background-size: 20px 20px;"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto container-padding">
        <div class="text-center mb-20 animate-fade-in">
          <div class="mb-6">
            <span class="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              ⚡ Xizmat turlari
            </span>
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span class="text-gray-900">Xizmat</span>
            <span class="text-gradient"> Kategoriyalari</span>
          </h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kerakli xizmat turini tanlang va eng yaxshi mutaxassislarni toping
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(category, index) in featuredCategories" 
            :key="category.id"
            @click="goToCategory(category.slug)"
            class="card-interactive group animate-fade-in"
            :style="`animation-delay: ${index * 0.1}s`"
          >
            <div class="text-center">
              <div class="relative mb-6">
                <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{{ category.icon }}</div>
                <div class="absolute -inset-2 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-gradient transition-all duration-300">
                {{ category.name }}
              </h3>
              <p class="text-gray-600 text-sm mb-6 leading-relaxed">{{ category.description }}</p>
              
              <div class="flex items-center justify-between text-sm">
                <div class="flex items-center text-gray-500">
                  <Users class="h-4 w-4 mr-1" />
                  <span class="font-medium">{{ category.specialistCount }}</span>
                </div>
                <ArrowRight class="h-4 w-4 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-16 animate-scale-in">
          <router-link to="/categories" class="btn-primary inline-flex items-center space-x-3 text-lg">
            <span>Barcha kategoriyalar</span>
            <ArrowRight class="h-5 w-5" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Featured Specialists -->
    <section class="section-padding gradient-bg relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-200 to-primary-200 rounded-full opacity-10 animate-float"></div>
      <div class="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-primary-200 to-purple-200 rounded-full opacity-10 animate-bounce-subtle"></div>
      
      <div class="relative max-w-7xl mx-auto container-padding">
        <div class="text-center mb-20 animate-fade-in">
          <div class="mb-6">
            <span class="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              ⭐ Top professionals
            </span>
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span class="text-gradient">Top</span>
            <span class="text-gray-900"> Mutaxassislar</span>
          </h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Eng yuqori reytingga ega professional mutaxassislar bilan tanishing
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div 
            v-for="(specialist, index) in featuredSpecialists" 
            :key="specialist.id"
            class="animate-fade-in"
            :style="`animation-delay: ${index * 0.15}s`"
          >
            <SpecialistCard :specialist="specialist" />
          </div>
        </div>

        <div class="text-center mt-16 animate-scale-in">
          <button class="btn-accent inline-flex items-center space-x-3 text-lg">
            <span>Barcha mutaxassislar</span>
            <ArrowRight class="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section-padding bg-white relative">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: linear-gradient(45deg, rgba(14,165,233,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(14,165,233,0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(14,165,233,0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(14,165,233,0.1) 75%); background-size: 30px 30px; background-position: 0 0, 0 15px, 15px -15px, -15px 0px;"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto container-padding">
        <div class="text-center mb-20 animate-fade-in">
          <div class="mb-6">
            <span class="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              🎯 Oddiy jarayon
            </span>
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span class="text-gray-900">Qanday</span>
            <span class="text-gradient"> ishlaydi?</span>
          </h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oddiy 3 qadamda kerakli xizmatni toping va loyihangizni boshlang
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div class="text-center group animate-fade-in">
            <div class="relative mb-8">
              <div class="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-colored group-hover:scale-110 transition-transform duration-300">
                <Search class="h-12 w-12 text-white" />
              </div>
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gradient transition-all duration-300">Qidiring</h3>
            <p class="text-gray-600 text-lg leading-relaxed">
              Kerakli xizmat turini tanlang va mutaxassislarni ko'ring. Filtrlar yordamida eng mos variantni toping.
            </p>
          </div>
          
          <div class="text-center group animate-fade-in" style="animation-delay: 0.2s;">
            <div class="relative mb-8">
              <div class="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users class="h-12 w-12 text-white" />
              </div>
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gradient transition-all duration-300">Tanlang</h3>
            <p class="text-gray-600 text-lg leading-relaxed">
              Portfolio va reytinglar asosida eng mos mutaxassisni tanlang. Tajriba va narxlarni solishtiring.
            </p>
          </div>
          
          <div class="text-center group animate-fade-in" style="animation-delay: 0.4s;">
            <div class="relative mb-8">
              <div class="w-24 h-24 bg-gradient-to-br from-success-500 to-success-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MessageCircle class="h-12 w-12 text-white" />
              </div>
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gradient transition-all duration-300">Bog'laning</h3>
            <p class="text-gray-600 text-lg leading-relaxed">
              Mutaxassis bilan bog'laning va loyihangizni boshlang. Xavfsiz to'lov va kafolat bilan.
            </p>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center mt-20 animate-scale-in">
          <div class="bg-gradient-to-r from-primary-50 to-purple-50 rounded-3xl p-12 border border-primary-100">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">Tayyor loyihangizni boshlashga?</h3>
            <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Minglab professional mutaxassislar sizning loyihangizni amalga oshirishga tayyor
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="btn-primary text-lg">
                Hoziroq boshlash
              </button>
              <button class="btn-secondary text-lg">
                Batafsil ma'lumot
              </button>
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
import { Search, ArrowRight, Users, MessageCircle } from 'lucide-vue-next'
import SpecialistCard from '../components/SpecialistCard.vue'

export default {
  name: 'Home',
  components: {
    Search,
    ArrowRight,
    Users,
    MessageCircle,
    SpecialistCard
  },
  setup() {
    const router = useRouter()
    const servicesStore = useServicesStore()
    const heroSearchQuery = ref('')

    const popularTags = [
      'Veb-sayt yaratish',
      'Logo dizayn',
      'SMM',
      'Mobil ilova',
      'Tarjima'
    ]

    const featuredCategories = computed(() => 
      servicesStore.categories.slice(0, 8)
    )

    const featuredSpecialists = computed(() => 
      servicesStore.getFeaturedSpecialists
    )

    const handleHeroSearch = () => {
      if (heroSearchQuery.value.trim()) {
        // Implement search functionality
        console.log('Searching for:', heroSearchQuery.value)
      }
    }

    const searchByTag = (tag) => {
      heroSearchQuery.value = tag
      handleHeroSearch()
    }

    const goToCategory = (slug) => {
      router.push(`/category/${slug}`)
    }

    return {
      heroSearchQuery,
      popularTags,
      featuredCategories,
      featuredSpecialists,
      handleHeroSearch,
      searchByTag,
      goToCategory
    }
  }
}
</script>

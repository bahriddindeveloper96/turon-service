<template>
  <div class="specialist-detail" v-if="specialist">
    <!-- Header -->
    <section class="bg-white py-12 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
          <!-- Profile Info -->
          <div class="flex-1">
            <div class="flex items-start space-x-6 mb-6">
              <img 
                :src="specialist.avatar" 
                :alt="specialist.name"
                class="w-24 h-24 rounded-full object-cover"
              />
              <div class="flex-1">
                <h1 class="text-3xl font-bold text-gray-900 mb-2">
                  {{ specialist.name }}
                </h1>
                <p class="text-xl text-gray-600 mb-4">{{ specialist.title }}</p>
                
                <div class="flex items-center space-x-6 mb-4">
                  <div class="flex items-center">
                    <Star class="h-5 w-5 text-yellow-400 fill-current" />
                    <span class="text-lg font-semibold text-gray-900 ml-1">{{ specialist.rating }}</span>
                    <span class="text-gray-600 ml-1">({{ specialist.reviewCount }} sharh)</span>
                  </div>
                  <div class="text-gray-600">
                    <span class="font-medium">{{ specialist.completedProjects }}</span> loyiha bajarilgan
                  </div>
                </div>

                <!-- Availability -->
                <div class="mb-4">
                  <span 
                    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                    :class="availabilityClass"
                  >
                    <div class="w-2 h-2 rounded-full mr-2" :class="availabilityDotClass"></div>
                    {{ specialist.availability }}
                  </span>
                </div>

                <!-- Languages -->
                <div class="flex items-center space-x-2">
                  <Globe class="h-4 w-4 text-gray-400" />
                  <span class="text-sm text-gray-600">
                    {{ specialist.languages.join(', ') }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Description -->
            <div class="mb-8">
              <h2 class="text-xl font-semibold text-gray-900 mb-4">Haqida</h2>
              <p class="text-gray-700 leading-relaxed">
                {{ specialist.description }}
              </p>
            </div>

            <!-- Skills -->
            <div class="mb-8">
              <h2 class="text-xl font-semibold text-gray-900 mb-4">Ko'nikmalar</h2>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="skill in specialist.skills" 
                  :key="skill"
                  class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- Portfolio -->
            <div class="mb-8">
              <h2 class="text-xl font-semibold text-gray-900 mb-4">Portfolio</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div 
                  v-for="(project, index) in specialist.portfolio" 
                  :key="index"
                  class="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <div class="aspect-video bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg mb-3 flex items-center justify-center">
                    <Briefcase class="h-8 w-8 text-white" />
                  </div>
                  <h3 class="font-medium text-gray-900">{{ project }}</h3>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:w-80 mt-8 lg:mt-0">
            <div class="bg-white border border-gray-200 rounded-xl p-6 sticky top-24">
              <!-- Pricing -->
              <div class="text-center mb-6">
                <div class="text-3xl font-bold text-gray-900 mb-2">
                  ${{ specialist.hourlyRate }}/soat
                </div>
                <p class="text-gray-600">Soatlik narx</p>
              </div>

              <!-- Contact Buttons -->
              <div class="space-y-3 mb-6">
                <button class="w-full btn-primary flex items-center justify-center space-x-2">
                  <MessageCircle class="h-4 w-4" />
                  <span>Xabar yuborish</span>
                </button>
                <button class="w-full btn-secondary flex items-center justify-center space-x-2">
                  <Phone class="h-4 w-4" />
                  <span>Qo'ng'iroq qilish</span>
                </button>
              </div>

              <!-- Stats -->
              <div class="space-y-4 border-t border-gray-200 pt-6">
                <div class="flex justify-between">
                  <span class="text-gray-600">Tajriba:</span>
                  <span class="font-medium text-gray-900">{{ specialist.experience }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Loyihalar:</span>
                  <span class="font-medium text-gray-900">{{ specialist.completedProjects }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Javob berish:</span>
                  <span class="font-medium text-gray-900">1 soat ichida</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Qayta ishlash:</span>
                  <span class="font-medium text-gray-900">95%</span>
                </div>
              </div>

              <!-- Report -->
              <div class="border-t border-gray-200 pt-6 mt-6">
                <button class="text-sm text-gray-500 hover:text-gray-700 flex items-center space-x-1">
                  <Flag class="h-4 w-4" />
                  <span>Shikoyat qilish</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl font-bold text-gray-900">
            Sharhlar ({{ specialist.reviewCount }})
          </h2>
          <div class="flex items-center space-x-2">
            <Star class="h-5 w-5 text-yellow-400 fill-current" />
            <span class="text-lg font-semibold text-gray-900">{{ specialist.rating }}</span>
            <span class="text-gray-600">o'rtacha reyting</span>
          </div>
        </div>

        <!-- Sample Reviews -->
        <div class="space-y-6">
          <div 
            v-for="review in sampleReviews" 
            :key="review.id"
            class="bg-white rounded-lg p-6 border border-gray-200"
          >
            <div class="flex items-start space-x-4">
              <img 
                :src="review.avatar" 
                :alt="review.name"
                class="w-12 h-12 rounded-full object-cover"
              />
              <div class="flex-1">
                <div class="flex items-center justify-between mb-2">
                  <div>
                    <h4 class="font-medium text-gray-900">{{ review.name }}</h4>
                    <p class="text-sm text-gray-600">{{ review.date }}</p>
                  </div>
                  <div class="flex items-center">
                    <Star 
                      v-for="i in 5" 
                      :key="i"
                      class="h-4 w-4"
                      :class="i <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'"
                    />
                  </div>
                </div>
                <p class="text-gray-700">{{ review.comment }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <button class="btn-secondary">
            Barcha sharhlarni ko'rish
          </button>
        </div>
      </div>
    </section>

    <!-- Similar Specialists -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          O'xshash Mutaxassislar
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SpecialistCard 
            v-for="similarSpecialist in similarSpecialists" 
            :key="similarSpecialist.id"
            :specialist="similarSpecialist"
          />
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
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useServicesStore } from '../stores/services'
import { Star, Globe, MessageCircle, Phone, Flag, Briefcase } from 'lucide-vue-next'
import SpecialistCard from '../components/SpecialistCard.vue'

export default {
  name: 'SpecialistDetail',
  components: {
    Star,
    Globe,
    MessageCircle,
    Phone,
    Flag,
    Briefcase,
    SpecialistCard
  },
  setup() {
    const route = useRoute()
    const servicesStore = useServicesStore()

    const specialist = computed(() => 
      servicesStore.getSpecialistById(route.params.id)
    )

    const availabilityClass = computed(() => {
      if (!specialist.value) return ''
      const availability = specialist.value.availability.toLowerCase()
      if (availability.includes('darhol')) {
        return 'bg-green-100 text-green-800'
      } else if (availability.includes('kun')) {
        return 'bg-yellow-100 text-yellow-800'
      } else {
        return 'bg-gray-100 text-gray-800'
      }
    })

    const availabilityDotClass = computed(() => {
      if (!specialist.value) return ''
      const availability = specialist.value.availability.toLowerCase()
      if (availability.includes('darhol')) {
        return 'bg-green-400'
      } else if (availability.includes('kun')) {
        return 'bg-yellow-400'
      } else {
        return 'bg-gray-400'
      }
    })

    const similarSpecialists = computed(() => {
      if (!specialist.value) return []
      return servicesStore.getSpecialistsByCategory(specialist.value.categoryId)
        .filter(s => s.id !== specialist.value.id)
        .slice(0, 3)
    })

    const sampleReviews = ref([
      {
        id: 1,
        name: 'Aziz Karimov',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
        rating: 5,
        date: '2 hafta oldin',
        comment: 'Ajoyib ish! Vaqtida va sifatli bajarildi. Tavsiya qilaman.'
      },
      {
        id: 2,
        name: 'Malika Tosheva',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
        rating: 5,
        date: '1 oy oldin',
        comment: 'Professional yondashuv va mukammal natija. Rahmat!'
      },
      {
        id: 3,
        name: 'Bobur Aliyev',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
        rating: 4,
        date: '2 oy oldin',
        comment: 'Yaxshi ish qiladi, lekin biroz kechikdi. Umuman olganda mamnunman.'
      }
    ])

    return {
      specialist,
      availabilityClass,
      availabilityDotClass,
      similarSpecialists,
      sampleReviews
    }
  }
}
</script>

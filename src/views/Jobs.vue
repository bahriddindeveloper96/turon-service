<template>
  <div class="jobs-page">
    <!-- Hero Section -->
    <section class="relative overflow-hidden gradient-bg section-padding">
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-2xl animate-bounce-subtle"></div>
      </div>

      <div class="relative max-w-7xl mx-auto container-padding">
        <div class="text-center mb-16">
          <div class="mb-8">
            <span class="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-primary-700 border border-primary-200 shadow-soft animate-scale-in">
              💼 Ish imkoniyatlari
            </span>
          </div>
          
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span class="block text-gray-900 animate-slide-in-left">Ish</span>
            <span class="block text-gradient animate-slide-in-right">Imkoniyatlari</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Eng yaxshi ish o'rinlarini toping va <span class="font-semibold text-primary-700">professional karerangizni</span> rivojlantiring.
          </p>

          <!-- Search Bar -->
          <div class="max-w-3xl mx-auto mb-12 animate-scale-in">
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search class="h-6 w-6 text-gray-400 group-focus-within:text-primary-500 transition-colors duration-300" />
              </div>
              <input
                type="text"
                v-model="searchQuery"
                @keyup.enter="handleSearch"
                class="block w-full pl-16 pr-40 py-5 text-lg border-2 border-gray-200 rounded-2xl leading-5 bg-white/90 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 shadow-large transition-all duration-300"
                placeholder="Ish pozitsiyasi yoki kompaniya nomi..."
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                <button 
                  @click="handleSearch"
                  class="btn-primary text-base py-3 px-8"
                >
                  Qidirish
                </button>
              </div>
            </div>
          </div>

          <!-- Quick Filters -->
          <div class="flex flex-wrap justify-center gap-3 mb-16 animate-slide-up">
            <span class="text-base text-gray-500 font-medium">Mashhur kategoriyalar:</span>
            <button 
              v-for="category in popularCategories" 
              :key="category"
              @click="filterByCategory(category)"
              class="text-sm bg-white/80 backdrop-blur-sm text-primary-700 px-4 py-2 rounded-full border border-primary-200 hover:bg-primary-50 hover:border-primary-300 shadow-soft hover:shadow-medium transform hover:-translate-y-0.5 transition-all duration-300"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Jobs Listing Section -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto container-padding">
        <!-- Filters and Sort -->
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 space-y-4 lg:space-y-0">
          <div class="flex flex-wrap items-center gap-4">
            <select v-model="selectedLocation" class="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="">Barcha shaharlar</option>
              <option value="tashkent">Toshkent</option>
              <option value="samarkand">Samarqand</option>
              <option value="bukhara">Buxoro</option>
            </select>
            
            <select v-model="selectedType" class="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="">Barcha turlar</option>
              <option value="full-time">To'liq vaqt</option>
              <option value="part-time">Qisman vaqt</option>
              <option value="remote">Masofaviy</option>
              <option value="freelance">Freelance</option>
            </select>

            <select v-model="selectedExperience" class="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="">Barcha darajalar</option>
              <option value="entry">Boshlang'ich</option>
              <option value="mid">O'rta</option>
              <option value="senior">Yuqori</option>
            </select>
          </div>

          <div class="flex items-center space-x-4">
            <span class="text-gray-600">{{ filteredJobs.length }} ta ish topildi</span>
            <select v-model="sortBy" class="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="newest">Eng yangi</option>
              <option value="salary">Maosh bo'yicha</option>
              <option value="company">Kompaniya nomi</option>
            </select>
          </div>
        </div>

        <!-- Jobs Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div 
            v-for="(job, index) in filteredJobs" 
            :key="job.id"
            class="card-interactive group animate-fade-in"
            :style="`animation-delay: ${index * 0.1}s`"
          >
            <!-- Company Logo & Info -->
            <div class="flex items-start space-x-4 mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-colored group-hover:shadow-lg transition-shadow duration-300">
                <Building class="h-8 w-8 text-white" />
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 group-hover:text-gradient transition-all duration-300 mb-1">
                  {{ job.title }}
                </h3>
                <p class="text-primary-600 font-semibold mb-2">{{ job.company }}</p>
                <div class="flex items-center space-x-4 text-sm text-gray-600">
                  <div class="flex items-center">
                    <MapPin class="h-4 w-4 mr-1" />
                    {{ job.location }}
                  </div>
                  <div class="flex items-center">
                    <Clock class="h-4 w-4 mr-1" />
                    {{ job.type }}
                  </div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-2xl font-bold text-gradient mb-1">
                  ${{ job.salary }}
                </div>
                <div class="text-sm text-gray-500">oyiga</div>
              </div>
            </div>

            <!-- Job Description -->
            <p class="text-gray-700 mb-6 leading-relaxed">{{ job.description }}</p>

            <!-- Skills -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span 
                v-for="skill in job.skills.slice(0, 4)" 
                :key="skill"
                class="inline-flex items-center px-3 py-1 rounded-xl text-xs font-semibold bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 border border-primary-200"
              >
                {{ skill }}
              </span>
              <span 
                v-if="job.skills.length > 4"
                class="inline-flex items-center px-3 py-1 rounded-xl text-xs font-semibold bg-gray-100 text-gray-700"
              >
                +{{ job.skills.length - 4 }}
              </span>
            </div>

            <!-- Footer -->
            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
              <div class="flex items-center space-x-4 text-sm text-gray-600">
                <div class="flex items-center">
                  <Calendar class="h-4 w-4 mr-1" />
                  {{ job.postedDate }}
                </div>
                <div class="flex items-center">
                  <Users class="h-4 w-4 mr-1" />
                  {{ job.applicants }} ariza
                </div>
              </div>
              <div class="flex space-x-3">
                <button class="p-2 text-gray-400 hover:text-red-500 transition-colors">
                  <Heart class="h-5 w-5" />
                </button>
                <button class="btn-primary text-sm py-2 px-6">
                  Ariza berish
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More -->
        <div class="text-center mt-12">
          <button class="btn-secondary text-lg px-8 py-3">
            Ko'proq yuklash
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding gradient-bg">
      <div class="max-w-4xl mx-auto container-padding text-center">
        <h2 class="text-4xl font-bold text-gradient mb-6">Kompaniyangiz uchun ishchi qidiryapsizmi?</h2>
        <p class="text-xl text-gray-600 mb-8">
          Minglab malakali mutaxassislar orasidan eng mos kandidatlarni toping
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="btn-primary text-lg">
            Ish e'lon qilish
          </button>
          <button class="btn-secondary text-lg">
            Batafsil ma'lumot
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { 
  Search, 
  Building, 
  MapPin, 
  Clock, 
  Calendar, 
  Users, 
  Heart 
} from 'lucide-vue-next'

export default {
  name: 'Jobs',
  components: {
    Search,
    Building,
    MapPin,
    Clock,
    Calendar,
    Users,
    Heart
  },
  setup() {
    const searchQuery = ref('')
    const selectedLocation = ref('')
    const selectedType = ref('')
    const selectedExperience = ref('')
    const sortBy = ref('newest')

    const popularCategories = ref([
      'IT & Dasturlash',
      'Marketing',
      'Dizayn',
      'Moliya',
      'Sotuv',
      'Boshqaruv'
    ])

    // Sample jobs data
    const jobs = ref([
      {
        id: 1,
        title: 'Senior Frontend Developer',
        company: 'TechCorp',
        location: 'Toshkent',
        type: 'To\'liq vaqt',
        salary: '2000',
        description: 'React va Vue.js bo\'yicha tajribali frontend dasturchisi kerak. Zamonaviy web ilovalar yaratish va optimizatsiya qilish.',
        skills: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'CSS'],
        postedDate: '2 kun oldin',
        applicants: 15,
        experience: 'senior'
      },
      {
        id: 2,
        title: 'UX/UI Designer',
        company: 'DesignStudio',
        location: 'Toshkent',
        type: 'Masofaviy',
        salary: '1500',
        description: 'Foydalanuvchi tajribasi va interfeys dizayni bo\'yicha mutaxassis. Figma va Adobe Creative Suite bilan ishlash.',
        skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'],
        postedDate: '1 hafta oldin',
        applicants: 23,
        experience: 'mid'
      },
      {
        id: 3,
        title: 'Digital Marketing Manager',
        company: 'MarketPro',
        location: 'Samarqand',
        type: 'To\'liq vaqt',
        salary: '1800',
        description: 'Raqamli marketing strategiyalarini ishlab chiqish va amalga oshirish. SMM, SEO va kontentni boshqarish.',
        skills: ['SEO', 'SMM', 'Google Ads', 'Analytics'],
        postedDate: '3 kun oldin',
        applicants: 8,
        experience: 'mid'
      },
      {
        id: 4,
        title: 'Backend Developer',
        company: 'DevSolutions',
        location: 'Toshkent',
        type: 'Qisman vaqt',
        salary: '1200',
        description: 'Node.js va Python bilan backend tizimlarini yaratish va qo\'llab-quvvatlash.',
        skills: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL'],
        postedDate: '5 kun oldin',
        applicants: 12,
        experience: 'entry'
      }
    ])

    const filteredJobs = computed(() => {
      let filtered = jobs.value

      if (searchQuery.value) {
        filtered = filtered.filter(job => 
          job.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          job.company.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
      }

      if (selectedLocation.value) {
        filtered = filtered.filter(job => 
          job.location.toLowerCase().includes(selectedLocation.value.toLowerCase())
        )
      }

      if (selectedType.value) {
        filtered = filtered.filter(job => job.type === selectedType.value)
      }

      if (selectedExperience.value) {
        filtered = filtered.filter(job => job.experience === selectedExperience.value)
      }

      // Sort
      if (sortBy.value === 'salary') {
        filtered.sort((a, b) => parseInt(b.salary) - parseInt(a.salary))
      } else if (sortBy.value === 'company') {
        filtered.sort((a, b) => a.company.localeCompare(b.company))
      }

      return filtered
    })

    const handleSearch = () => {
      // Search functionality is handled by computed property
      console.log('Searching for:', searchQuery.value)
    }

    const filterByCategory = (category) => {
      searchQuery.value = category
    }

    return {
      searchQuery,
      selectedLocation,
      selectedType,
      selectedExperience,
      sortBy,
      popularCategories,
      filteredJobs,
      handleSearch,
      filterByCategory
    }
  }
}
</script>

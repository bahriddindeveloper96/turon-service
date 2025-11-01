<template>
  <div class="card-interactive group bg-white">
    <!-- Header -->
    <div class="flex items-start space-x-4 mb-6">
      <div class="relative">
        <img 
          :src="specialist.avatar" 
          :alt="specialist.name"
          class="w-20 h-20 rounded-2xl object-cover shadow-medium group-hover:shadow-large transition-shadow duration-300"
        />
        <div class="absolute -bottom-2 -right-2 w-6 h-6 bg-success-500 rounded-full border-2 border-white flex items-center justify-center">
          <div class="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      <div class="flex-1 min-w-0">
        <h3 class="text-xl font-bold text-gray-900 truncate group-hover:text-gradient transition-all duration-300">
          {{ specialist.name }}
        </h3>
        <p class="text-base text-gray-600 mb-3 font-medium">{{ specialist.title }}</p>
        <div class="flex items-center space-x-3">
          <div class="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
            <Star class="h-4 w-4 text-yellow-500 fill-current" />
            <span class="text-sm font-bold text-gray-900 ml-1">{{ specialist.rating }}</span>
          </div>
          <span class="text-sm text-gray-500 font-medium">({{ specialist.reviewCount }} sharh)</span>
        </div>
      </div>
    </div>

    <!-- Skills -->
    <div class="mb-6">
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="skill in specialist.skills.slice(0, 3)" 
          :key="skill"
          class="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 border border-primary-200 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300"
        >
          {{ skill }}
        </span>
        <span 
          v-if="specialist.skills.length > 3"
          class="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border border-gray-200"
        >
          +{{ specialist.skills.length - 3 }}
        </span>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-2 gap-6 mb-6">
      <div class="text-center p-3 bg-gray-50 rounded-xl group-hover:bg-primary-50 transition-colors duration-300">
        <div class="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">{{ specialist.experience }}</div>
        <div class="text-xs text-gray-500 font-medium">Tajriba</div>
      </div>
      <div class="text-center p-3 bg-gray-50 rounded-xl group-hover:bg-purple-50 transition-colors duration-300">
        <div class="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">{{ specialist.completedProjects }}</div>
        <div class="text-xs text-gray-500 font-medium">Loyihalar</div>
      </div>
    </div>

    <!-- Description -->
    <p class="text-sm text-gray-600 mb-6 line-clamp-2 leading-relaxed">
      {{ specialist.description }}
    </p>

    <!-- Availability badge -->
    <div class="mb-6">
      <span 
        class="inline-flex items-center px-3 py-2 rounded-xl text-sm font-semibold shadow-soft"
        :class="availabilityClass"
      >
        <div class="w-2.5 h-2.5 rounded-full mr-2 animate-pulse" :class="availabilityDotClass"></div>
        {{ specialist.availability }}
      </span>
    </div>

    <!-- Footer -->
    <div class="flex items-center justify-between pt-6 border-t border-gray-100">
      <div class="text-2xl font-bold text-gradient">
        ${{ specialist.hourlyRate }}<span class="text-sm text-gray-500 font-normal">/soat</span>
      </div>
      <div class="flex space-x-3">
        <button class="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-primary-600 transition-colors duration-200">
          Portfolio
        </button>
        <router-link 
          :to="`/specialist/${specialist.id}`"
          class="px-6 py-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white text-sm font-semibold rounded-xl shadow-colored hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Ko'rish
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { Star } from 'lucide-vue-next'

export default {
  name: 'SpecialistCard',
  components: {
    Star
  },
  props: {
    specialist: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const availabilityClass = computed(() => {
      const availability = props.specialist.availability.toLowerCase()
      if (availability.includes('darhol')) {
        return 'bg-green-100 text-green-800'
      } else if (availability.includes('kun')) {
        return 'bg-yellow-100 text-yellow-800'
      } else {
        return 'bg-gray-100 text-gray-800'
      }
    })

    const availabilityDotClass = computed(() => {
      const availability = props.specialist.availability.toLowerCase()
      if (availability.includes('darhol')) {
        return 'bg-green-400'
      } else if (availability.includes('kun')) {
        return 'bg-yellow-400'
      } else {
        return 'bg-gray-400'
      }
    })

    return {
      availabilityClass,
      availabilityDotClass
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

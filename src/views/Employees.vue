<template>
  <div class="employees-page">
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
              👥 Xodimlar
            </span>
          </div>
          
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span class="block text-gray-900 animate-slide-in-left">Bizning</span>
            <span class="block text-gradient animate-slide-in-right">Jamoa</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Professional mutaxassislar jamoasi bilan tanishing va <span class="font-semibold text-primary-700">eng yaxshi xizmatlardan</span> foydalaning.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Stats -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div class="text-center group animate-fade-in">
            <div class="relative mb-4">
              <div class="text-5xl md:text-6xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div class="absolute -inset-4 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="text-lg text-gray-600 font-medium">Xodimlar</div>
          </div>
          <div class="text-center group animate-fade-in" style="animation-delay: 0.1s;">
            <div class="relative mb-4">
              <div class="text-5xl md:text-6xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div class="absolute -inset-4 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="text-lg text-gray-600 font-medium">Bo'limlar</div>
          </div>
          <div class="text-center group animate-fade-in" style="animation-delay: 0.2s;">
            <div class="relative mb-4">
              <div class="text-5xl md:text-6xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div class="absolute -inset-4 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="text-lg text-gray-600 font-medium">Yillik tajriba</div>
          </div>
          <div class="text-center group animate-fade-in" style="animation-delay: 0.3s;">
            <div class="relative mb-4">
              <div class="text-5xl md:text-6xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div class="absolute -inset-4 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="text-lg text-gray-600 font-medium">Mamnunlik</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Department Filters -->
    <section class="bg-gray-50 py-12">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="department in departments"
            :key="department.id"
            @click="selectedDepartment = department.id"
            class="px-6 py-3 rounded-2xl font-semibold transition-all duration-300"
            :class="selectedDepartment === department.id 
              ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-colored' 
              : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-soft hover:shadow-medium'"
          >
            {{ department.icon }} {{ department.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Team Members -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div 
            v-for="(employee, index) in filteredEmployees" 
            :key="employee.id"
            class="group animate-fade-in"
            :style="`animation-delay: ${index * 0.1}s`"
          >
            <div class="bg-white rounded-3xl p-6 shadow-large hover:shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-all duration-300">
              <!-- Avatar -->
              <div class="relative mb-6">
                <div class="w-24 h-24 mx-auto rounded-3xl overflow-hidden shadow-medium group-hover:shadow-large transition-shadow duration-300">
                  <img 
                    :src="employee.avatar" 
                    :alt="employee.name"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <!-- Status Indicator -->
                <div class="absolute -bottom-2 -right-6 w-6 h-6 bg-success-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                  <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>

              <!-- Info -->
              <div class="text-center">
                <h3 class="text-xl font-bold text-gray-900 mb-1 group-hover:text-gradient transition-all duration-300">
                  {{ employee.name }}
                </h3>
                <p class="text-primary-600 font-semibold mb-3">{{ employee.position }}</p>
                <p class="text-gray-600 text-sm mb-4">{{ employee.department }}</p>

                <!-- Skills -->
                <div class="flex flex-wrap justify-center gap-1 mb-6">
                  <span 
                    v-for="skill in employee.skills.slice(0, 3)" 
                    :key="skill"
                    class="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-primary-100 text-primary-800"
                  >
                    {{ skill }}
                  </span>
                </div>

                <!-- Stats -->
                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div class="text-center p-2 bg-gray-50 rounded-xl">
                    <div class="text-lg font-bold text-gray-900">{{ employee.experience }}</div>
                    <div class="text-xs text-gray-500">Tajriba</div>
                  </div>
                  <div class="text-center p-2 bg-gray-50 rounded-xl">
                    <div class="text-lg font-bold text-gray-900">{{ employee.projects }}</div>
                    <div class="text-xs text-gray-500">Loyihalar</div>
                  </div>
                </div>

                <!-- Contact -->
                <div class="flex justify-center space-x-3">
                  <button class="p-2 bg-primary-100 text-primary-600 rounded-xl hover:bg-primary-200 transition-colors">
                    <Mail class="h-4 w-4" />
                  </button>
                  <button class="p-2 bg-primary-100 text-primary-600 rounded-xl hover:bg-primary-200 transition-colors">
                    <MessageCircle class="h-4 w-4" />
                  </button>
                  <button class="p-2 bg-primary-100 text-primary-600 rounded-xl hover:bg-primary-200 transition-colors">
                    <Phone class="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Team CTA -->
    <section class="section-padding gradient-bg">
      <div class="max-w-4xl mx-auto container-padding text-center">
        <div class="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-large border border-white/20">
          <h2 class="text-4xl font-bold text-gradient mb-6">Bizning jamoaga qo'shiling!</h2>
          <p class="text-xl text-gray-600 mb-8">
            Professional rivojlanish va innovatsion loyihalarda ishtirok etish imkoniyati
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn-primary text-lg">
              <UserPlus class="h-5 w-5 inline mr-2" />
              Vakansiyalarni ko'rish
            </button>
            <button class="btn-secondary text-lg">
              <Users class="h-5 w-5 inline mr-2" />
              Jamoani ko'rish
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { 
  Mail, 
  MessageCircle, 
  Phone, 
  UserPlus, 
  Users 
} from 'lucide-vue-next'

export default {
  name: 'Employees',
  components: {
    Mail,
    MessageCircle,
    Phone,
    UserPlus,
    Users
  },
  setup() {
    const selectedDepartment = ref('all')

    const departments = ref([
      { id: 'all', name: 'Barchasi', icon: '👥' },
      { id: 'development', name: 'Dasturlash', icon: '💻' },
      { id: 'design', name: 'Dizayn', icon: '🎨' },
      { id: 'marketing', name: 'Marketing', icon: '📈' },
      { id: 'management', name: 'Boshqaruv', icon: '👔' },
      { id: 'support', name: 'Qo\'llab-quvvatlash', icon: '🎧' }
    ])

    const employees = ref([
      {
        id: 1,
        name: 'Aziz Karimov',
        position: 'Senior Frontend Developer',
        department: 'Dasturlash',
        departmentId: 'development',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        skills: ['React', 'Vue.js', 'TypeScript'],
        experience: '5 yil',
        projects: '25+'
      },
      {
        id: 2,
        name: 'Malika Tosheva',
        position: 'UX/UI Designer',
        department: 'Dizayn',
        departmentId: 'design',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        skills: ['Figma', 'Adobe XD', 'Photoshop'],
        experience: '4 yil',
        projects: '30+'
      },
      {
        id: 3,
        name: 'Bobur Aliyev',
        position: 'Marketing Manager',
        department: 'Marketing',
        departmentId: 'marketing',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        skills: ['SEO', 'SMM', 'Analytics'],
        experience: '3 yil',
        projects: '20+'
      },
      {
        id: 4,
        name: 'Nilufar Rahimova',
        position: 'Project Manager',
        department: 'Boshqaruv',
        departmentId: 'management',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        skills: ['Agile', 'Scrum', 'Leadership'],
        experience: '6 yil',
        projects: '40+'
      },
      {
        id: 5,
        name: 'Sardor Nazarov',
        position: 'Backend Developer',
        department: 'Dasturlash',
        departmentId: 'development',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        skills: ['Node.js', 'Python', 'MongoDB'],
        experience: '4 yil',
        projects: '35+'
      },
      {
        id: 6,
        name: 'Zarina Ismoilova',
        position: 'Graphic Designer',
        department: 'Dizayn',
        departmentId: 'design',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
        skills: ['Illustrator', 'InDesign', 'Branding'],
        experience: '3 yil',
        projects: '50+'
      },
      {
        id: 7,
        name: 'Otabek Saidov',
        position: 'Customer Support Lead',
        department: 'Qo\'llab-quvvatlash',
        departmentId: 'support',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face',
        skills: ['Communication', 'Problem Solving', 'CRM'],
        experience: '2 yil',
        projects: '100+'
      },
      {
        id: 8,
        name: 'Feruza Abdullayeva',
        position: 'Content Manager',
        department: 'Marketing',
        departmentId: 'marketing',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
        skills: ['Content Writing', 'SEO', 'Social Media'],
        experience: '3 yil',
        projects: '60+'
      }
    ])

    const filteredEmployees = computed(() => {
      if (selectedDepartment.value === 'all') {
        return employees.value
      }
      return employees.value.filter(employee => 
        employee.departmentId === selectedDepartment.value
      )
    })

    return {
      selectedDepartment,
      departments,
      filteredEmployees
    }
  }
}
</script>

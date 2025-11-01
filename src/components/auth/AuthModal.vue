<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
    <!-- Backdrop -->
    <div 
      class="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      @click="closeModal"
    ></div>
    
    <!-- Modal -->
    <div class="flex min-h-full items-center justify-center p-4">
      <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-300 animate-scale-in">
        <!-- Close Button -->
        <button 
          @click="closeModal"
          class="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X class="h-6 w-6" />
        </button>

        <!-- Header -->
        <div class="px-8 pt-8 pb-6 text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-colored">
            <User class="h-8 w-8 text-white" />
          </div>
          <h2 class="text-2xl font-bold text-gradient mb-2">
            {{ isLogin ? 'Kirish' : "Ro'yxatdan o'tish" }}
          </h2>
          <p class="text-gray-600">
            {{ isLogin ? 'Hisobingizga kiring' : 'Yangi hisob yarating' }}
          </p>
        </div>

        <!-- Form -->
        <div class="px-8 pb-8">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name field (only for registration) -->
            <div v-if="!isLogin" class="space-y-2">
              <label class="text-sm font-semibold text-gray-700">Ism Familiya</label>
              <div class="relative">
                <UserCheck class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Ismingizni kiriting"
                />
              </div>
            </div>

            <!-- Email field -->
            <div class="space-y-2">
              <label class="text-sm font-semibold text-gray-700">Email</label>
              <div class="relative">
                <Mail class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <!-- Password field -->
            <div class="space-y-2">
              <label class="text-sm font-semibold text-gray-700">Parol</label>
              <div class="relative">
                <Lock class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  class="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Parolingizni kiriting"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <Eye v-if="!showPassword" class="h-5 w-5" />
                  <EyeOff v-else class="h-5 w-5" />
                </button>
              </div>
            </div>

            <!-- Confirm Password (only for registration) -->
            <div v-if="!isLogin" class="space-y-2">
              <label class="text-sm font-semibold text-gray-700">Parolni tasdiqlang</label>
              <div class="relative">
                <Lock class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  v-model="form.confirmPassword"
                  type="password"
                  required
                  class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Parolni qayta kiriting"
                />
              </div>
            </div>

            <!-- User Type (only for registration) -->
            <div v-if="!isLogin" class="space-y-2">
              <label class="text-sm font-semibold text-gray-700">Foydalanuvchi turi</label>
              <div class="grid grid-cols-2 gap-3">
                <label class="relative cursor-pointer">
                  <input
                    v-model="form.userType"
                    type="radio"
                    value="client"
                    class="sr-only"
                  />
                  <div class="p-4 border-2 rounded-2xl text-center transition-all duration-300"
                       :class="form.userType === 'client' ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'">
                    <Users class="h-6 w-6 mx-auto mb-2" :class="form.userType === 'client' ? 'text-primary-600' : 'text-gray-400'" />
                    <span class="text-sm font-medium" :class="form.userType === 'client' ? 'text-primary-700' : 'text-gray-600'">Mijoz</span>
                  </div>
                </label>
                <label class="relative cursor-pointer">
                  <input
                    v-model="form.userType"
                    type="radio"
                    value="specialist"
                    class="sr-only"
                  />
                  <div class="p-4 border-2 rounded-2xl text-center transition-all duration-300"
                       :class="form.userType === 'specialist' ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'">
                    <Briefcase class="h-6 w-6 mx-auto mb-2" :class="form.userType === 'specialist' ? 'text-primary-600' : 'text-gray-400'" />
                    <span class="text-sm font-medium" :class="form.userType === 'specialist' ? 'text-primary-700' : 'text-gray-600'">Mutaxassis</span>
                  </div>
                </label>
              </div>
            </div>

            <!-- Remember me / Forgot password -->
            <div v-if="isLogin" class="flex items-center justify-between">
              <label class="flex items-center">
                <input type="checkbox" v-model="form.remember" class="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                <span class="ml-2 text-sm text-gray-600">Eslab qolish</span>
              </label>
              <button type="button" class="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Parolni unutdingizmi?
              </button>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full btn-primary text-lg py-4 disabled:opacity-50"
            >
              <div v-if="isLoading" class="flex items-center justify-center">
                <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Yuklanmoqda...
              </div>
              <span v-else>{{ isLogin ? 'Kirish' : "Ro'yxatdan o'tish" }}</span>
            </button>
          </form>

          <!-- Divider -->
          <div class="relative my-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">yoki</span>
            </div>
          </div>

          <!-- Social Login -->
          <div class="space-y-3">
            <button class="w-full flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google bilan davom etish
            </button>
          </div>

          <!-- Toggle Login/Register -->
          <div class="text-center mt-6">
            <p class="text-gray-600">
              {{ isLogin ? "Hisobingiz yo'qmi?" : "Hisobingiz bormi?" }}
              <button
                @click="toggleMode"
                class="text-primary-600 hover:text-primary-700 font-semibold ml-1"
              >
                {{ isLogin ? "Ro'yxatdan o'tish" : "Kirish" }}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { 
  X, 
  User, 
  UserCheck, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Users, 
  Briefcase 
} from 'lucide-vue-next'

export default {
  name: 'AuthModal',
  components: {
    X,
    User,
    UserCheck,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Users,
    Briefcase
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    initialMode: {
      type: String,
      default: 'login' // 'login' or 'register'
    }
  },
  emits: ['close', 'login', 'register'],
  setup(props, { emit }) {
    const isLogin = ref(props.initialMode === 'login')
    const showPassword = ref(false)
    const isLoading = ref(false)

    const form = reactive({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      userType: 'client',
      remember: false
    })

    const closeModal = () => {
      emit('close')
    }

    const toggleMode = () => {
      isLogin.value = !isLogin.value
      // Reset form
      Object.keys(form).forEach(key => {
        if (key === 'userType') {
          form[key] = 'client'
        } else if (key === 'remember') {
          form[key] = false
        } else {
          form[key] = ''
        }
      })
    }

    const handleSubmit = async () => {
      isLoading.value = true
      
      try {
        if (isLogin.value) {
          // Login logic
          await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
          emit('login', {
            email: form.email,
            password: form.password,
            remember: form.remember
          })
        } else {
          // Registration logic
          if (form.password !== form.confirmPassword) {
            alert('Parollar mos kelmaydi!')
            return
          }
          
          await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
          emit('register', {
            name: form.name,
            email: form.email,
            password: form.password,
            userType: form.userType
          })
        }
        
        closeModal()
      } catch (error) {
        console.error('Auth error:', error)
      } finally {
        isLoading.value = false
      }
    }

    return {
      isLogin,
      showPassword,
      isLoading,
      form,
      closeModal,
      toggleMode,
      handleSubmit
    }
  }
}
</script>

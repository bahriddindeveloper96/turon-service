<template>
  <footer class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full blur-xl"></div>
      <div class="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl"></div>
      <div class="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-lg"></div>
    </div>

    <div class="relative max-w-7xl mx-auto container-padding py-16">
      <!-- Top Section -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-4 mb-6">
            <div class="relative">
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500 via-primary-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-colored">
                <span class="text-white font-bold text-xl">S</span>
              </div>
              <div class="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span class="text-2xl font-bold text-gradient">ServiceHub</span>
              <p class="text-sm text-gray-400">Professional Services Platform</p>
            </div>
          </div>
          
          <p class="text-gray-300 mb-6 max-w-md leading-relaxed text-lg">
            Professional xizmatlar platformasi. Eng yaxshi mutaxassislarni toping va loyihalaringizni muvaffaqiyatli amalga oshiring.
          </p>

          <!-- Stats -->
          <!-- <div class="grid grid-cols-3 gap-6 mb-8">
            <div class="text-center">
              <div class="text-2xl font-bold text-gradient mb-1">1000+</div>
              <div class="text-xs text-gray-400">Mutaxassislar</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-gradient mb-1">5000+</div>
              <div class="text-xs text-gray-400">Loyihalar</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-gradient mb-1">98%</div>
              <div class="text-xs text-gray-400">Mamnunlik</div>
            </div>
          </div> -->

          <!-- Social Media -->
          <div class="flex space-x-4">
            <a href="#" class="group p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
              <Facebook class="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a href="#" class="group p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
              <Twitter class="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a href="#" class="group p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
              <Instagram class="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a href="#" class="group p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
              <Linkedin class="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-bold mb-4 text-gradient">🚀 Tezkor havolalar</h3>
            <ul class="space-y-3">
              <li><a href="#" class="group flex items-center text-gray-300 hover:text-white transition-all duration-300">
                <ArrowRight class="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Biz haqimizda
              </a></li>
              <li><a href="#" class="group flex items-center text-gray-300 hover:text-white transition-all duration-300">
                <ArrowRight class="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Xizmatlar
              </a></li>
              <li><a href="#" class="group flex items-center text-gray-300 hover:text-white transition-all duration-300">
                <ArrowRight class="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Narxlar
              </a></li>
              <li><a href="#" class="group flex items-center text-gray-300 hover:text-white transition-all duration-300">
                <ArrowRight class="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Blog
              </a></li>
            </ul>
          </div>
        </div>

        <!-- Support -->
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-bold mb-4 text-gradient">💬 Yordam</h3>
            <ul class="space-y-3">
              <li><a href="#" class="group flex items-center text-gray-300 hover:text-white transition-all duration-300">
                <HelpCircle class="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Yordam markazi
              </a></li>
              <li><a href="#" class="group flex items-center text-gray-300 hover:text-white transition-all duration-300">
                <Book class="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Qo'llanma
              </a></li>
              <li><a href="#" class="group flex items-center text-gray-300 hover:text-white transition-all duration-300">
                <MessageCircle class="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                FAQ
              </a></li>
              <li><a href="#" class="group flex items-center text-gray-300 hover:text-white transition-all duration-300">
                <Shield class="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Maxfiylik
              </a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-white/20 mt-12 pt-8">
        <div class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div class="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6">
            <p class="text-gray-400 text-sm">
              © 2024 ServiceHub. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowRight, 
  HelpCircle, 
  Book, 
  MessageCircle, 
  Shield, 
  Send, 
  Globe, 
  ArrowUp, 
  Heart 
} from 'lucide-vue-next'

export default {
  name: 'AppFooter',
  components: {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    ArrowRight,
    HelpCircle,
    Book,
    MessageCircle,
    Shield,
    Send,
    Globe,
    ArrowUp,
    Heart
  },
  setup() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    return {
      scrollToTop
    }
  }
}
</script>

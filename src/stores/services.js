import { defineStore } from 'pinia'

export const useServicesStore = defineStore('services', {
  state: () => ({
    categories: [
      {
        id: 1,
        name: 'IT va Dasturlash',
        slug: 'it-programming',
        icon: '💻',
        description: 'Veb-saytlar, mobil ilovalar va dasturiy ta\'minot ishlab chiqish',
        specialistCount: 245,
        subcategories: ['Frontend Development', 'Backend Development', 'Mobile Development', 'DevOps', 'UI/UX Design']
      },
      {
        id: 2,
        name: 'Dizayn va Kreativ',
        slug: 'design-creative',
        icon: '🎨',
        description: 'Grafik dizayn, brending va kreativ xizmatlar',
        specialistCount: 189,
        subcategories: ['Logo Design', 'Web Design', 'Print Design', 'Branding', 'Illustration']
      },
      {
        id: 3,
        name: 'Marketing va SMM',
        slug: 'marketing-smm',
        icon: '📈',
        description: 'Raqamli marketing, ijtimoiy tarmoqlar va reklama',
        specialistCount: 156,
        subcategories: ['Social Media Marketing', 'SEO', 'Content Marketing', 'PPC Advertising', 'Email Marketing']
      },
      {
        id: 4,
        name: 'Yozuv va Tarjima',
        slug: 'writing-translation',
        icon: '✍️',
        description: 'Kontent yozish, tarjima va tahrirlash xizmatlari',
        specialistCount: 98,
        subcategories: ['Copywriting', 'Technical Writing', 'Translation', 'Editing', 'Content Creation']
      },
      {
        id: 5,
        name: 'Video va Audio',
        slug: 'video-audio',
        icon: '🎬',
        description: 'Video montaj, audio ishlab chiqish va multimedia',
        specialistCount: 87,
        subcategories: ['Video Editing', 'Motion Graphics', 'Audio Production', 'Animation', 'Photography']
      },
      {
        id: 6,
        name: 'Biznes va Konsalting',
        slug: 'business-consulting',
        icon: '💼',
        description: 'Biznes maslahat, strategiya va boshqaruv',
        specialistCount: 134,
        subcategories: ['Business Strategy', 'Financial Consulting', 'Project Management', 'HR Consulting', 'Legal Services']
      },
      {
        id: 7,
        name: 'Ta\'lim va Treninglar',
        slug: 'education-training',
        icon: '🎓',
        description: 'Onlayn darslar, treninglar va maslahatlar',
        specialistCount: 76,
        subcategories: ['Online Tutoring', 'Professional Training', 'Language Learning', 'Skill Development', 'Coaching']
      },
      {
        id: 8,
        name: 'Texnik Xizmatlar',
        slug: 'technical-services',
        icon: '🔧',
        description: 'Texnik yordam, ta\'mirlash va sozlash',
        specialistCount: 112,
        subcategories: ['Computer Repair', 'Network Setup', 'Software Installation', 'Technical Support', 'Data Recovery']
      }
    ],
    specialists: [
      {
        id: 1,
        name: 'Akmal Karimov',
        title: 'Senior Frontend Developer',
        categoryId: 1,
        rating: 4.9,
        reviewCount: 127,
        hourlyRate: 25,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        skills: ['React', 'Vue.js', 'TypeScript', 'Node.js'],
        experience: '5+ yil',
        completedProjects: 89,
        description: 'Zamonaviy veb-ilovalar yaratishda tajribali dasturchi. React va Vue.js bo\'yicha mutaxassis.',
        portfolio: ['E-commerce platform', 'CRM system', 'Mobile app'],
        languages: ['O\'zbek', 'Rus', 'Ingliz'],
        availability: 'Darhol'
      },
      {
        id: 2,
        name: 'Nilufar Abdullayeva',
        title: 'UI/UX Designer',
        categoryId: 2,
        rating: 4.8,
        reviewCount: 94,
        hourlyRate: 20,
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
        experience: '4+ yil',
        completedProjects: 67,
        description: 'Foydalanuvchi tajribasini yaxshilashga ixtisoslashgan dizayner. Zamonaviy va funksional dizaynlar yarataman.',
        portfolio: ['Mobile app design', 'Website redesign', 'Brand identity'],
        languages: ['O\'zbek', 'Ingliz'],
        availability: '1 hafta ichida'
      },
      {
        id: 3,
        name: 'Sardor Toshmatov',
        title: 'Digital Marketing Specialist',
        categoryId: 3,
        rating: 4.7,
        reviewCount: 156,
        hourlyRate: 18,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        skills: ['Google Ads', 'Facebook Ads', 'SEO', 'Analytics'],
        experience: '6+ yil',
        completedProjects: 134,
        description: 'Raqamli marketing bo\'yicha keng tajribaga ega mutaxassis. ROI ni oshirishga ixtisoslashgan.',
        portfolio: ['E-commerce campaign', 'Lead generation', 'Brand awareness'],
        languages: ['O\'zbek', 'Rus', 'Ingliz'],
        availability: 'Darhol'
      },
      {
        id: 4,
        name: 'Madina Rahimova',
        title: 'Content Writer & Translator',
        categoryId: 4,
        rating: 4.9,
        reviewCount: 89,
        hourlyRate: 15,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        skills: ['Copywriting', 'SEO Writing', 'Translation', 'Editing'],
        experience: '3+ yil',
        completedProjects: 156,
        description: 'Sifatli kontent yaratish va tarjima xizmatlarini taqdim etaman. SEO optimizatsiyasi bilan.',
        portfolio: ['Blog articles', 'Website copy', 'Technical translation'],
        languages: ['O\'zbek', 'Rus', 'Ingliz', 'Turk'],
        availability: '2-3 kun ichida'
      }
    ]
  }),
  
  getters: {
    getCategoryBySlug: (state) => (slug) => {
      return state.categories.find(category => category.slug === slug)
    },
    
    getSpecialistsByCategory: (state) => (categoryId) => {
      return state.specialists.filter(specialist => specialist.categoryId === categoryId)
    },
    
    getSpecialistById: (state) => (id) => {
      return state.specialists.find(specialist => specialist.id === parseInt(id))
    },
    
    getFeaturedSpecialists: (state) => {
      return state.specialists
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6)
    }
  },
  
  actions: {
    searchSpecialists(query) {
      const lowercaseQuery = query.toLowerCase()
      return this.specialists.filter(specialist => 
        specialist.name.toLowerCase().includes(lowercaseQuery) ||
        specialist.title.toLowerCase().includes(lowercaseQuery) ||
        specialist.skills.some(skill => skill.toLowerCase().includes(lowercaseQuery))
      )
    }
  }
})

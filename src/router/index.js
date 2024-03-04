import RateView from '@/views/RateView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import AboutMeView from '../views/layouts/AboutMeView.vue'
import DefaultAboutView from '../views/layouts/DefaultAboutView.vue'
import HardSkillsView from '../views/layouts/HardSkillsView.vue'
import SoftSkillsView from '../views/layouts/SoftSkillsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects,',
      component: ProjectsView
    },
    {
      path: '/rate',
      name: 'rate',
      component: RateView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      children: [
        {
          path: '/',
          components: {
            aboutContent: DefaultAboutView // Компонент AboutMeView будет отображаться по умолчанию
          }
        },
        {
          path: 'aboutMe',
          name: 'aboutMe',
          components: {
            aboutContent: AboutMeView
          }
        },
        {
          path: 'hardSkills',
          name: 'hardSkills',
          components: {
            aboutContent: HardSkillsView
          }
        },
        {
          path: 'softSkills',
          name: 'softSkills',
          components: {
            aboutContent: SoftSkillsView
          }
        },]
    },
    {

    }
  ]
})

export default router

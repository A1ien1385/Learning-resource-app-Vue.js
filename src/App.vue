<template>
  <ul>
    <LearningResources 
      v-for="res in storedResources" 
      :key="res.id" 
      :title="res.title" 
      :description="res.description" 
      :link="res.link">     
    </LearningResources>
  </ul>
</template>    
 
<script>
import LearningResources from './components/learning-resource/LearningResource.vue';

export default {
  components: {
    LearningResources
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org'
        }
      ]
    };
  }
}
</script>

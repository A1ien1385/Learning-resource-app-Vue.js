<template> 
<base-card>
  <base-button @click="setSelectebTab('stored-resources')">Stored Resources</base-button>
  <base-button @click="setSelectebTab('add-resource')">Add Resource</base-button>
</base-card>
<component :is="selectedTab"> </component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    components: {
       'stored-resources': StoredResources,
       'add-resource': AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
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
        }
    },
    provide() {
        return {
            resources: this.storedResources
        };
    },
    methods: {
        setSelectebTab(tab) {
            this.selectedTab = tab;
        }
    }

}

</script>
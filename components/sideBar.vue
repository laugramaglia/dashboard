

<template>
<aside class="flex-initial px-4 flex flex-col bg-white dark:bg-natural ease-in duration-300" :class="[isOpen ? 'w-side-bar' : 'w-small-side-bar']" aria-label="Sidebar">
    <div class="h-16 mb-2 flex items-center justify-center">logo</div>
    <NavItem :page="item" :is-active="$route.path == item.path" :is-open="isOpen"  v-for="item in listData" :key="item.path"/>
    <NavAlert v-if="isOpen == true"/>
</aside>
</template>
<script>
export default {
    props:{
        isOpen: Boolean
    },
    data(){
        return {
            listData: [{text:'Profile', path: '/'}, {text: 'Users', path: '/users'}],
        }
    },
  methods: {
    
  }
}
</script>

<template>
     <NuxtLink :to="page.path" class="flex items-center ease-in duration-300 space-x-4 rounded-lg text-left" :class="{'text-white p-2 my-1':isActive,'bg-blue p-3': isActive && isOpen, 'text-natural-3 hover:bg-natural-4 p-2 my-1':!isActive}">
        <IconsNavIcons :icon="page.text" src="/icons/users.svg" class="h-5 w-5  ease-in duration-300" :style="[isActive ? '' : '']" />
        <p v-if="isOpen == true" class="ease-in duration-300 text-sm font-bold">{{page.text}}</p>
    </NuxtLink >
</template>
<script>
export default {
    props:{
        page: {
            text: String,
            path: String
        },
        isActive: Boolean,
        isOpen: Boolean
    }
}
</script>
<style>

</style>
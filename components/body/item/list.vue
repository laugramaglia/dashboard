<template>
    <div class="flex flex-row items-center justify-between gap-2 mt-2 p-2 rounded-md" :class="{'bg-[#EFEFEF]': !iterate}">
        <div id="avatar" class="h-8 w-8 rounded-full ring-2 ring-gray-300"></div>
        <div class="w-52">
            <p class="text-left">{{item.title}}</p>
            <p class="text-gray-400 text-sm">{{item.info}}</p>
            </div>
        <button @click="isActive = !isActive">
            <IconsMore :is-active="isActive"/>
        </button>
    </div>
</template>
<script>
export default {
    props:{
        item: {
            title: String,
            info: String
        },
        iterate: Boolean
    },
    data(){
        return{
            isActive: false
        }
    }
}
</script>
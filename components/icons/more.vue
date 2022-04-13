<template>
    <div class="bg-[#F5F6FA] p-1.5 rounded-md">
        <div class="h-5 w-5 flex flex-col justify-between items-center ease-in duration-100" :class="{'-rotate-90':isActive}">
            <div class=" h-1 w-1 bg-natural-2 rounded-full" :id="item" v-for="item in listDots" :key="item"></div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        isActive: Boolean
    },
    data(){
        return{
            listDots:[1,2,3],
        }
    }
}
</script>
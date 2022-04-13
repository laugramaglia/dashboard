<template>
   <div class="flex flex-row">
       <SideBar :is-open="isOpen"/>
    <div class="w-full h-screen">
     <Header :is-open="isOpen" />
      <Body>
         <Nuxt />
      </Body>
    </div>
   </div>
</template>
<script>
export default{
  middleware: ['auth'],
  data(){
    return{
      isOpen: true
    }
  },
   created() {
    this.$nuxt.$on('toggleSideBar', ($event) => this.isOpen =!this.isOpen)
  },
  methods:{
  }
}
</script>
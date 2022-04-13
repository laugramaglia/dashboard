
<template>
 <div class="flex">
   <BodyCard>
    <BodyList title="Users"/>
 </BodyCard>
 <BodyCard>
   <button @click="logout">log-out</button>
 </BodyCard>
 </div>
</template>
<script>
export default {
  layout: "main",
  methods:{
      async logout(){
            await this.$auth.logout(/* .... */)
        }
  }
};
</script>
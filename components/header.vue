<template>
  <header class="h-16 flex flex-row items-center">
   
    <div>
      <button @click="$nuxt.$emit('toggleSideBar')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
    <div class="flex-initial w-32 bg-gray-200"></div>
  </header>
</template>

<script>

export default {
   props:{
     isOpen: Boolean
 } 
}
</script>
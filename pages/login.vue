
<template>
  <div class="flex flex-col gap-5 items-center justify-center h-screen">
    <div class="h-10 w-10 bg-black"></div>
      <div class="w-96 mt-5 md:mt-0 md:col-span-2">

          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
      
                 <div>
                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Username </label>
                  <div class="flex rounded-md shadow-sm">
                    <input type="text" v-model="user.username" class="p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Username..." />
                  </div>
                 </div>

                 <div>
                    <label for="company-website" class="block text-sm font-medium text-gray-700"> E-mail </label>
                  <div class="flex rounded-md shadow-sm">
                    <input type="text" v-model="user.email" class="p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="example@mail.com" />
                  </div>
                 </div>

                  <div>
                    <label for="company-website" class="mt-1 block text-sm font-medium text-gray-700"> Password </label>
                  <div class="flex rounded-md shadow-sm">
                    <input type="text" v-model="user.password" class="p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Password..." />
                  </div>
                  </div>

            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button @click="logIn()" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
            </div>
          </div>

      </div>

  </div>

  
</template>
<script>
export default {
  data(){
    return{
      user:{
        username: 'laugramaglia',
        email: 'laureanogramaglia@gmail.com',
        password: 'lautiz123'
      }
    }
  },
  methods: {
    async logIn() {
     try{
        await this.$auth.loginWith('local', { 
            data: {
                username: this.user.username,
                password: this.user.password
            } 
        })
    }catch(error){
            // The actual data returned from the API is in `error.response.data`
            const response = error.response.data;
            
            // Set the messages & errors to display
            this.status = response.statusCode;
            this.message = response.message;
            if( this.status === 401 ) this.textWarning = "Check username/Password"
            this.showAlert(5)
        }
    },
  },
}
</script>


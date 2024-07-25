<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-img
        class="mb-4"
        height="150"
        src="@/assets/logo.png"
      />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">Welcome to your home page</div>
        <h1 class="text-h2 font-weight-bold">{{ user.firstName }} {{ user.lastName }}</h1>
        <span>{{ user.email }}</span>
      </div>
    </v-responsive>
  </v-container>
</template>
  
<script lang="ts" setup>
    import { sessionValidation } from '../composables/useAuth'
    import { onMounted, ref } from 'vue';
    import axios from 'axios';
    import { useRouter } from 'vue-router'
    
    const router = useRouter();

    const user = ref({
      firstName: '',
      lastName: '',
      email: '',
    })

    const getUserInfo = async () => {
      sessionValidation()
      try {
        const response = await axios.get('http://localhost:8000/user/info/', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
          user.value.firstName=response.data.first_name
          user.value.lastName=response.data.last_name
          user.value.email=response.data.email
        } catch (error) {
          router.push({ path: '/Login' });
      }
    }; 

    onMounted(() => {
      getUserInfo();
    })
</script>
  
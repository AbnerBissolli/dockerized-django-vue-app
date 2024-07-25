<template>
    <div class="d-flex align-center justify-center" style="height: 100vh">
      <v-sheet width="400" class="mx-auto">
        <v-form @submit.prevent="login">
          <v-text-field v-model="username" label="User Name"></v-text-field>
          <v-text-field v-model="password" type="password" label="Password"></v-text-field>
          <v-btn type="submit" color="primary" block class="mt-2">Sign in</v-btn>
        </v-form>
      </v-sheet>
    </div>
  </template>
  
  <script setup lang="ts">
    import { ref } from 'vue';
    import axios from 'axios';
    import { useRouter } from 'vue-router'
    const router = useRouter();

    const username = ref('');
    const password = ref('');
  
    const login = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/token/', {
          username: username.value,
          password: password.value,
        });

        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);

        router.push({ path: '/Home' });
      } catch (error) {
        password.value = '';
        console.error('Error during login:', error);
      }
    };

  </script>
  
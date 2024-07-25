import axios from 'axios';
import { useRouter } from 'vue-router'
    

export async function sessionValidation(){
    const router = useRouter();

    if (!await verifyAccessToken()){
        if(!await verifyRefreshToken()){
          console.log('Session expired!')
          router.push({ path: '/Login' });
        }
        else {
          refreshAccessToken();        
        }
      }
}

export async function verifyAccessToken(): Promise<boolean> {
    try {
        const response = await axios.post('http://localhost:8000/api/token/verify/', {
            token: localStorage.getItem('accessToken'),
        });
        console.log(response.data);
        return true
    } catch (error) {
        console.error('Error during refresh:', error);
        return false
    }
};

export async function verifyRefreshToken(): Promise<boolean> {
    try {
        const response = await axios.post('http://localhost:8000/api/token/verify/', {
            token: localStorage.getItem('accessToken'),
        });
        console.log(response.data);
        return true
    } catch (error) {
        console.error('Error during refresh:', error);
        return false
    }
};

export async function refreshAccessToken() {
    const router = useRouter();

    try {
        const response = await axios.post('http://localhost:8000/api/token/refresh/', {
            refresh: localStorage.getItem('refreshToken'),
        });
        localStorage.setItem('accessToken', response.data.access);
    } catch (error) {
        console.error('Error during refresh:', error);
        router.push({ path: '/Login' });
    }
};
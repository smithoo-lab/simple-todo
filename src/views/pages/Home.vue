<template>
    <div class="home">
        <h1>This is a home page</h1>
        <button
            type="button"
            @click="loginWithGoogle"
        >
            Google login
        </button>
        <button
            type="button"
            @click="logoutWithGoogle"
        >
            Google logout
        </button>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    methods: {
        async loginWithGoogle() {
            const authService = this.$service.get('authService');
            try {
                await authService.loginWithGoogle();
                // console.log('login success!');
                // const loginResult = await authService.getGoogleLoginResult();
                // console.log(loginResult);
            } catch(err) {
                console.error(err);
            }
        },
        async logoutWithGoogle() {
            const authService = this.$service.get('authService');
            try {
                await authService.logoutWithGoogle();
            } catch(err) {
                console.error(err);
            }
        },
    },
});
</script>


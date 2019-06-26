import api from '@/api';

export class AuthService {
    loginWithGoogle() {
        return api.loginWithGoogle();
    }

    getGoogleLoginResult() {
        return api.getGoogleLoginResult();
    }

    logoutWithGoogle() {
        return api.logoutWithGoogle();
    }
}

export default AuthService;

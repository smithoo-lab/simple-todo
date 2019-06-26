import * as firebase from 'firebase/app';

export const api = {
    initialize() {
        // get data from .env.local file
        const {
            VUE_APP_API_KEY: apiKey,
            VUE_APP_AUTH_DOMAIN: authDomain,
            VUE_APP_DATABASE_URL: databaseURL,
            VUE_APP_PROJECT_ID: projectId,
            VUE_APP_MESSAGING_SENDER_ID: messagingSenderId,
            VUE_APP_APP_ID: appId,
        } = process.env;

        const firebaseConfig = {
            apiKey,
            authDomain,
            databaseURL,
            projectId,
            storageBucket: '',
            messagingSenderId,
            appId,
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    },
};

export default api;

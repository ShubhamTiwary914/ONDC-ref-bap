import admin from 'firebase-admin';

/**
 * initialize firebase 
 */
const initializeFirebase = () => {
    admin.initializeApp({
        credential: admin.credential.cert(
            {
                "type": "service_account",
                "project_id": "testbase-bd227",
                "private_key_id": "4e73ff0fed974e19d1e0a9050619f99ba64a9f35",
                "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCmubeJtHx7r6/m\n/Zr2/JXFROfDA2ewy8UaZV2tpHT2FBCL3qD7Hv3dneXMaEWndRkUGfVzOJwpRZSj\nFZ8zEzplLnYozYCK65YyAlRN//2XAhIs0WPkNjV6L7BYChG1h/eAgDeDo0qsGsxE\nL1hmVyUvsQFIG7l+PNZDzT7LaJ3DGPSuDp130o5XfWu73dOEQiywZoIw+aLejkyY\n/NwIGWYAFRMtvlg3vy6rPOTFkb/1X94gY5KJzGEqpUKpjRq5vx1UVqQ24W1Ym79x\nptt7B8kWo9oQzE28Q8YQY+gbVg2mwgWHeTSwZZTsaWX02JJRV1fQlgBwaDxvJPwY\nrjmJWIs9AgMBAAECggEAG5VNLqycDbB+xxX8/dDDDIx+VW6qSH8l4FyV14UGTrH6\nHNHby0AQ2wnk+2Di6TX/zKoQyBu9Bjz7PtH0cTRErHm31b9N/W3FfweQoAjykPmo\nPR71SkvHpCvgnmgoDuLsSSetR4uL7pZOZhd5JhFT1ySPJDlmAmMZRcVelrN7qkuh\nzWnh2TA2k6wPkHdsZxdu3P0d4sFaOlGjcXeL20rnIOuX3qDrCyRvArxLPvuYOTrr\nqbmykT2MBvSPuV3qjMy9YEYzT7Yzn7yjjeyBW+eYgwZRKLfMFGFNg1CpnHw4e+pn\nI5WY08Mtnhf1pcbUylyFCSBW1b+POTYG4+mZnhfjBwKBgQDRrHggAiMsotrZX2nU\npibFplS/UpMCbdoVvR9OStN0jMWpw45quFTmbASk2rKPWB8v5HJrXXlEhV1Kb+g4\nT9XTamVHjl2F2pBtYVKvc5iz1nHHS/UicLRIVtxtX1MvC7JJwSnyDdIJjZLQXfQy\ngoY0pLEZYAkDpQd0Fji8etuMlwKBgQDLkAP9oRSMMiiXwWzJGwDOVqC6PfW+cg2N\nJFnPQ1pPMH+MHg8p540UtmBOSjdJ59LtqT1ZlWng0NpOGWyA+otNRChokm1TDYJM\n3jCbgm92dyFRLua1tZBeAzzrFTd8pzM4HwWGoCr8owY8rWrTBiQ557uVqedTsAgE\n+6K535jdSwKBgAmObc8vqcDAD2923ND3Xa8GfLhXoCGtNhJlk0azPF4EiIHLSvNs\nQVpbM/77hMXpw0oghGKGWR+ZYH4jCZd/dAR1xfXz9ClEo+6IUAd1IlGYBYmK2bpf\nHqhpZRSLErSDOPYJmsrQfHE5Bab/kUC4GDvQAc5hRSfoXqWY2a8lflozAoGAB1CW\nhB+ssFkBEmr18MgSoFeGkQq28PACQqcivwrpjNzuSGewHc5fSHZBQa7zC6nT74xc\nUwLGejinD5VkS8I1DUK8vP0+BnT+0KpPTtdCEBy5ysQHsFHk7SvqnXv2sXkEoyii\nNzM8ODXXfIiyxQB8fsQv/nHLiTtTHnK4Zzt8r78CgYEAqjpm9I+FZTge5i7YMT/j\nIGpyGzZSAipfwcmhgX/UU5UuCeAMBhVQoyu8SlDoC9Sq1oG8kxGXc3RiibQlnHhb\nX4VLw7NCh3PCvpqZCE2PqK+t1xbcTECOxEgF6Rt5+6+u+v0qCw6i9RBsLpW+ZaZj\nDB2JGERhkMbHmhes17hadlY=\n-----END PRIVATE KEY-----\n",
                "client_email": "firebase-adminsdk-n4ejs@testbase-bd227.iam.gserviceaccount.com",
                "client_id": "106804658601821002577",
                "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                "token_uri": "https://oauth2.googleapis.com/token",
                "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-n4ejs%40testbase-bd227.iam.gserviceaccount.com",
                "universe_domain": "googleapis.com"
            }
        )
    });
}

export default initializeFirebase;
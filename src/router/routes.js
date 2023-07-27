const routes = [
    {
        path: "/",
        name: "Auth",
        component: () => import("layouts/AuthLayout.vue"),
        children: [
            {
                path: "/logout",
                name: "Logout",
                component: () => import("../pages/auth/LogoutPage.vue"),
                meta: { title: "Logout" },
            },
            {
                path: "verify",
                name: "Verify",
                component: () => import("../pages/auth/VerifyPage.vue"),
                meta: { title: "Verifikasi Email" },
            },
            {
                path: "register",
                name: "Register",
                component: () => import("../pages/auth/RegisterPage.vue"),
                meta: { title: "Registrasi" },
            },
            {
                path: "login",
                name: "Login",
                component: () => import("../pages/auth/LoginPage.vue"),
                meta: { title: "Login" },
            },
            {
                path: "forgot-password",
                name: "Forgot",
                component: () => import("../pages/auth/ForgotPage.vue"),
                meta: { title: "Lupa Password" },
            },
            {
                path: "reset-password",
                name: "Reset",
                component: () => import("../pages/auth/ResetPage.vue"),
                meta: { title: "Ganti Password" },
            },
        ],
    },
    {
        path: "/",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            {
                path: "search",
                component: () => import("src/pages/search/IndexPage.vue"),
                meta: { title: "Cari" },
            },
            {
                path: "santri",
                component: () => import("src/pages/santri/SantriSearch.vue"),
                meta: { title: "Cari Santri" },
            },
            {
                path: "santri/:id",
                component: () => import("src/pages/santri/SantriDetail.vue"),
                meta: { title: "Detail Santri" },
            },
            {
                path: "wali/:id",
                component: () => import("src/pages/wali/WaliDetail.vue"),
                meta: { title: "Detail Wali" },
            },
            {
                path: "wali",
                component: () => import("src/pages/wali/WaliSearch.vue"),
                meta: { title: "Cari Wali" },
            },
            {
                path: "ortu",
                component: () => import("src/pages/ortu/OrtuSearch.vue"),
                meta: { title: "Cari Orang Tua" },
            },
            {
                path: "ortu/:id",
                component: () => import("src/pages/ortu/OrtuDetail.vue"),
                meta: { title: "Detail Orang Tua" },
            },

            {
                path: "home",
                component: () => import("src/pages/home/HomeIndex.vue"),
                meta: { title: "Home" },
            },
            {
                path: "sekretariat",
                component: () => import("src/pages/sekretariat/IndexPage.vue"),
                meta: { title: "Sekretariat" },
            },

            {
                path: "settings",
                children: [
                    {
                        path: "app",
                        component: () =>
                            import("src/pages/settings/IndexSetting.vue"),
                    },
                    {
                        path: "users",
                        component: () =>
                            import("src/pages/users/UsersPage.vue"),
                    },
                    {
                        path: "users/:id",
                        component: () =>
                            import("src/pages/users/UsersDetail.vue"),
                    },
                ],
            },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () => import("src/pages/errors/ErrorNotFound.vue"),
    },
];

export default routes;

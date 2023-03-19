<template>
    <div class="container-fluid bg-white shadow">
        <header class="container d-flex flex-wrap justify-content-center py-3 mb-4">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span class="fs-4">Api frontend demo</span>
            </a>

            <ul class="nav nav-pills">
                <li class="nav-item">
                    <router-link :to="{ name: 'home' }" class="nav-link" exact exact-active-class="active">
                        Домой
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'users_create' }" class="nav-link" exact exact-active-class="active">
                        Зарегистрироваться
                    </router-link>
                </li>
                <li class="nav-item">
                <router-link :to="{ name: 'tokens_create' }" class="nav-link" exact exact-active-class="active">
                        Войти
                    </router-link>
                </li>
            </ul>
        </header>
    </div>
</template>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title mb-4">Регистрация</h5>
            <form>
            <div class="mb-2">
                <label for="login" class="form-label">Логин</label>
                <input type="text" class="form-control" id="login" required />
            </div>
            <div class="mb-2">
                <label for="password" class="form-label">Пароль</label>
                <input type="password" class="form-control" id="password" required />
            </div>
            <div class="mb-4">
                <label for="passwordConfirmation" class="form-label">Повторите пароль</label>
                <input type="password" class="form-control" id="passwordConfirmation" required />
            </div>
            <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
            </form>
        </div>
    </div>
</template>

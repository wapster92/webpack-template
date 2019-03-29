<template>
    <div>
        <h1>Глобальный компонент</h1>
        <p>{{text}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: 'Произвольный текст'
            }
        }
    }
</script>

<style scoped>

</style>
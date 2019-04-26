<template>
    <div>
        <h1>{{title}}</h1>
        <app-glob></app-glob>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: 'Заголовок компонента'
            }
        }
    }
</script>

<style lang="scss" scoped>
h1 {
    color: red;
    
}
</style>

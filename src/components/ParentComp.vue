
<template>
    <ChildComp 
        @cambiarTexto="value => cambiar(value)"
    />
    <p id="current-text">{{ texto }}</p>
</template>


<script>
import ChildComp from './ChildComp.vue';

export default {
    name: "ParentComp",
    components: {
        ChildComp
    },
    data() {
        return {
            texto: ''
        }
    },
    methods: {
        cambiar(value) {
            this.texto = value;
        }
    }
}
</script>


<style scoped>
    p {
        font-size: 5rem;
    }
</style>

<template>
    <div>
        <input v-model="texto" type="text">
        <button @click="$emit('cambiarTexto', texto)" >Cambiar</button>
    </div>
</template>


<script>
export default {
    name: "ChildComp",
    data() {
        return {
            texto: ''
        }
    }
}
</script>

<template>
    <div class="wrapper">
        <h1>
            Contador
        </h1>

        <p>{{ count }}</p>

        <div class="botones">
            <button class="botones-increment" @click="increment">Incrementar</button>
            <button 
                @click="decrement"
                class="botones-decrement"
                :class="{
                    deshabilitado: count === 0
                }"
                :disabled="count === 0 ? true: false"
            >Decrementar</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "NumberCounter",
    computed: {
        // Obtenemos los getters para traer el valor actual del state count
        ...mapGetters({
            count: 'getCount'
        })
    },
    // Obtenemos los metodos para incrementar o decrementar el valor del state count
    methods: {
        ...mapActions({
            increment: 'increment',
            decrement: 'decrement'
        })
    }
}

</script>


<style scoped>
    .botones {
        display: flex;
        gap: 2rem;
        justify-content: center;
    }
    p {
        font-size: 5rem;
    }
    .botones-increment {
        background-color: rgb(0, 81, 255);
        border-radius: 1rem;
        padding: 1rem 2rem;
        font-weight: 900;
        color: #FFF;
        cursor: pointer;
    }

    .botones-decrement {
        background-color: rgb(255, 0, 55);
        border-radius: 1rem;
        padding: 1rem 2rem;
        font-weight: 900;
        color: #FFF;
        cursor: pointer;
    }
    .deshabilitado {
        opacity: .5;
        cursor: not-allowed;
    }
</style>
import { shallowMount } from "@vue/test-utils"; // Importación para montar componentes superficiales
import NumberCounter from "@/components/NumberCounter.vue";

// Creamos el store de prueba 
const store = {
  state: { // Estado inicial del almacén
    count: 0, // Contador inicial
  },
  getters: { // Funciones para obtener datos del estado
    getCount(state) {
      return state.count; // Obtiene el valor del contador
    },
  },
  mutations: { // Funciones para modificar el estado
    INCREMENT(state) { // Incrementa el contador
      state.count++;
    },
    DECREMENT(state) { // Decrementa el contador (solo si es mayor a 0)
      state.count > 0 && state.count--;
    },
  },
  actions: { // Funciones para realizar acciones posiblemente asincrónicas
    async increment(context) { // Acción para incrementar el contador de forma asíncrona
      context.commit("INCREMENT"); // Realiza la mutación INCREMENT
    },
    async decrement(context) { // Acción para decrementar el contador de forma asíncrona
      context.commit("DECREMENT"); // Realiza la mutación DECREMENT
    },
  },
  modules: {}, // Módulos adicionales (vacío en este ejemplo)
};

describe("Componente NumberCounter.vue", () => {
  // Describe el conjunto de pruebas para el componente NumberCounter

  test("Validación de match con el snapshot (Coincidir con la instantánea)", () => {
    // Descripción del caso de prueba

    // 1. Montamos el componente NumberCounter
    const wrapper = shallowMount(NumberCounter, {
      global: { // Configuraciones globales
        mocks: { 
          $store: store, // Le pasamos el store de prueba al componente
        },
      },
    });

    // 2. Corroboramos la asercion capturando el estado actual del html,
    // Esto no es genera un archivo con codigo html para luego compararlo si existe algun cambio
    expect(wrapper.html()).toMatchSnapshot(); 
  });
});

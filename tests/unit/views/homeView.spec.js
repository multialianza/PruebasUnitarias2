import { mount } from "@vue/test-utils"; // Importación para montar componentes
import { createRouter, createWebHistory } from "vue-router"; // Importaciones para la configuración del router
import HomeView from "@/views/HomeView.vue"; // Importa el componente a probar

describe("HomeView", () => {
  // Descripción del conjunto de pruebas: Describe el componente que se está probando

  test("Probando la existencia de la vista HomeView", async () => {
    // Descripción del caso de prueba: Explica qué verifica la prueba

    // 1. Configuración del Router
    const router = createRouter({ // Crea una instancia de Vue Router
      history: createWebHistory(), // Usa el modo de history del navegador
      routes: [ // Define las rutas para la prueba
        {
          path: "/about", // Ruta para HomeView
          name: "about", // Nombre de la ruta
          component: HomeView, // Componente a renderizar en esta ruta
        },
      ],
    });

    // 2. Navegación a una Ruta Diferente
    router.push("/about"); // Navega programáticamente a la ruta HomeView

    // 3. Espera a que el Router Esté Listo
    await router.isReady(); // Espera a que el router termine la navegación

    // 4. Monta el Componente HomeView
    const wrapper = mount(HomeView, {
      // Monta el componente HomeView
      global: {
        plugins: [router], // Proporciona la instancia del router como un plugin global
      },
    });

    // 5. Aserción de la Existencia de HomeView
    expect(wrapper.findComponent(HomeView).exists()).toBe(true);
    // Verifica que el componente HomeView se renderice y exista en el wrapper
  });
});

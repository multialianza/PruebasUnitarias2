import { mount } from "@vue/test-utils"; // Importación para montar componentes
import { createRouter, createWebHistory } from "vue-router"; // Importaciones para la configuración del router
import AboutView from "@/views/AboutView.vue"; // Importa el componente a probar

describe("AboutView", () => {
  // Descripción del conjunto de pruebas: Describe el componente que se está probando

  test("Probando la existencia de la vista AboutView", async () => {
    // Descripción del caso de prueba: Explica qué verifica la prueba

    // 1. Configuración del Router
    const router = createRouter({ // Crea una instancia de Vue Router
      history: createWebHistory(), // Usa el modo de history del navegador
      routes: [ // Define las rutas para la prueba
        {
          path: "/about", // Ruta para AboutView
          name: "about", // Nombre de la ruta
          component: AboutView, // Componente a renderizar en esta ruta
        },
      ],
    });

    // 2. Navegación a una Ruta Diferente
    router.push("/about"); // Navega programáticamente a la ruta AboutView

    // 3. Espera a que el Router Esté Listo
    await router.isReady(); // Espera a que el router termine la navegación

    // 4. Monta el Componente AboutView
    const wrapper = mount(AboutView, {
      // Monta el componente AboutView
      global: {
        plugins: [router], // Proporciona la instancia del router como un plugin global
      },
    });

    // 5. Aserción de la Existencia de AboutView
    expect(wrapper.findComponent(AboutView).exists()).toBe(true);
    // Verifica que el componente AboutView se renderice y exista en el wrapper
  });
});

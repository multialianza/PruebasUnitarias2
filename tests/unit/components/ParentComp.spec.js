import { shallowMount } from "@vue/test-utils";
import ParentComp from "@/components/ParentComp";
import ChildComp from "@/components/ChildComp";


jest.mock("@/components/ChildComp", () => ({
    template: '<div><input type="text" v-model="texto" /><button @click="$emit(\'cambiarTexto\', texto)">Cambiar</button></div>',
    data() {
        return {
            texto: ''
        }
    }
  }));

describe("ParentComp.vue", () => {

  test("Comparar valor enviado desde ChildComp a ParentComp", () => {
    // const textFromChild = "hola funciono"
    // const wrapperChild = shallowMount(ChildComp);

    // wrapperChild.get('input').setValue(textFromChild)
    // wrapperChild.find('button').trigger('click')
    // const comp = shallowMount(ChildComp);
    // const wrapper = shallowMount(ParentComp);

    // console.log(wrapper.find('button'));
    // // const childWrapper = wrapper.findComponent(comp); // Find 
    // const wrapperChild = wrapper.getComponent(ChildComp)
    // console.log(wrapper.getComponent(ChildComp));
    // console.log(wrapperChild.find('button'));
    // console.log(childWrapper);
    // console.log(childWrapper.querySelector('button'));
    // console.log(childWrapper.querySelector('input[type="text"]'));
    // const inputElement = childWrapper.find('input[type="text"]'); // Find the input within ChildCompthe ChildComp instance
    // console.log(inputElement);
    // const buttonElement = childWrapper.find('button'); // Find the input within ChildCompthe ChildComp instance

    // inputElement.setValue(textFromChild)
    // buttonElement.trigger('click')
    // wrapper.find('input[type="text"]').setValue(textFromChild)
    // wrapper.find('button').trigger('click')

    // const currentText = wrapper.get('#current-text');
    // console.log(currentText.text());
    // expect(currentText.text()).toBe(textFromChild);
    
  });

});

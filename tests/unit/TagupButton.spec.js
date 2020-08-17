import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import TagupButton from "@/components/TagupButton.vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

// TODO: write tests to: verify disabled state; check for (correctly-named) event firing on click event

test("TagupButton should render, with caption", () => {
  const wrapper = shallowMount(TagupButton, {
  	localVue,
  	propsData: {
  		eventName: 'onClick',
  		isDisabled: false,
  		caption: 'jim'
  	}
  });
  expect(wrapper.text()).toMatch(`jim`);
});

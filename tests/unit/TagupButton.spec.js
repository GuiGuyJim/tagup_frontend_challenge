import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import TagupButton from "@/components/TagupButton.vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

test("TagupButton should render, with caption", () => {
  const wrapper = shallowMount(TagupButton, {
  	localVue,
  	propsData: {
  		event: 'onClick',
  		disabled: false,
  		caption: 'jim'
  	}
  });
  expect(wrapper.text()).toMatch(`jim`);
});


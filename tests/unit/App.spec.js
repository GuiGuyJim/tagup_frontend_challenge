import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "@/App.vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
test("Application should render, with text", () => {
	const wrapper = shallowMount(App, {
		localVue,
		propsData: {
		}
	});
	const matchValue = 'Asset Issue Log';
	const partialAppText = wrapper.text().slice(0, matchValue.length);
	expect(partialAppText).toMatch(matchValue);
});

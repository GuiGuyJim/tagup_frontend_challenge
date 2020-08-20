import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue } from "bootstrap-vue";
import TagupAssetIssueItem from "../../src/components/TagupAssetIssueItem.vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(TagupAssetIssueItem);

test("Asset issue item should render, with text", () => {
	const wrapper = shallowMount(TagupAssetIssueItem, {
		localVue,
		propsData: {
			delete: "",
			logItem: {
				timestamp: new Date(),
				title: "",
				message: ""
			}
		}
	});
	const matchValue = "Title:  Logged:";
	expect(wrapper.text()).toMatch(matchValue);
});

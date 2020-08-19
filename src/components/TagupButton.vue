<template>
	<b-button v-bind:disabled="disabled" v-on:click="clickHandler">
		<!-- SECURITY: We're using v-html here, instead of double mustaches, so that we can inject markup into the button caption.
			We should never be displaying user-provided content in caption, as that could lead to an XSS vulnerability.
		 -->
		<span v-html="caption"></span>
	</b-button>
</template>

<script>
/* eslint-disable */ 
export default {
	methods: {
		clickHandler: function () {
			this.$emit(this.event);
		}
	},
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		event: {
			type: String, required: true
		},
		caption: {
			type: String, required: true
		},
	}
};
</script>

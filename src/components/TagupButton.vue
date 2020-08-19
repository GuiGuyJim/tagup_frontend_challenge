<template>
	<b-button v-bind:disabled="disabled" v-on:click="clickHandler">
		{{ caption }}
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
		}
	}
};
</script>

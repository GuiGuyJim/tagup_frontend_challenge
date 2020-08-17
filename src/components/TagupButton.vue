<template>
	<b-button v-bind:disabled="isDisabled" v-on:click="clickHandler()">
		{{ caption }}
	</b-button>
</template>

<script>
/* eslint-disable */ 
export default {
	methods: {
		clickHandler: function () {
			alert(this.eventName);
			$emit(this.eventName, 'add optional payload here');
		}
	},
	props: {
		isDisabled: {
			type: Boolean,
			default: false
		},
		eventName: {
			type: String, required: true
		},
		caption: {
			type: String, required: true
		}
	}
};
</script>

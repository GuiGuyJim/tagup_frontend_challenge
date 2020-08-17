<template>
	<b-list-group-item button>
		<b-container>
			<b-row>
				<b-col class="pl-0">
					<b-form inline>
						<label class="label">Title:</label>
						<div class="titleContentArea">
							title string goes here title string goes here title string goes here.
						</div>
					</b-form>
				</b-col>
				<b-col class="pr-0" style="padding-left: 2.7rem;">
					<b-form inline>
						<label class="label">Logged:</label>YYYY-MM-DD HH:MM:SS
					</b-form>
				</b-col>
			</b-row>
			<b-row class="pt-2 pb-0">
				<b-col>
					<b-form>
						<label class="label" style="margin-bottom: 0;">Message:</label>
						<p class="messageContentArea">{{ message }}</p>
					</b-form>
				</b-col>
				<b-col cols="3" class="text-right" style="margin-right: -0.5em; padding-top: 1.5em;">
					<TagupButton caption="Delete Issue . . ."/>
				</b-col>
			</b-row>
		</b-container>
	</b-list-group-item>
</template>

<style scoped>
	.titleContentArea {
		width: 90%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.label {
		font-weight: bold;
	}
	.messageContentArea {
		margin: 0;
		font-size: 80%;
		color: black;
	}
</style>

<script>
/* eslint-disable */ 

import TagupButton from "./TagupButton.vue";

export default {
	components: {
		TagupButton
	},

	props: {
		message: {
			type: String, required: false
		}
	},

	methods: {
	}
};
</script>

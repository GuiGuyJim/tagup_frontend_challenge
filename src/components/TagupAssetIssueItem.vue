<template>
	<b-list-group-item button>
		<b-container>
			<b-row>
				<b-col cols="8" class="mr-auto pl-0" style="padding-right: 0;">
					<b-form inline>
						<label for="titleField" class="label">Title:</label>
						<input
							id="titleField"
							readonly
							:value="logItem.title"
							class="readOnlyField"
						/>
					</b-form>
				</b-col>
				<b-col cols="auto" class="pr-0">
					<b-form inline>
						<label for="timestampField" class="label">Logged:</label>
						<input
							id="timestampField"
							readonly
							:value="formattedTimestamp"
							class="readOnlyField"
						/>
					</b-form>
				</b-col>
			</b-row>
			<b-row class="pt-2 pb-0" align-v="end">
				<b-col cols="10" class="mr-auto pl-0">
					<b-form>
						<label class="label" style="margin-bottom: 0;">Message:</label>
						<p class="messageContentArea">{{ logItem.message }}</p>
					</b-form>
				</b-col>
				<b-col cols="auto" class="pr-0">
					<TagupButton
						caption="Delete Issue . . ."
						event="delete"
						@delete="clickDeleteIssueHandler"
						:disabled="false"
					/>
				</b-col>
			</b-row>
		</b-container>
	</b-list-group-item>
</template>

<style scoped>
	#titleField {
		width: 90%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.label {
		font-weight: bold;
		margin-right: 0.2em;
	}
	.readOnlyField {
		border: 0px none;
	}
	.messageContentArea {
		margin: 0;
		font-size: 85%;
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
		logItem: {
			type: Object, required: true
		},
		delete: {
			type: String, required: true
		},
	},

	computed: {
		formattedTimestamp: function () {
			return this.logItem.timestamp.toISOString();
		},
	},

	methods: {
		clickDeleteIssueHandler: function () {
			this.$emit(this.delete, this.logItem);
		}
	}
};
</script>

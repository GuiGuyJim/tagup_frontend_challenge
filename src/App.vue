<template>
	<!-- prettier-ignore -->
	<div id="app" style="height: 100%; background-color: silver;">
		<b-navbar toggleable type="dark" variant="primary" :sticky="true" style="background-color: #234361; color: white;">
			<b-navbar-brand href="#">
				<img alt="tagup logo" src="./assets/logo_at_2x.png" />
			</b-navbar-brand>
			<span style="font-size: 200%; font-weight: bold;">Asset Issue Log</span>
			<span style="font-size: 200%;">Asset Status: <span style="font-weight: bold;">Offline</span></span>
			<b-navbar-toggle target="navbar-toggle-collapse">
				<template v-slot:default="{ expanded }">
					<b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
					<b-icon v-else icon="chevron-bar-down"></b-icon>
				</template>
			</b-navbar-toggle>
			<b-collapse id="navbar-toggle-collapse" is-nav>
				<b-navbar-nav class="ml-auto">
					<span>ID: <span style="font-weight: bold;">OK-SUBSTA26-STEPDOWN-25</span></span>
					<span>Type: <span style="font-weight: bold;">Stepdown Transformer</span></span>
					<span>Location: <span style="font-weight: bold;">Oklahoma, Substation #26, 1001 Main St., OK City</span></span>
					<span>Installed: <span style="font-weight: bold;">2020-08-16</span></span>
					<span>Serial Number: <span style="font-weight: bold;">235A-0053</span></span>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		<!-- Note: quick and dirty, hard-coded, way to set full height for container, but minus header height. TODO: clean this up. -->
		<b-container fluid class="p-3" style="height: calc(100vh - 90px);">
			<b-row class="p-3" style="height: 100%;">
				<b-col>
					<b-row>
						<b-col cols="12" md="auto" class="pl-0">
							<b-form inline>
								<label class="mt-2 mb-0" style="font-size: 150%">Issues:</label>
							</b-form>
						</b-col>
						<b-col>
						</b-col>
						<b-col cols="12" md="auto" style="padding-right: 0;">
							<b-form inline>
							<label class="label">Filter:</label>
							<b-form-input placeholder="Search by title..."></b-form-input>
							</b-form>
						</b-col>
					</b-row>

					<b-row style="height: 90%; background-color: #eee; border: 1px solid gray; overflow: scroll;">
						<b-list-group style="width: 100%; max-height: 25em;">
							<div v-for="item in logItems" v-bind:key="item.id">
								<TagupAssetIssueItem v-bind:logItem="item" delete="delete" @delete="confirmDeleteItem"/>
<!--
								<TagupAssetIssueItem v-bind="item" delete="delete" @delete="confirmDeleteItem"/>

								<TagupAssetIssueItem :id="item.id" :timestamp="item.timestamp" :title="item.title" :message="item.message"
									delete="delete" @delete="confirmDeleteItem"
									/>
-->
							</div>
						</b-list-group>
					</b-row>

					<!-- FUTURE: Implement: 1) feature to show alternate-sized views of the data; 
						2) Move delete button to outside of Issues list--operate on the selected list item -->
					<!--
					<b-row>
						<b-col class="pl-0 pt-1">
								<b-dropdown text="Condensed View">
									<b-dropdown-item active>Condensed View</b-dropdown-item>
									<b-dropdown-item>Full View</b-dropdown-item>
								</b-dropdown>
								&nbsp;
								<TagupButton caption="Delete Issue . . ." :disabled="true" event="x" />
						</b-col>
						<b-col>&nbsp;</b-col>
					</b-row>
					-->
				
				</b-col>
				<b-col cols="4" style="margin-top: auto; margin-bottom: auto;">
					<b-row class="m-3" style="border: 1px solid white; border-radius: 0.3em; background-color: silver;">
						<b-col>
							<b-form inline>
								<label class="mt-1 mb-2" style="font-size: 150%">New Issue</label>
							</b-form>
						<b-row align-h="between">
							<b-col>
								<b-form>
									<b-form-group label="Title:" class="label">
										<b-form-input v-model="newTitle"></b-form-input>
									</b-form-group>
									<b-form-group label="Message:" class="mb-1 label">
										<b-form-textarea rows="10" max-rows="10" v-model="newMessage"></b-form-textarea>
									</b-form-group>
									<b-row class="mb-2">
										<b-col>
											<TagupButton caption="Add" :disabled="false" event="add" @add="addNewItem"/>
											&nbsp;
											<TagupButton caption="Clear" :disabled="false" event="clear" @clear="clearForm"/>
										</b-col>
									</b-row>
								</b-form>
							</b-col>
						</b-row>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-container>
		<b-modal id="modal-center" centered title="BootstrapVue">
			<p class="my-4">Vertically centered modal!</p>
		</b-modal>
	</div>
</template>

<style scoped>
	/* FUTURE: Review styles in components (and here), to see if they should be moved to global styles. */
	.label {
		font-weight: bold;
		margin-right: 0.2em;
	}
</style>

<script>
/* eslint-disable */ 
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import TagupButton from "./components/TagupButton.vue";

import TagupAssetIssueItem from "./components/TagupAssetIssueItem.vue";

export default { 
	components: {TagupButton, TagupAssetIssueItem},

	data: function () {
		return {
			newTitle: '',

			newMessage: '',

			logItems: 
			[
				{ id: 'a', timestamp: new Date(), title: 'SUBSTATION ON FIRE *!*', 
					message: '[MANUAL ENTRY] Notify first responders at EQUIPMENT LOCALE. Follow-up with ISO emergency ops center.' },
				{ id: 'b', timestamp: new Date(), title: 'Maximum HIGH TEMPERATURE limit reached on equipment.', 
					message: ' Notify rapid response team.' },
				{ id: 'c', timestamp: new Date(), title: 'First HIGH TEMPERATURE limit exceeded.', 
					message: 'Disatch maintenance team.' },
				{ id: '9', timestamp: new Date(), title: 'LONG title - LONG title - LONG title - LONG title - LONG title - LONG title - LONG title - ', 
					message: 'LONG message - LONG message - LONG message - LONG message - LONG message - LONG message - LONG message - LONG message - LONG message - LONG message - LONG message - LONG message - LONG message - LONG message - LONG message - LONG message - LONG message - LONG message - LONG message - LONG message - LONG message - LONG message - LONG message - LONG message - ' },
			]
		}
	},

	methods: {
		confirmDeleteItem: function (logItem) {
			const message = `(${logItem.timestamp.toISOString()}) "${logItem.title}"`;
			this.$bvModal.msgBoxConfirm(message, {
				okTitle: 'Delete Issue', 
				okVariant: 'danger',
				title: "Confirm Delete Issue"
			})
				.then(isConfirmed => {
					if (isConfirmed) {
						const indexOfItem = this.logItems.indexOf(logItem);
						this.logItems.splice(indexOfItem, 1);
					}
				})
				.catch(error => { /* Catch block is required, per bootstrap-vue *modal" documentation; even if this is a NO-OP. */ });
		},

		addNewItem: function () {
			const now = new Date();
			const newItem = {
				timestamp: now,
				id: now.toString(),
				title: this.newTitle,
				message: this.newMessage,
			};
			this.logItems = [newItem, ...this.logItems];
			this.clearForm();
		},

		clearForm: function () {
			this.newTitle = '';
			this.newMessage = '';
		},
	},

};


</script>

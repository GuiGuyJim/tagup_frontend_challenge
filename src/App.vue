<template>
	<!-- prettier-ignore -->
	<div id="app" style="height: 100%; background-color: silver;">
		<b-navbar toggleable type="dark" variant="primary" sticky="true" style="background-color: #234361; color: white;">
			<b-navbar-brand href="#">
				<img alt="tagup logo" src="./assets/logo_at_2x.png" />
			</b-navbar-brand>
			<span style="font-size: 200%; font-weight: bold;">Asset Issue Log</span>
			<span style="font-size: 200%;">Status: <span style="font-weight: bold;">Off-line</span></span>
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
		<b-container fluid class="p-3" style="height: calc(100vh - 150px); /* background-color: fuchsia; */">
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
							<label>Filter:</label>
							<b-form-input placeholder="Search by title..."></b-form-input>
							</b-form>
						</b-col>
					</b-row>

					<b-row style="height: 90%; background-color: #eee; border: 1px solid gray; overflow: scroll;">
						<b-list-group style="width: 100%;">
						  <b-list-group-item button>
						  	<b-container>
						  		<b-row>
						  			<b-col class="pl-0">
										<b-form inline>
											<label style="font-weight: bold;">Title:</label>
											<div style="width: 90%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
											title string goes here
											title string goes here
											title string goes here
											</div>
										</b-form>
						  			</b-col>
						  			<b-col class="pr-0 pl-5">
										<b-form inline>
											<label style="font-weight: bold;">Logged:</label>YYYY-MM-DD HH:MM:SS
										</b-form>
						  			</b-col>
						  		</b-row>
						  		<b-row class="pt-2 pb-0">
									<b-form>
										<label class="" style="font-weight: bold;">Message:</label>
										<p style="margin: 0;">A very important message<br>YO !</p>
									</b-form>
						  		</b-row>
						  	</b-container>
						  </b-list-group-item>
						  <b-list-group-item button>I am a button</b-list-group-item>
						  <b-list-group-item button>Disabled button</b-list-group-item>
						  <b-list-group-item button>This is a button too</b-list-group-item>
						</b-list-group>
<!--
						<b-col cols="12" style="height: 5em; background-color: red;">
							<b-row>
								an item
							</b-row>
						</b-col>
						<b-col cols="12" style="height: 5em; background-color: green;">
							<b-row>
								an item
							</b-row>
						</b-col>
-->
					</b-row>

					<b-row>
						<b-col class="pl-0 pt-1">
								<b-dropdown text="Condensed View">
									<b-dropdown-item active>Condensed View</b-dropdown-item>
									<b-dropdown-item>Full Vie</b-dropdown-item>
								</b-dropdown>

								&nbsp;&nbsp;
								<b-button>Delete Issue . . .</b-button>
						</b-col>
						<b-col>&nbsp;</b-col>
					</b-row>

				</b-col>
				<b-col cols="4" style="margin-top: 2.75em; margin-bottom: 1.2em; /* background-color: red;*/">
					<b-row class="m-3" style="border: 1px solid white; border-radius: 0.3em; background-color: silver;">
						<b-col>
							<b-form inline>
								<label class="mt-1 mb-2" style="font-size: 150%">New Issue</label>
							</b-form>
						<b-row align-h="between">
							<b-col>
								<b-form>
									<b-form-group label="Title:">
										<b-form-input></b-form-input>
									</b-form-group>
									<b-form-group label="Message:" class="mb-1">
										<b-form-textarea rows="10" max-rows="10"></b-form-textarea>
									</b-form-group>
									<b-row class="mb-2">
										<b-col>
											<b-button>Add</b-button>
											&nbsp;
											<b-button>Clear</b-button>
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
	</div>
</template>

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
		<b-container fluid style="height: calc(100% - 90px); background-color: fuchsia;">
			<b-row  style="/*TODO: properly set margins/padding*/">.</b-row>
			<b-row style="">
				<b-col cols="12" md="auto">Issues:</b-col>
				<b-col cols="12" md="auto">Filter: <input value="bar"/></b-col>
				<b-col>&nbsp;</b-col>
			</b-row>
			<b-row  style="/*TODO: properly set margins/padding*/">.</b-row>
			<b-row  style="height: 80%; background-color: silver;">
				inside row2
			</b-row>
			<b-row  style="/*TODO: properly set margins/padding*/">.</b-row>
			<b-row>
				<b-col cols="12" md="auto">View: 
					<b-dropdown text="Brief">
						<b-dropdown-item active>Brief</b-dropdown-item>
						<b-dropdown-item>Full</b-dropdown-item>
					</b-dropdown>
				</b-col>
				<b-col cols="12" md="auto"><button>Delete Issue . . .</button></b-col>
				<b-col>&nbsp;</b-col>
			</b-row>
		</b-container>
	</div>
</template>

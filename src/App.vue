<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
		<v-toolbar-title class="text-subtitle1">
			<a href="https://github.com/wforbes" target="_blank" style="color:white !important; text-decoration:none;">
				@wforbes
			</a>
		</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
	return {};
  },
};
</script>

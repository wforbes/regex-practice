<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
		<a href="https://wforbes.net/">@wforbes87</a>
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

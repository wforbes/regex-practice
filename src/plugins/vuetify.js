import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		dark: true,
		themes: {
			dark: {
			primary: '#4caf50',
			secondary: '#ff8c00',
			accent: '#9c27b0'
			}
		}
	},
});

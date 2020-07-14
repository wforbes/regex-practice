<template>
	<v-container>
		<v-row>
			<v-col align="center">
				<h1>Regular Expressions Practice</h1>
				<h5>
					Copied from 
					<a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions">
						FreeCodeCamp.org Regular Expressions Challenges
					</a>
				</h5>
			</v-col>
		</v-row>
		<v-row class="text-center">
			<v-col cols="12">
				<Challenge1 />
			</v-col>
		</v-row>
		<v-row class="text-center">
			<v-col cols="12">
				<Challenge2 />
			</v-col>
		</v-row>
		<v-row class="text-center">
			<v-col cols="12">
				<Challenge3 />
			</v-col>
		</v-row>
		<v-row class="text-center">
			<v-col cols="12">
				<Challenge4 />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import Challenge1 from './challenges/Challenge1.vue';
	import Challenge2 from './challenges/Challenge2.vue';
	import Challenge3 from './challenges/Challenge3.vue';
	import Challenge4 from './challenges/Challenge4.vue';
	export default {
		name: "RegexPractice",
		components: {
			Challenge1,
			Challenge2,
			Challenge3,
			Challenge4
		},
		data() {
			return {};
		}
	};
</script>

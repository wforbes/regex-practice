<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<v-card max-width="800" class="mx-auto pa-4">
					<h3>#1: Using the Test Method</h3>
					<a :to="fccUrl" target="_blank">
						(Found here at FreeCodeCamp.com)
					</a>
					<v-row>
						<v-col>
						<v-text-field
							v-model="inputText"
							placeholder="Type 'Hello' here"
						></v-text-field>
						</v-col>
						<v-col>
							<p>Type the word 'Hello in the text field:<br />
							<p><strong> {{ outputText }} </strong></p>
						</v-col>
					</v-row>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
	export default {
		name: "Challenge1",
		data() {
			return {
				fccUrl: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/using-the-test-method",
				inputText: "",
				outputText: "Textfield doesn't contain 'Hello'"
			};
		},
		watch: {
			inputText(newVal, oldVal) {
				if(oldVal !== newVal) {
					let myRegex = /Hello/;
					if(myRegex.test(newVal)) {
						this.outputText = "Textfield contains 'Hello'";
					} else {
						this.outputText = "Textfield doesn't contain 'Hello'";
					}
				}
			}
		}
	};
</script>

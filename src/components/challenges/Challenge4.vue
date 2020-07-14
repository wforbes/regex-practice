<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<v-card max-width="800" class="mx-auto pa-4">
					<h3>#4: Ignore Case While Matching</h3>
					<a :to="fccUrl" target="_blank">
						(Found here at FreeCodeCamp.com)
					</a>
					<v-row>
						<v-col>
						<v-text-field
							v-model="inputText"
							placeholder="Type one or more of the words..."
						></v-text-field>
						</v-col>
						<v-col>
							<p>
								Type the word 'poTaTO', with any capitalization...
							</p>
							<p v-html="outputText"></p>
						</v-col>
					</v-row>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
	export default {
		name: "Challenge4",
		data() {
			return {
				fccUrl: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/ignore-case-while-matching",
				inputText: "",
				outputText: ""
			};
		},
		watch: {
			inputText(newVal, oldVal) {
				if(oldVal !== newVal) {
					if(newVal !== "") {
						let regex = /potato/i;
						if(regex.test(newVal)) {
							this.outputText = "You got it, chief!";
						} else {
							this.outputText = "Nope, that's not it.";
						}
					}else {
						this.outputText = "";
					}
					
				}
			}
		}
	};
</script>

<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<v-card max-width="800" class="mx-auto pa-4">
					<h3>Match Literal Strings</h3>
					<a :to="fccUrl" target="_blank">
						(Found here at FreeCodeCamp.com)
					</a>
					<v-row>
						<v-col>
						<v-text-field
							v-model="inputText"
							placeholder="Type something..."
						></v-text-field>
						</v-col>
						<v-col>
							<p>Type any portion of this text:</p>
							<p><strong>Skateboarding is super fun and I like eggs.</strong></p>
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
		name: "Challenge2",
		data() {
			return {
				fccUrl: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-literal-strings",
				sentenceToMatch: "Skateboarding is super fun and I like eggs.",
				inputText: "",
				outputText: ""
			};
		},
		watch: {
			inputText(newVal, oldVal) {
				if(oldVal !== newVal) {
					if(newVal !== "") {
						let regex = new RegExp(newVal);
						if(regex.test(this.sentenceToMatch)) {
							this.outputText = "Yes, it contains '"+newVal+"'";
						} else {
							this.outputText = "Sorry, it doesn't contain '"+newVal+"'";
						}
					}else {
						this.outputText = "";
					}
					
				}
			}
		}
	};
</script>

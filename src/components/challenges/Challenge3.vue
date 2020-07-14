<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<v-card max-width="800" class="mx-auto pa-4">
					<h3>#3: Match a Literal String with Different Possibilities</h3>
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
								Type one or more of these words:<br />
								<strong>sometimes, usually, always, never, probably</strong>
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
		name: "Challenge3",
		data() {
			return {
				fccUrl: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-a-literal-string-with-different-possibilities",
				inputText: "",
				outputText: ""
			};
		},
		watch: {
			inputText(newVal, oldVal) {
				if(oldVal !== newVal) {
					if(newVal !== "") {
						let regex = /sometimes|usually|always|never|probably|maybe/;
						if(regex.test(newVal)) {
							this.outputText = "Yeah, '"+newVal+"' contains one or more of them.";
						} else {
							this.outputText = "Nope, '"+newVal+"' doesn't contain any of those words.";
						}
					}else {
						this.outputText = "";
					}
					
				}
			}
		}
	};
</script>

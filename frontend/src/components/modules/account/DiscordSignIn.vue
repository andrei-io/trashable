<template>
	<button id="container">
		<div id="icon">
			<DiscordLogo />
		</div>
		Sign in with Discord
	</button>
</template>

<script lang="ts" setup>
// Somehow applying styles directly to this component doesn't work,so it's wrapped in a div
import DiscordLogo from '@/components/icons/DiscordLogo.vue';
</script>

<style scoped>
#container {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;

	padding: 0.25rem 0.5rem;

	background: #5865f2;
	color: var(--text-color);

	border-radius: 4rem;
	border: 0;
}

#icon {
	height: 85%;
}
</style>

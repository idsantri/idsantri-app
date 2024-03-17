<template>
	<q-layout>
		<q-page-container>
			<q-page class="flex flex-center">
				<q-card class="my-card q-pa-lg bg-green-5 text-green-1">
					<q-card-section class="no-padding q-mb-md">
						<div class="container-title">
							<h1 class="title">{{ config.APP_NAME }}</h1>
							<h2 class="text-subtitle1 text-center q-ma-none">
								{{ config.APP_DESCRIPTION }}
							</h2>
						</div>
						<q-separator dark />
						<h3 class="sub-title">{{ title }}</h3>
					</q-card-section>

					<q-banner
						v-if="errors.length > 0"
						id="error"
						class="q-mb-sm no-padding bg-red-2 text-red"
					>
						<ul class="q-my-xs">
							<li v-for="(error, index) in errors" :key="index">
								<span v-html="error"></span>
							</li>
						</ul>
					</q-banner>

					<q-card-section class="no-padding no-margin">
						<router-view
							@title="handleTitle"
							@errors="handleErrors"
						/>
					</q-card-section>
				</q-card>
			</q-page>
		</q-page-container>
	</q-layout>
</template>

<script setup>
import config from 'src/config';
import { ref } from 'vue';

const title = ref('Autentikasi');
const handleTitle = (value) => (title.value = value);

const errors = ref([]);
const handleErrors = (value) => (errors.value = value);
</script>

<style scoped>
.title {
	font-size: 2em;
	margin: 0 auto;
	padding: 0;
	text-align: center;
	height: 40px;
	line-height: 40px;
}

.sub-title {
	font-size: 1.7em;
	margin: 0 auto;
	padding: 0;
	font-weight: 500;
	text-align: center;
	height: 30px;
	line-height: 30px;
	margin-top: 10px;
}

.my-card {
	width: 400px;
	max-width: 95vw;
}

.container-title {
	margin-bottom: 10px;
}
</style>

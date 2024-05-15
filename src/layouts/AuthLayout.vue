<template>
	<q-layout>
		<q-page-container>
			<q-page class="flex flex-center">
				<q-card class="my-card q-pa-lg bg-green-5 text-green-1">
					<q-card-section class="no-padding q-mb-md">
						<div class="q-mb-sm text-center">
							<q-img
								src="logo.png"
								style="
									width: 100px;
									height: 100px;
									border-radius: 50%;
									background-color: whitesmoke;
								"
							/>
						</div>
						<div class="container-title">
							<h1 class="title text-green-10">ID Santri</h1>
							<p class="sub1">Sistem Informasi</p>
							<p class="sub2">
								{{ config.INS_DESC }}
								{{ config.INS_NAME }}
							</p>
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
	height: 35px;
	line-height: 35px;
	letter-spacing: 1px;
}
.sub1 {
	text-align: center;
	font-size: 1rem;
	margin: 0;
	font-weight: 300;
	letter-spacing: 5px;
}
.sub2 {
	text-align: center;
	font-size: 1.1rem;
	margin: 0;
	font-weight: 300;
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

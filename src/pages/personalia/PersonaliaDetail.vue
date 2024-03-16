<template lang="">
	<q-page class="">
		<div class="row" style="max-width: 1200px">
			<div class="col-12 col-md-6 q-pa-sm">
				<PersonaliaIdentitasCard />
			</div>
			<div class="col-12 col-md-6 q-pa-sm">
				<PersonaliaMadrasahCard />
			</div>
		</div>
	</q-page>
</template>
<script setup>
import PersonaliaIdentitasCard from 'src/pages/personalia/PersonaliaIdentitasCard.vue';
import PersonaliaMadrasahCard from 'src/pages/personalia/PersonaliaMadrasahCard.vue';
</script>
<style lang=""></style>

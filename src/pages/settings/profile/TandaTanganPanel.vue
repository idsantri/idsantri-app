<template lang="">
	<q-tab-panel :name="$props.name" class="q-pa-sm">
		<q-card flat bordered>
			<q-card-section horizontal>
				<q-card-section class="q-pa-sm">
					<div style="width: 200px">
						<q-img
							:src="computedSrc"
							:ratio="1"
							alt="user"
							:img-style="{
								border: '1px',
								borderColor: 'green',
								borderStyle: 'solid',
							}"
						/>
						<q-btn
							icon="upload"
							label="Upload"
							no-caps
							dense
							outline
							class="full-width q-mt-md"
							@click="showUploader = true"
						/>
					</div>
				</q-card-section>

				<q-separator vertical />

				<q-card-section class="q-pa-sm">
					<div class="text-subtitle2">Tanda Tangan</div>
					<div class="text-subtitle1">
						{{ kebabToTitleCase(props.name) }}
					</div>
					<div class="text-italic q-mt-lg">
						Pastikan gambar sudah transparan
					</div>
				</q-card-section>
			</q-card-section>
		</q-card>
		<upload-image
			:show-uploader="showUploader"
			:url="`/config/profiles/sign/${props.name}`"
			:width="200"
			:height="200"
			:img-format="imgFormat"
			@update-uploader="updateUploader"
			@success-upload="successUpload"
		/>
	</q-tab-panel>
</template>
<script setup>
import { computed, ref } from 'vue';
import UploadImage from 'src/components/ImageUploader.vue';
import { kebabToTitleCase } from 'src/utils/format-text.js';
import api from 'src/api';
import config from 'src/config';

const props = defineProps({
	name: { type: String, required: true },
});

const base = api.defaults.baseURL;
const url = base.replace(config.END_API, '/assets/');
const timestamp = ref(Date.now());

const showUploader = ref(false);
const updateUploader = (val) => (showUploader.value = val);
const imgFormat = 'png';

const computedSrc = computed(
	() => `${url}tt-${props.name}.${imgFormat}?timestamp=${timestamp.value}`,
);

async function successUpload() {
	showUploader.value = false;
	timestamp.value = Date.now();
}
</script>
<style lang=""></style>

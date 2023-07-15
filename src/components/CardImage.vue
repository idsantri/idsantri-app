<template>
    <q-card>
        <q-card-section class="bg-teal-7 text-teal-11 q-pa-sm">
            <div class="flex items-center">
                <div class="text-subtitle2">{{ title }}</div>
                <q-space />
            </div>
        </q-card-section>
        <q-card-section class="q-pa-sm">
            <div class="row">
                <div class="col-4 q-pr-sm">
                    <q-img :src="image" :ratio="3 / 4" />
                    <q-btn
                        class="q-mt-sm full-width"
                        icon="edit"
                        no-caps=""
                        label="Foto"
                        dense=""
                        size="sm"
                        outline=""
                        color="teal-10"
                        alt="Santri"
                    />
                </div>
                <div class="col">
                    <div v-for="(value, key) in props.data" :key="key">
                        <div class="text-caption">{{ key }}</div>
                        <div class="q-mb-sm">{{ value }}</div>
                    </div>
                </div>
            </div>
        </q-card-section>
    </q-card>
</template>
<script setup>
const props = defineProps({
    title: String,
    data: Object,
    image: String,
});
</script>

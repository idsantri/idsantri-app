<template>
    <q-card>
        <q-card-section class="bg-teal-7 text-teal-11 q-pa-sm">
            <div class="flex items-center">
                <div class="text-subtitle2">{{ title }}</div>
                <q-space />
                <slot name="button" />
            </div>
        </q-card-section>
        <q-card-section class="q-pa-sm">
            <div class="row" v-for="(value, key) in props.data" :key="key">
                <div class="col-4 text-caption">{{ key }}</div>
                <div class="col">{{ value }}</div>
            </div>
        </q-card-section>
    </q-card>
</template>
<script setup>
const props = defineProps({
    title: String,
    data: Object,
});
</script>

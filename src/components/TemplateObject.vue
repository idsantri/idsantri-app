<template>
    <div class="row" v-for="(value, key) in props.data" :key="key">
        <div class="col-4 text-caption">{{ key }}</div>
        <div class="col">{{ value }}</div>
    </div>
    <q-btn
        icon="info"
        color="teal-6"
        class="text-teal-12 absolute-bottom-right q-ma-xs"
        :to="props.route"
        round
        glossy
    />
</template>

<script setup>
const props = defineProps({
    data: null,
    route: null,
});
</script>

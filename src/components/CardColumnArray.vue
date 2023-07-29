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
            <div v-if="data.length">
                <q-list bordered separator>
                    <q-item
                        v-for="item in data"
                        :key="item.id"
                        class=""
                        clickable
                        v-ripple
                        :to="'/kelas/' + item.id"
                    >
                        <q-item-section>
                            <q-item-label lines="1">
                                <div v-for="(val, key) in item" :key="key">
                                    <div
                                        class="row"
                                        v-if="key.toLowerCase() != 'id'"
                                    >
                                        <div class="col-4 text-caption">
                                            {{ key }}
                                        </div>
                                        <div class="col">{{ val || "-" }}</div>
                                    </div>
                                </div>
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
            <div v-else>
                <div class="text-body2 text-center">
                    Tidak ada data untuk ditampilkan!
                </div>
            </div>
        </q-card-section>
    </q-card>
    <!-- <pre>{{ data }}</pre> -->
</template>

<script setup>
const props = defineProps({
    title: String,
    data: Object,
});
</script>

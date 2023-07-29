<template>
    <div v-if="data.length">
        <q-list separator>
            <q-item
                v-for="item in data"
                :key="item.id"
                class="q-pa-none"
                clickable
                v-ripple
            >
                <q-item-section>
                    <q-item-label lines="1">
                        <div v-for="(val, key) in item" :key="key">
                            <div class="row" v-if="key.toLowerCase() != 'id'">
                                <div class="col-4 text-caption">
                                    {{ key }}
                                </div>
                                <div class="col">{{ val }}</div>
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
</template>
<script setup>
const props = defineProps({
    data: [],
});
</script>

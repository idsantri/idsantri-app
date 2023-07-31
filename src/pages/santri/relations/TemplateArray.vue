<template>
    <div>
        <div v-if="data.length">
            <q-list separator>
                <q-item
                    v-for="item in data"
                    :key="item.id"
                    class="q-pa-none"
                    v-ripple
                >
                    <q-item-section side="">
                        <q-btn
                            glossy=""
                            icon="edit"
                            round=""
                            @click="$emit('edit', item)"
                        />
                    </q-item-section>
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
                                    <div class="col">{{ val }}</div>
                                </div>
                            </div>
                        </q-item-label>
                    </q-item-section>
                </q-item>
                <q-btn
                    icon="add"
                    round=""
                    color="teal-14"
                    glossy=""
                    class="absolute-bottom-right q-ma-xs"
                    @click="$emit('add')"
                />
            </q-list>
        </div>
        <div v-else>
            <div class="text-body2 text-center">
                Tidak ada data untuk ditampilkan!
            </div>
        </div>
        <!-- <pre>{{ props.data }}</pre> -->
    </div>
</template>
<script setup>
const props = defineProps(["data"]);
</script>

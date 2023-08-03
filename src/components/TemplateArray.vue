<template>
    <div>
        <div v-if="data.length">
            <q-list separator="">
                <q-item
                    v-for="item in data"
                    :key="item.id"
                    class="q-pa-none"
                    v-ripple
                >
                    <q-item-section side="" class="q-pr-sm">
                        <q-btn
                            class="q-ma-xs"
                            size="sm"
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
                                    <div class="col ellipsis">{{ val }}</div>
                                </div>
                            </div>
                        </q-item-label>
                    </q-item-section>
                </q-item>
                <q-btn
                    style="opacity: 0.9"
                    icon="add"
                    round=""
                    dense=""
                    color="teal-14"
                    glossy=""
                    class="absolute-bottom-right q-ma-sm"
                    @click="$emit('add')"
                />
            </q-list>
        </div>
        <div v-else style="height: 50px">
            <div class="text-body2 text-center" style="line-height: 50px">
                Tidak ada data untuk ditampilkan!
            </div>
            <q-btn
                style="opacity: 0.9"
                icon="add"
                round=""
                dense=""
                color="teal-14"
                glossy=""
                class="absolute-bottom-right q-ma-sm"
                @click="$emit('add')"
            />
        </div>
    </div>
    <!-- <pre>{{ props.data }}</pre> -->
</template>
<script setup>
const props = defineProps(["data"]);
</script>

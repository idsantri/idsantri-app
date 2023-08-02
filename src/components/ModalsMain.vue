<template>
	<q-dialog persistent="" v-model="crudSantri">
		<santri-modal-crud />
	</q-dialog>
	<q-dialog v-model="searchSantri" full-width="" style="max-width: 1024px">
		<santri-datatables />
	</q-dialog>

	<q-dialog persistent="" v-model="crudOrtu">
		<ortu-modal-crud />
	</q-dialog>
	<q-dialog v-model="searchOrtu" full-width="" style="max-width: 1024px">
		<ortu-datatables />
	</q-dialog>

	<q-dialog persistent="" v-model="crudWali">
		<wali-modal-crud />
	</q-dialog>
	<q-dialog v-model="searchWali" full-width="" style="max-width: 1024px">
		<wali-datatables />
	</q-dialog>
</template>
<script setup>
import dialogStore from 'src/stores/dialog-store';
import SantriModalCrud from 'src/pages/santri/crud/SantriModalCrud.vue';
import SantriDatatables from 'src/pages/santri/SantriDatatables.vue';
import OrtuModalCrud from 'src/pages/ortu/crud/OrtuModalCrud.vue';
import OrtuDatatables from 'src/pages/ortu/OrtuDatatables.vue';
import WaliDatatables from 'src/pages/wali/WaliDatatables.vue';
import WaliModalCrud from 'src/pages/wali/crud/WaliModalCrud.vue';

import { toRefs, watchEffect } from 'vue';
const dialog = dialogStore();
const { searchSantri, crudSantri, searchOrtu, crudOrtu, searchWali, crudWali } =
	toRefs(dialog);

watchEffect(() => {
	if (crudSantri.value) searchSantri.value = false;
	if (crudWali.value) searchWali.value = false;
	if (crudOrtu.value) searchOrtu.value = false;
});
</script>

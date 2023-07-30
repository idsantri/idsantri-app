import { defineStore } from "pinia";
export default defineStore("modal", {
    state: () => {
        return {
            searchSantri: false,
            crudSantri: false,

            searchWali: false,
            crudWali: false,

            searchOrtu: false,
            crudOrtu: false,
        };
    },
    actions: {
        toggleSearchSantri(v) {
            v ? (this.searchSantri = true) : (this.searchSantri = false);
        },
        toggleCrudSantri(v) {
            v ? (this.crudSantri = true) : (this.crudSantri = false);
        },

        toggleSearchWali(v) {
            v ? (this.searchWali = true) : (this.searchWali = false);
        },
        toggleCrudWali(v) {
            v ? (this.crudWali = true) : (this.crudWali = false);
        },

        toggleSearchOrtu(v) {
            v ? (this.searchOrtu = true) : (this.searchOrtu = false);
        },
        toggleCrudOrtu(v) {
            v ? (this.crudOrtu = true) : (this.crudOrtu = false);
        },
    },
});

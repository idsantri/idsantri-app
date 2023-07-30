const forceRerender = () => {
    document.getElementById("btn-force-rerender").click();
};

const closeSantriSearch = () => {
    document.getElementById("btn-close-santri-search").click();
};

const closeSantriCrud = () => {
    document.getElementById("btn-close-santri-crud").click();
};

const closeWaliSearch = () => {
    document.getElementById("btn-close-wali-search").click();
};

const closeWaliCrud = () => {
    document.getElementById("btn-close-wali-crud").click();
};

const closeOrtuSearch = () => {
    document.getElementById("btn-close-ortu-search").click();
};

const closeOrtuCrud = () => {
    document.getElementById("btn-close-ortu-crud").click();
};

export {
    forceRerender,
    closeOrtuCrud,
    closeOrtuSearch,
    closeSantriCrud,
    closeSantriSearch,
    closeWaliCrud,
    closeWaliSearch,
};

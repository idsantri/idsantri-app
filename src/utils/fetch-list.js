import { apiTokened } from "src/config/api";

async function fetchLists(request) {
    const { loading, lists, key } = request;
    const url = `lists/${key}`;
    // console.log("url", url);
    loading.value[key] = true;
    try {
        const response = await apiTokened.get(url);
        lists.value[key] = response.data.lists;
    } catch (error) {
        console.log(`Not Found list: ${key}`, error);
    } finally {
        loading.value[key] = false;
    }
}
export { fetchLists };

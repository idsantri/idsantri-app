import { Dialog } from "quasar";
import { apiTokened } from "src/api";
import { toArray } from "src/utils/array-object";
import { forceRerender } from "src/utils/buttons-click";
import { notifyError, notifySuccess } from "src/utils/notify";
/**
 *
 * TODO:
 * logic masih perlu dikoreksi ulang
 */
async function update({
  endPoint,
  data,
  rerender,
  loading,
  responseData,
  notify
}) {
  try {
    if (loading && typeof loading.value === "boolean") loading.value = true;
    const response = await apiTokened.put(endPoint, data);
    if (notify) notifySuccess(response.data.message);
    if (responseData) {
      return response.data;
    }
    if (rerender) forceRerender();
    return true;
  } catch (error) {
    const message = error?.response?.data?.message;
    if (message) {
      toArray(message).forEach((msg) => notifyError(msg));
    } else {
      console.log(error);
    }
    return false;
  } finally {
    if (loading && typeof loading.value === "boolean") loading.value = false;
  }
}

async function updateData({
  endPoint,
  data,
  message,
  rerender,
  confirm,
  loading,
  responseData,
  notify = true
}) {
  if (confirm) {
    return new Promise((resolve) => {
      Dialog.create({
        title: "Konfirmasi",
        message: message || `<span style="color:'red'">Update data ini?</span>`,
        cancel: true,
        persistent: false,
        html: true
      })
        .onOk(async () => {
          const success = await update({
            endPoint,
            data,
            rerender,
            loading,
            // responseData,
            notify
          });
          resolve(success);
        })
        .onCancel(() => {
          resolve(false);
        })
        .onDismiss(() => {
          resolve(false);
        });
    });
  } else {
    return await update({
      endPoint,
      data,
      rerender,
      loading,
      responseData,
      notify
    });
  }
}

export default updateData;

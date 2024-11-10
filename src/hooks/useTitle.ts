import { useTitle as useWebTitle } from "@vueuse/core";
import { unref, watch } from "vue";
import { useRouter } from "vue-router";

export function useTitle() {
  const title = import.meta.env.VITE_TITLE;

  const { currentRoute } = useRouter();
  const webTitleRef = useWebTitle();

  watch(
    () => currentRoute.value.path,
    () => {
      const route = unref(currentRoute);
      const routeTitle = route.meta?.title as string;
      webTitleRef.value = routeTitle ? `${routeTitle}-${title}` : `${title}`;
    },
    { immediate: true }
  );
}

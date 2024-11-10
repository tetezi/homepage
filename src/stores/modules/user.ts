import { getStorageName } from "@/utils/env";
import { defineStore } from "pinia";
type State = {
  type?: "all" | "2" | "3";
};
export const useUserStore = defineStore({
  id: "user", // 命名，唯一
  persist: [
    {
      key: `${getStorageName()}_user`,
      storage: localStorage,
    },
  ],
  state: (): State => {
    return { type: undefined };
  },
  getters: {
    canRead() {
      return true;
    },
  },
  actions: {},
});

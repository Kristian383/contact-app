import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      contacts: [],
    };
  },
  getters: {
    getContacts(state) {
      return state.contacts;
    },
  },
  mutations: {
    loadContactsFromApi(state, payload) {
      state.contacts = payload;
    },
  },
  actions: {
    async loadContactsFromApi(context) {
      //context, state
      // let url = new URL(`/contacts`, "http://127.0.0.1:5000");
      let url = new URL(`/contacts`, "http://192.168.1.5:5000");
      let response;
      try {
        response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch {
        console.log("There was an error!");
        return;
      }

      if (!response.ok) {
        return;
      }
      const responseData = await response.json();
      context.commit("loadContactsFromApi", responseData.contacts);
      console.log(responseData.contacts);
    },
  },
});

export default store;

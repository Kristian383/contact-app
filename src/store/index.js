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
    // getContact(state, email) {
    //   return state.contacts.find((contact) => contact.email === email);
    // },
    getContact: (state) => (email) => {
      return state.contacts.find((contact) => contact.email === email);
    },
  },
  mutations: {
    loadContactsFromApi(state, payload) {
      state.contacts = payload;
    },
    removeContact(state, email) {
      let index;
      index = state.contacts.findIndex((contact) => contact.email === email);
      state.contacts.splice(index, 1);
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
        return false;
      }

      if (!response.ok) {
        return false;
      }
      const responseData = await response.json();
      context.commit("loadContactsFromApi", responseData.contacts);
      // console.log(responseData.contacts);

      // return responseData.contacts == true ? true : false;
    },
    async addContact(_, payload) {
      let url = new URL(`/contact`, "http://192.168.1.5:5000");
      let response;

      const { editMode, ...body } = payload;
      let method = editMode === true ? "PUT" : "POST";
      try {
        response = await fetch(url, {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
      } catch {
        console.log("There was an error!");
        return false;
      }
      if (response.status === 400) {
        return false;
      }

      const responseData = await response.json();
      // console.log(responseData);
      return responseData;
    },
    async deleteContact(context, payload) {
      let url = new URL(`/contact`, "http://192.168.1.5:5000");
      let response;

      try {
        response = await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      } catch {
        console.log("There was an error!");
        return false;
      }

      if (!response.ok) {
        return false;
      }

      const responseData = await response.json();
      context.commit("removeContact", payload.email);
      // console.log(responseData);
      return responseData;
    },
  },
});

export default store;

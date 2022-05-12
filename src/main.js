/* eslint-disable prettier/prettier */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faUser, faEnvelope, faPhone, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faEnvelope, faPhone, faEdit, faTrash);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(store);
app.mount("#app");

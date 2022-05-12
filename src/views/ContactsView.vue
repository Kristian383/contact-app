<template>
  <div class="container">
    <h2>My Contacts</h2>
    <!-- <button @click="">Add contact</button> -->
    <router-link class="add-btn" to="/add">Add contact</router-link>
    <!-- <div class="container-header">
      <input type="text" />
    </div> -->
    <div class="contacts-list" v-if="contactsList">
      <!-- <div v-for="item in 3" :key="item">Contact item</div> -->
      <the-contact
        v-for="contact in contactsList"
        :key="contact"
        :contact="contact"
      ></the-contact>
    </div>
    <p v-else>No contacts...</p>
  </div>
</template>

<script>
import TheContact from "../components/TheContact.vue";

import { onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    TheContact,
  },
  setup() {
    // const contactsList = ref([]);

    const store = useStore();

    const contactsList = computed(() => {
      return store.getters.getContacts;
    });

    console.log("tu", contactsList);

    onMounted(() => {
      // dispatch action to api
      store.dispatch("loadContactsFromApi");
      // console.log("");
    });

    return {
      contactsList,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  max-width: 40rem;
  margin: 2rem auto;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 1rem;

  & > h2 {
    font-size: 2rem;
  }

  .contacts-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .add-btn {
    background-color: #4f92ff;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;

    @media (min-width: 480px) {
      margin: 0 auto;
      width: 200px;
    }
  }
}
</style>

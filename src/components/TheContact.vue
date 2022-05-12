<template>
  <div class="contact-container" @click="toggleExpand">
    <img src="../assets/user.png" alt="" />
    <div class="contact-info">
      <div><font-awesome-icon class="icon" icon="user" /> {{ fullName }}</div>
      <div>
        <font-awesome-icon class="icon" icon="envelope" />{{ contact.email }}
      </div>
      <div>
        <font-awesome-icon class="icon" icon="phone" />{{
          contact.phone_number
        }}
      </div>
      <span class="edit-btn"
        ><font-awesome-icon class="icon" icon="edit" @click="openEditContact"
      /></span>
      <span class="remove-btn" @click="openDeleteModal">
        <font-awesome-icon class="icon" icon="trash" />
      </span>
    </div>

    <!-- delete-modal -->
    <transition name="fade">
      <delete-modal
        v-if="showDeleteModal"
        @close-modal="closeDeleteModal"
        @send-delete="submitDeleteRequest"
        :contact="contact.first_name + ' ' + contact.last_name"
      ></delete-modal>
    </transition>
  </div>
</template>

<script>
import DeleteModal from "../components/DeleteModal.vue";

import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  components: {
    DeleteModal,
  },
  props: ["contact"],
  setup(props) {
    const showDeleteModal = ref(false);
    const store = useStore();
    const router = useRouter();

    const fullName = computed(() => {
      return props.contact.first_name + " " + props.contact.last_name;
    });

    function closeDeleteModal() {
      showDeleteModal.value = false;
    }

    function openDeleteModal() {
      showDeleteModal.value = true;
    }

    function submitDeleteRequest() {
      store
        .dispatch("deleteContact", {
          email: props.contact.email,
          first_name: props.contact.first_name,
          last_name: props.contact.last_name,
          phone: props.contact.phone_number,
        })
        .then((res) => {
          showDeleteModal.value = false;
          if (res === false) {
            alert("Something went wrong. Please try again.");
          }
        });
    }

    function openEditContact() {
      router.push("/add/" + props.contact.email);
    }

    return {
      fullName,
      showDeleteModal,
      closeDeleteModal,
      openDeleteModal,
      submitDeleteRequest,
      openEditContact,
    };
  },
};
</script>

<style lang="scss" scoped>
.contact-container {
  display: flex;
  gap: 0.5rem;
  //   background-color: #d6d6d6;
  background-color: #eaeaea;
  padding: 0.4rem;
  border-left: 6px solid #ccc;

  @media (min-width: 720px) {
    padding: 0.4rem 1rem;
    border-radius: 4px;
    gap: 1rem;
  }

  img {
    width: 5rem;
    height: 5rem;
    vertical-align: middle;
  }

  .contact-info {
    width: 100%;

    // background-color: #d6d6d6;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    text-align: start;
    font-weight: bold;
    position: relative;

    div {
      width: 160px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      @media (min-width: 330px) {
        // width: 200px;
        width: 90%;
      }
    }

    .icon {
      margin-right: 0.5rem;
    }

    .edit-btn,
    .remove-btn {
      cursor: pointer;
      font-size: 24px;
      position: absolute;
      right: -10px;
    }
    .remove-btn {
      top: 0.4rem;
      right: -5px;
    }
    .edit-btn {
      top: 2.8rem;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-leave-to,
.fade-enter-from {
  opacity: 0;
}
</style>
>

<template>
  <div class="add-contact-container">
    <form>
      <div class="form-title">Add Contact</div>

      <div class="input-group">
        <label for="first">First Name</label>
        <input type="text" v-model.trim="firstName" id="first" />
        <p class="error-text" v-if="!firstNameIsValid">
          Please insert less than 40 characters.
        </p>
      </div>

      <div class="input-group">
        <label for="last">Last Name</label>
        <input type="text" id="last" v-model.trim="lastName" />
        <p class="error-text" v-if="!lastNameIsValid">
          Please insert less than 40 characters.
        </p>
      </div>

      <div class="input-group">
        <label for="last">Email</label>
        <input type="email" id="email" v-model.trim="email" />
        <p class="error-text" v-if="!emailIsValid">
          Please insert less than 80 characters.
        </p>
      </div>
      <div class="input-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" v-model="phoneNumber" />
        <p class="error-text" v-if="!phoneNumberIsValid">
          Please insert number with less than 20 digits.
        </p>
      </div>
      <!--  -->
      <div class="save-btn-container">
        <button-save @click.prevent="addContact"></button-save>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonSave from "./ButtonSave.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  components: {
    ButtonSave,
  },
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const phoneNumber = ref("");

    const firstNameIsValid = ref(true);
    const lastNameIsValid = ref(true);
    const emailIsValid = ref(true);
    const phoneNumberIsValid = ref(true);

    const store = useStore();
    const router = useRouter();

    function validateForm() {
      firstNameIsValid.value = true;
      lastNameIsValid.value = true;
      emailIsValid.value = true;
      phoneNumberIsValid.value = true;

      if (!firstName.value.length || firstName.value.length > 40) {
        firstNameIsValid.value = false;
      }
      if (!lastName.value.length || lastName.value.length > 40) {
        lastNameIsValid.value = false;
      }
      if (!email.value.length || email.value.length > 80) {
        emailIsValid.value = false;
      }
      if (phoneNumber.value.length == 0 || isNaN(phoneNumber.value)) {
        phoneNumberIsValid.value = false;
      }

      if (
        firstNameIsValid.value &&
        lastNameIsValid.value &&
        emailIsValid.value &&
        phoneNumberIsValid.value
      ) {
        return true;
      }

      return false;
    }

    async function addContact() {
      if (validateForm() === false) {
        console.log("not valid");
        return;
      }
      const payload = {
        first_name: firstName.value,
        last_name: lastName.value,
        email: email.value,
        phone: phoneNumber.value,
      };

      store.dispatch("addContact", payload).then((res) => {
        console.log(res);
        if (res) {
          router.push("/contacts");
        }
      });
    }

    return {
      firstName,
      lastName,
      email,
      phoneNumber,
      validateForm,
      firstNameIsValid,
      lastNameIsValid,
      emailIsValid,
      phoneNumberIsValid,
      addContact,
    };
  },
};
</script>
<style lang="scss" scoped>
.add-contact-container {
  margin: 10px auto;
  width: 300px;
  position: relative;

  @media (min-width: 480px) {
    width: 400px;
  }

  form {
    border-radius: 8px;
    padding: 24px 40px;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    background-color: #fff;
    flex-direction: column;
    gap: 14px;

    .form-title {
      font-size: 24px;
      font-weight: 800;
      text-align: center;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      gap: 8px;

      label {
        font-size: 15px;
        font-weight: 700;
      }

      input {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 10px 16px 12px;
        line-height: 24px;
        outline: none;
        font-size: 16px;

        &:focus {
          box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        }

        &[type="password"] {
          font-family: Verdana;
        }
      }
    }

    .save-btn-container {
      margin: 0 auto;
    }

    .error-text {
      color: rgb(207, 45, 45);
      font-size: 14px;
    }
  }
}
</style>

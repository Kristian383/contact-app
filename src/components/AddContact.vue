<template>
  <div class="add-contact-container">
    <form>
      <div class="form-title">Add Contact</div>

      <div class="input-group">
        <label for="first">First Name</label>
        <input type="text" id="first" />
        <p class="error-text" v-if="false">Error text</p>
      </div>

      <div class="input-group">
        <label for="last">Last Name</label>
        <input type="text" id="last" />
        <p class="error-text" v-if="false">Error text</p>
      </div>

      <div class="input-group">
        <label for="last">Email</label>
        <input type="email" id="email" />
        <p class="error-text" v-if="false">Error text</p>
      </div>
      <div class="input-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" />
        <p class="error-text" v-if="false">Error text</p>
      </div>
      <!--  -->
      <div class="save-btn-container">
        <button-save></button-save>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonSave from "./ButtonSave.vue";
export default {
  components: {
    ButtonSave,
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
  }
}
</style>

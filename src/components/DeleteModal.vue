<template>
  <div class="delete-modal-wrapper open" id="modal" ref="modal">
    <div class="delete-modal">
      <div class="modal-header">
        <span
          ><font-awesome-icon
            icon="trash"
            class="trash-icon"
          ></font-awesome-icon
        ></span>
        <h3>Delete contact - {{ contact }}?</h3>
      </div>
      <div class="modal-body">
        <p>
          You'll <b>permanently</b> lose all the data and there is no way back.
        </p>
      </div>
      <div class="modal-footer">
        <button class="btn cancel-btn" @click="closeDeleteModal">Cancel</button>
        <button class="btn delete-btn" @click="sendDeleteEmail">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contact"],
  emits: ["closeModal", "send-delete"],
  methods: {
    closeDeleteModal() {
      this.$emit("closeModal");
    },
    sendDeleteEmail() {
      this.$emit("send-delete");
    },
  },
};
</script>

<style lang="scss" scoped>
.delete-modal-wrapper {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  padding: 8px;

  .delete-modal {
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    max-width: 450px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    border-top: 6px solid #ccc;
    color: var(--dark_gray_font);
    border-radius: 4px;
    gap: 18px;
    /* max-width: 95%; */
    .modal-header {
      display: flex;
      flex-direction: column;
      position: relative;
      padding-top: 8px;

      span {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: -20px;
        transform: translate(-50%, -50%);
        padding: 4px;
        background-color: #ccc;

        .trash-icon {
          font-size: 28px;
          color: #000;
          margin-top: 6px;
          margin-left: 1px;
        }
      }
    }

    .modal-body p {
      font-size: 16px;
      margin-bottom: 18px;
      /* text-align: start; */
    }

    .modal-footer {
      display: flex;
      /* flex-wrap: wrap; */
      gap: 8px;
      .btn {
        padding: 12px 8px;
        border-radius: 8px;
        width: 100%;
        outline: none;
        background-color: #eaeaea;
        /* border: 2px solid black; */
        border: none;
        cursor: pointer;
        font-size: inherit;
        font-weight: 600;
        transition: 0.2s all ease-in;
      }

      .btn.delete-btn {
        background-color: #ccc;

        &:hover {
          background-color: rgb(165, 165, 165);
        }
      }

      .btn.cancel-btn:hover {
        background-color: #ccc;
      }
    }
  }
}
</style>

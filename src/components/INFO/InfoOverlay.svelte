<script>
  import Modal from './Modal.svelte';

  let isOpenModal = false;

  function openModal() {
      isOpenModal = true;
  }

  function closeModal() {
      isOpenModal = false;
  }
</script>

<button on:click={openModal}>Open Modal</button>
<Modal isOpenModal={isOpenModal} on:closeModal={closeModal} />

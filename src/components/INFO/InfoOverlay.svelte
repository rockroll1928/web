<script>
  import Modal from './Modal.svelte';

  let isOpenModal = false;

   const  openModal = function() {
      isOpenModal = true;
  }

  function closeModal() {
      isOpenModal = false;
  }

  module.exports = openModal;

</script>

<Modal isOpenModal={isOpenModal} on:closeModal={closeModal} />


<template>
  <div class="modal fade" id="exampleModal" ref="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <h2>Dicard All Changes?</h2>
        </div>
        <div class="modal-footer">
          <button type="button" @click="confirm()" class="btn btn-success">Yes</button>
          <button type="button" @click="cancel()" class="btn btn-danger" data-dismiss="modal">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CancelModal',
  methods: {
    confirm () {
      $('#exampleModal').modal('hide');
      this.$router.push('/');
    }
  }
};
</script>

<style lang="stylus" scoped>

</style>

<template>
  <div>
    <div class="blue-line">
    </div>
    <div class="nav-wrapper">
      <p class="back-arrow fas fa-angle-left"></p>
      <p class="title">{{title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavSection',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
.blue-line {
  background: #0997D3;
  height: 4px;
}

.nav-wrapper {
  display: flex;
  height: 3em;
  align-items: center;
  border-bottom: 1px solid #5252524a;
  p {
    margin: 0px;
  }
  .back-arrow {
    color: #0000008a;
    font-size: 28px;
    padding-left: 1.5rem;
    cursor: pointer;
  }
  .title {
    color: #0000008a;
    margin: 0 auto;
  }
}
</style>

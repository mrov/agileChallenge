<template>
  <div>
    <router-link :to="linkTo" class="card-link">
      <div class="m-card">
        <div>
          <i :class=icon></i>
          <h3>{{title}}</h3>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MCards',  
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    linkTo: {
      type: String,
      required: true,
    },
  }
};
</script>

<style lang="stylus" scoped>

.m-card {
  cursor: pointer;
  width: 100%;
  height: 270px;
  box-shadow: 0 0 14px 2px #8888887a;
  border-radius: 20px;
  color: #36578c;
  margin-top: 1.6rem;
  margin-bottom: 3rem;
  div {
    padding: 1.4rem 0rem 0rem 1.6rem;
  }
  i {
    font-size: 42px;
  }
  h3 {
    margin-top: 2.5rem;
  }
}

</style>

<template>
  <div class="metrics-cards">
    <div class="title">
      <i :class="icon"></i>
      <p>{{title}}</p>
    </div>
    <div class="value-wrapper">
      <p v-if="currency === 'number'" class="value">{{value}}</p>
      <p v-if="currency === 'money'" class="value">${{value}}</p>
      <i v-if="signal === 'positive'" class="fas fa-arrow-down green"></i>
      <i v-if="signal === 'negative'" class="fas fa-arrow-up red"></i>
    </div>
    <div class="objects">
      <div v-for="(object, index) in objects" :key="index" class="object-wrapper">
        <p>{{object.name}}</p>
        <p>{{object.metric}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MetricsCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
      default: 'number',
    },
    signal: {
      type: String,
      required: true,
      default: 'positive',
    },
    objects: {
      type: Array,
      required: true,
    },
  },
  beforeMount () {
    console.log(this.objects);
  }
};
</script>

<style lang="stylus" scoped>

.metrics-cards {
  background: white;
  height: 225px;
  color: #757575;
  margin: 1rem 0rem;
  p {
    color: #757575;
  }
  .title {
    display: flex;
    margin-left: .75rem;
    padding-top: .65rem;
    i {
      color: #757575;
      position: relative;
      top: 3px;
    }
    p {
      color: #757575;
      font-size: 16px;
      margin-left: 6px;
      margin-bottom: 0px;
      font-weight: 600;
    }
  }
  .value-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 1.5rem;
    .value {
      text-align: right;
      font-size: 27px;
      margin-bottom: 0;
    }
    i {
      margin-left: 0.4rem;
      font-size: 22px;
    }
    .green {
      color: #3be016;
    }
    .red {
      color: red;
    }
  }
  .objects {
    padding-top: 1rem;
    .object-wrapper {
      display: flex;
      justify-content: space-between;
      padding: 0em 3em;
      font-size: 12px;
      font-weight: 600;
      p {
        margin-bottom: 5px;
      }
    }
  }
}

</style>

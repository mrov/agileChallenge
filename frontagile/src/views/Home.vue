<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 header">
        <div class="icons">
          <router-link to="">
            <i class="fas fa-camera"></i>
          </router-link>
          <router-link to="">
            <i class="fas fa-user"></i>
          </router-link>
          <router-link to="">
            <i class="fas fa-envelope"></i>
          </router-link>
          <router-link to="">
            <i class="fas fa-cog"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-9">
        <div class="sub-header">
          <router-link to="" class="card-link">
            <div class="sub-menus">
              <i class="far fa-chart-bar"></i>
              <p>Vertical</p>
            </div>
          </router-link>
          <router-link to="" class="card-link">
            <div class="sub-menus">
              <i class="fas fa-atom"></i>
              <p>Product Type</p>
            </div>
          </router-link>
          <router-link to="" class="card-link">
            <div class="sub-menus">
              <i class="fas fa-ellipsis-h"></i>
              <p>Process</p>
            </div>
          </router-link>
          <router-link to="" class="card-link">
            <div class="sub-menus">
              <i class="fas fa-tape"></i>
              <p>ST Family</p>
            </div>
          </router-link>
          <router-link to="" class="card-link">
            <div class="sub-menus">
              <i class="far fa-minus-square"></i>
              <p>MM</p>
            </div>
          </router-link>
        </div>
        <div class="row cards-wrapper">
          <div class="col-6">
            <MCards icon="far fa-user-circle" title="Account Info" linkTo="/AccountInfo" />
          </div>
          <div class="col-6">
            <MCards icon="far fa-id-card" title="Create New Account" linkTo="/NewAccount" />
          </div>
          <div class="col-6">
            <MCards icon="far fa-file" title="Trial Accounts Info" linkTo="/AccountHistory" />
          </div>
        </div>
      </div>
      <div class="col-3 metrics">
        <p class="metrics-title">Metrics</p>
        <MetricsCard
          v-for="(metric, index) in metrics"
          :key=index
          :title="metric.title"
          :currency="metric.currency"
          :value="metric.value"
          :icon="metric.icon"
          :signal="metric.signal"
          :objects="metric.objects" />
      </div>
    </div>
  </div>
</template>

<script>
import MetricsCard from '@/components/MetricsCard.vue';
import MCards from '@/components/MCards.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'home',
  components: {
    MetricsCard,
    MCards,
  },
  computed: {
    ...mapGetters({
      metrics: 'metrics/metrics'
    })
  },
  methods: {
    ...mapActions({
      getMetrics: 'metrics/getMetrics',
    }),
  },
  beforeMount: async function () {
    await this.getMetrics();
  }
};
</script>

<style lang="stylus" scoped>
.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #4170BE;
  height: 64px;
}
.icons {
  i {
    color: white;
    margin: 0 1rem;
  }
}
.sub-header {
  display: flex;
  margin-top: 1rem;
  color: #36578c;
  .sub-menus {
    display: flex;
    margin-left: 2rem;
    i {
      position: relative;
      top: 3px;
      margin-right: 6px;
    }
  }
  .card-link {
    color: #36578c;
    margin-left: 0px;
  }
  .card-link:hover {
    text-decoration: none;
    color: #36578c;
  }
}

.cards-wrapper {
  justify-content: space-around;
  margin-left: 4rem;
}

.metrics {
  background: #ABABAB;
  padding: 1em;
  padding-top: 0.5rem;
  .metrics-title {
    color: white;
    font-size: 24px;
  }
}

.last-card {
  margin-top: 5rem;
}
</style>

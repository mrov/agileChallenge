<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 header">
        <div class="icons">
          <i class="fas fa-camera"></i>
          <i class="fas fa-user"></i>
          <i class="fas fa-envelope"></i>
          <i class="fas fa-cog"></i>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-9">
        <div class="sub-header">
          <div class="sub-menus">
            <i class="far fa-chart-bar"></i>
            <p>Vertical</p>
          </div>
          <div class="sub-menus">
            <i class="fas fa-atom"></i>
            <p>Product Type</p>
          </div>
          <div class="sub-menus">
            <i class="fas fa-ellipsis-h"></i>
            <p>Process</p>
          </div>
          <div class="sub-menus">
            <i class="fas fa-tape"></i>
            <p>ST Family</p>
          </div>
          <div class="sub-menus">
            <i class="far fa-minus-square"></i>
            <p>MM</p>
          </div>
        </div>
        <div class="row cards-wrapper">
          <div class="col-6">
            <MCards icon="far fa-user-circle" title="Account Info" />
          </div>
          <div class="col-6">
            <MCards icon="far fa-id-card" title="Create New Account" />
          </div>
          <div class="col-6">
            <MCards icon="far fa-file" title="Trial Accounts Info" />
          </div>
        </div>
      </div>
      <div class="col-3 metrics">
        <p class="metrics-title">Metrics</p>
        <MetricsCard
          title="Total MM Iventory Units"
          currency="number"
          value="123,34"
          icon="fas fa-atom"
          signal="negative"
          :objects="[{name: 'Desktop', metric: 41.786}, {name: 'Server', metric: 81.901}, {name: 'Mobile', metric: 63.099}, {name: 'Server', metric: 81.901}, {name: 'Mobile', metric: 63.099}, ]" />
      </div>
    </div>
  </div>
</template>

<script>
import MetricsCard from '@/components/MetricsCard.vue';
import MCards from '@/components/MCards.vue';

export default {
  name: 'home',
  components: {
    MetricsCard,
    MCards
  },
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

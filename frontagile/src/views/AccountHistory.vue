<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 p-0">
        <NavSection title="Account History" />
        <div class="id-wrapper">
          <p>
            ID:
          </p>
          <select @change="selectUserHandler()" v-model="currentUserId" class="custom-select">
            <option hidden selected>ID</option>
            <option v-for="(user, index) in users"
            :key="index"
            :value="user._id">{{user._id}} - {{user.firstName}} {{user.lastName}}</option>
          </select>
        </div>
        <div class="table-wrapper">
          <table class="table">
            <tr>
              <th>Type</th>
              <th>Date</th> 
              <th>Time</th>
            </tr>
            <tr v-for="(record, index) in history" :key="index">
              <td>{{record.type}}</td>
              <td>{{record.formatedDate}}</td> 
              <td>{{record.formatedHour}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
import NavSection from "@/components/NavSection.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AccountHistory",
  data () {
    return {
      currentUserId: 'ID',
      history: []
    }
  },
  components: {
    NavSection,
  },
  computed: {
    ...mapGetters({
      users: 'user/users'
    })
  },
  methods: {
    ...mapActions({
      getTrialUsers: 'user/getTrialUsers',
      getHistory: 'user/getHistory',
    }),
    selectUserHandler: async function () {
      var result = await this.getHistory(this.currentUserId);
      this.history = result.data.history;
    }
  },
  beforeMount: async function () {
    await this.getTrialUsers();
  }
};
</script>

<style lang="stylus" scoped>
.container-fluid {
  margin: 0.3em;
}
.row {
  margin-right: 0px;
}

.id-wrapper {
  display: flex;
  justify-content: center;
  width: 250px;
  margin: 0.4em auto;
  p {
    margin: 7px 0.75em 0px 0px;
  }
}

.custom-select {
  font-style: italic;
}

.table {
  width: 100%;
  border: 1px solid #0000001f;
  th {
    font-weight: 100; 
  }
  tr:first-child {
    background: #F7F7F7;
  }
}

</style>

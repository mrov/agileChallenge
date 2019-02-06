<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 p-0">
        <NavSection title="Account History" />
        <div class="id-wrapper">
          <p>
            ID:
          </p>
          <select class="custom-select">
            <option selected>ID</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="table-wrapper">
          <table class="table">
            <tr>
              <th>Type</th>
              <th>Date</th> 
              <th>Time</th>
            </tr>
            <tr>
              <td>Creation</td>
              <td>23/02/2017</td> 
              <td>08:45:35</td>
            </tr>
            <tr>
              <td>Edition</td>
              <td>23/02/2017</td> 
              <td>08:45:35</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
import NavSection from "@/components/NavSection.vue"

export default {
  name: "AccountHistory",
  components: {
    NavSection,
  },
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

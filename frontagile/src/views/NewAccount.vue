<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 p-0">
        <NavSection title="New Account" />
        <div class="section-title">
          <h4>General Info</h4>
        </div>
        <div class="col-12 form-section">
          <div class="form-group row">
            <label for="ID">*ID:</label>
            <div class="col-10">
              <input class="w-60p" type="text" id="ID" placeholder="ID" disabled>
            </div>
          </div>
          <div class="form-group row">
            <label for="firstName">*First Name:</label>
            <div class="col-10">
              <input class="w-60p" type="text" id="firstName" placeholder="First Name">
            </div>
          </div>
          <div class="form-group row">
            <label for="middleName">Middle Name:</label>
            <div class="col-10">
              <input class="w-60p" type="text" id="middleName" placeholder="Middle Name">
            </div>
          </div>
          <div class="form-group row">
            <label for="lastName">*Last Name:</label>
            <div class="col-10">
              <input class="w-60p" type="text" id="lastName" placeholder="Last Name">
            </div>
          </div>
          <div class="form-group row">
            <label for="birthDate">*Birth Date:</label>
            <div class="col-10">
              <input class="w-60p" type="text" id="birthDate" placeholder="MMM dd yyyy">
            </div>
          </div>
          <div class="form-group row">
            <label for="email">*Email:</label>
            <div class="col-10">
              <input class="w-60p" type="text" id="email" placeholder="Email">
            </div>
          </div>
        </div>
        <div class="section-title">
          <h4>Localization Info</h4>
        </div>
        <div class="col-12 form-section">
          <div class="form-group row">
            <label for="country">*Country:</label>
            <div class="col-10">
              <select class="custom-select w-60p" id="country">
                <option hidden selected>Brasil</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="state">*State:</label>
            <div class="col-10">
              <select class="custom-select w-60p" id="state">
                <option value="" hidden selected>State</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="city">*City:</label>
            <div class="col-10">
              <select class="custom-select w-60p" id="city">
                <option hidden selected>City</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="addressline1">*Address Line 1:</label>
            <div class="col-10">
              <input class="w-60p" type="text" id="addressline1" placeholder="Address Line 1">
            </div>
          </div>
          <div class="form-group row">
            <label for="addressline2">Address Line 2:</label>
            <div class="col-10">
              <input class="w-60p" type="text" id="addressline2" placeholder="Address Line 2">
            </div>
          </div>
          <div class="form-group row">
            <label for="zip">*ZIP/Postal Code:</label>
            <div class="col-10">
              <input class="zipcode" type="text" id="zip" placeholder="ZIP/Postal Code">
            </div>
          </div>
        </div>
        <div class="section-title">
          <h4>Account</h4>
        </div>
        <div class="col-12 form-section">
          <div class="form-group row">
            <label for="accounttype">*Account Type:</label>
            <div class="col-10">
              <select class="custom-select accounttype" id="accounttype">
                <option hidden selected>Account Type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 p-0 footer-wrapper">
        <button type="button" class="btn btn-success">
          <i class="far fa-save"></i>
          Save
        </button>
        <button type="button" class="btn btn-danger">
          <i class="far fa-times-circle"></i> ]
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NavSection from '@/components/NavSection.vue';

export default {
  name: 'NewAccount',
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

.section-title{
  border-bottom: 1px solid rgba(82,82,82,0.29);
  margin-top: 2em;
  h4 {
    color: #000000b3;
    margin-left: 1em;
  }
}

.form-section {
  margin: 2em 0em 2em 7em;
}
.form-group {
  label {
    width: 150px;
    text-align: right;
    font-size: 14px;
    font-weight: 600;
    position: relative;
    top: -8px;
  }
  div input {
    padding: 0.55em 0px 0.55em 0.75em;
  }
  div input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    font-style: italic;
  }
  div input::-moz-placeholder { /* Firefox 19+ */
    font-style: italic;
  }
  div input:-ms-input-placeholder { /* IE 10+ */
    font-style: italic;
  }
  div input:-moz-placeholder { /* Firefox 18- */
    font-style: italic;
  }
}

.custom-select {
  border: 1px solid #a7a7a7;
  border-radius: 0px;
  color: #0000008c;
  font-style: italic;
}

.selected {
  color: black;
  font-style: normal;
}

.zipcode {
  width: 30%;
}

.accounttype{
  width: 50%;
}

.footer-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  background: #3D444A;
  button {
    margin: 0em .25em;
    i {
      font-size: 22px;
      position: relative;
      top: 2px;
    }
  }
}

</style>

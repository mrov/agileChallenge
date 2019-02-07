<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 p-0">
        <NavSection title="Account Info" />
        <div class="form-group row">
          <div class="col-12 id-wrapper">
            <label for="ID">ID:</label>
            <select id="ID" @change="selectUserHandler()" v-model="currentUserId" class="custom-select">
              <option hidden selected>ID</option>
              <option v-for="(user, index) in users"
              :key="index"
              :value="user._id">{{user._id}} - {{user.firstName}} {{user.lastName}}</option>
            </select>
          </div>
        </div>
        <div class="section-title">
          <h4>General Info</h4>
        </div>
        <div class="col-12 form-section">
          <div class="form-group row">
            <label for="firstName">*First Name:</label>
            <div class="col-10">
              <input :disabled="edit" v-model="form.firstName" class="w-60p" type="text" id="firstName" placeholder="First Name">
            </div>
          </div>
          <div class="form-group row">
            <label for="middleName">Middle Name:</label>
            <div class="col-10">
              <input :disabled="edit" v-model="form.middleName" class="w-60p" type="text" id="middleName" placeholder="Middle Name">
            </div>
          </div>
          <div class="form-group row">
            <label for="lastName">*Last Name:</label>
            <div class="col-10">
              <input :disabled="edit" v-model="form.lastName" class="w-60p" type="text" id="lastName" placeholder="Last Name">
            </div>
          </div>
          <div class="form-group row">
            <label for="birthDate">*Birth Date:</label>
            <div class="col-10">
              <input :disabled="edit" v-model="form.birthDate" class="w-60p" type="text" id="birthDate" placeholder="MMM dd yyyy">
            </div>
          </div>
          <div class="form-group row">
            <label for="email">*Email:</label>
            <div class="col-10">
              <input :disabled="edit" v-model="form.email" class="w-60p" type="text" id="email" placeholder="Email">
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
              <select :disabled="edit" v-model="form.country" class="custom-select w-60p" id="country">
                <option value="Brazil" selected>Brazil</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="state">*State:</label>
            <div class="col-10">
              <select :disabled="edit" @change="stateChange()" v-model="form.state" class="custom-select w-60p" id="state">
                <option v-for="(state, index) in brazilGeo.estados"
                  :key="index"
                  :value="state.nome">{{state.nome}}</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="city">*City:</label>
            <div class="col-10">
              <select :disabled="edit" v-model="form.city" class="custom-select w-60p" id="city">
                <option v-for="(city, index) in cities"
                  :key="index"
                  :value="city">{{city}}</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="addressline1">*Address Line 1:</label>
            <div class="col-10">
              <input :disabled="edit" v-model="form.firstAddressLine" class="w-60p" type="text" id="addressline1" placeholder="Address Line 1">
            </div>
          </div>
          <div class="form-group row">
            <label for="addressline2">Address Line 2:</label>
            <div class="col-10">
              <input :disabled="edit" v-model="form.scndAddressLine" class="w-60p" type="text" id="addressline2" placeholder="Address Line 2">
            </div>
          </div>
          <div class="form-group row">
            <label for="zip">*ZIP/Postal Code:</label>
            <div class="col-10">
              <input :disabled="edit" v-model="form.zipCode" class="zipcode" type="text" id="zip" placeholder="ZIP/Postal Code">
            </div>
          </div>
        </div>
        <div class="section-title">
          <h4>Account</h4>
        </div>
        <div class="col-12 form-section account-type">
          <div class="form-group row">
            <p for="accounttype">*Account Type:</p> <span> {{form.accountType}} </span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 p-0 footer-wrapper">
        <button @click="formEdit()" type="button" class="btn btn-info">
          <i class="fas fa-pencil-alt"></i>
          Edit
        </button>
        <button @click="formSubmit()" :disabled="edit" type="button" class="btn btn-success">
          <i class="far fa-save"></i>
          Save
        </button>
        <button @click="formCancel()" type="button" class="btn btn-danger">
          <i class="far fa-times-circle"></i>
          Cancel
        </button>
      </div>
    </div>
    <CancelModal />
  </div>
</template>

<script>
import NavSection from '@/components/NavSection.vue';
import brazilGeo from '@/store/brazilGeo.json';
import CancelModal from '@/components/CancelModal.vue';
import { monthsAbbrev, emailRegex } from '@/store/params.js';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AccountInfo',
  data () {
    return {
      form: {
        accountType: 'Trial',
        birthDate: '',
        city: 'Acrelândia',
        country: 'Brazil',
        email: '',
        firstAddressLine: '',
        firstName: '',
        lastName: '',
        middleName: '',
        scndAddressLine: '',
        state: 'Acre',
        zipCode: '',
      },
      errors: {},
      brazilGeo: brazilGeo,
      cities: [],
      edit: true,
      currentUserId: 'ID'
    };
  },
  components: {
    NavSection,
    CancelModal,
  },
  computed: {
    ...mapGetters({
      users: 'user/users'
    })
  },
  methods: {
    ...mapActions({
      updateUser: 'user/updateUser',
      getAllUsers: 'user/getAllUsers',
      getUserbydId: 'user/getUserbydId',
    }),
    // Check if its empty or only spaced string
    IsBlank (str) {
      if (str.replace(/ /gi, '').length === 0) {
        return true;
      } else {
        return false;
      }
    },
    formSubmit: async function() {
      var anyBlank = true;
      var birthDate = new Date(this.form.birthDate);
      // Check if any field is empty or only spaced
      for (const key in this.form) {
        if (key !== 'scndAddressLine' && key !== 'middleName') {
          const formValue = this.form[key];
          anyBlank = this.IsBlank(formValue);
        }
      }
      // validate notBlank fields, birth date and email format
      if (!anyBlank && birthDate != 'Invalid Date' && emailRegex.test(this.form.email)) {
          var result = await this.updateUser({id: this.currentUserId, form: this.form});
          this.$router.push('/');
      }
      if (!emailRegex.test(this.form.email)) { console.log("Wrong Email Format"); }
      if (birthDate == 'Invalid Date') { console.log("Wrong Birth Date Format"); }
    },
    formCancel () {
      console.log("moabe");
      var anyBlank = true;
      var showmodal = function () { $('#exampleModal').modal('show') };
      var exceptions = ['accountType', 'country', 'state', 'city', 'scndAddressLine', 'middleName'];
      for (const key in this.form) {
        if (!exceptions.includes(key) && anyBlank === true) {
          const formValue = this.form[key];
          anyBlank = this.IsBlank(formValue);
        }
      }
      if (!anyBlank) {
        console.log("moabe");
        showmodal();
      }
    },
    formEdit () {
      this.edit = false;
    },
    stateChange () {
      for (let i = 0; i < this.brazilGeo.estados.length; i++) {
        const estado = this.brazilGeo.estados[i];
        if (this.form.state === estado.nome) {
          this.cities = this.brazilGeo.estados[i].cidades
          this.form.city = this.brazilGeo.estados[i].cidades[0]
        }
      }
    },
    selectUserHandler: async function () {
      var result = await this.getUserbydId(this.currentUserId);
      this.form = result.data;
      var birthdayData = new Date(this.form.birthDate);
      this.form.birthDate = `${monthsAbbrev[birthdayData.getMonth()]} ${birthdayData.getDate()} ${birthdayData.getFullYear()}`;
      for (let i = 0; i < this.brazilGeo.estados.length; i++) {
        const estado = this.brazilGeo.estados[i];
        if (this.form.state === estado.nome) {
          this.cities = this.brazilGeo.estados[i].cidades
        }
      }
    }
  },
  beforeMount: async function () {
    await this.getAllUsers();
    this.state = this.brazilGeo.estados[0].nome;
    this.cities = this.brazilGeo.estados[0].cidades;
    this.city = this.brazilGeo.estados[0].cidades[0];
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
    top: -6px;
  }
  div input {
    padding: 0.55em 0px 0.55em 0.75em;
  }
  div input:disabled {
    background-color: white;
    border-style: groove;
    color: black;
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

.account-type {
  p {
    width: 150px;
    text-align: right;
    font-size: 14px;
    font-weight: 600;
  }
  span {
    margin-left: 1.1rem;
    font-size: 14px;
  }
}

.id-wrapper {
  display: flex;
  margin-top: 2em;
  margin-left: 11em;
  label {
    position: relative;
    top: 9px;
    width: auto;
    text-align: left;
  }
  select {
    width: 20%;
    margin-left: 1rem;
  }
}

.custom-select {
  border: 1px solid #a7a7a7;
  border-radius: 0px;
  color: black;
  font-style: italic;
}

.custom-select:disabled {
  background-color: white;
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

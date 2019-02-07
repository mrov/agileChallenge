import { baseUrl } from '../../params';
import axios from 'axios';

export default {
  // Payload have every camps to register
  registerUser: async function (context, payload) {
    var res = await axios({
      method: 'POST',
      url: baseUrl + '/users',
      data: payload
    }).catch(err => { return (err.response); });
    return res;
  },
  // payload {id, {form with the infos}}
  updateUser: async function (context, payload) {
    var res = await axios({
      method: 'PUT',
      url: baseUrl + '/users/' + payload.id,
      data: payload.form
    }).catch(err => { return (err.response); });
    return res;
  },
  getTrialUsers: async function (context) {
    var res = await axios({
      method: 'GET',
      url: baseUrl + '/users',
      params: { accountType: 'Trial'}
    }).catch(err => { return (err.response); });
    context.commit('setUsers', res.data);
    return res;
  },
  getAllUsers: async function (context) {
    var res = await axios({
      method: 'GET',
      url: baseUrl + '/users',
    }).catch(err => { return (err.response); });
    context.commit('setUsers', res.data);
    return res;
  },
  getUserbydId: async function (context, id) {
    var res = await axios({
      method: 'GET',
      url: baseUrl + '/users/' + id,
    }).catch(err => { return (err.response); });
    return res;
  },
  getHistory: async function (context, id) {
    var res = await axios({
      method: 'GET',
      url: baseUrl + '/users/history/' + id,
    }).catch(err => { return (err.response); });
    return res;
  },
};

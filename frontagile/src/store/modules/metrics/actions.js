import { baseUrl } from '../../params';
import axios from 'axios';

export default {
  getMetrics: async function (context) {
    var res = await axios({
      method: 'GET',
      url: baseUrl + '/metrics',
    }).catch(err => { return (err.response) })
    context.commit('setMetrics', res.data);
    return res;
  }
}
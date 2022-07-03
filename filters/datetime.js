import Vue from 'vue';
import moment from 'moment-timezone';
export default () => {
  Vue.filter('datetime', value => {
    if (!value) return '';

    return moment.tz(value, 'Asia/Singapore').format('Do MMM YYYY h:mm a');
  });
};

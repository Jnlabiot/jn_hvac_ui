<template>
  <div>
    <a-range-picker
      :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }" 
        :default-value="[moment(), moment()]"
      @change="onChange"
    />
    <br />
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      dateFormat: 'YYYY/MM/DD',
      monthFormat: 'YYYY/MM',
      searchtime:{
          start:null,
          end:null
      }
    };
  },
  mounted(){
      this.mytime()
      consolthis.moment().subtract(1,'days').format('YYYY-MM-DD')
  },
  methods: {
    moment,
    mytime(){
      console.log(this.moment())
    },
  
    onChange(dates, dateStrings) {
      console.log('From: ', dates[0], ', to: ', dates[1]);
      console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    },
  },
};
</script>

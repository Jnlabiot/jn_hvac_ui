<template>
<!-- 只能主机 -->
  <div class="Total">
      <div class="bgcolor"/>
          <div class="table1">
               <table>
                    <tr>
                        <td class="bg_white"></td>
                        <td class="bg_blue">冷却塔</td>
                        <td class="bg_blue">主机房</td>
                    </tr>
                    <tr>
                        <td  class="row1 bg_blue">干球温度</td>
                        <td  class="row2 bg_white">20.2&#8451;</td>
                        <td  class="row3 bg_white">20.5&#8451;</td>
                    </tr>
                    <tr>
                        <td class="bg_blue">湿球温度</td>
                        <td class="bg_white">15.6&#8451;</td>
                        <td class="bg_white">15.2&#8451;</td>
                    </tr>
                    <tr>
                        <td class="bg_blue">相对湿度</td>
                        <td class="bg_white">62.2%</td>
                        <td class="bg_white">57.4%</td>
                    </tr>
                  </table>
          </div>
        <div class="table2">
            <table>
                    <tr>
                        <td class="bg_white"></td>
                        <td class="row1 bg_blue">机房EER</td>
                        <td class="row2 bg_blue">机房电量/KW.H</td>
                        <td class="row3 bg_blue">机房冷量/KW.H</td>
                    </tr>
                    <tr>
                        <td class="bg_blue">日累计</td>
                        <td class="bg_white">0.00</td>
                        <td class="bg_white">22.60 kW.h</td>
                        <td class="bg_white">0.00 kW.h</td>
                    </tr>
                    <tr><td class="bg_blue">月累计</td>
                        <td class="bg_white">0.00</td>
                        <td class="bg_white">75 kW.h</td>
                        <td class="bg_white">0 kW.h</td>
                    </tr>
                    <tr>
                        <td class="bg_blue">年累计</td>
                        <td class="bg_white">7.10</td>
                        <td class="bg_white">365538 kW.h</td>
                        <td class="bg_white">2594003 kW.h</td>
                    </tr>
    
                  </table>
        </div>
  </div>
</template>
<style src="./Total.css" scoped>

</style>
<script>

export default {
   name:"Total"
}
</script>

 <template>
    <div class="buding_in">
         <div class="buding_in_contain">
             <!-- 这个标题要绑定数据,动态生成 -->
             <div class="buding_in_title" ><h1 style="font-size: .390625rem;">北主楼十一楼</h1></div>
             <div class="img_bg"></div>
             <!-- 框架 -->
             <img class="buding_frame" style="width: 100%;display: block;" src="../../../assets/classroom/楼层框架.png" alt="" srcset="">
             <!-- 各个课室详细内容 -->
                  <!-- 第x层第1间 -->
              <div class="buding_in_x01">
                  <div style="width: 100%;clear: both;"  class="icon_AHU_PHU_1">
                       <div class="x01_AHU2" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                        <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                         <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">{{data601.ahuhfwdpjz}}</h2>
                         <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">AHU2</h2>
                         <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">

                       </div>
                       <div class="x01_PHU2" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                        <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                         <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">{{data601.pau2Xfl}}</h2>
                         <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">PAU2</h2>
                         <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">

                       </div>
                       <div class="x01_PHU1" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                        <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                        <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">{{data601.pau1Xfl}}</h2>
                        <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">PAU1</h2>
                        <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                       </div>

                       <div class="x01_AHU1" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                        <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                        <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">{{data601.ahusdwdpjz}}</h2>
                        <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">AHU1</h2>
                        <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                       </div>
                     
                  </div>
<!-- 数据展示，温度，湿度，co2，状态：自动手动 -->
                     <div class="show_data_x01" >
                         <!-- 第一行数据 -->
                        <div class="line1" style="clear: both;">
                            <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内温度: {{data601.snwdcgq}}&#8451;</h3>
                            <h3 style="float: right;font-size: .234375rem;transform: scale(0.7);">手/自动   {{data601.xtszdztfk}}</h3>
                        </div>
                        <!-- 第二行 -->
                        <div class="line2" style="clear: both;">
                            <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内湿度:{{data601.snsdcgq}} %</h3>
                        </div>
                             <!-- 第三行 -->
                             <div class="line2" style="clear: both;">
                                <h3 style="float: left;font-size: .234375rem;margin-left: .46875rem;transform: scale(0.7);">co2:{{data601.co2Cgq}} ppm</h3>
                            </div>
                     </div>
                       <!-- 风扇 -->
                         <div class="fand_x01" style="width: 100%;">
                            <div class="fand_x01_123" style="width: 100%;clear: both;">
                              <img style="width: 20%;float: left;margin-left: 10%;margin-top:10%;" :src="imgFan601" alt="" srcset="">
                              <img style="width: 20%;float: left;margin-left: 10%;margin-top:10%;" :src="imgFan601" alt="" srcset="">
                              <img style="width: 20%;float: left;margin-left: 10%;margin-top:10%;"  :src="imgFan601" alt="" srcset="">
                           </div>
                           <div class="fand_x01_456" style="width: 100%;clear: both;">
                              <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%"  :src="imgFan601" alt="" srcset="">
                              <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%"  :src="imgFan601" alt="" srcset="">
                              <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%"  :src="imgFan601" alt="" srcset="">
                           </div>
                       </div>
              </div>
                <!-- 第x层第2间 -->
              <div class="buding_in_x02">
             
                <div style="width: 100%;clear: both;"  class="icon_AHU_PHU_1">
                     <div class="x01_AHU2" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                      <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                       <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;"> {{data602.ahuhfwdpjz}}</h2>
                       <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">AHU2</h2>
                       <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">

                     </div>
                     <div class="x01_PHU2" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                      <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                       <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;"> {{data602.pau2Xfl}}</h2>
                       <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">PAU2</h2>
                       <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">

                     </div>
                     <div class="x01_PHU1" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                      <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                      <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">  {{data602.pau1Xfl}}</h2>
                      <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">PAU1</h2>
                      <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                     </div>

                     <div class="x01_AHU1" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                      <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                      <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">  {{data602.ahusdwdpjz}}</h2>
                      <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">AHU1</h2>
                      <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                     </div>
                   
                </div>
                <!-- 数据展示，温度，湿度，co2，状态：自动手动 -->
                <div class="show_data_x02" >
                    <!-- 第一行数据 -->
                   <div class="line1" style="clear: both;">
                       <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内温度:   {{data602.snwdcgq}}&#8451;</h3>
                       <h3 style="float: right;font-size: .234375rem;transform: scale(0.7);">手/自动     {{data602.xtszdztfk}}</h3>
                   </div>
                   <!-- 第二行 -->
                   <div class="line2" style="clear: both;">
                       <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内湿度:  {{data602.snsdcgq}} %</h3>
                   </div>
                        <!-- 第三行 -->
                        <div class="line2" style="clear: both;">
                           <h3 style="float: left;font-size: .234375rem;margin-left: .46875rem;transform: scale(0.7);">co2: {{data602.co2Cgq}} ppm</h3>
                       </div>
                </div>
                <!-- 风扇 -->
                    <div class="fand_x02" style="width: 100%;">
                          <div class="fand_x01_123" style="width: 100%;clear: both;">
                            <img style="width: 20%;float: left;margin-left: 10%;margin-top: 10%;" :src="imgFan602" alt="" srcset="">
                            <img style="width: 20%;float: left;margin-left: 10%;margin-top: 10%;" :src="imgFan602" alt="" srcset="">
                            <img style="width: 20%;float: left;margin-left: 10%;margin-top: 10%;" :src="imgFan602" alt="" srcset="">
                         </div>
                         <div class="fand_x01_456" style="width: 100%;clear: both;">
                            <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%" :src="imgFan602" alt="" srcset="">
                            <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%" :src="imgFan602" alt="" srcset="">
                            <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%" :src="imgFan602" alt="" srcset="">
                        </div>
                    </div>
            </div>
<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------- -->
                                                     <!-- 第x层第3间 -->
                    <div class="buding_in_x03">
                       <div style="width: 100%;clear: both;"  class="icon_AHU_PHU_1">
                            <div class="x01_AHU2" style="width:30%;float: left;margin-left: 10%;margin-top: 4%;position: relative;">
                             <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                              <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;"> {{data603.pau2Xfl}}</h2>
                              <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">PAU</h2>
                              <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
       
                            </div>
                            <div class="x01_PHU2" style="width:30%;float: left;margin-left: 20%;margin-top: 4%;position: relative;">
                             <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                              <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">   {{data603.ahuhfwdpjz}}</h2>
                              <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">AHU</h2>
                              <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                         </div>
                        </div>

                                 <!-- 数据展示，温度，湿度，co2，状态：自动手动 -->
                         <div class="show_data_x03" >
                             <!-- 第一行数据 -->
                            <div class="line1" style="clear: both;">
                                <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内温度:  {{data603.snwdcgq}}&#8451;</h3>
                            </div>
                            <!-- 第二行 -->
                            <div class="line2" style="clear: both;">
                                <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">手/自动    {{data603.xtszdztfk}}</h3>
                            </div>
                            <!-- 第三行 -->
                            <div class="line3" style="clear: both;">
                                <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内湿度:      {{data603.snsdcgq}} %</h3>
                            </div>
                                 <!-- 第四行 -->
                                 <div class="line4" style="clear: both;">
                                    <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">co2:    {{data603.co2Cgq}} ppm</h3>
                                </div>
                         </div>
                                        <!-- 风扇 -->
                        <div class="fand_x03" style="width: 100%;">
                            <div class="fand_x01_12" style="width: 100%; clear: both;">
                              <img style="width: 30%;float: left;margin-left: 10%;margin-top: 5%;" :src="imgFan603"  alt="" srcset="">
                              <img style="width: 30%;float: left;margin-left: 10%;margin-top: 5%;" :src="imgFan603"  alt="" srcset="">
                           </div> 
                           <div class="fand_x01_45" style="width: 100%; clear: both;"> 
                              <img style="width: 30%;float: left;margin-left: 10%;margin-top:10%"  :src="imgFan603" alt="" srcset="">
                              <img style="width: 30%;float: left;margin-left: 10%;margin-top:10%"  :src="imgFan603" alt="" srcset="">
                          </div>
                      </div>
                    </div>
       <!--------------------------------------------------------------------------------------------------------------------------------------------------------  -->
                          <!-- 第x层第4间 -->
                          <div class="buding_in_x04">
             
                            <div style="width: 100%;clear: both;"  class="icon_AHU_PHU_1">
                                 <div class="x01_AHU2" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                                  <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                                   <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">      {{data604.ahuhfwdpjz}}</h2>
                                   <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">AHU2</h2>
                                   <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
            
                                 </div>
                                 <div class="x01_PHU2" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                                  <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                                   <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">  {{data604.pau2Xfl}}</h2>
                                   <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">PAU2</h2>
                                   <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
            
                                 </div>
                                 <div class="x01_PHU1" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                                  <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                                  <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">  {{data604.pau1Xfl}}</h2>
                                  <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">PAU1</h2>
                                  <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                                 </div>
            
                                 <div class="x01_AHU1" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                                  <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                                  <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">    {{data604.ahusdwdpjz}}</h2>
                                  <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">AHU1</h2>
                                  <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                                 </div>
                               
                            </div>

                                <!-- 数据展示，温度，湿度，co2，状态：自动手动 -->
                                <div class="show_data_x04" >
                                    <!-- 第一行数据 -->
                                   <div class="line1" style="clear: both;">
                                       <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内温度: {{data604.snwdcgq}}&#8451;</h3>
                                       <h3 style="float: right;font-size: .234375rem;transform: scale(0.7);">手/自动  {{data604.xtszdztfk}}</h3>
                                   </div>
                                   <!-- 第二行 -->
                                   <div class="line2" style="clear: both;">
                                       <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内湿度:{{data604.snsdcgq}} %</h3>
                                   </div>
                                        <!-- 第三行 -->
                                        <div class="line2" style="clear: both;">
                                           <h3 style="float: left;font-size: .234375rem;margin-left: .46875rem;transform: scale(0.7);">co2:{{data604.co2Cgq}} ppm</h3>
                                       </div>
                                </div>
                                 <!-- 风扇 -->
                                 <div class="fand_x04" style="width: 100%;">
                                     <div class="fand_x01_123" style="width: 100%; clear: both;">
                                       <img style="width: 20%;float: left;margin-left: 10%;margin-top: 10%;" :src="imgFan604" alt="" srcset="">
                                       <img style="width: 20%;float: left;margin-left: 10%;margin-top: 10%;" :src="imgFan604" alt="" srcset="">
                                       <img style="width: 20%;float: left;margin-left: 10%;margin-top: 10%;" :src="imgFan604" alt="" srcset="">
                                    </div>
                                    <div class="fand_x01_456" style="width: 100%;clear: both;">
                                       <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%"    :src="imgFan604" alt="" srcset="">
                                       <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%"    :src="imgFan604" alt="" srcset="">
                                       <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%"    :src="imgFan604" alt="" srcset="">
                                   </div>
                               </div>
                        </div>
<!-- ---------------------------------------------------------------------------------------------------------------------- -->
                                                <!-- 第x层第5间 -->
                                <div class="buding_in_x05" @click="pushlive">
             
                                    <div style="width: 100%;clear: both;"  class="icon_AHU_PHU_1">
                                         <div class="x01_AHU2" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                                          <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                                           <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;"> {{data605.ahuhfwdpjz}}</h2>
                                           <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;"> AHU2</h2>
                                           <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                    
                                         </div>
                                         <div class="x01_PHU2" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                                          <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                                           <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;"> {{data605.pau2Xfl}}</h2>
                                           <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">PAU2</h2>
                                           <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                    
                                         </div>
                                         <div class="x01_PHU1" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                                          <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                                          <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">  {{data605.pau1Xfl}}</h2>
                                          <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">PAU1</h2>
                                          <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                                         </div>
                    
                                         <div class="x01_AHU1" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                                          <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                                          <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">{{data605.ahusdwdpjz}}</h2>
                                          <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">AHU1</h2>
                                          <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                                         </div>
                                       
                                    </div>

                                                                   <!-- 数据展示，温度，湿度，co2，状态：自动手动 -->
                                       <div class="show_data_x04" >
                                           <!-- 第一行数据 -->
                                          <div class="line1" style="clear: both;">
                                              <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内温度:{{data605.snwdcgq}}&#8451;</h3>
                                              <h3 style="float: right;font-size: .234375rem;transform: scale(0.7);">手/自动  {{data605.xtszdztfk}}</h3>
                                          </div>
                                          <!-- 第二行 -->
                                          <div class="line2" style="clear: both;">
                                              <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内湿度: {{data605.snsdcgq}}&#8451;</h3>
                                          </div>
                                               <!-- 第三行 -->
                                               <div class="line2" style="clear: both;">
                                                  <h3 style="float: left;font-size: .234375rem;margin-left: .46875rem;transform: scale(0.7);">co2: {{data605.co2Cgq}} ppp</h3>
                                              </div>
                                       </div>
                                          <!-- 风扇 -->
                                      <div class="fand_x05" style="width: 100%;">
                                          <div class="fand_x01_123" style="width: 100%;clear: both;">
                                            <img style="width: 20%;float: left;margin-left: 10%;margin-top: 10%;" :src="imgFan605" alt="" srcset="">
                                            <img style="width: 20%;float: left;margin-left: 10%;margin-top: 10%;" :src="imgFan605" alt="" srcset="">
                                            <img style="width: 20%;float: left;margin-left: 10%;margin-top: 10%;" :src="imgFan605" alt="" srcset="">
                                         </div>
                                         <div class="fand_x01_456" style="width: 100%;clear: both;">
                                            <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%"    :src="imgFan605"  alt="" srcset="">
                                            <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%"    :src="imgFan605"  alt="" srcset="">
                                            <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%"    :src="imgFan605"  alt="" srcset="">
                                        </div>
                                      </div>
                                </div>
<!-- ------------------------走廊表示 x01,x02,x03,x04,x05，卫生间，走廊---要绑定数据---------------------------------------------------- -->
                        <div>
                            <h2 style="position: absolute;top: 5.078125rem;left:3.125rem ;font-size: .234375rem;transform: scale(0.9);">1101</h2>
                            <h2 style="position: absolute;top: 5.078125rem;left:6.5625rem ;font-size: .234375rem;transform: scale(0.9);">1102</h2>
                            <h2 style="position: absolute;top: 4.6875rem;left:9.375rem ;font-size: .234375rem;transform: scale(0.9);">1103</h2>
                            <h2 style="position: absolute;top: 5.078125rem;left:12.03125rem ;font-size: .234375rem;transform: scale(0.9);">1104</h2>
                            <h2 style="position: absolute;top: 5.078125rem;left:15.3125rem ;font-size: .234375rem;transform: scale(0.9);">1105</h2>

                           <h2 style="position: absolute;top:6.25rem ;left: 2.34375rem;font-size: .234375rem;transform: scale(0.9);">女卫</h2>
                            <h2 style="position: absolute;top: 6.25rem;left: 9.375rem;font-size: .234375rem;transform: scale(0.9);">活动空间</h2>
                            <h2 style="position: absolute;top: 6.25rem;left: 16.25rem;font-size: .234375rem;transform: scale(0.9);">男卫</h2>
                            <h2 style="position: absolute;top:5.9375rem ;left:16.71875rem ;font-size: .234375rem;transform: scale(0.5);">开水间</h2>
                            <h2 style="position: absolute;top:6.25rem ;left:17.109375rem ;font-size: .234375rem;transform: scale(0.5);">教师办公室</h2>
                        </div>
                          
                           
<!-- --------------------------------------------开关控制----------------------------------------------------------------- -->
                  <div class="mycontrol_on_off" >
                         <div class="control_left">
                            <p style="display: inline-block;font-size: .375rem;transform: scale(0.6);">群控开关</p>
                            <img style="width: 40%;" src="../../../assets/classroom/anniur.png" alt="" srcset="">
                         </div>
                         <div @click="returnhome" class="return_home">
                                <p class="fangkuai1">主界面</p>
                       </div>
                       <div class="control_templature">
                           <p style="font-size: .3125rem;transform: scale(0.8);">群控设温</p>
                           <h1 style="font-size: .234375rem;transform: scale(0.9);position: absolute;top: .390625rem;left:.625rem ;">18&#8451;</h1>
                           <img style="width: 70%;" src="../../../assets/classroom/5.jpg" alt="" srcset="">
                           <div style="width: 70%;background-color: #fff;overflow: hidden;margin: 0 auto;">
                              <img style="width: 30%;float: left;margin-left: 10%;display: inline-block;transform: rotate(180deg);" src="../../../assets/classroom/EMBOSSED_BOT_BLACK_32.png" alt="" srcset="">
                              <img style="width: 30%;float: right;margin-right: 10%;" src="../../../assets/classroom/EMBOSSED_BOT_BLACK_32.png" alt="" srcset="">
                         </div>
                       </div>
                       <div class="alarm_record">
                        <p class="fangkuai2">报警记录</p>
                       </div>
                  </div>
<!-- ---------------------------------------------------------------------------------------------------------------------------------------------- -->
       <!-- 底部 -->
             <div class="buding_bottom">
                <div class="buding_in_layer2"><h1 style="font-size: .3125rem;">二层</h1></div>
                <div class="buding_in_layer3"><h1 style="font-size: .3125rem;">三层</h1></div>
                <div class="buding_in_layer4"><h1 style="font-size: .3125rem;">四层</h1></div>
                <div class="buding_in_layer5"><h1 style="font-size: .3125rem;">五层</h1></div>
                <div class="buding_in_layer6"><h1 style="font-size: .3125rem;">六层</h1></div>
                <div class="buding_in_layer7"><h1 style="font-size: .3125rem;">七层</h1></div>
                <div class="buding_in_layer8"><h1 style="font-size: .3125rem;">八层</h1></div>
                <div class="buding_in_layer9"><h1 style="font-size: .3125rem;">九层</h1></div>
                <div class="buding_in_layer10"><h1 style="font-size: .3125rem;">十层</h1></div>
                <div class="buding_in_layer11"><h1 style="font-size: .3125rem;">十一层</h1></div>
             </div>
         </div>
    </div>
</template>
<style src="./Classroom.css" scoped>

</style>
<script>
import axios from 'axios'
export default {
  
     data () {
        return {
            data:null,
            imgFan601:require("../../../assets/classroom/Fan3.png"),
             imgFan602:require("../../../assets/classroom/Fan3.png"),
              imgFan603:require("../../../assets/classroom/Fan3.png"),
               imgFan604:require("../../../assets/classroom/Fan3.png"),
                imgFan605:require("../../../assets/classroom/Fan3.png"),
             
           data601:{
              co2Cgq:"399.0",//co2浓度 3601
                xtszdztfk: "自动",//系统手自动状态反馈 True
                ahuhfwdpjz: "53.5",//AHU回风温度平均值 53.5  3601
                ahusdwdpjz: "56.0",//AHU设定温度平均值 56.0   3601
                pau1Xfl: "3601",//PAU1新风量 0.0    3601
                pau2Xfl: "3601",//PAU2新风量 0.0   3601
                 ddfsyxztfk: "False",//吊顶风扇运行状态反馈 False 4601
                snsdcgq: "81.0",//室内湿度传感器 81.0  4601
              snwdcgq: "26.5",//室内温度传感器 26.5   4601
           },
                  data602:{
                co2Cgq:"399.0",//co2浓度 3601
                xtszdztfk: "自动",//系统手自动状态反馈 True
                ahuhfwdpjz: "53.5",//AHU回风温度平均值 53.5  3601
                ahusdwdpjz: "56.0",//AHU设定温度平均值 56.0   3601
                pau1Xfl: "3601",//PAU1新风量 0.0    3601
                pau2Xfl: "3601",//PAU2新风量 0.0   3601
                 ddfsyxztfk: "False",//吊顶风扇运行状态反馈 False 4601
                snsdcgq: "81.0",//室内湿度传感器 81.0  4601
              snwdcgq: "26.5",//室内温度传感器 26.5   4601
           },
                             data603:{
                co2Cgq:"399.0",//co2浓度 3601
                xtszdztfk: "自动",//系统手自动状态反馈 True
                ahuhfwdpjz: "53.5",//AHU回风温度平均值 53.5  3601
                ahusdwdpjz: "56.0",//AHU设定温度平均值 56.0   3601
                pau1Xfl: "3601",//PAU1新风量 0.0    3601
                pau2Xfl: "3601",//PAU2新风量 0.0   3601
                 ddfsyxztfk: "False",//吊顶风扇运行状态反馈 False 4601
                snsdcgq: "81.0",//室内湿度传感器 81.0  4601
              snwdcgq: "26.5",//室内温度传感器 26.5   4601
           },
                             data604:{
               co2Cgq:"399.0",//co2浓度 3601
                xtszdztfk: "自动",//系统手自动状态反馈 True
                ahuhfwdpjz: "53.5",//AHU回风温度平均值 53.5  3601
                ahusdwdpjz: "56.0",//AHU设定温度平均值 56.0   3601
                pau1Xfl: "3601",//PAU1新风量 0.0    3601
                pau2Xfl: "3601",//PAU2新风量 0.0   3601
                 ddfsyxztfk: "False",//吊顶风扇运行状态反馈 False 4601
                snsdcgq: "81.0",//室内湿度传感器 81.0  4601
              snwdcgq: "26.5",//室内温度传感器 26.5   4601
           },
                             data605:{
              co2Cgq:"399.0",//co2浓度 3601
                xtszdztfk: "自动",//系统手自动状态反馈 True
                ahuhfwdpjz: "53.5",//AHU回风温度平均值 53.5  3601
                ahusdwdpjz: "56.0",//AHU设定温度平均值 56.0   3601
                pau1Xfl: "3601",//PAU1新风量 0.0    3601
                pau2Xfl: "3601",//PAU2新风量 0.0   3601
                 ddfsyxztfk: "False",//吊顶风扇运行状态反馈 False 4601
                snsdcgq: "81.0",//室内湿度传感器 81.0  4601
              snwdcgq: "26.5",//室内温度传感器 26.5   4601
           }
        }
    },
    mounted () {
       
    },
    created(){
        console.log( this.getCurrentTime())
        // this.getCurrentTime()
        this.data = setInterval(this.getalldata,3000)
      
    },
  beforeDestroy(){
       clearInterval(this.data)
       this.data=null
       console.log("我被销毁了")
  },
    methods: {

       returnhome(){
           this.$router.push("/IotPlatfrom/Buding")
       },
         getCurrentTime () {
      let date = new Date()
      let Y = date.getFullYear()
      let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
      let D = date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate()
      let hours = date.getHours()
      let minutes = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()
      let seconds = date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds()
      date = Y + '-' + M + '-' + D + '-' + hours + '-' + minutes + '-' + seconds
      // console.log(date)  //2019/10/12 15:19:33
      return date
    },

       //2
             selectSheet2601(){
                 let url1=window.g.selectSheet2601
                      return axios.get(url1,
           {
               params:{
                   timestamp:this.getCurrentTime()
               }
           })
       },
       //3
             selectSheet2602(){
                 let url2=window.g.selectSheet2602
                      return axios.get(url2,
           {
               params:{
                   timestamp:this.getCurrentTime()
               }
           })
       },
       //4
             selectSheet2603(){
                  let url2=window.g.selectSheet2603
          return axios.get(url2,
           {
               params:{
                   timestamp:this.getCurrentTime()
               }
           })
       },
       //5
             selectSheet2604(){
                  let url2=window.g.selectSheet2604
          return axios.get( url2,
           {
               params:{
                   timestamp:this.getCurrentTime()
               }
           })
       },
       //6
             selectSheet2605(){
                  let url2=window.g.selectSheet2605
          return axios.get(url2,
           {
               params:{
                   timestamp:this.getCurrentTime()
               }
           })
       },
       //7
             selectSheet3601(){
                  let url2=window.g.selectSheet3601
          return axios.get(url2,
           {
               params:{
                   timestamp:this.getCurrentTime()
               }
           })
       },
       //8
             selectSheet3602(){
                  let url2=window.g.selectSheet3602
          return axios.get(url2,
           {
               params:{
                   timestamp:this.getCurrentTime()
               }
           })
       },
       //9
             selectSheet3603(){
                  let url2=window.g.selectSheet3603
          return axios.get(url2,
           {
               params:{
                   timestamp:this.getCurrentTime()
               }
           })
       },
       //10
             selectSheet3604(){
                  let url2=window.g.selectSheet3604
          return axios.get(url2,
           {
               params:{
                   timestamp:this.getCurrentTime()
               }
           })
       },
       //11
             selectSheet3605(){
                  let url2=window.g.selectSheet3605
          return axios.get(url2,
           {
               params:{
                   timestamp:this.getCurrentTime()
               }
           })
       },
       //12
             selectSheet4601(){
                  let url2=window.g.selectSheet4601
          return axios.get(url2,
           {
               params:{
                   timestamp:this.getCurrentTime()
               }
           })
       },
       //13
            selectSheet4602(){
                 let url2=window.g.selectSheet4602
          return axios.get( url2,
           {
               params:{
                   timestamp:this.getCurrentTime()
               }
           })
       },
       //14
            selectSheet4603(){
                 let url2=window.g.selectSheet4603
          return axios.get(url2,
           {
               params:{
                   timestamp:this.getCurrentTime()
               }
           })
       },
       //15
            selectSheet4604(){
                 let url2=window.g.selectSheet4604
          return axios.get(url2,
           {
               params:{
                   timestamp:this.getCurrentTime()
               }
           })
       },
       //16
            selectSheet4605(){
                 let url2=window.g.selectSheet4605
          return axios.get(url2,
           {
               params:{
                   timestamp:this.getCurrentTime()
               }
           })
       },
     getalldata(){
         let this_1=this
         let alldata=[ 
         this.selectSheet2601(), this.selectSheet2602(),this.selectSheet2603(),this.selectSheet2604(),this.selectSheet2605(),
         this.selectSheet3601(), this.selectSheet3602(),this.selectSheet3603(),this.selectSheet3604(),this.selectSheet3605(),
         this.selectSheet4601(), this.selectSheet4602(),this.selectSheet4603(),this.selectSheet4604(),this.selectSheet4605()]

         axios.all(alldata)
  .then(axios.spread(function (r2601,r2602,r2603,r2604,r2605,r3601,r3602,r3603,r3604,r3605,r4601,r4602,r4603,r4604,r4605) {
    // 两个请求现在都执行完成
    console.log("r1",r2601)
     console.log("r2",r2602)
      console.log("r3",r2603)
       console.log("r4",r2604)
        console.log("r5",r2605)
         console.log("r6",r3601)
          console.log("r7",r3602)
           console.log("r8",r3603)
            console.log("r9",r3604)
             console.log("r10",r3605)
              console.log("r11",r4601)
               console.log("r12",r4602)
                console.log("r13",r4603)
                 console.log("r14",r4604)
                  console.log("r15",r4605)

        //             data601:{
        //       co2Cgq:"399.0",//co2浓度 3601
        //         xtszdztfk: "True",//系统手自动状态反馈 True
        //         ahuhfwdpjz: "string",//AHU回风温度平均值 53.5  3601
        //         ahusdwdpjz: "string",//AHU设定温度平均值 56.0   3601
        //         pau1Xfl: "string",//PAU1新风量 0.0    3601
        //         pau2Xfl: "string",//PAU2新风量 0.0   3601
        //          ddfsyxztfk: "string",//吊顶风扇运行状态反馈 False 4601
        //         snsdcgq: "81.0",//室内湿度传感器 81.0  4601
        //       snwdcgq: "26.5",//室内温度传感器 26.5   4601
        //    }
        // }
              
              //601
              if(r3601.data.length>0)
              {
                              this_1.data601.co2Cgq=r3601.data[0].co2Cgq
            //   this_1.data601.xtszdztfk=r3601.data[0].xtszdztfk
               this_1.data601.ahuhfwdpjz=r3601.data[0].ahuhfwdpjz
                this_1.data601.ahusdwdpjz=r3601.data[0].ahusdwdpjz
                 this_1.data601.pau1Xfl=r3601.data[0].pau1Xfl
                  this_1.data601.pau2Xfl=r3601.data[0].co2Cgq
                  //4601
                  if(r3601.data[0].xtszdztfk==="True"){
                      this_1.data601.xtszdztfk="自动"
                  }else if(r3601.data[0].xtszdztfk===True){
                       this_1.data601.xtszdztfk="自动"
                  }else{
                       this_1.data601.xtszdztfk="手动"
                  }



                         if(r4601.data[0].ddfsyxztfk==="True"){
                     this_1.imgFan601= require("../../../assets/classroom/fan3.gif")
                  }else if(r4601.data[0].ddfsyxztfk===True){
                       this_1.imgFan601= require("../../../assets/classroom/fan3.gif")
                  }else{
                       this_1.imgFan601= require("../../../assets/classroom/Fan3.png")
                  }

                  
                     this_1.data601.snsdcgq=r4601.data[0].snsdcgq
                     this_1.data601.snwdcgq=r4601.data[0].snwdcgq
              }


  //602
  if(r3602.data.length>0){
                           this_1.data602.co2Cgq=r3602.data[0].co2Cgq
            //   this_1.data601.xtszdztfk=r3601.data[0].xtszdztfk
               this_1.data602.ahuhfwdpjz=r3602.data[0].ahuhfwdpjz
                this_1.data602.ahusdwdpjz=r3602.data[0].ahusdwdpjz
                 this_1.data602.pau1Xfl=r3602.data[0].pau1Xfl
                  this_1.data602.pau2Xfl=r3602.data[0].co2Cgq
                   //4601
                  if(r3602.data[0].xtszdztfk==="True"){
                      this_1.data602.xtszdztfk="自动"
                  }else if(r3602.data[0].xtszdztfk===True){
                       this_1.data602.xtszdztfk="自动"
                  }else{
                       this_1.data602.xtszdztfk="手动"
                  }



                         if(r4602.data[0].ddfsyxztfk==="True"){
                     this_1.imgFan602= require("../../../assets/classroom/fan3.gif")
                  }else if(r4602.data[0].ddfsyxztfk===True){
                       this_1.imgFan602= require("../../../assets/classroom/fan3.gif")
                  }else{
                       this_1.imgFan602= require("../../../assets/classroom/Fan3.png")
                  }

                  
                     this_1.data602.snsdcgq=r4602.data[0].snsdcgq
                     this_1.data602.snwdcgq=r4602.data[0].snwdcgq
  }

  //603
                if(r3603.data.length>0){

             
                           this_1.data603.co2Cgq=r3603.data[0].co2Cgq
            //   this_1.data601.xtszdztfk=r3601.data[0].xtszdztfk
               this_1.data603.ahuhfwdpjz=r3603.data[0].ahuhfwdpjz
                this_1.data603.ahusdwdpjz=r3603.data[0].ahusdwdpjz
                 this_1.data603.pau1Xfl=r3603.data[0].pau1Xfl
                  this_1.data603.pau2Xfl=r3603.data[0].co2Cgq
                  //4601
                  
                  if(r3603.data[0].xtszdztfk==="True"){
                      this_1.data603.xtszdztfk="自动"
                  }else if(r3603.data[0].xtszdztfk===True){
                       this_1.data603.xtszdztfk="自动"
                  }else{
                       this_1.data603.xtszdztfk="手动"
                  }



                         if(r4603.data[0].ddfsyxztfk==="True"){
                     this_1.imgFan603= require("../../../assets/classroom/fan3.gif")
                  }else if(r4603.data[0].ddfsyxztfk===True){
                       this_1.imgFan603= require("../../../assets/classroom/fan3.gif")
                  }else{
                       this_1.imgFan603= require("../../../assets/classroom/Fan3.png")
                  }

                  
                     this_1.data603.snsdcgq=r4603.data[0].snsdcgq
                     this_1.data603.snwdcgq=r4603.data[0].snwdcgq

               }
                     

                     if(r3604.data.length>0)
                     {

                       //604
                           this_1.data604.co2Cgq=r3604.data[0].co2Cgq
            //   this_1.data601.xtszdztfk=r3601.data[0].xtszdztfk
               this_1.data604.ahuhfwdpjz=r3604.data[0].ahuhfwdpjz
                this_1.data604.ahusdwdpjz=r3604.data[0].ahusdwdpjz
                 this_1.data604.pau1Xfl=r3604.data[0].pau1Xfl
                  this_1.data604.pau2Xfl=r3604.data[0].co2Cgq
                  //4601
                   //4601
                  if(r3604.data[0].xtszdztfk==="True"){
                      this_1.data604.xtszdztfk="自动"
                  }else if(r3604.data[0].xtszdztfk===True){
                       this_1.data604.xtszdztfk="自动"
                  }else{
                       this_1.data604.xtszdztfk="手动"
                  }



                         if(r4604.data[0].ddfsyxztfk==="True"){
                     this_1.imgFan604= require("../../../assets/classroom/fan3.gif")
                  }else if(r4604.data[0].ddfsyxztfk===True){
                       this_1.imgFan604= require("../../../assets/classroom/fan3.gif")
                  }else{
                       this_1.imgFan604= require("../../../assets/classroom/Fan3.png")
                  }

                  
                     this_1.data604.snsdcgq=r4604.data[0].snsdcgq
                     this_1.data604.snwdcgq=r4604.data[0].snwdcgq

   }

if(r3605.data.length>0){
         //605
                           this_1.data605.co2Cgq=r3605.data[0].co2Cgq
            //   this_1.data601.xtszdztfk=r3601.data[0].xtszdztfk
               this_1.data605.ahuhfwdpjz=r3605.data[0].ahuhfwdpjz
                this_1.data605.ahusdwdpjz=r3605.data[0].ahusdwdpjz
                 this_1.data605.pau1Xfl=r3605.data[0].pau1Xfl
                  this_1.data605.pau2Xfl=r3605.data[0].co2Cgq
                  //4601
             //4601
                  if(r3605.data[0].xtszdztfk==="True"){
                      this_1.data605.xtszdztfk="自动"
                  }else if(r3605.data[0].xtszdztfk===True){
                       this_1.data605.xtszdztfk="自动"
                  }else{
                       this_1.data605.xtszdztfk="手动"
                  }



                         if(r4605.data[0].ddfsyxztfk==="True"){
                     this_1.imgFan605= require("../../../assets/classroom/fan3.gif")
                  }else if(r4605.data[0].ddfsyxztfk===True){
                       this_1.imgFan605= require("../../../assets/classroom/fan3.gif")
                  }else{
                       this_1.imgFan605= require("../../../assets/classroom/Fan3.png")
                  }

                  
                     this_1.data605.snsdcgq=r4605.data[0].snsdcgq
                     this_1.data605.snwdcgq=r4605.data[0].snwdcgq
}
                        
  }));
     }
    }
    
}
</script>

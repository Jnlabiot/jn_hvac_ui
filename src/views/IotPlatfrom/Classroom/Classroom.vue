 <template>
    <div class="buding_in">
         <div class="buding_in_contain">
             <!-- 这个标题要绑定数据,动态生成 -->
             <div class="buding_in_title" ><h1 style="font-size: .390625rem;">北主楼二楼</h1></div>
             <div class="img_bg"></div>
             <!-- 框架 -->
             <img class="buding_frame" style="width: 100%;display: block;" src="../../../assets/classroom/楼层框架.png" alt="" srcset="">
             <!-- 各个课室详细内容 -->
                  <!-- 第x层第1间 -->
              <div class="buding_in_x01">
                  <div style="width: 100%;clear: both;"  class="icon_AHU_PHU_1">
                       <div class="x01_AHU2" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                        <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                         <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">{{classroom_20x.AHU2_201.toString().slice(0,4)}}</h2>
                         <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">AHU2</h2>
                         <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">

                       </div>
                       <div class="x01_PHU2" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                        <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                         <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">{{classroom_20x.PAU2_201.toString().slice(0,4)}}</h2>
                         <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">PAU2</h2>
                         <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">

                       </div>
                       <div class="x01_PHU1" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                        <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                        <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">{{classroom_20x.PAU1_201.toString().slice(0,4)}}</h2>
                        <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">PAU1</h2>
                        <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                       </div>

                       <div class="x01_AHU1" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                        <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                        <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">{{classroom_20x.AHU1_201.toString().slice(0,4)}}</h2>
                        <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">AHU1</h2>
                        <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                       </div>
                     
                  </div>
<!-- 数据展示，温度，湿度，co2，状态：自动手动 -->
                     <div class="show_data_x01" >
                         <!-- 第一行数据 -->
                        <div class="line1" style="clear: both;">
                            <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内温度: {{classroom_20x.temperature_201.toString().slice(0,4)}}&#8451;</h3>
                            <h3 style="float: right;font-size: .234375rem;transform: scale(0.7);">手/自动  自动</h3>
                        </div>
                        <!-- 第二行 -->
                        <div class="line2" style="clear: both;">
                            <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内湿度:{{classroom_20x.humidity_201.toString().slice(0,4)}} %</h3>
                        </div>
                             <!-- 第三行 -->
                             <div class="line2" style="clear: both;">
                                <h3 style="float: left;font-size: .234375rem;margin-left: .46875rem;transform: scale(0.7);">co2:{{classroom_20x.co2_201.toString().slice(0,4)}} ppm</h3>
                            </div>
                     </div>
                       <!-- 风扇 -->
                         <div class="fand_x01" style="width: 100%;">
                            <div class="fand_x01_123" style="width: 100%;clear: both;">
                              <img style="width: 20%;float: left;margin-left: 10%;margin-top:10%;" :src="imgFan201" alt="" srcset="">
                              <img style="width: 20%;float: left;margin-left: 10%;margin-top:10%;" :src="imgFan201" alt="" srcset="">
                              <img style="width: 20%;float: left;margin-left: 10%;margin-top:10%;"  :src="imgFan201" alt="" srcset="">
                           </div>
                           <div class="fand_x01_456" style="width: 100%;clear: both;">
                              <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%"  :src="imgFan201" alt="" srcset="">
                              <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%"  :src="imgFan201" alt="" srcset="">
                              <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%"  :src="imgFan201" alt="" srcset="">
                           </div>
                       </div>
              </div>
                <!-- 第x层第2间 -->
              <div class="buding_in_x02">
             
                <div style="width: 100%;clear: both;"  class="icon_AHU_PHU_1">
                     <div class="x01_AHU2" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                      <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                       <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;"> {{classroom_20x.AHU1_202.toString().slice(0,4)}}</h2>
                       <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">AHU2</h2>
                       <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">

                     </div>
                     <div class="x01_PHU2" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                      <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                       <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;"> {{classroom_20x.PAU2_202.toString().slice(0,4)}}</h2>
                       <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">PAU2</h2>
                       <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">

                     </div>
                     <div class="x01_PHU1" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                      <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                      <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">  {{classroom_20x.PAU1_202.toString().slice(0,4)}}</h2>
                      <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">PAU1</h2>
                      <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                     </div>

                     <div class="x01_AHU1" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                      <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                      <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">  {{classroom_20x.AHU1_202.toString().slice(0,4)}}</h2>
                      <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">AHU1</h2>
                      <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                     </div>
                   
                </div>
                <!-- 数据展示，温度，湿度，co2，状态：自动手动 -->
                <div class="show_data_x02" >
                    <!-- 第一行数据 -->
                   <div class="line1" style="clear: both;">
                       <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内温度:   {{classroom_20x.temperature_202.toString().slice(0,4)}}&#8451;</h3>
                       <h3 style="float: right;font-size: .234375rem;transform: scale(0.7);">手/自动   自动</h3>
                   </div>
                   <!-- 第二行 -->
                   <div class="line2" style="clear: both;">
                       <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内湿度:  {{classroom_20x.humidity_202.toString().slice(0,4)}} %</h3>
                   </div>
                        <!-- 第三行 -->
                        <div class="line2" style="clear: both;">
                           <h3 style="float: left;font-size: .234375rem;margin-left: .46875rem;transform: scale(0.7);">co2: {{classroom_20x.co2_202.toString().slice(0,4)}} ppm</h3>
                       </div>
                </div>
                <!-- 风扇 -->
                    <div class="fand_x02" style="width: 100%;">
                          <div class="fand_x01_123" style="width: 100%;clear: both;">
                            <img style="width: 20%;float: left;margin-left: 10%;margin-top: 10%;" :src="imgFan202" alt="" srcset="">
                            <img style="width: 20%;float: left;margin-left: 10%;margin-top: 10%;" :src="imgFan202" alt="" srcset="">
                            <img style="width: 20%;float: left;margin-left: 10%;margin-top: 10%;" :src="imgFan202" alt="" srcset="">
                         </div>
                         <div class="fand_x01_456" style="width: 100%;clear: both;">
                            <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%" :src="imgFan202" alt="" srcset="">
                            <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%" :src="imgFan202" alt="" srcset="">
                            <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%" :src="imgFan202" alt="" srcset="">
                        </div>
                    </div>
            </div>
<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------- -->
                                                     <!-- 第x层第3间 -->
                    <div class="buding_in_x03">
                       <div style="width: 100%;clear: both;"  class="icon_AHU_PHU_1">
                            <div class="x01_AHU2" style="width:30%;float: left;margin-left: 10%;margin-top: 4%;position: relative;">
                             <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                              <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;"> {{classroom_20x.PAU1_203.toString().slice(0,4)}}</h2>
                              <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">PAU</h2>
                              <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
       
                            </div>
                            <div class="x01_PHU2" style="width:30%;float: left;margin-left: 20%;margin-top: 4%;position: relative;">
                             <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                              <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">   {{classroom_20x.AHU1_203.toString().slice(0,4)}}</h2>
                              <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">AHU</h2>
                              <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                         </div>
                        </div>

                                 <!-- 数据展示，温度，湿度，co2，状态：自动手动 -->
                         <div class="show_data_x03" >
                             <!-- 第一行数据 -->
                            <div class="line1" style="clear: both;">
                                <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内温度:  {{classroom_20x.temperature_203.toString().slice(0,4)}}&#8451;</h3>
                            </div>
                            <!-- 第二行 -->
                            <div class="line2" style="clear: both;">
                                <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">手/自动   自动</h3>
                            </div>
                            <!-- 第三行 -->
                            <div class="line3" style="clear: both;">
                                <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内湿度:    {{classroom_20x.humidity_203.toString().slice(0,4)}} %</h3>
                            </div>
                                 <!-- 第四行 -->
                                 <div class="line4" style="clear: both;">
                                    <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">co2:    {{classroom_20x.co2_203.toString().slice(0,4)}} ppm</h3>
                                </div>
                         </div>
                                        <!-- 风扇 -->
                        <div class="fand_x03" style="width: 100%;">
                            <div class="fand_x01_12" style="width: 100%; clear: both;">
                              <img style="width: 30%;float: left;margin-left: 10%;margin-top: 5%;" :src="imgFan203"  alt="" srcset="">
                              <img style="width: 30%;float: left;margin-left: 10%;margin-top: 5%;" :src="imgFan203"  alt="" srcset="">
                           </div> 
                           <div class="fand_x01_45" style="width: 100%; clear: both;"> 
                              <img style="width: 30%;float: left;margin-left: 10%;margin-top:10%"  :src="imgFan203" alt="" srcset="">
                              <img style="width: 30%;float: left;margin-left: 10%;margin-top:10%"  :src="imgFan203" alt="" srcset="">
                          </div>
                      </div>
                    </div>
       <!--------------------------------------------------------------------------------------------------------------------------------------------------------  -->
                          <!-- 第x层第4间 -->
                          <div class="buding_in_x04">
             
                            <div style="width: 100%;clear: both;"  class="icon_AHU_PHU_1">
                                 <div class="x01_AHU2" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                                  <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                                   <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">      {{classroom_20x.AHU2_204.toString().slice(0,4)}}</h2>
                                   <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">AHU2</h2>
                                   <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
            
                                 </div>
                                 <div class="x01_PHU2" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                                  <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                                   <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">  {{classroom_20x.PAU2_204.toString().slice(0,4)}}</h2>
                                   <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">PAU2</h2>
                                   <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
            
                                 </div>
                                 <div class="x01_PHU1" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                                  <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                                  <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">  {{classroom_20x.PAU1_204.toString().slice(0,4)}}</h2>
                                  <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">PAU1</h2>
                                  <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                                 </div>
            
                                 <div class="x01_AHU1" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                                  <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                                  <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">    {{classroom_20x.AHU1_204.toString().slice(0,4)}}</h2>
                                  <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">AHU1</h2>
                                  <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                                 </div>
                               
                            </div>

                                <!-- 数据展示，温度，湿度，co2，状态：自动手动 -->
                                <div class="show_data_x04" >
                                    <!-- 第一行数据 -->
                                   <div class="line1" style="clear: both;">
                                       <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内温度: {{classroom_20x.temperature_204.toString().slice(0,4)}}&#8451;</h3>
                                       <h3 style="float: right;font-size: .234375rem;transform: scale(0.7);">手/自动  自动</h3>
                                   </div>
                                   <!-- 第二行 -->
                                   <div class="line2" style="clear: both;">
                                       <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内湿度:{{classroom_20x.humidity_204.toString().slice(0,4)}} %</h3>
                                   </div>
                                        <!-- 第三行 -->
                                        <div class="line2" style="clear: both;">
                                           <h3 style="float: left;font-size: .234375rem;margin-left: .46875rem;transform: scale(0.7);">co2:{{classroom_20x.co2_204}} ppm</h3>
                                       </div>
                                </div>
                                 <!-- 风扇 -->
                                 <div class="fand_x04" style="width: 100%;">
                                     <div class="fand_x01_123" style="width: 100%; clear: both;">
                                       <img style="width: 20%;float: left;margin-left: 10%;margin-top: 10%;" :src="imgFan204" alt="" srcset="">
                                       <img style="width: 20%;float: left;margin-left: 10%;margin-top: 10%;" :src="imgFan204" alt="" srcset="">
                                       <img style="width: 20%;float: left;margin-left: 10%;margin-top: 10%;" :src="imgFan204" alt="" srcset="">
                                    </div>
                                    <div class="fand_x01_456" style="width: 100%;clear: both;">
                                       <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%"    :src="imgFan204" alt="" srcset="">
                                       <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%"    :src="imgFan204" alt="" srcset="">
                                       <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%"    :src="imgFan204" alt="" srcset="">
                                   </div>
                               </div>
                        </div>
<!-- ---------------------------------------------------------------------------------------------------------------------- -->
                                                <!-- 第x层第5间 -->
                                <div class="buding_in_x05" @click="pushlive">
             
                                    <div style="width: 100%;clear: both;"  class="icon_AHU_PHU_1">
                                         <div class="x01_AHU2" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                                          <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                                           <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;"> {{classroom_20x.AHU2_205.toString().slice(0,4)}}</h2>
                                           <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;"> AHU2</h2>
                                           <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                    
                                         </div>
                                         <div class="x01_PHU2" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                                          <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                                           <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;"> {{classroom_20x.PAU2_205.toString().slice(0,4)}}</h2>
                                           <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">PAU2</h2>
                                           <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                    
                                         </div>
                                         <div class="x01_PHU1" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                                          <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                                          <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">  {{classroom_20x.PAU1_205.toString().slice(0,4)}}</h2>
                                          <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">PAU1</h2>
                                          <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                                         </div>
                    
                                         <div class="x01_AHU1" style="width:20%;float: left;margin-left: 4%;margin-top: 4%;position: relative;">
                                          <img style="width: 100%;"  src="../../../assets/classroom/AHU.png" alt="" srcset="">
                                          <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.7);top: .09375rem;left: .15625rem;">{{classroom_20x.AHU1_205.toString().slice(0,4)}}</h2>
                                          <h2 style="position: absolute;font-size: .1875rem;transform: scale(0.6);top: .3125rem;left: -0.046875rem;">AHU1</h2>
                                          <img width="30%" src="../../../assets/classroom/Fan(Green)-state1.png" style="position: absolute;top:.328125rem;left: .421875rem;" alt="" srcset="">
                                         </div>
                                       
                                    </div>

                                                                   <!-- 数据展示，温度，湿度，co2，状态：自动手动 -->
                                       <div class="show_data_x04" >
                                           <!-- 第一行数据 -->
                                          <div class="line1" style="clear: both;">
                                              <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内温度:{{classroom_20x.temperature_205.toString().slice(0,4)}}&#8451;</h3>
                                              <h3 style="float: right;font-size: .234375rem;transform: scale(0.7);">手/自动  自动</h3>
                                          </div>
                                          <!-- 第二行 -->
                                          <div class="line2" style="clear: both;">
                                              <h3 style="float: left;font-size: .234375rem;transform: scale(0.7);">室内湿度: {{classroom_20x.humidity_205.toString().slice(0,4)}} %</h3>
                                          </div>
                                               <!-- 第三行 -->
                                               <div class="line2" style="clear: both;">
                                                  <h3 style="float: left;font-size: .234375rem;margin-left: .46875rem;transform: scale(0.7);">co2: {{classroom_20x.co2_205.toString().slice(0,4)}} ppm</h3>
                                              </div>
                                       </div>
                                          <!-- 风扇 -->
                                      <div class="fand_x05" style="width: 100%;">
                                          <div class="fand_x01_123" style="width: 100%;clear: both;">
                                            <img style="width: 20%;float: left;margin-left: 10%;margin-top: 10%;" :src="imgFan205" alt="" srcset="">
                                            <img style="width: 20%;float: left;margin-left: 10%;margin-top: 10%;" :src="imgFan205" alt="" srcset="">
                                            <img style="width: 20%;float: left;margin-left: 10%;margin-top: 10%;" :src="imgFan205" alt="" srcset="">
                                         </div>
                                         <div class="fand_x01_456" style="width: 100%;clear: both;">
                                            <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%"    :src="imgFan205"  alt="" srcset="">
                                            <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%"    :src="imgFan205"  alt="" srcset="">
                                            <img style="width: 20%;float: left;margin-left: 10%;margin-top:5%"    :src="imgFan205"  alt="" srcset="">
                                        </div>
                                      </div>
                                </div>
<!-- ------------------------走廊表示 x01,x02,x03,x04,x05，卫生间，走廊---要绑定数据---------------------------------------------------- -->
                        <div>
                            <h2 style="position: absolute;top: 5.078125rem;left:3.125rem ;font-size: .234375rem;transform: scale(0.9);">201</h2>
                            <h2 style="position: absolute;top: 5.078125rem;left:6.5625rem ;font-size: .234375rem;transform: scale(0.9);">202</h2>
                            <h2 style="position: absolute;top: 4.6875rem;left:9.375rem ;font-size: .234375rem;transform: scale(0.9);">203</h2>
                            <h2 style="position: absolute;top: 5.078125rem;left:12.03125rem ;font-size: .234375rem;transform: scale(0.9);">204</h2>
                            <h2 style="position: absolute;top: 5.078125rem;left:15.3125rem ;font-size: .234375rem;transform: scale(0.9);">205</h2>

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
            imgFan201:require("../../../assets/classroom/Fan3.png"),
             imgFan202:require("../../../assets/classroom/Fan3.png"),
              imgFan203:require("../../../assets/classroom/Fan3.png"),
               imgFan204:require("../../../assets/classroom/Fan3.png"),
                imgFan205:require("../../../assets/classroom/Fan3.png"),
               classroom_20x:{
                AHU1_201: 25.50,
                AHU1_202: 24.50,
                AHU1_203: 29.00,
                AHU1_204: 29.00,
                AHU1_205: 28.50,
                AHU2_201: 25.50,
                AHU2_202: 29.00,
                AHU2_203: 25.50,
                AHU2_204: 28.50,
                AHU2_205: 20.00,
                PAU1_201: 15.00,
                PAU1_202: 30.40,
                PAU1_203: 30.50,
                PAU1_204: 29.30,
                PAU1_205: 28.00,
                PAU2_201: 16.00,
                PAU2_202: 29.40,
                PAU2_203: 29.00,
                PAU2_204: 29.60,
                PAU2_205: 28.00,
                co2_201: 445,
                co2_202: 424,
                co2_203: 459,
                co2_204: 436,
                co2_205: 420,
                fan_201: false,
                fan_202: false,
                fan_203: false,
                fan_204: false,
                fan_205: false,
                humidity_201: 63.8,
                humidity_202: 82.4,
                humidity_203: 81.7,
                humidity_204: 79.4,
                humidity_205: 84.0,
                temperature_201: 24.1,
                temperature_202: 25.9,
                temperature_203: 27.1,
                temperature_204: 28.5,
                temperature_205: 28.2,
             },
        }
    },
computed:{
   classroomlive_20x() {
    return this.$store.state.classroomlive_20x;　　//需要监听的数据
  }
},
watch: {

    deep:true,
  classroomlive_20x(newVal, oldVal) {
    //do something
    this.classroom_20x.AHU1_205=newVal.AHU1_205
     this.classroom_20x.AHU2_205=newVal.AHU2_205
       this.classroom_20x.PAU1_205=newVal.PAU1_205
         this.classroom_20x.PAU2_205=newVal.PAU2_205
          this.classroom_20x.co2_205=newVal.co2_205
           this.classroom_20x. humidity_205=newVal. humidity_205
            this.classroom_20x.temperature_205=newVal.temperature_205
      this.fan1()
      this.fan2()
      this.fan3()
      this.fan4(),
      this.fan5()
       console.log( this.getCurrentTime())
     console.log("云龙的数据20x",newVal)
    }
     
},
    mounted () {
       
    },
    created(){
        console.log( this.getCurrentTime())
       
      
    },
  beforeDestroy(){
    
       console.log("我被销毁了")
  },
    methods: {
      fan1(){
        if(this.classroom_20x.fan_201==true){
              this.imgFan201=require('../../../assets/classroom/fan3.gif')
        }else if(this.classroom_20x.fan_201==false){
           this.imgFan201=require('../../../assets/classroom/Fan3.png')
        }
      },
            fan2(){
        if(this.classroom_20x.fan_202==true){
              this.imgFan202=require('../../../assets/classroom/fan3.gif')
        }else if(this.classroom_20x.fan_202==false){
           this.imgFan202=require('../../../assets/classroom/Fan3.png')
        }
      },
            fan3(){
        if(this.classroom_20x.fan_203==true){
              this.imgFan203=require('../../../assets/classroom/fan3.gif')
        }else if(this.classroom_20x.fan_203==false){
           this.imgFan203=require('../../../assets/classroom/Fan3.png')
        }
      },
            fan4(){
        if(this.classroom_20x.fan_204==true){
              this.imgFan204=require('../../../assets/classroom/fan3.gif')
        }else if(this.classroom_20x.fan_204==false){
           this.imgFan204=require('../../../assets/classroom/Fan3.png')
        }
      },
            fan5(){
        if(this.classroom_20x.fan_205==true){
              this.imgFan205=require('../../../assets/classroom/fan3.gif')
        }else if(this.classroom_20x.fan_205==false){
           this.imgFan205=require('../../../assets/classroom/Fan3.png')
        }
      },
        pushlive(){
             this.$router.push("/IotPlatfrom/ClassroomLive")
        },
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

    
     }
    
}
</script>

<template>
<div style="margin-bottom:20px">
  <a-row>
      <a-col :span="6"  :offset="2">
        <a-input placeholder="输入设备ID" >
            <h4  slot="addonBefore" >设备ID</h4>
        </a-input>
      </a-col>
      <a-col :span="6" :offset="4">
        <a-input placeholder="输入设备名称" >
            <h4  slot="addonBefore" >名称</h4>
        </a-input>
      </a-col>
            <a-col :span="2" :offset="1">
        <a-button type="primary">
      搜索
    </a-button>
      </a-col>
        <a-col :span="2" >
        <a-button type="primary">
      重置
    </a-button>
      </a-col>
    </a-row>
        <a-divider />
</div>
 
</template>
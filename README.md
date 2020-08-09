# jttransform

## 项目启动
```
npm install
npm run serve
```

## Jt Template模板定义

### 顶层元素

| 元素 | 默认值 | 必填 | 枚举 | 描述 |
| ---- | :----: | :----: | ---- | ---- |    
| <属性名称> | - | 否 |  | 希望生成的新的Json中的顶层属性名称。<属性名称> 下属性见<属性名称> 节说明 |
| type | array | 是(顶层为数组时) | array | 节点类型，如果原始的Json是一个数组，顶层就没有属性，此时type不可缺，如果原始的Json是对象，不需要声明type。
| item | - | 是(顶层为数组时) |  | 当前节点的描述，如果原始的Json是一个数组，顶层就没有属性，此时item不可缺，如果原始的Json是对象，不需要声明item。 item下属性见item节说明。
| filter | - | 否 |  | 筛选条件描述，如果当前节点type为arry此时filter有效。 filter下属性见filter节说明。
| result | - | 是(顶层为数组时) |  | 当前节点的返回描述，如果原始的Json是一个数组，顶层就没有属性，此时result不可缺，如果原始的Json是对象，不需要声明result。 result下属性见result节说明。
| display | - | 否 |  | 如果需要利用JtTransform的显示组件显示转换后的数据，需要声明display。display下属性见display节说明。

### <属性名称>下元素

| 元素 | 默认值 | 必填 | 枚举 | 描述 |
| ---- | :----: | :----: | ---- | ---- |    
| mappingName | - | 是 | - | 当前属性对应原JSon中的属性名称 |
| type | - | 是 | array/object/string | 节点类型, string类型的item下没有item节点
| item | - | 是 |  | 当前节点的描述。 item下属性见item节说明。
| filter | - | 否 |  | 筛选条件描述，如果当前节点type为arry此时filter有效。 filter下属性见filter节说明。
| result | - | 否 |  | 当前节点的返回描述。 result下属性见result节说明。

### item下元素

| 元素 | 默认值 | 必填 | 枚举 | 描述 |
| ---- | :----: | :----: | ---- | ---- |    
| type | - | 是 | array/object/string | 节点类型, string类型的item下没有item节点
| item | - | 否 |  | 需要从当前item结点中返回特殊处理的值时(即当前item节点含有result时)，需要声明item， item元素结构说明见本节的说明。
| filter | - | 否 |  | 筛选条件描述，如果当前节点type为arry此时filter有效。 filter下属性见filter节说明。
| result | - | 否 |  | 当前节点的返回描述。 result下属性见result节说明。

### Result下元素

| 元素 | 默认值 | 必填 | 枚举 | 描述 |
| ---- | :----: | :----: | ---- | ---- |    
| type | - | 是 | array/object/string | 节点类型
| count | 9999999 | 否 |  | 提取的数据条数
| contactSubArrays | false | 否 |  | 如果返回结果是数组，且数组的元素还是数组，当contactSubArrays===true时，将所有二级数组拼接为一个数值后返回，结果仅为一个数组

### display下元素

| 元素 | 默认值 | 必填 | 枚举 | 描述 |
| ---- | :----: | :----: | ---- | ---- |    
| type | - | 是 | label/table/imageSlide | label:适用于string类型的返回值，table:适用于array类型的返回值，imageSlide:显示图片的幻灯效果。
| imageColumn | - | 否 |  | 当type==="imageSlide"时，指定图片路径的属性名
| showHeader | false | 否 |  | 当type==="table"时，是否显示列头。
| columns | - | 否 |  | 当type==="table"时，指定需要显示的列，详细说明见columns节。

### columns下元素

| 元素 | 默认值 | 必填 | 枚举 | 描述 |
| ---- | :----: | :----: | ---- | ---- |    
| column | - | 是 | - | 返回集中需要显示的列名。
| dataConvertion | - | 否 |  | 可对当前列中值做自动转换，如："en": "英文名", 当此列中的值为“en”时，将在页面上显示“英文名”。如当前值不存在于转换规则中，将直接显示当前值。
| style | - | 否 |  | 当前列的显示样式。

<style>
table th:first-of-type {
    width: 10%;
}
table th:nth-of-type(2) {
    width: 5%;
}
table th:nth-of-type(3) {
    width: 20%;
}
table th:nth-of-type(4) {
    width: 20%;
}
</style>
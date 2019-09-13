# ctrl cv a vant weapp

# 构建
## 文档构建
vantmd/loader

## 组件构建
gulp 编译 less

#TS
miniprogram-api-typings

# 迷你 Vue
Vue -> VantComponent -> Mina

# 犯错
```
  gulp
    .src(`${src}/**/*.less`)
    .pipe(less())
    .pipe(postcss())
```
这段代码没有任何捕获错误的处理，在 lees 编译过程中如果找不到关联的 import less 文件直接编译中止，没任何错误输出，花了一个小时排除这个问题

# Icon
@vant/icon 独立的包

# BEM
可引入实际项目中使用，这样就不用在标签中写三元表达式判断是否添加 class。还有可以在 template 中引入 wxs

```
utils.bem('cell', [size, { center, required, borderless: !border, clickable: isLink || clickable }])
```

数组内可以是 String、Number、Object，如果是 String、Number 直接当胶 element 拼接到 block，如果是 Object，只有当 value 为 true 时才将 key 拼接当作  element 拼接上了，
还可以是 Array，Array 则递归重复以上步骤 

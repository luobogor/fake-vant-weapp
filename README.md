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

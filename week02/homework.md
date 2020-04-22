# 写一个正则表达式 匹配所有 Number 直接量
### Number的定义为：

```
JavaScript的Number类型为双精度IEEE 754 64位浮点类型。 -- MDN
```

### 常见的形态为：
1.整数（正整数 负整数 0）
```
^0$|^(\+|\-)?[1-9]*$ (注意括弧里面的+、-符号转义)
```
2.小数
```
^(\+|\-)?(\d*)\.(\d+)?$
```
3.指数(前面基础上的数值都可以跟一个e, 但e后面的是一个整数)
<!--(^0$|^(\+|\-)?[1-9|(\d*)\.(\d+)?]+)[e][(\+\-)?|\d]\d* (想复杂了。。。。)-->
```
\d*\.*\d[e][(\+\-)?|\d]\d*
```
4.16进制
```
^0[xX](\d|[A-E])+$
```
5.8进制
```
^0[oO][0-7]+$
```
6.2进制
```
^0[bB][0-1]+$
```
整理为
```
(^0$|^(\+|\-)?[1-9]*$)|(^(\+|\-)?(\d*)\.(\d+)?$)|\d*\.*\d[e][(\+\-)?|\d]\d*|(^0[xX](\d|[A-E])+$)|(^0[oO][0-7]+$)|(^0[bB][0-1]+$)
```

# utf8 encoding function

```
function utf8Encoding(str){
    const char = encodeURIComponent(str);
    const bytesArr = [];
    for (let i of char) {
        const c = char.charAt(i);
        if (c === '%') {
            const hex = code.charAt(i + 1) + code.charAt(i + 2);
            const hexVal = parseInt(hex, 16);
            bytesArr.push(hexVal);
            i += 2;
        } else bytesArr.push(c.charCodeAt(0));
    }
    return bytesArr;
}
```

# 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号

```
/?:[^"]|\.)*"|'(?:[^']|\.)*|^[\u4E00-\u9FA5A-Za-z0-9]+$ /
```
<!-- /^['"\\bfnrtv/dxu]$|^u[0-9a-fA-F]{4}$|^u(10|0?[0-9a-fA-F])[0-9a-fA-F]{0,4}$/ -->
# 第三周学习

Reference
  delete 和 assign 有写的特性
  其余的只能引用不能改值

a
++
b
++
c

自增的是b和c   因为表达式之前不允许有LineTerminater.


在js中 void是一个运算符 就是把后面无论什么值都是undefined
所以生成undefined的最好的方式是 void 0;

IIFE 立即执行函数  可以比较下面的区别
```
for(var i =0; i<10; i++>){
  var bt = document.createElement("button");
  document.body.appendChild(bt);

  //注意viod
  void function(i){
    bt.onclick =function(){
    console.log(i)
    }
  }(i)

  //bt.onclick =function(){
  //  console.log(i)
  //}
}
```

typeof nuull  =>  object
typeof function(){}  =>  function

typeof "string"  =>  string
typeof new String("")  =>   object

!new String("") =>  false
!""  =>  true

boxing 和 unboxing

只有4种数据类型可以装箱

推荐不使用自动类型转换

Object("1");
和 new Object("1"); 是相同的都返回 String {"1"}

Symbol 不允许 new
new Symbol("1") 是不合法的
Symbol("1") 是合法的

unboxing时会优先使用 valueof的值
优先级更高的事 数据类型.toPrimitive是最优先的

parseFloat  to string
Nuber  to string
123 字面量 to string

## JS 标准里面有哪些对象是我们无法实现的，都有哪些特性

- Bound Function Exotic Objects
  - 有这些特性`[[Call]]` `[[Construct]]`
- Array Exotic Objects
  - 有这些特性`[[DefineOwnProperty]]` `ArrayCreate(length[,proto])` `ArraySpeciesCreate(originalArray,length)` `ArraySetLength(A,Desc)`
- String Exotic Objects
  - 有这些特性`[[GetOwnProperty]]` `[[DefineOwnProperty]]` `[[OwnPropertyKeys]]` `StringCreate(value,prototype)`
    `StringGetOwnProperty(S,P)`
- Arguments Exotic Objects
  - 有这些特性`[[GetOwnProperty]]` `[[DefineOwnProperty]]` `[[Get]]` `[[Set]]` `[[Delete]]` `CreateUnmappedArgumentsObject(argumentsList)` `CreateMappedArgumentsObject(func,formals,argumentsList,env)`
- Integer-Indexed Exotic Objects
  - 有这些特性`[[GetOwnProperty]]` `[[HasProperty]]` `[[DefineOwnProperty]]` `[[Get]]` `[[Set]]` `[[OwnPropertyKeys]]` `IntegerIndexedObjectCreate(prototype,internalSlotsList)` `IntegerIndexedElementGet(O,index)` `IntegerIndexedElementSet(O,index,value)`
- Module Namespace Exotic Objects
  - 有这些特性`[[SetPrototypeOf]]` `[[IsExtensible]]` `[[PreventExtensions]]` `[[GetOwnProperty]]` `[[DefineOwnProperty]]` `[[HasProperty]]` `[[Get]]` `[[Set]]` `[[Delete]]` `[[OwnPropertyKeys]]` `ModuleNamespaceCreate(module,exports)`
- Immutable Prototype Exotic Objects
  - 有这些特性`[[SetPrototypeOf]]` `SetImmutablePrototype`
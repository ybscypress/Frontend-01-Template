//状态机完成“abababx”的处理
function match(str){
  let state = start;
  for (let c of str) {
      state = state(c)
  }
  return state === end
}
function start(c){
  if(c == 'a'){
      return findA1
  }else{
      return start
  }
}
function end(c){
  return end
}

function findA1(c){
  if(c == 'b'){
      return findB1
  }else{
      return start(c)
  }
}
function findB1(c){
  if(c == 'a'){
      return findA2
  }else{
      return start(c)
  }
}
function findA2(c){
  if(c == 'b'){
      return findB2
  }else{
      return findB1(c)
  }
}
function findB2(c){
  if(c == 'a'){
      return findA3
  }else{
      return findA2(c)
  }
}
function findA3(c){
  if(c == 'b'){
      return findB3
  }else{
      return findB2(c)
  }
}
function findB3(c){
  if(c == 'x'){
      return end
  }else{
      return findA3(c)
  }
}
//console.log(match('abababx')) //true
//console.log(match('ababababx')) //true
//console.log(match('abacbababx')) //false
//console.log(match('abbbbababx')) //false
//console.log(match('abababxxxx')) //true
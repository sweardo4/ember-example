## 面试题
1
```js
var x; 
console.log(x); 
console.log(typeof y); 
console.log(z); 
```
2
```js
var y = 1;
if (function f(){}) {
    y += typeof f;
}
console.log(y);
```
3
```js
(function () {
  var a = b = 5;
})();
console.log(b);
```
4
```js
var x = 1;
var output = (function(){
    delete x;
    return x;
})();
console.log(output);
```
5
```js
var salary = "1000$";
(function () {
    console.log("Original salary was " + salary);

    var salary = "5000$";

    console.log("My New Salary " + salary);
})();
```
6
```js
function test() {
  console.log(a);
  console.log(foo());
  var a = 1;

  function foo() {
    return　2;
  }
}
test();
```
7
```js
var fullname = 'John Doe';
var obj = {
  fullname: 'Colin Ihrig',
  prop: {
    fullname: 'Aurelio De Rosa',
    getFullname: function () {
      returnthis.fullname;
    }
  }
};
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());
```
8
```js
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
```
let array=['one','two','three','four','five','six']

console.log(array);
array.shift();
console.log(array)

array.unshift('zero')
array.push('seven')
console.log(array)
array.pop()
console.log(array)

array.splice(4,1,'surprise')

console.log(array)

const days=['Mon','Tue','Wed','Thu','Fri','Sat']

for(i=0;i<days.length;i++){
    console.log(days[i])
}
for(i=days.length;i>=0;i--){
    console.log(days[i])
}
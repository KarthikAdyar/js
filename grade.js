let currentMarks
let totalMarks
let myGrade=function(currentMarks,totalMarks){
    let yourPercentage=(currentMarks/totalMarks)*100
    let yourGrade=''


if(yourPercentage>=90){
    console.log('A')
}else 
if(yourPercentage>=80){
    console.log('B')
}else 
if(yourPercentage>=70){
    console.log('c')
}
else
if(yourPercentage>=60){
    console.log('D')
}
else 
if(yourPercentage>=50){
    console.log('E')
}
return `your marks are ${currentMarks} and percentage is ${yourPercentage}`
}

let yourResult=myGrade(247,300);

console.log(yourResult)
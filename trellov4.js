const myTodos=['Go To Gym','Buy Bread','Learn Something']

const newTodos=[{
    title:'Go To Gym',
    isTrue:false,
},{
    title:'Buy Bread',
    isTrue:false,
},{
    title:'Learn Something',
    isTrue:true,
}]
const findTodo=function(myTodos,title){
    const titlrReturned=myTodos.find(function(todo,index){
        return todo.title.toLowerCase()===title.toLowerCase()
    })
    return titlrReturned
}

let printMe=findTodo(newTodos,'Go To Gym')
console.log(printMe)
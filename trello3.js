let myTodos={
    day:'Monday',
    meetings: 0,
    meetDone: 0,
   
    addMeetings: function(num) {
        this.meetings=this.meetings+num
    },
    addMeetDone: function(num1){
       this.meetDone=this.meetDone+num1
    },
   
    summary:function(){
       this.meeting=this.meetings-this.meetDone
       return `You have ${this.meeting} meetings left!!`
     
    }
}

myTodos.addMeetings(10)
myTodos.addMeetDone(2)
console.log(myTodos.summary())

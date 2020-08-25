let { BeforeAll,After,AfterAll, Before } = require('cucumber')


BeforeAll(function(){

    console.log("Inside BeforeAll Hook")

})

AfterAll(function(){

    console.log("Inside AfterAll Hook")

})

Before("@test",function(){

    console.log("Inside Before Hook")

})

After("@test", function(){

    console.log("Inside After Hook")
    
})
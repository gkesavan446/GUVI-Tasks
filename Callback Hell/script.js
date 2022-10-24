let div = document.createElement("div")
div.setAttribute("class", "container");
let span = document.getElementById("main")
span.innerHTML = 10

let num = 10;
setTimeout(()=>{
    num =num - 1   
    span.innerHTML = num
    setTimeout(()=>{
        num =num - 1
        span.innerHTML = num
        setTimeout(()=>{
            num =num - 1
            span.innerHTML = num
            setTimeout(()=>{
                num =num - 1
                span.innerHTML = num
                setTimeout(()=>{
                    num =num - 1
                    span.innerHTML = num
                    setTimeout(()=>{
                        num =num - 1
                        span.innerHTML = num
                        setTimeout(()=>{
                            num =num - 1
                            span.innerHTML = num
                            setTimeout(()=>{
                                num =num - 1
                                span.innerHTML = num
                                setTimeout(()=>{
                                    num =num - 1
                                    span.innerHTML = num
                                    setTimeout(()=>{
                                        num =num - 1
                                        span.innerHTML = "Happy Independence Day"                                     
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
document.body.append(div);
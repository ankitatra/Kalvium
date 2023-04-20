let selected
let move=function(box){
    const elements=document.querySelectorAll(".box")
    elements.forEach(box=>{
        box.addEventListener("mousedown",()=>{
            box.style.position="absolute"
            selected=box

            document.onmousemove=(e)=>{
                var x=e.pageX
                var y=e.pageY
                selected.style.left=x-50+"px"
                selected.style.top=y-50+"px"

                console.log(selected)
            }
        })
    })
    document.onmouseup=function(e){
        selected=null
    }
}
$(document).on "click",".tilebottom", ->
    index=$(this).attr('id')
    cart_id=globaldata.new.products[index].id
    cart_title=globaldata.new.products[index].title
    cart_mrp=globaldata.new.products[index].mrp
    #cart_quantity=globaldata.new.products[index].quantity
    arr=[]
    localcartdata={}
    
    if localStorage.getItem("localcart")?
      arr=JSON.parse localStorage.getItem("localcart")
      i = 0
      indexflag = -1
      while i < arr.length
        if arr[i].id == cart_id
          indexflag = i
        i++
      if indexflag != -1
        arr[indexflag].quantity = parseInt(arr[indexflag].quantity)+1
      else
        arr.push {id:cart_id,title:cart_title,mrp:cart_mrp,quantity:1} 
        
    else
      console.log "hello"
      arr.push {id:cart_id,title:cart_title,mrp:cart_mrp,quantity:1}     
    $('#itemcount').val(arr.length)
    localStorage.setItem("localcart",JSON.stringify(arr))
false


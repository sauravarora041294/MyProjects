Handlebars.registerHelper 'itemtotal', (mrp, quantity) ->
  mrp=parseInt(mrp)
  quantity=parseInt(quantity)
  return mrp*quantity


Handlebars.registerHelper 'total', (data,options) ->
  total = 0
  i=0
  if(data != null)
    while i<data.length
      total=total+data[i].quantity* data[i].mrp
      i++
  return total


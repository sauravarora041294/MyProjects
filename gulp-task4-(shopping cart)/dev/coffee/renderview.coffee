Handlebars.registerPartial 'button', MyApp.templates.button
Handlebars.registerPartial 'count', MyApp.templates.count

window.globaldata={}
viewheader = ->
  template=MyApp.templates.header
  $("#headerdiv").html template
  false

viewheader()

$.ajax
  dataType:'json'
  url:'http://127.0.0.1:8080/data.json'
  success: (data) ->
    #console.log "data"
    window.globaldata= {new:data}
    #console.log globaldata.new
    template=MyApp.templates.tiles
    $('#productdiv').html template(data)
    return 

viewcart = ->
  ca_data=JSON.parse localStorage.getItem("localcart")
  template=MyApp.templates.carttable
  #console.log {cart_data:ca_data}
  $('#tablediv').html template({cart_data:ca_data})
  $('#itemcount').val(ca_data.length)
  false

viewcart()

viewfooter = ->
  template=MyApp.templates.footer
  $('#footerdiv').html template
  false

viewfooter()
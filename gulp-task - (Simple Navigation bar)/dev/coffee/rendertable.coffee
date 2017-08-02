$.ajax
  dataType:'json'
  url:'http://127.0.0.1:8080/tabledata.json'
  success: (data) ->
    console.log(data)
    template=MyApp.templates.tabletemplate
    $('.tablediv').html template(data)
    return
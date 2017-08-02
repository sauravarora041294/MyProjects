$.ajax
  dataType: 'json'
  url: 'http://127.0.0.1:8080/data.json'
  success: (data) ->
    console.log data
    template = MyApp.templates.mylist
    $('#nav').html template(data)
    return
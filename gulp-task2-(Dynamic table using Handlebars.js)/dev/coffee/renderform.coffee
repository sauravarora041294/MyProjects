appendForm = ->
  template = MyApp.templates.zform
  $(".formdiv").html template
  false

sub = ->
  fname= $('#name').val()
  faddress= $('#add').val()
  fpin= $('#pin').val()
  fage= $('#age').val()
  console.log(fname)

appendForm()
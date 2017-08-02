vieweditform = ->
  template=MyApp.templates.editform
  $(".editdiv").html template
  false

vieweditform()

$(".editsubb").on "click", ->
  tabledata={};
  newtaskval=$('#edittask').val()
  newhrsval=$('#edithrs').val()
  indexval=$('#hiddenindex').val()
  edata=JSON.parse localStorage.getItem("mytaskdata")
  edata[indexval].task=newtaskval
  edata[indexval].hours=newhrsval
  window.localStorage.setItem("mytaskdata",JSON.stringify(edata))
  alert("EDIT SUCCESSFUL")
  $(".tablediv tbody").empty()
  tabledata={mytable:edata}
  template=MyApp.templates.table
  $('.tablediv').html template(tabledata)
  $("#myform").hide()
  $("#addform").attr("disabled", false);
  false

  
$(".canceledit").on "click", ->
  $("#myform").hide()
  $("#addform").attr("disabled", false);
  false
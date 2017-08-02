$(document).on "click", "#addform", ->
  template=MyApp.templates.form
  $(".adddiv").html template
  $('#addform').hide()
  $(".edit").attr("disabled", true);
  false

$(document).on "click","#sub", =>
  tsk=$('#task').val()
  hrs=$('#hrs').val()
  tabledata={};
  arr=[]
  if window.localStorage.getItem("mytaskdata")?
    arr= JSON.parse window.localStorage.getItem("mytaskdata")
  arr.push {task:tsk,hours:hrs}
  window.localStorage.setItem "mytaskdata",JSON.stringify(arr)
  tabledata={mytable:arr}
  template=MyApp.templates.table
  console.log tabledata
  $('.tablediv').html template(tabledata)
  $("#myform2").hide()
  $('#addform').show()
  $(".edit").attr("disabled", false);
  false

$(document).on "click","#can", ->
  $("#myform2").hide()
  $('#addform').show()
  $(".edit").attr("disabled", false);
  false


$(document).on "click", ".edit", ->
  $('#myform').show()
  template=MyApp.templates.editform
  $('editdiv').html template
  index=$(this).attr('id')
  ldata=JSON.parse window.localStorage.getItem("mytaskdata")
  newtsk=ldata[index].task
  newhrs=ldata[index].hours
  $("#edittask").val(newtsk)
  $("#edithrs").val(newhrs)
  $("#hiddenindex").val(index)
  $("#addform").attr("disabled", true);
  false

$(document).on "click", ".del", =>
  tabledata={};
  template=MyApp.templates.table
  $(this).parents('tr').remove()
  index=$(this).attr('id')
  myjsondata=JSON.parse window.localStorage.getItem("mytaskdata")
  myjsondata.splice(index,1)
  window.localStorage.setItem("mytaskdata",JSON.stringify(myjsondata))
  if window.localStorage.getItem("mytaskdata")?
    jsondata=JSON.parse window.localStorage.getItem("mytaskdata")
    tabledata={mytable:jsondata}
  $('.tablediv').html template(tabledata)
  false

tabledata={};
template=MyApp.templates.table
if window.localStorage.getItem("mytaskdata")?
   jsondata=JSON.parse (window.localStorage.getItem("mytaskdata"))
   tabledata={mytable:jsondata}

$('.tablediv').html template(tabledata)


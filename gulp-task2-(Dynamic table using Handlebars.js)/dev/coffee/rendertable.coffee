tabData = {};
template=MyApp.templates.tabletemplate
if window.localStorage.getItem("rdata")?
  jsondata = JSON.parse(window.localStorage.getItem("rdata"))
  tabData = {tableData:jsondata}

console.log tabData
$('.tablediv').html template(tabData)

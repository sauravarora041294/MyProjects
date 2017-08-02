$(document).on "click", "#btnAddDetail", =>
  fname=$('#name').val()
  fadd=$('#add').val()
  fpin=$('#pin').val()
  fage=$('#age').val()

  arr = []
  if window.localStorage.getItem("rdata")?
  	arr = JSON.parse window.localStorage.getItem("rdata") 
  
  arr.push {name:fname,Add:fadd,pin:fpin,age:fage}
  window.localStorage.setItem "rdata", JSON.stringify(arr)
  window.location.href = "http://127.0.0.1:8080/prod/";
  false

!function t(e,a,r){function n(o,i){if(!a[o]){if(!e[o]){var l="function"==typeof require&&require;if(!i&&l)return l(o,!0);if(d)return d(o,!0);var m=new Error("Cannot find module '"+o+"'");throw m.code="MODULE_NOT_FOUND",m}var s=a[o]={exports:{}};e[o][0].call(s.exports,function(t){var a=e[o][1][t];return n(a||t)},s,s.exports,t,e,a,r)}return a[o].exports}for(var d="function"==typeof require&&require,o=0;o<r.length;o++)n(r[o]);return n}({1:[function(t,e,a){t("renderheading"),t("rendertable"),t("renderlink"),t("rendereditform"),t("renderform")},{rendereditform:2,renderform:3,renderheading:4,renderlink:5,rendertable:6}],2:[function(t,e,a){(function(){var t;t=MyApp.templates.editform,$(".editdiv").html(t)})(),$(".editsubb").on("click",function(){var t,e,a,r,n,d;return n={},r=$("#edittask").val(),a=$("#edithrs").val(),e=$("#hiddenindex").val(),t=JSON.parse(localStorage.getItem("mytaskdata")),t[e].task=r,t[e].hours=a,window.localStorage.setItem("mytaskdata",JSON.stringify(t)),alert("EDIT SUCCESSFUL"),$(".tablediv tbody").empty(),n={mytable:t},d=MyApp.templates.table,$(".tablediv").html(d(n)),$("#myform").hide(),$("#addform").attr("disabled",!1),!1}),$(".canceledit").on("click",function(){return $("#myform").hide(),$("#addform").attr("disabled",!1),!1})},{}],3:[function(t,e,a){$(document).on("click","#addform",function(){var t;return t=MyApp.templates.form,$(".adddiv").html(t),$("#addform").hide(),$(".edit").attr("disabled",!0),!1}),$(document).on("click","#sub",function(){var t,e,a,r,n;return n=$("#task").val(),e=$("#hrs").val(),a={},t=[],null!=window.localStorage.getItem("mytaskdata")&&(t=JSON.parse(window.localStorage.getItem("mytaskdata"))),t.push({task:n,hours:e}),window.localStorage.setItem("mytaskdata",JSON.stringify(t)),a={mytable:t},r=MyApp.templates.table,console.log(a),$(".tablediv").html(r(a)),$("#myform2").hide(),$("#addform").show(),$(".edit").attr("disabled",!1),!1}),$(document).on("click","#can",function(){return $("#myform2").hide(),$("#addform").show(),$(".edit").attr("disabled",!1),!1}),$(document).on("click",".edit",function(){var t,e,a,r,n;return $("#myform").show(),n=MyApp.templates.editform,$("editdiv").html(n),t=$(this).attr("id"),e=JSON.parse(window.localStorage.getItem("mytaskdata")),r=e[t].task,a=e[t].hours,$("#edittask").val(r),$("#edithrs").val(a),$("#hiddenindex").val(t),$("#addform").attr("disabled",!0),!1}),$(document).on("click",".del",function(t){return function(){var e,a,r,n;return r={},n=MyApp.templates.table,$(t).parents("tr").remove(),e=$(t).attr("id"),(a=JSON.parse(window.localStorage.getItem("mytaskdata"))).splice(e,1),window.localStorage.setItem("mytaskdata",JSON.stringify(a)),null!=window.localStorage.getItem("mytaskdata")&&(r={mytable:JSON.parse(window.localStorage.getItem("mytaskdata"))}),$(".tablediv").html(n(r)),!1}}(this))},{}],4:[function(t,e,a){(function(){var t;t=MyApp.templates.heading,$(".headingdiv").html(t)})()},{}],5:[function(t,e,a){(function(){var t;t=MyApp.templates.link,$(".linkdiv").html(t)})()},{}],6:[function(t,e,a){var r,n;r={},n=MyApp.templates.table,null!=window.localStorage.getItem("mytaskdata")&&(r={mytable:JSON.parse(window.localStorage.getItem("mytaskdata"))}),$(".tablediv").html(n(r))},{}]},{},[1]);
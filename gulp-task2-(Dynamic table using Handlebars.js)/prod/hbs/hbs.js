this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["head"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1 class=\"heading\"> My Handlebar practice </h1>";
},"useData":true});
this["MyApp"]["templates"]["tabletemplate"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	   <tr>\r\n	   		<td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n	   		<td>"
    + alias4(((helper = (helper = helpers.Add || (depth0 != null ? depth0.Add : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Add","hash":{},"data":data}) : helper)))
    + "</td>\r\n	   		<td>"
    + alias4(((helper = (helper = helpers.pin || (depth0 != null ? depth0.pin : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pin","hash":{},"data":data}) : helper)))
    + "</td>\r\n	   		<td>"
    + alias4(((helper = (helper = helpers.age || (depth0 != null ? depth0.age : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"age","hash":{},"data":data}) : helper)))
    + "</td>\r\n	   </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table border=\"2px\">\r\n<thead>\r\n	   <td>name</td><td>Address</td><td>pincode</td><td>Age</td></thead>\r\n	   <tbody class=\"tablebody\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tableData : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</tbody>\r\n</table>";
},"useData":true});
this["MyApp"]["templates"]["zbutton"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"form.html\">Add more</a>";
},"useData":true});
this["MyApp"]["templates"]["zform"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form>\r\n<fieldset>\r\n<legend> Add Details </legend>\r\n<table>\r\n<tr><td>Name </td>    <td><input id=\"name\" type=\"text\"></td></tr>\r\n<tr><td>Address</td>  <td><input id=\"add\" type=\"text\"></td></tr>\r\n<tr><td>Pin code</td> <td><input id=\"pin\" type=\"text\"></td></tr>\r\n<tr><td>Age</td>      <td><input id=\"age\" type=\"text\"></td></tr>\r\n<tr><td><input type=\"button\" id=\"btnAddDetail\" value=\"submit\" ></td></tr>\r\n<tr><td><input type=\"button\" id=\"btnAddData\" value=\"Add Data\" ></td></tr>\r\n</table>\r\n</fieldset>\r\n</form>";
},"useData":true});
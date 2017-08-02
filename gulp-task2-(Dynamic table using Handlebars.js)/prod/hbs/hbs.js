this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["head"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1 class=\"heading\"> My Handlebar practice </h1>";
},"useData":true});
this["MyApp"]["templates"]["tabletemplate"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	   <tr>\n	   		<td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n	   		<td>"
    + alias4(((helper = (helper = helpers.Add || (depth0 != null ? depth0.Add : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Add","hash":{},"data":data}) : helper)))
    + "</td>\n	   		<td>"
    + alias4(((helper = (helper = helpers.pin || (depth0 != null ? depth0.pin : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pin","hash":{},"data":data}) : helper)))
    + "</td>\n	   		<td>"
    + alias4(((helper = (helper = helpers.age || (depth0 != null ? depth0.age : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"age","hash":{},"data":data}) : helper)))
    + "</td>\n	   </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table border=\"2px\">\n<thead>\n	   <td>name</td><td>Address</td><td>pincode</td><td>Age</td></thead>\n	   <tbody class=\"tablebody\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tableData : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</tbody>\n</table>";
},"useData":true});
this["MyApp"]["templates"]["zbutton"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"form.html\">Add more</a>";
},"useData":true});
this["MyApp"]["templates"]["zform"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form>\n<fieldset>\n<legend> Add Details </legend>\n<table>\n<tr><td>Name </td>    <td><input id=\"name\" type=\"text\"></td></tr>\n<tr><td>Address</td>  <td><input id=\"add\" type=\"text\"></td></tr>\n<tr><td>Pin code</td> <td><input id=\"pin\" type=\"text\"></td></tr>\n<tr><td>Age</td>      <td><input id=\"age\" type=\"text\"></td></tr>\n<tr><td><input type=\"button\" id=\"btnAddDetail\" value=\"submit\" ></td></tr>\n<tr><td><input type=\"button\" id=\"btnAddData\" value=\"Add Data\" ></td></tr>\n</table>\n</fieldset>\n</form>";
},"useData":true});
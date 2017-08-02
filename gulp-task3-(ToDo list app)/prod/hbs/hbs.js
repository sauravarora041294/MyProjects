this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["heading"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1 id=\"taskhead\">To-Do List</h1>";
},"useData":true});
this["MyApp"]["templates"]["table"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr>\n	<td>"
    + alias4(((helper = (helper = helpers.task || (depth0 != null ? depth0.task : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"task","hash":{},"data":data}) : helper)))
    + "</td>\n	<td>"
    + alias4(((helper = (helper = helpers.hours || (depth0 != null ? depth0.hours : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hours","hash":{},"data":data}) : helper)))
    + "</td>\n	<td><button id=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"del\"><img src=\"../delete.png\" height=\"20\" width=\"20\"></button></td>\n	<td><button id=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"edit\"><img src=\"../edit.png\" height=\"20\" width=\"20\"></button></td>\n</tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table>\n<thead>\n<th>Task</th><th>hours</th><th></th><th></th>\n</thead>\n<tbody class=\"udata\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.mytable : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tbody>\n</table>";
},"useData":true});
this["MyApp"]["templates"]["link"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<button type=\"submit\" id=\"addform\"><img src=\"../add.png\" id=\"addbut\"></button>";
},"useData":true});
this["MyApp"]["templates"]["editform"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form id=\"myform\" style=\"display:none;\">\n<table>\n<tr><td>task</td>\n<td><input type=\"text\" id=\"edittask\"></td></tr>\n<tr><td>hours</td><td><input type=\"text\" id=\"edithrs\"></td></tr>\n<tr><td></td><td><button id=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"editsubb\">submit </button></td>\n<td><button class=\"canceledit\">cancel</button></td></tr>\n<input type=\"hidden\" id=\"hiddenindex\" value=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"></table>\n</form>	";
},"useData":true});
this["MyApp"]["templates"]["form"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form id=\"myform2\">\n<h1> Add new Task </h1>\n<table>\n<tr>\n	<td>Task</td>\n	<td><input type=\"text\" id=\"task\"></td>\n</tr>\n<tr>\n	<td>Hours</td>\n	<td><input type=\"text\" id=\"hrs\"></td>\n</tr>\n<tr>\n	<td></td>\n	<td><input type=\"button\" value=\"Submit\" id=\"sub\"></td>\n	<td><input type=\"button\" value=\"cancel\" id=\"can\"></td>\n</table>\n</form>";
},"useData":true});
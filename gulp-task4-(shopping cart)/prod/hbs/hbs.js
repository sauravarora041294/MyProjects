this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"topnav\">\r\n<a href=\"index.html\">Home</a>\r\n<a href=\"#\">Product</a>\r\n<a href=\"#\">Stores</a>\r\n<a href=\"#\">Offers</a>\r\n<a href=\"#\">Contact</a>\r\n<a href=\"cart.html\">Cart"
    + ((stack1 = container.invokePartial(partials.count,depth0,{"name":"count","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</a>\r\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["tiles"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"tileview\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + ((stack1 = container.invokePartial(partials.button,depth0,{"name":"button","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"tile\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.products : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["footer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer>\r\n	<a href=\"#\">country</a>\r\n    <a href=\"#\">Store locator</a>\r\n    <a href=\"#\">Products</a>\r\n    <a href=\"#\">Special offers</a>\r\n</footer>";
},"useData":true});
this["MyApp"]["templates"]["button"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<button id='"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "' class=\"tilebottom\">Add to Cart</button>";
},"useData":true});
this["MyApp"]["templates"]["carttable"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr id=\"row\">\r\n  <td>"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</td>\r\n  <td>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</td>\r\n  <td>"
    + alias4(((helper = (helper = helpers.mrp || (depth0 != null ? depth0.mrp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mrp","hash":{},"data":data}) : helper)))
    + "</td>\r\n  <td>"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "</td>\r\n  <td>"
    + alias4((helpers.itemtotal || (depth0 && depth0.itemtotal) || alias2).call(alias1,(depth0 != null ? depth0.mrp : depth0),(depth0 != null ? depth0.quantity : depth0),{"name":"itemtotal","hash":{},"data":data}))
    + "</td>\r\n</tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<table id=\"cart\">\r\n<tr><th>S.no</th><th>Item name</th><th>Amount</th><th>Quantity</th><th>Total Amount</th></tr>\r\n<tbody>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.cart_data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<tr>\r\n<td colspan=\"5\" id=\"totalamt\"><u>Cart Amount :"
    + container.escapeExpression((helpers.total || (depth0 && depth0.total) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.cart_data : depth0),{"name":"total","hash":{},"data":data}))
    + "</u></td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n\r\n</div>";
},"useData":true});
this["MyApp"]["templates"]["count"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<span><input type=\"number\" id=\"itemcount\" value=\"0\" disabled></input></span>";
},"useData":true});
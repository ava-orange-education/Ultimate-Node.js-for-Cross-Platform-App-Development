// Example of raw js and html combination
var html = "<h1>"+ "employeeObj.description" + </h1>";
html += "<ul>";
for(var i=0; i< employees.length; i++)
{ 
    html +="<li><a href='employees/" + employees[i] + "'>"
    html += employees[i]+"</a></li>"
}
html += "</ul>";


function myfunction(){
    var x=10;
    var y=9;
    var a= eval("x + y") + "<br>";
    var b = eval("y - x") + "<br>";
    var c = eval("2 * 8") + "<br>";

    var res= a + b + c;
    document.getElementById("demo").innerHTML=res;
}
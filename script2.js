//create a request variable
var request = new XMLHttpRequest();
//opne 
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var countrydata = JSON.parse(this.response);
    //console.log(countrydata);
    for(var i =0;i<countrydata.length;i++)
    {
        console.log(countrydata[i].flag);
    }
}
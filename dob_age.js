var dat1;
var format = /(0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])[/](19|20)\d\d/;
function calc_age(dat1){
    var dt1, dt2, dd1, dd2,diff_dates,diff_years;
    dat1 = dat1.value;
    
    if(dat1.match(format)){ //Check date is in proper format or not.
        dt1 = new Date(dat1);   //DOB
        dt2 = new Date();       //current date
        dd1 = dt1.getTime();
        dd2 = dt2.getTime();
        diff_dates = dd2 - dd1;     //difference between dates in milliseconds.
        diff_years = parseInt(diff_dates/(1000*60*60*24*365.25));   // difference between dates is converted to years.
       
        document.getElementById("age").innerText=`Age is ${diff_years} years .`;
        if(diff_years >= 14 && diff_years <= 24){
            alert(`You are eligible.Age is ${diff_years} years .`);
        }else{
            alert(`You are not eligible.Age is ${diff_years} years .`);
        }
    }else{
        document.getElementById("age").innerHTML=`<strong>Error - </strong>Enter date in mm/dd/yyyy format`;
    }
    
}
// '04/02/2014'
// '11/04/2014'
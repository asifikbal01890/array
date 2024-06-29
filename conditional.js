var raju = 200000;
var rajuHight = 5;
var rajuBoody = "shada";

var asif = 200000;
var asifHight = 5;
var asifBoody = "kala";

var sajib = 300000;
var sajibHight = 7;
var sajibBoody = "shada";

var needSalary = 20000;
var needHight = 6;
var boodyColor = "shada";

// if (needSalary == raju) {
//     console.log("ami raju ke biye korte cai");
// }
// else{
//     console.log("tomar moto celer dorkar nai")
// }


// if (needSalary <= raju && needHight <= rajuHight && boodyColor == rajuBoody) {
//     console.log("ami rajuke biye korbo");
// }
// else if(needSalary <= asif && needHight <= asifHight && boodyColor == asifBoody) {
//     console.log("ami asifke biye korbo");
// }
// else if(needSalary <= sajib && needHight <= sajibHight && boodyColor == sajibBoody) {
//     console.log("ami sajibke biye korbo");
// }
// else{
//     console.log("amar bodhoi biye hobe na")
// }



// if (needSalary <= raju || needHight <= rajuHight || boodyColor == rajuBoody) {
//     console.log("ami rajuke biye korbo");
// }
// if(needSalary <= asif || needHight <= asifHight || boodyColor == asifBoody) {
//     console.log("ami asifke biye korbo");
// }
// if(needSalary <= sajib || needHight <= sajibHight || boodyColor == sajibBoody) {
//     console.log("ami sajibke biye korbo");
// }


if (needSalary <= raju) {
    if (needHight <= rajuHight) {
        if (boodyColor == rajuBoody) {
            console.log("rajur biye"); 
        }
        else{
            console.log("raju colbe na");
        }
        
    }
    if (needHight <= sajibHight) {
        console.log("sajib er biye");
    }
    else{
        console.log("kauke drkr nai");
    }
    
}
else{
    console.log("raju sesh");
}







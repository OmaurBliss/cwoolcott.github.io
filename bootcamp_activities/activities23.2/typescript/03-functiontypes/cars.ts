
// Convert js to ts, then add "export { }" to top
//Set appropriate types for parameters, optional parameter and return type. 

function car( year: number, make: string, model? : string) {

    if (!model) {
        return year + ' ' + make;
    }

    return year + ' ' + make + ' ' + model;
}

var mazda = car(1995, "Mazda", "Rx-7");
console.log(mazda);

var toyota = car(2021, "Toyota");
console.log(toyota);




/** @format */

let arr = [{ id: 1, name: "john", age: "18", profession: "developer" },
{ id: 2, name: "jack", age: "20", profession: "developer" },
{ id: 3, name: "karen", age: "19", profession: "admin" }];


//to print the employees with profession:developer by using map
function PrintDeveloperbyMap() {
    arr.map((employee) => {
        if (employee.profession == "developer") {
            console.log(employee);
        }
    })
}

//to print the employees with profession:developer by using forEcah
function PrintDeveloperbyForEach() {
    arr.forEach((employee) => {
        if (employee.profession == "developer") {
            console.log(employee);
        }
    })
}

//to add a new employee to the array
function addData() {
    let employee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(employee);
    console.log(arr);
}


//to remove employee whose profession is admin 
function removeAdmin() {
    for (let employee = arr.length - 1; employee >= 0; --employee) {
        if (arr[employee].profession == "admin") {
            arr.splice(employee, 1);
        }
    }
    console.log(arr);
}



//to join the 2 seperate arrays
function concatenateArray() {
    var newarr = [{ id: 5, name: "tarun", age: "22", profession: "webdeveloper" },
    { id: 6, name: "ravi", age: "24", profession: "teamleader" },
    { id: 7, name: "vijay", age: "19", profession: "uidesigner" }];

    let arr2 = arr.concat(newarr);
    console.log(arr2);
}
interface Student {
    firstname: string,
    lastname: string,
    age: number,
    location: string
}

function createStudent(student: Student) {
    return {
        firstname: student.firstname,
        lastname: student.lastname,
        age: student.age,
        location: student.location
    }
}

const student1 = createStudent({ firstname: 'isaiah', lastname: "nweze", age: 30, location: "Nigeria"})
const student2 = createStudent({ firstname: 'johnson', lastname: "oyeleye", age: 28, location: "Gambia"})

const studentsList = [ student1, student2 ];

const table = document.createElement("table");
const trow = document.createElement("tr");
const trow1 = document.createElement("tr");
const tdata = document.createElement("td");
const tdata1 = document.createElement("td");
const tdata2 = document.createElement("td");
const tdata3 = document.createElement("td");

tdata.innerHTML = ;
tdata1.innerHTML = ;

trow.appendChild(tdata);
trow.appendChild(tdata1);

table.appendChild(trow);

tdata2.innerHTML = ;
tdata3.innerHTML = ;

trow1.appendChild(tdata2);
trow1.appendChild(tdata3);

table.appendChild(trow1);

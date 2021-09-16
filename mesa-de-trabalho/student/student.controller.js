const fs = require('fs');
const file = fs.readFileSync(__dirname + '/student.model.json', 'utf-8');
const studentJsonFile = JSON.parse(file);

function Student(studentName, studentSurname) {
    const name = studentName;
    const surname = studentSurname;

    this.getName = () => {
        return name;
    }

    this.getSurname = () => {
        return surname;
    }

    this.getFullName = function() {
        return `${name} ${surname}`; 
    }

    this.setStudentName = newStudentName => {
        name = newStudentName;
        return name;
    }

    this.setStudentSurname = newStudentSurname => {
        surname = newStudentSurname;
        return surname;
    }

    function saveStudentInDataBase() {
        if(validateInputValue()) {
            
            studentJsonFile.push({
                name,
                surname
            });

            const studentStringFile = JSON.stringify(studentJsonFile);
            fs.writeFileSync(__dirname + '/student.model.json', studentStringFile);
        }
        else {
            return console.log('is not a valid name!');
        }
    }

    function validateInputValue() {
        const noIsEmpty = (name && surname);
        const isString = (typeof(name) === 'string' && typeof(surname) === 'string');

        return (noIsEmpty && isString)
    }

    function validateRepeatStudents() {
        if(studentJsonFile.length) {
            return studentJsonFile.some(student => student.name == name);
        }
        else {
            console.log('')
        }
    }

    saveStudentInDataBase();
}

module.exports = Student;
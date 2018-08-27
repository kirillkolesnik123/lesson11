/*let age = {
    selector: document.getElementById('age'),
    getValue() {
        return this.selector.value
    },
    showUser(surname = 'Pupkin', name = 'Vasya', age = this.getValue()) {
        return `User: ${surname} ${name}, his age are ${age}`
    }
}

document.write(age.showUser());
*/
let age = document.getElementById('age');


function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.call(age,'Kolesnik','Kirill')

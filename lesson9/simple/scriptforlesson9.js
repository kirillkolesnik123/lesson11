let age = {
    selector: document.getElementById('age'),
    getValue() {
        return this.selector.value
    },
    showUser(surname = 'Pupkin', name = 'Vasya', age = this.getValue()) {
        return `User: ${surname} ${name}, his age are ${age}`
    }
}

document.write(age.showUser());

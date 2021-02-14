const normalPerson = {
    firsName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function () {
        console.log(this.firsName, this.lastName);
    },
    chargeBill: function (amount, tips, tax) {
        this.salary = this.salary - amount - tips - tax;
    }
};
// normalPerson.getFullName();
// console.log(normalPerson.salary);

// normalPerson.chargeBill(250, 50, 10);
// console.log(normalPerson.salary);

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Sogir',
    salary: 25000
};

const friendlyPerson = {
    firstName: 'Rahmat',
    lastName: 'Bhai',
    salary: 18000
}

// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson); // binding the method of normalPerson with friendlyPerson and passing heroPerson argument as this property for this function
// console.log(heroPerson);
// heroBillCharge(600);
// console.log(heroPerson);


// const friendlyBillCharge = normalPerson.chargeBill.bind(friendlyPerson); // binding the method of normalPerson with friendlyPerson and passing friendlyPerson argument as this property for this function
// console.log(friendlyPerson);
// friendlyBillCharge(350);
// console.log(friendlyPerson);
normalPerson.chargeBill.call(heroPerson, 900, 100, 15) /// first argument is for this property else are for the func
console.log(heroPerson);
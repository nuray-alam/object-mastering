const normalPerson = {
    firsName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firsName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
    }
};
normalPerson.getFullName();
console.log(normalPerson.salary);

normalPerson.chargeBill(250);
console.log(normalPerson.salary);
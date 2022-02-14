const normalPerson = {
    firstName: "Rahim",
    lastName: "uddin",
    salary: 15000,
    getfullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salay = this.salary - amount;
        return this.salary;
    }
}
normalPerson.chargeBill(150);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);
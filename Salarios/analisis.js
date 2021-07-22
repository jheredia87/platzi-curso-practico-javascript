const salariosMex = mexico.map(
    function (personita){
        return personita.salary;
    }
);

const salariosMexSort = salariosMex.sort(
    function (a , b){
        return a-b;
    }
);

const spliceStart=(salariosMexSort.length*90)/100;
const spliceCount=salariosMexSort.length - spliceStart;
const salariosTop = salariosMexSort.splice(spliceStart,spliceCount);

CalcularMediana(salariosMexSort);
CalcularMediana(salariosTop);

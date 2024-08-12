//Prvi zadatak
for(let i=1;i<=10;i++){
    if(i%2==0){
        for(j=1;j<=10;j++){
            if(j%2==0){
                console.log(i*j);
            }
        }
    }
}
//Drugi zadatak
let jezici  = ["JavaScript", "Python", "Java", "C++"];
jezici.forEach(jezik=>console.log(jezik));

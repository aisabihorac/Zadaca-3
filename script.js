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

//Treci zadatak
const temp = [ "1 kasikica soli","2 kasike ulja","300 g Brasna","200 ml mlijeka"];
for(i=0;i<=temp.length;i++){
 document.getElementById("sastojci").innerHTML += temp[i] + "<br>";
};
//for(let n = 1; n<=50;){
//    const para = document.createElement("p");
//    document.body.appendChild(para);
//    para.textContent="p" + n;
//
//    
//    n++;
//}
//function m(max) {
//    return Math.floor(Math.random() * max);
//  }
//let t=[m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9)//,m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9),m(9)]
//let r=[0,0,0,0,0,0,0,0,0,0]
//for(let index = 0; index < t.length; index++){
//    if(t[index]==0){
//        r[0]++
//    }
//    if(t[index]==1){
//        r[1]++
//    }
//    if(t[index]==2){
//        r[2]++
//    }
//    if(t[index]==3){
//        r[3]++
//    }
//    if(t[index]==4){
//        r[4]++
//    }
//    if(t[index]==5){
//        r[5]++
//    }
//    if(t[index]==6){
//        r[6]++
//    }
//    if(t[index]==7){
//        r[7]++
//    }
//    if(t[index]==8){
//        r[8]++
//    }
//    if(t[index]==9){
//        r[9]++
//    }
//console.log(r)
//}
//var result ="";
//for (var i in document){
    //result += i + "="+document[i]+"\n";
//}
//result += "\n";
//console.log(result)
//let reponse =prompt("donne un chiffre");
//let d = 0
//for (let i = 0; i<reponse ; i++) {
//    d++
//    d+=i
//    console.log(d)
//}
//let reponse =prompt("donner un chiffre");
//let d = 1;
//for (let i = 1; i<=reponse ; i++) {
//    d*=i
//    console.log(d)
//}
//let reponse= prompt("donne un nombre entre 1 et 3");
//while(reponse <"1"||reponse>"3"){
//    reponse = prompt("donner un chifre entre 1 et 3!");
//}
//console.log("yes");
//let reponse =prompt("donner un nombre");
//let d = 0;
//let l;
//for (let i = 1; i<=10; i++) {
//    d=reponse*i;
//    l+=" "+d;
//    
//}
//console.log(l);
//let t =[3,-1,-12,-4]
//let tmp = undefined
//for (let i = 0; i < t.length; i++) {
//    if(tmp<t[i])
//    tmp = t[i]
//}
//console.log(tmp)
//let user = {
//    name : "bob",
//    Age : "12",
//}
//console.log(user["Age"])
//let t=["a","b","c","a","d","b"]
//let temp=t.reduce
//console.log(temp)



let text = "hello my friend";
let alphabet =  " abcdefghijklmnopqrstivwxyz";
let b=0;
let t = [];
for(let i = 0; i<text.length;i++){
 if(text[i]==alphabet[b]){
     t.push(b);
     b=0;
 }   
 else{
     b++
     i--
 }
}
console.log(t)

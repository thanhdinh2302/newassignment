// Bai 1
// let year = parseInt(prompt("Nhap mot nam:"));
// if((year%4 == 0 && year%100 != 0)||(year%100 == 0 && year%400==0)){
//     console.log("nam " + year + " co 365 ngay");
// }else{
//     console.log("nam " + year + " co 364 ngay");
    
// }


// Bai 2
// let month = parseInt(prompt("Nhap mot thang:"));
// let year = parseInt(prompt("Nhap mot nam:"));
// if((year%4 === 0 && year%100 !== 0)||(year%100 === 0 && year%400===0)){
//     console.log("nam " + year + " co 365 ngay");
    
// }else{
//     console.log("nam " + year + " co 364 ngay");
// }
// if(month===1 || month===3 || month===5 || month===7 || month===8 || month===10 || month===12){
//     console.log("thang " + month + " cua " + year + " co 31 ngay");
// }
// else if(month===4 || month===6 || month===9 || month===11){
//     console.log("thang " + month + " cua " + year + " co 30 ngay");
    
// }else if((year%4 === 0 && year%100 !== 0)||(year%100 === 0 && year%400===0)&&(month===2)){
//     console.log("thang 2 cua nam " + year + " co 29 ngay");
    
// }else{
//     console.log("thang 2 cua nam " + year + " co 28 ngay");
// }

// Bai 3
// let month = parseInt(prompt("Nhap vao mot thang"));
// if((month === 1) || (month === 2) || (month === 3)){
//     console.log("thang " + month + " la mua xuan");
// }
// else if((month === 4) || (month === 5) || (month === 6)){
//     console.log("thang " + month + " la mua he");
// }
// else if((month === 7) || (month === 8) || (month === 9)){
//     console.log("thang " + month + " la mua thu");
// }
// else if((month === 10) || (month === 11) || (month === 12)){
//     console.log("thang " + month + " la mua dong");
// }
// else{
//     console.log("Moi ban nhap lai.");
// }

//Bai 4
//  let a = parseInt(prompt("Nhap mot so:"));
//  let b = parseInt(prompt("Nhap mot so:"));
//  let c = parseInt(prompt("Nhap mot so:"));
//  let t;
//  if(a>b){
//      t=a;
//      a=b;
//      b=t;
// }
//  if(a>c){
//      t=a;
//      a=c;
//      c=t;
// }
// if(b>c){
//     t=b;
//     b=c;
//     c=t;	
// }
// console.log(a, b, c);

//Bai 5
//  let a = parseInt(prompt("Nhap do dai:"));
//  let b = parseInt(prompt("Nhap do dai:"));
//  let c = parseInt(prompt("Nhap do dai:"));

// if((a<b+c) && (b<a+c) && (c<a+b)){
//     if(a===b===c){
//         console.log("Day la tam giac deu");
//     }
//     else if(a===b||b===c||a===c){
//         console.log("Day la tam giac can");
//     }
//     else if((a*a + b*b === c*c)||(b*b + c*c === a*a)||(c*c + a*a === b*b)){
//         console.log("Day la tam giac vuong");
//     }
//     else{
//         console.log("Day la tam giac thuong");
//     }
// }else{
//     console.log("Day khong phai la tam giac");
// }

//Bai 7
// let w = parseFloat(prompt("Nhap can nang(kg):"));
// let h = parseFloat(prompt("Nhap chieu cao(m):"));
// let bmi = w / h ** 2;
// if(bmi < 18.5){
//     console.log("duoi chuan.");
// }
// else if(bmi>=18.5 && bmi<=24.9){
//     console.log("binh thuong.");
    
// }
// else if(bmi>=25 && bmi<=29.9){
//     console.log("thua can.");
    
// }
// else{
//     console.log("ban bi beo phi");
    
// }

//Bai 6
// let e = parseInt(prompt("Nhap so dien ban su dung trong thang nay:"));
// console.log("bac 1: 0-50 kWh: 1678(VND/kWh)");
// console.log("bac 2: 51-100 kWh: 1734(VND/kWh)");
// console.log("bac 3: 101-200 kWh: 2014(VND/kWh)");
// console.log("bac 4: 201-300 kWh: 2536(VND/kWh)");
// console.log("bac 5: 301-400 kWh: 2834(VND/kWh)");
// console.log("bac 6: tu 400 kWh tro len: 2927(VND/kWh)");
// let money;
// if(e>=0 && e<=50){
//     let money = parseInt(e * 1678);
//     console.log(`ban su dung het ${e} kWh dien nen ban phai tra ${money} VND`);
// }
// if(e>=51 && e<=100){
//     let money = parseInt(e * 1734);
//     console.log(`ban su dung het ${e} kWh dien nen ban phai tra ${money} VND`);
// }
// if(e>=101 && e<=200){
//     let money = parseInt(e * 2014);
//     console.log(`ban su dung het ${e} kWh dien nen ban phai tra ${money} VND`);
// }
// if(e>=201 && e<=300){
//     let money = parseInt(e * 2536);
//     console.log(`ban su dung het ${e} kWh dien nen ban phai tra ${money} VND`);
// }
// if(e>=301 && e<=400){
//     let money = parseInt(e * 2834);
//     console.log(`ban su dung het ${e} kWh dien nen ban phai tra ${money} VND`);
// }
// if(e>=400){
//     let money = parseInt(e * 2927);
//     console.log(`ban su dung het ${e} kWh dien nen ban phai tra ${money} VND`);
// }


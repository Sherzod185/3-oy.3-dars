// 1kg konfet narxi a som 1.2 1.4 1.6 ...2kg gacha bolgan narxni chiqarsin
let a=45000;
let b=10;
let c;
let d;
for(i=1; i<=b; i++){
  if(i<5){
    continue  
  }
  d=2*i/b;
    c = a * d;
  console.log( `${d}kg konfet narxi ${c} so'm ` );
}
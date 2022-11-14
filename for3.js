// a<b a va b oralig'ida nechta son bor va sonlar ekranga chiqsin a va b lardan tashqari
let a=35;
let b=45;
let c;
c=(b-1)-a;
for(let i=(b-1); i>a; i--){
  console.log(i);
}
console.log(`\n ${b} va ${a} sonlar oralig'ida ${c} ta son bor  (${a} va ${b} sonlari kiritilmaganda) `);
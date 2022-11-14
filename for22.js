let n=4;
let a=2;
let s=1;
let s1=1;
let s2;
for (let i=1; i<=n; i++){
  s*=i
  s2=a**i
  s1+=s2/s;
  console.log(s1);
}
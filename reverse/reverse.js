//reverse

n=234;
var rem=0,rev=0;
console.log(n);
while(n!=0)
{
    rem=n%10
    rev=rev*10+rem
    n=n-n%10
    n=n/10
}
    console.log(rev);
exports.isPrime= function(no)
{
 flag=0;
for(i=2;i<=no/2;i++)
{
	if(no % i ==0)
	{
		flag=1;
		break;
	}
}
	if(no == 1)
	{
	console.log("1 is neither prime nor composite");
	}
	else
	{
		if(flag==1)
		{
		console.log(" not prime");
		}
		else
		{
		console.log(" prime");
		}
	}
};

exports.calFact=function(no)
{
	fact=1;
	for(i=1;i<=no;i++)
	{
		fact *= i;
	}
	return fact;
};

exports.isPerfect=function(no)
{
	sum=0;
	for(i=1; 1<= (no-1);i++)
	{
	rem=no % i;
	if(rem==0)
		{
			sum=sum +i;
		}
	}
	if(sum==no)
	console.log("entered number is perfect no");
	else
	console.log("entered number is not perfect no");
};
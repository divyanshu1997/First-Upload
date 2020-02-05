var button = document.querySelector("button");
var isGray = false ;
button.addEventListener ("click",function()
	{
		if (isGray)
		{
			document.body.style.background = "white";
		}
		else
		{
			document.body.style.background = "gray";
		}
		isGray = !isGray;
	 });
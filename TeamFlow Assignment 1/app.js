function choosePlan (planName)
{
  const userChoice = confirm("Do you want to continue with the " + planName+ "plan?");


if(userChoice)
{
  alert(
    "Thank you for choosing the "+ planName + " plan.\n" +
    "Our team will contact you shortly."
  );
}

else{
  console.log("User Cancelled the plan selection.");
}
}



function startFreeTrial()
{
  alert("Free Trial will be available soon.");
}

function tryItFree()
{
  alert("Free Trial will be available soon.");
}





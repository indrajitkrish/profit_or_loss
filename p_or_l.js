var initial = document.querySelector("#initial");
var quantity = document.querySelector("#quantity");
var current = document.querySelector("#current");
var button = document.querySelector("#tell_btn");
var output = document.querySelector("#output");

button.addEventListener('click',profitorloss);

function profitorloss(){
    var ip = initial.value;
    var qos = quantity.value;
    var cur = current.value;
    if(ip != '' && qos !='' && cur !='')
{
  console.log("comes in");
    if(cur > ip)
    {
      var profit = (cur - ip) * qos
      var profitpercentage = (profit / ip) * 100;
      console.log(profit);
      output.style.color = 'green';
      output.innerText = " yup, your profit is "+ profit.toFixed(2)  +" and your profit percentage is "+profitpercentage.toFixed(2)+ "%";
    }
   else if(ip > cur)
    {
      var loss  = (ip - cur) * qos
      var losspercentage = (loss / ip) * 100;
      console.log(loss);
      output.style.color = 'red';
      output.innerHTML = " oops :(  your loss is "+ loss.toFixed(2) +" and your loss percentage is "+losspercentage.toFixed(2)+ "%";
    }
    else
    {
        output.style.color = 'yellow';
    output.innerHTML = "No change in your stocks";
    }
}
else
{
    output.style.color = 'white';
    output.innerHTML = "Please Enter all the values...";
}
}


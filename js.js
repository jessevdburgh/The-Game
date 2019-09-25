function myfunction(){
var age = prompt("hoe oud bent u?");


if (age >= 16)
{
    alert("u mag het spel spelen!");
}
else
{
   alert("u mag niet spelen");
}

if (age <= 15)
{
	return false;
}

 var ans = prompt("je bent neergestort in de middle of nowhere ga je opzoek naar overlevenden of naar overlevingsmiddelen");

if (ans == 'overlevenden'){
	alert('je gaat dood tijdens het zoeken naar overlevenden doordat er een brandende doos op je valt.')
	return false;
}
else  alert('je vind een hoop eten en drinken ')


 alert("je gaat opzoek naar een plek om de nacht te overleven")

	

	var ans2 = prompt("ga je opzoek naar een slaapplek bij een meer of in het bos?");

	if (ans2 =='bos'){
		alert('je komt in een groep canibalen en zij eten jou levend op.')
		return false;
	}

	else alert('je vind een mooie grot waarin jij kan slapen.')

alert("je gaat wat hout verzamelen en maakt een kampvuur in je grot en gaat slapen")


	var ans3 =prompt("je gaat vissen, ga je met je handen vissen of maak je eerst een hengel");

	if (ans3 =='handen'){
		alert('HAP!!!! er zwemt een krokodil en die eet jou op!')
		return false;
}

	else alert('je vangt een hoop vissen en die eet je daarna op')









}


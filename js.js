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

 var ans1 = prompt("je bent neergestort in de middle of nowhere ga je opzoek naar overlevenden of naar overlevingsmiddelen(antwoord met overlevenden of overlevingsmiddelen");

if (ans1 == 'overlevenden'){
	alert('je gaat dood tijdens het zoeken naar overlevenden doordat er een brandend vliegtuig onderdeel op je valt.')
	return false;
}
else if (ans1 == 'overlevingsmiddelen'){
	alert('je vind een hoop eten en drinken ')
}
else alert('geef 1 van de gegeven antwoorden')




if (ans1 ='overlevingsmiddelen') alert('je gaat opzoek naar een plek om de nacht te overleven')

	

	var ans2 = prompt("ga je opzoek naar een slaapplek bij een meer of in het bos?(antwoord met meer of bos)");

	if (ans2 =='bos'){
		alert('je komt in een groep canibalen en zij eten jou levend op.')
		return false;
	}

	alert('je vind een mooie grot aan het water waarin jij kan slapen.')


	


if (ans2 ="meer") {alert("je gaat wat hout verzamelen en maakt een kampvuur in je grot en gaat slapen")}


	var ans3 =prompt("je gaat vissen, ga je met je handen vissen of maak je eerst een hengel(antwoord met handen of hengel)");

	if (ans3 =='handen'){
		alert('HAP!!!! er zwemt een krokodil en die eet jou op!')
		return false;
}

if (ans3 ="hengel")	{alert('je vangt een hoop vissen en die eet je vervolgens op')}


	

var ans4 =prompt("je gaat in het vliegtuig opzoek naar nieuwe spullen ga je voorin of achterin kijken(antwoord met voorin of achterin)");

	if (ans4 =="voorin"){
		alert("je vind een flare gun deze kan later van pas komen")
	}

	else if (ans4=="achterin") {
		alert("je vind alleen verbrande kleren en koffers")
	}


	var ans5 =prompt("ga je vanaf het vliegtuig terug via het bos of gelijk naar de grot bij het meer(antwoord met bos of grot)");

	if (ans5 =="grot"){
		alert("je komt onderweg een gesealde fles water tegen die uit het vliegtuig gevallen was")
	}

	else if (ans5=="bos") {
		alert("een groep canibalen eten jou op!!")
		return false;
	}
	

	var ans6 =prompt("je bent terug je wilt een wapen maken ga je een zwaard of een pijl en boog maken (antwoord met zwaard of boog)");

	if (ans6 =='zwaard'){
		alert('je maakt een mooi sterk zwaard')
		
}
	else if (ans6 == "boog"){
	alert('je maakt een goede boog en veel pijlen ')
}

	if (ans6== "zwaard"){
		var ans7= prompt("ga je een groep canibalen aanvallen? (antwoord met ja of nee)")
	}
		if (ans7== "ja"){
			alert("leuk geprobeerd maar ze eten jouw levend op.")
			return false;
		}
		else if (ans7 == "nee"){
			alert("slim ze waren met een hele grote groep")
		}
if (ans6== "boog"){
	var ans8= prompt("ga je op herten jagen?(antwoord met ja of nee)")
}
	if (ans8=="ja"){
		alert("je hebt 2 herten gevangen")
	}

	else if (ans8=="nee"){
		alert("vanavond geen vlees bij het eten!")
	}

if (ans8=="ja"){
	var ans9=prompt("twee canibalen zien jouw lopen met 2 herten en stelen ze van jouw schiet je hun dood?(antwoord met ja of nee) ")
}
 if (ans9 == "ja"){
 	alert("je schiet ze allebei dood en hebt alsnog je herten")
 }
 else if (ans9=="nee"){
 	alert("nadat ze jouw herten hebben eten ze jou ook op!!")
 	return false;
 }

alert("het is avond en het is tijd voor avondeten")

if (ans9=="ja"){
	var ans10= prompt("eet je beide herten op?(antwoord met ja of nee)")
}
	if(ans10=="ja"){
		alert("eetsmakelijk!!")
	}
	else if(ans10=="nee"){
		alert("je eet 1 hert op en in de nacht word de andere opgegeten door een beer")
	}

	alert("je begint het hier helemaal zat te worden en je wilt naar huis")



var ans11= prompt("ga je opzoek naar een berg om vliegtuigen te signaleren?(antwoord met ja of nee)")
	
	if (ans11 =="ja"){
		alert("je vind een berg en gaat daar wachten op een vliegtuig")
	}

	else if (ans11 =="nee"){
		alert("je ziet geen vliegtuigen en sterft doordat je daar gek word en uiteindlijk je zelf ophangt")
		return false;
	}

if (ans11=="ja"){
var ans12 =prompt("je hoort een vliegtuig schiet je een flare omhoog of maak je een vuur(antwoordmet flare of vuur)");
}
	if (ans12 =='flare'){
		alert('het vliegtuig land in de buurt en zoeken jou op en brengen jou terug naar huis.')
		return false;
}

	else if (ans11 =="vuur"){
		alert('het vliegtuig ziet je vuur niet en vliegt door en er komen geen nieuwe vliegtuigen meer')
	}




}
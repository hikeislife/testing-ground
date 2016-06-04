document.getElementById("drnda").addEventListener('submit', dvdnk);

var fileName,
	regEntry,
	anex = document.getElementById("anexes");	

function dvdnk() {
	event.preventDefault();

	var comName = document.getElementById("firma").value.toUpperCase(),
		conNum = document.getElementById("ugovor").value,
		hasCon = document.getElementById("hasContract").checked,
		hasContract = "",
		hasPro = document.getElementById("hasProp").checked,
		hasProposition = "",
		registry = document.getElementById("delovodnik"),
		attachment = document.getElementById("fajl"),
		conT = "";

		if (hasCon) {
			hasContract = "UGOVOR ";
		}

		if (hasPro) {
			hasProposition = " PONUDA ";
		}

	var nums = document.getElementsByClassName("numvers");
	for (i = 0; i < 20; i ++) {
		var pi = (i + 1) / 2,
			ai = i / 2 + 1;

		if (nums[i].checked) {
			if (hasContract === "") {
				(i%2) ? conT += "PRILOG " + pi + " UGOVORA " : conT += "ANEKS " + ai + " UGOVORA ";
			}
			else {
				(i%2) ? conT += "PRILOG " + pi + " " : conT += "ANEKS " + ai + " ";
			}
		}
	}
	
	if (hasContract === "") {
		regEntry = comName + " " + conT + conNum + hasProposition;
		fileName = conT + " " + hasProposition + comName + " POTPISAN";
	} else {
		regEntry = comName + " " + hasContract + " " + conNum + " " + conT + hasProposition;
		fileName = hasContract + " " + conT + hasProposition + comName + " POTPISAN";
	}

	

	var newDivR = document.createElement("div"),
		newReg = document.createTextNode(regEntry);
	newDivR.appendChild(newReg);
	registry.appendChild(newDivR);
	newDivR.innerHTML = regEntry;

	var newDivA = document.createElement("div"),
		newAtt = document.createTextNode(fileName);
	attachment.appendChild(newDivA);
	newDivA.innerHTML = fileName;
}

for (var i=0; i<20; i++) {
	plhdi = document.createElement("input");
	anex.appendChild(plhdi);
	plhdi.type = "checkbox";
	plhdi.setAttribute("class", "numvers");
	(i%2) ? plhdi.value = "prilog " + ((i + 1)/2) : plhdi.value = "aneks " + (i/2 +1);
	(i%2) ? plhdi.id = "p" + ((i + 1)/2) : plhdi.id = "a" + (i/2 +1);
	(i%2) ? plhdi.name = "p" + ((i + 1)/2) : plhdi.name = "a" + (i/2 +1);
	plhldi = document.createElement("label");
	anex.appendChild(plhldi);
	plhldi.for="plhdi.id";
	(i%2) ? plhldi.innerHTML = "Prilog " + ((i + 1)/2) : plhldi.innerHTML = "Aneks " + (i/2 +1);
    
	if ( i%2 === 1 ) {
		var bri = document.createElement("br");
		anex.appendChild(bri);
	}
}

	

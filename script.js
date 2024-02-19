function generateLetter() {
	// Ottieni il nome inserito dall'utente
	var name = document.getElementById("name").value;

	// Crea una nuova istanza di jsPDF
	var doc = new jsPDF();

	// Aggiungi il testo della lettera, sostituendo il nome dell'utente
	var text = "Caro " + name + ",\n\nTi auguriamo un felice compleanno e tanti altri ancora!\n\nCordiali saluti,\nLa tua famiglia";
	doc.text(20, 20, text);

	// Salva il documento come PDF
	doc.save("Lettera di auguri per " + name + ".pdf");

	// Mostra il testo della lettera nell'area "letter"
	document.getElementById("letter").innerText = text;
}

// Seguir automaticamente
let contador = 1;

document.querySelectorAll('.sqdOP.L3NKy.y3zKF').forEach((item, index) => {
  setTimeout(() => {
	
	if (contador < 3)
	{
		if(!item.classList.contains('._8A5w5')){
			item.click();
			console.log(`Seu BOT já seguiu ${contador} pessoa(s)!`);
		} else { 
			console.log('Você já segue essa pessoa.');
		}
	}
	contador++;
  }, index * 10000);
});
document.getElementById('check').onclick = function(){
	let login = document.getElementById('login').value;
	let password = document.getElementById('password').value;

	if (login == 'vasyl' && password == '88776652')
		alert('Welcome');
	else if (login == 'volodija' && password == '12345')
		alert('Welcome');
	else if (login == 'petro' && password == '8522')
		alert('Welcome');
	else alert('Incorrect login or pass');
}
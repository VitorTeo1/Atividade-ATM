
		var saldo = 100.5; //Float 1.36
		var nome = prompt("Por favor insira seu nome");
		alert ("Olá " + nome + " é um prazer ter você por aqui!");
		var texto;
		var conf
		
		function inicio() {
		
			var escolha = parseInt(prompt(`Selecione uma opção:
1.) Saldo
2.) Extrato
3.) Saque
4.) Depósito 
5.) Transferência 
6.) Sair`));

			switch(escolha) {
    			case 1:
    			ver_saldo();
				break;
			}
			switch(escolha) {
    			case 2:
    			ver_extrato();
				break;
			}
			switch(escolha) {
    			case 3:
    			fazer_saque();
				break;
			}
			switch(escolha) {
    			case 4:
    			fazer_deposito();
				break;
			}
			switch(escolha) {
    			case 5:
    			transferência();
				break;
			}
			switch(escolha) {
    			case 6:
    			sair();
				break;
				default:
    			erro();
			}
			

		}		
		
			

		function ver_saldo() {
			alert('Seu saldo atual é: ' + saldo);
			inicio();
		}

		function fazer_deposito() {
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));
			// Not a Number
			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número:');
				fazer_deposito();
			} 
			else if (deposito <= 0){
				alert('Operação não autorizada')
				fazer_deposito();
			}
			else {
				saldo += deposito;
				ver_saldo();
			}
		}

		function fazer_saque() {
			var senha = parseInt(prompt('Por favor, informe sua senha: '));
			if (senha == 3589){
				fazer_saque2();
			}
			else {
				alert('Senha incorreta, tente novamente.')
				inicio();
			}
		} 
		function fazer_saque2(){
			var saque = parseFloat(prompt('Qual o valor para saque?'));
			if (isNaN(saque) || saque === '') {
				alert('Por favor, informe um número:');
				fazer_saque2();
			4}
			else if (saque <= 0){
				alert("Operação não autorizada");
				inicio();
		}
			else if (saque > saldo){
				alert("Operação não autorizada");
				inicio();
		}
			else {
				saldo -= saque;
				
				ver_saldo();
			}
		}
		function ver_extrato(){
			
				alert("123 reais gastos no Mercado Vem Que Tem " )
				alert("19 reais gastos na Padaria Souza " )
				inicio();
			}
		function transferência(){
			var transf = parseInt(prompt('Insira o número da conta'));
			if (Number.isInteger(Number(transf))){
			transferência2();
			}
			else{
				alert('Operação não autorizada');
				inicio();
			}	
		}
		function transferência2(){
			var vtransf = parseInt(prompt ('Insira o valor que deseja transferir'));
			if (vtransf <= 0){
				alert('Operação não autorizada');
				inicio();
			}
			else if (vtransf > saldo){
				alert("Operação não autorizada");
				inicio();
		}
			else if (Number.isInteger(Number(vtransf))){
				alert('Transferência realizada com sucesso');
				saldo -= vtransf;
				ver_saldo();
		}
			else{
				alert('Operação não autorizada');
				inicio();
			}	
		}

		function erro() {
			alert('Por favor, informe um número entre 1 a 6');
			inicio();
		}
		

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert('Agradecemos por utilizar os serviços do banco ATM. ' + nome + ', foi um prazer ter você por aqui!')
				window.close();
			} else {
				inicio();
			}
		}
		inicio();
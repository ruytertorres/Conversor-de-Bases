/* Conversor de Bases.js v1.0
by Ruyter Torres - FAM Online, 11/out/2020
*/
let infoA = ' '
        function calcularMediaA(){ //fução principal

                let infoA = document.getElementById('infoA').value;
                infoA = parseFloat(infoA)
                
                document.getElementById('hxValueA').value = "Hex: " + infoA.toString(16);
                document.getElementById('OcValueA').value = "Oct: " + infoA.toString(8);
                document.getElementById('BinValueA').value = "Bin: " + infoA.toString(2);


                console.log(infoA.toString(16));
        }

/*
        function erroInpuVazioA(){
                
                let aQuatro = document.getElementById("aQuatro").value;
                aQuatro = parseFloat(aQuatro)// para tranformar o valor recebido em tipo number
                let aTres = document.getElementById("aTres").value;
                aTres = parseFloat(aTres)// para tranformar o valor recebido em tipo number
                let aDois = document.getElementById("aDois").value;
                aDois = parseFloat(aDois)// para tranformar o valor recebido em tipo number
                let aUm = document.getElementById("aUm").value;
                aUm = parseFloat(aUm)// para tranformar o valor recebido em tipo number

                if(isNaN(aQuatro) || isNaN(aTres) || isNaN(aDois) || isNaN(aUm)){
                        // document.getElementById('resultA').value = ' Por favor preencha os campos acima! ';
                        document.getElementById('resultA').value = ' '
                        alert("Po favor preencha os campos vazios")
                        location.href = 'index.html'
                }
        }


let bUm = ' ', bDois = ' ', bTres = ' ', bQuatro = ' '; // Variaveis

        function calcularMediaB(bUm, bDois, bTres, bQuatro, med,){ //fução principal
                bUm = document.getElementById('bUm').value // para recuperar valor digitado
                bDois = document.getElementById('bDois').value// para recuperar valor digitado
                bTres = document.getElementById('bTres').value// para recuperar valor digitado
                bQuatro = document.getElementById('bQuatro').value// para recuperar valor digitado

                bUm = parseFloat(bUm) // para tranformar o valor recebido em tipo number
                bDois = parseFloat(bDois)// para tranformar o valor recebido em tipo number
                bTres = parseFloat(bTres)// para tranformar o valor recebido em tipo number
                bQuatro = parseFloat(bQuatro)// para tranformar o valor recebido em tipo number
                
                if(bUm > 10  || bUm < 0 || bDois > 10 || bDois < 0 || bTres > 10 || bTres < 0 || bQuatro > 10 || bQuatro < 0){ //tratamento de erro
                        alert("Por favor, Insira um número entre 0 (Zero) e 10 (dez)!"); 
                        
                        document.getElementById('bQuatro').value = ' ';
                        document.getElementById('bTres').value = ' ';
                        document.getElementById('bDois').value = ' ';
                        document.getElementById('bUm').value = ' ';
                        document.getElementById('resultB').value = ' ';

                        location.href = 'index.html';
                        
                }else { //Calculador de média
                        med = (bUm + bDois + bTres + bQuatro)/4

                        if(med >= 6){
                                document.getElementById('resultB').value = 'Média ' + med + ', Parabéns Pela Aprovação!!!';
                        }else {
                                document.getElementById('resultB').value = 'Média ' + med + ', Você está Reprovado!';
                        }
                }
        }

        function erroInpuVazioB(){
                
                let bQuatro = document.getElementById("bQuatro").value;
                bQuatro = parseFloat(bQuatro)// para tranformar o valor recebido em tipo number
                let bTres = document.getElementById("bTres").value;
                bTres = parseFloat(bTres)// para tranformar o valor recebido em tipo number
                let bDois = document.getElementById("bDois").value;
                bDois = parseFloat(bDois)// para tranformar o valor recebido em tipo number
                let bUm = document.getElementById("bUm").value;
                bUm = parseFloat(bUm)// para tranformar o valor recebido em tipo number

                if(isNaN(bQuatro) || isNaN(bTres) || isNaN(bDois) || isNaN(bUm)){
                        // document.getElementById('resultB').value = ' Por favor preencha os campos acima! ';
                        document.getElementById('resultB').value = ' ';
                        alert("Po favor preencha os campos vazios");
                        location.href = 'index.html';  
                }
        }

let cUm = ' ', cDois = ' ', cTres = ' ', cQuatro = ' '; // Variaveis

        function calcularMediaC(cUm, cDois, cTres, cQuatro, med,){ //fução principal
                cUm = document.getElementById('cUm').value // para recuperar valor digitado
                cDois = document.getElementById('cDois').value// para recuperar valor digitado
                cTres = document.getElementById('cTres').value// para recuperar valor digitado
                cQuatro = document.getElementById('cQuatro').value// para recuperar valor digitado

                cUm = parseFloat(cUm) // para tranformar o valor recebido em tipo number
                cDois = parseFloat(cDois)// para tranformar o valor recebido em tipo number
                cTres = parseFloat(cTres)// para tranformar o valor recebido em tipo number
                cQuatro = parseFloat(cQuatro)// para tranformar o valor recebido em tipo number
                
                if(cUm > 10  || cUm < 0 || cDois > 10 || cDois < 0 || cTres > 10 || cTres < 0 || cQuatro > 10 || cQuatro < 0){ //tratamento de erro
                        alert("Por favor, Insira um número entre 0 (Zero) e 10 (dez)!"); 
                        
                        document.getElementById('cQuatro').value = ' ';
                        document.getElementById('cTres').value = ' ';
                        document.getElementById('cDois').value = ' ';
                        document.getElementById('cUm').value = ' ';
                        document.getElementById('resultC').value = ' ';

                        location.href = 'index.html';
                        
                }else { //Calculador de média
                        med = (cUm + cDois + cTres + cQuatro)/4

                        if(med >= 6){
                                document.getElementById('resultC').value = 'Média ' + med + ', Parabéns Pela Aprovação!!!';
                        }else {
                                document.getElementById('resultC').value = 'Média ' + med + ', Você está Reprovado!';
                        }
                }
        }

        function erroInpuVazioC(){
                
                let cQuatro = document.getElementById("cQuatro").value;
                cQuatro = parseFloat(cQuatro)// para tranformar o valor recebido em tipo number
                let cTres = document.getElementById("cTres").value;
                cTres = parseFloat(cTres)// para tranformar o valor recebido em tipo number
                let cDois = document.getElementById("cDois").value;
                cDois = parseFloat(cDois)// para tranformar o valor recebido em tipo number
                let cUm = document.getElementById("cUm").value;
                cUm = parseFloat(cUm)// para tranformar o valor recebido em tipo number

                if(isNaN(cQuatro) || isNaN(cTres) || isNaN(cDois) || isNaN(cUm)){
                        // document.getElementById('resultC').value = ' Por favor preencha os campos acima! ';
                        document.getElementById('resultC').value = ' '
                        alert("Po favor preencha os campos vazios")
                        location.href = 'index.html'                }
        }
        */
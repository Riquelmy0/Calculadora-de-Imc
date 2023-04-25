const botao = document.getElementById('button');
const nome = document.getElementById('name');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const resulted = document.getElementById('resultado');  

const mostraResulted = (imc, ndp)=>{

    if(imc > 40){
        return `${ndp}, este é seu IMC:${imc} - obesidade grau III `
    }
    if(imc > 35){
        return `${ndp}, este é seu IMC:${imc} - obesidade grau II `
    }
    if(imc > 30){
        return `${ndp}, este é seu IMC:${imc} - obesidade grau I `
    }
    if(imc > 25){
        return `${ndp}, este é seu IMC:${imc} - você está levemente acima do peso! `
    }
    if(imc >= 18.5){
        return `${ndp} seu IMC é igual a: ${imc}! você está dentro dos padrões`
    }
    return 'abaixo do peso'
}


const resolutionImc = ()=>{
    if(!nome.value || !altura.value || !peso.value){
        return resulted.textContent = 'ATENÇÃO : Preencha todos os campos';
    }

    const resolv = (peso.value/(altura.value*altura.value)).toFixed(1); 
    const nomeDaPessoa = nome.value; 
    resulted.textContent = mostraResulted(resolv, nomeDaPessoa);
    
    nome.value = null;
    peso.value = null;
    altura.value = null;
}

botao.addEventListener('click', resolutionImc);



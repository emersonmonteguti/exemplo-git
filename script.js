function helloWorld() {
    var inputs = document.getElementsByTagName('input');
    var input = inputs[0];
    var nome = input.value.trim();

    if(nome ===''){
        alert('O nome esta vazio, por favor insira o seu nome');
        return
    }
    console.log('Nome: ', nome)
    window.alert('Hello world,' + nome + '!');
    input.value = '';
}
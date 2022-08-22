class cliente {

    #nome;
    #sobrenome;
    #contas;

    constructor(nome, sobrenome) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#contas = contas;
    }

    getNome(){
        return nome;
    }

    setNome(nome){
        this.nome = nome;
    }

    getSobrenome(){
        return sobrenome;
    }

    setSobrenome(sobrenome){
        this.sobrenome = sobrenome;
    }

   getConta(indice){
        return this.contas.get(indice);
    }

    getNumeroContas(){
        return contas.get(indice);
    }

    adicionarConta(conta){
        this.contas.add(conta)
    }
    
}

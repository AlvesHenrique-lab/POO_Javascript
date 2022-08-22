class contaCorrente extends conta {

    #chequeEspecial;

    constructor(saldoInicial, chequeEspecial) {
        super(saldoInicial);
        this.#chequeEspecial = chequeEspecial;
    }

    constructor(saldoInicial){
        super(saldoInicial);
    }

    getchequeEspecial(){
        return this.#chequeEspecial
    }

    setchequeEspecial(chequeEspecial){
        this.chequeEspecial = chequeEspecial;;
    }
    
}

function sacar(valor){
    // Saldo + valor cheque especial suficientes para cobrir o saque
    if (this.saldo + this.chequeEspecial >= valor) {
        this.saldo -= valor;
     } else {
        deficit = valor - this.saldo;
        if (this.chequeEspecial == 0) {
            throw new ExcecaoChequeEspecial("Não há cheque especial", deficit);
        } else {
            throw new ExcecaoChequeEspecial("Saldo insuficiente no cheque especial", deficit);
        }
    }
}

class contaPoupanca extends conta {

    #taxaRendimento;

    constructor(saldoInicial, taxaRendimento) {
        super(saldoInicial);
        this.taxaRendimento = taxaRendimento;
    }

}

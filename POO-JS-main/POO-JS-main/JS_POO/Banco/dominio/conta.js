class conta extends banco.dominio.excecoes.ExcecaoChequeEspecial {
    _saldo = 0;

    conta(saldoInicial) {
        this._saldo = saldoInicial;
    }

    getSaldo() {
        return saldo;
    }

    depositar(valor) {
        saldo = saldo + valor;
        return true;
    }

    sacar(ExcecaoChequeEspecial) {
        if ((this._saldo - valor) >= 0) {
            saldo = saldo - valor;
        } else {
            deficit = valor - this.saldo;
        }
    }

}
new ExcecaoChequeEspecial().deficit(100);

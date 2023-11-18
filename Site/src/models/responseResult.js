class ResponseResult {
    constructor() {
        this.data = null;
        this.notification = [];
    }

    atribuirErros(erro) {
        this.notification.push(erro);
    }

    atribuirData(data) {
        this.data = data;
    }
}

module.exports = ResponseResult;
function dividir (numeroG, numeroH){
    if(numeroH == 0){
        return "No se puede dividir por cero"
    }
    return numeroG / numeroH;
};

module.exports = dividir;
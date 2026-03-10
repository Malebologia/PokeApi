// ============================================
// CLASE POKEMON (MODELO POO)
// ============================================

class Pokemon {
    constructor(data) {
        this.id = data.id;
        this.nombre = data.name;
        this.imagen = data.sprites.front_default;
        this.altura = data.height;
        this.peso = data.weight;
        this.tipos = data.types.map(t => t.type.name);
    }

    obtenerAlturaMetros() {
        return this.altura / 10;
    }

    obtenerPesoKg() {
        return this.peso / 10;
    }

    render() {
    return `
        <div class="card text-center" style="width: 16rem;">
            <img src="${this.imagen}" class="card-img-top bg-light" alt="${this.nombre}">
            <div class="card-body">
                <h5 class="card-title text-capitalize">${this.nombre}</h5>
                <p class="card-text">
                    ID: ${this.id}<br>
                    Altura: ${this.obtenerAlturaMetros()} m<br>
                    Peso: ${this.obtenerPesoKg()} kg<br>
                    Tipo: ${this.tipos.join(", ")}
                </p>
            </div>
        </div>
    `;
}
}
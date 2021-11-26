import { ITProduct } from "@/interfaces/ITproduct";
import { API_PREFIX_MAIN } from "@/constants";

class ProductItemModel{
    private prodid      : number;
    private codpro      : string;
    private nompro      : string;
    private tipo        : number;
    private preuni      : number;
    private modelo      : string;
    private freeship    : number;
    private ofertas     : number;
    private marca       : string;
    private rating      : number;
    private stock       : number;
    private peso        : number;
    private despro      : string;
    private nomven      : string;

    constructor(data: ITProduct) {
        this.prodid        =   data.prodid;
        this.codpro        =   data.codpro;
        this.nompro        =   data.nompro;
        this.tipo          =   data.tipo;
        this.preuni        =   data.preuni;
        this.modelo        =   data.modelo;
        this.freeship      =   data.freeship;
        this.ofertas       =   data.ofertas;
        this.marca         =   data.marca;
        this.rating        =   data.rating;
        this.stock         =   data.stock;
        this.peso          =   data.peso;
        this.despro       =   data.despro;
        this.nomven       =   data.nomven;
    }

    public getProdId(): number{
        return this.prodid;
    }

    public getCodPro(): string{
        return this.codpro;
    }

    public getNomPro(): string{
        return this.nompro;
    }

    public getPreUni(): number{
        return this.preuni;
    }

    public getModelo(): string{
        return this.modelo;
    }

    public getMarca(): string{
        return this.marca;
    }

    public getOfertas(): number{
        return this.ofertas;
    }

    public getFreeShip(): number{
        return this.freeship;
    }

    public getRating(): number{
        return this.rating;
    }

    public getStock(): number{
        return this.stock;
    }

    public getPeso(): number{
        return this.peso;
    }

    public getTipo(): number{
        return this.tipo;
    }

    public getDespro(): string{
        return this.despro;
    }
    public getNomven(): string{
        return this.nomven;
    }



}
export default ProductItemModel;
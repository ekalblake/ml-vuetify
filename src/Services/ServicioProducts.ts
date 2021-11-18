import {ref} from "@vue/composition-api";
import axios from "axios";
import {API_PREFIX_MAIN} from "@/constants";

export class ServicioProducts {

    private mproducto: any = ref([]);

    public constructor() {

    }

    public async getStores(tipo: number) {
        const {data} = await axios.get(`${API_PREFIX_MAIN}/stores/${tipo}`)
        console.log(data)
        return data
    }

    public async getProducts(tipo: number) {
        const {data} = await axios.get(`${API_PREFIX_MAIN}/products/${tipo}`)
        return data
    }

    public getImage(prodid: number){
        return `${API_PREFIX_MAIN}/product/image/${prodid}`;
    }

    public getImageStore(idstore: number, idtien: number){
        return `${API_PREFIX_MAIN}/stores/image/${idstore}/${idtien}`;
    }
}

export const servicioProducts = new ServicioProducts()


export class Product {
    id: number
    description: string
    value: number
    lengthStok: number
}

export class Sale {
    id: number
    dateOfSale: string

    itemsSale = new Array<ItemSale>()
    clientId: number
}

export class ItemSale {
    id: number
    length: number

    productId: number
}

export class Client {
    id: number
    name: string
    cpf: number
    dateOfBirtday: string
    adress: string
}

export class Account {

}
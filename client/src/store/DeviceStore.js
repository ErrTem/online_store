import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Холодильники' },
            { id: 2, name: 'Смартфоны' },
            { id: 3, name: 'Ноутбуки' },
            { id: 4, name: 'Телевизоры' },
        ]
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'Lenovo' },
            { id: 4, name: 'Asus' },
        ]
        this._devices = [
            { id: 1, name: "12pro", price: 10000, rating: 0, img: "80df880a-e909-480b-8c4c-6702b8ec3a66.jpg" },
            { id: 2, name: "a51", price: 10000, rating: 0, img: "89b56265-271c-45bf-bdcf-a8b1c0d34803.jpg" },
            { id: 3, name: "note pro", price: 10000, rating: 0, img: "11dbe96e-8b40-4e8d-ba36-47681f91c28d.jpg" },
            { id: 4, name: "Atlant", price: 10000, rating: 0, img: "b34e5d9b-a3df-41b1-9e70-d3d57611a87a.jpg" },
            { id: 5, name: "Atlant", price: 10000, rating: 0, img: "b34e5d9b-a3df-41b1-9e70-d3d57611a87a.jpg" },
            { id: 6, name: "Atlant", price: 10000, rating: 0, img: "b34e5d9b-a3df-41b1-9e70-d3d57611a87a.jpg" },
            { id: 7, name: "Atlant", price: 10000, rating: 0, img: "b34e5d9b-a3df-41b1-9e70-d3d57611a87a.jpg" },
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }

}
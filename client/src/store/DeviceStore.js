import { makeAutoObservable } from 'mobx'

export class DeviceStore {
    constructor () {
        this._types = [
            { id: 1, name: 'холодильники' },
            { id: 2, name: 'смартфоны' }
        ]
        this._brands = [
            { id: 1, name: 'samsung' },
            { id: 2, name: 'apple' }
        ]

        this._devices = [
            {
                id: 1,
                name: 'Iphone 12 Pro',
                price: 10000,
                rating: 5,
                img: 'https://st.depositphotos.com/3228497/4236/v/450/depositphotos_42366715-stock-illustration-smart-phone-android-vector.jpg'
            },
            {
                id: 2,
                name: 'Iphone 12 Pro',
                price: 10000,
                rating: 5,
                img: 'https://st.depositphotos.com/3228497/4236/v/450/depositphotos_42366715-stock-illustration-smart-phone-android-vector.jpg'
            },
            {
                id: 3,
                name: 'Iphone 12 Pro',
                price: 10000,
                rating: 5,
                img: 'https://st.depositphotos.com/3228497/4236/v/450/depositphotos_42366715-stock-illustration-smart-phone-android-vector.jpg'
            },
            {
                id: 4,
                name: 'Iphone 12 Pro',
                price: 10000,
                rating: 5,
                img: 'https://st.depositphotos.com/3228497/4236/v/450/depositphotos_42366715-stock-illustration-smart-phone-android-vector.jpg'
            },
            {
                id: 5,
                name: 'Iphone 12 Pro',
                price: 10000,
                rating: 5,
                img: 'https://st.depositphotos.com/3228497/4236/v/450/depositphotos_42366715-stock-illustration-smart-phone-android-vector.jpg'
            }
        ]

        makeAutoObservable(this)
    }

    setTypes (types) {
        this._types = types
    }

    setBrands (brands) {
        this._brands = brands
    }

    setDevices (devices) {
       this._devices = devices
    }

    get types () {
        return this._types
    }
    get brands () {
        return this._brands
    }
    get devices () {
        return this._devices
    }
}

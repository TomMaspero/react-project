const products = [
    {
        id: '1',
        name: 'Xbox Series X',
        img: 'images/duck.jpg',
        price: 500,
        category: 'consoles',
        stock: 6,
        description: 'Description of Xbox Series X',
    },
    {
        id: '2',
        name: 'Playstation 5',
        img: 'images/duck.jpg',
        price: 499,
        category: 'consoles',
        stock: 2,
        description: 'Description of Playstation 5',
    },
    {
        id: '3',
        name: 'Elden Ring',
        img: 'images/duck.jpg', 
        price: 60,
        category: 'videogames',
        stock: 15,
        description: 'Description of Elden Ring',

    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    }))
} 
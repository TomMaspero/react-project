const products = [
    {
        id: '1',
        name: 'Xbox Series X',
        img: 'images/Microsoft-Xbox-Series-X.jpg',
        price: 499.99,
        category: 'consoles',
        stock: 6,
        description: 'Description of Xbox Series X',
        rating: 4.5,
        seller: 'Microsoft',
    },
    {
        id: '2',
        name: 'Playstation 5',
        img: 'images/Sony-PlayStation-5-Console.jpg',
        price: 499.99,
        category: 'consoles',
        stock: 2,
        description: 'Description of Playstation 5',
        rating: 4.8,
        seller: 'Sony',
    },
    {
        id: '3',
        name: 'Elden Ring',
        img: 'images/Elden-Ring-Steam.jpg', 
        price: 59.99,
        category: 'games',
        stock: 15,
        description: 'Description of Elden Ring',
        rating: 4.9,
        seller: 'Bandai',
    },
    {
        id: '4',
        name: 'Dark Souls Remastered',
        img: 'images/Dark-Souls-Remastered-Steam.jpg', 
        price: 39.99,
        category: 'games',
        stock: 12,
        description: 'Description of Dark Souls',
        rating: 4.1,
        seller: 'Bandai',
    },
    {
        id: '5',
        name: 'Minecraft',
        img: 'images/Minecraft-Xbox-One.jpg', 
        price: 29.99,
        category: 'games',
        stock: 18,
        description: 'Description of Minecraft',
        rating: 4.7,
        seller: 'Microsoft',
    },
    {
        id: '6',
        name: 'Nintendo Switch',
        img: 'images/Nintendo-Switch-OLED.jpg', 
        price: 349.99,
        category: 'consoles',
        stock: 6,
        description: 'Description of Nintendo Switch',
        rating: 4.1,
        seller: 'Nintendo',
    },
    {
        id: '7',
        name: "No Man's Sky",
        img: 'images/No-Mans-Sky-NS.jpg', 
        price: 29.99,
        category: 'games',
        stock: 7,
        description: "Description of No Man's Sky",
        rating: 3.9,
        seller: 'Hello Games',
    },
    {
        id: '8',
        name: 'Dark Souls II',
        img: 'images/Dark-Souls-II-Steam.jpg', 
        price: 39.99,
        category: 'games',
        stock: 5,
        description: 'Description of Dark Souls II',
        rating: 3.7,
        seller: 'Bandai',
    },
    {
        id: '9',
        name: 'Xbox Series S',
        img: 'images/Microsoft-Xbox-Series-S-Digital-Edition.jpg', 
        price: 299.99,
        category: 'consoles',
        stock: 4,
        description: 'Description of Xbox Series S',
        rating: 3.8,
        seller: 'Microsoft',
    },
    {
        id: '10',
        name: 'Xbox One',
        img: 'images/Microsoft-Xbox-One.jpg', 
        price: 149.99,
        category: 'consoles',
        stock: 3,
        description: 'Description of Xbox One',
        rating: 4.0,
        seller: 'Microsoft',
    },
    {
        id: '11',
        name: "Demon's Souls",
        img: 'images/Demons-Souls-PS5.jpg', 
        price: 59.99,
        category: 'games',
        stock: 5,
        description: "Description of Demon's Souls",
        rating: 4.6,
        seller: 'Sony',
    },
    {
        id: '12',
        name: 'Halo The Master Chief Collection',
        img: 'images/Halo-The-Master-Chief-Collection---Xbox-One.jpg', 
        price: 29.99,
        category: 'games',
        stock: 10,
        description: 'Description of Halo The Master Chief Collection',
        rating: 4.4,
        seller: 'Microsoft',
    },
    {
        id: '13',
        name: 'Halo Infinite',
        img: 'images/Halo-Infinite---Xbox-Series-X.jpg', 
        price: 54.99,
        category: 'games',
        stock: 11,
        description: 'Description of Halo Infinite',
        rating: 3.8,
        seller: 'Microsoft',
    },
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

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
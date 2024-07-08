import GreenPressedBottle from '../assets/greenPressedBottle.png'; //Remove/Change Image

const itemsArray = [
    {
        id: 1,
        title: "Green",
        image: GreenPressedBottle,
        price: 4.99,
        description: "WIP",
        benefits: "WIP",
        ingredients: "WIP",
        newItem: true,
        available: true,
        slug:"green-juice"
    },
    {
        id: 2,
        title: "Orange",
        image: GreenPressedBottle,
        price: 4.99,
        description: "WIP",
        benefits: "WIP",
        ingredients: "WIP",
        newItem: false,
        available: false,
        slug:"orange-juice"
    },
    {
        id: 3,
        title: "Red",
        image: GreenPressedBottle,
        price: 4.99,
        shortDescription: "WIP",
        LongDescription: "WIP",
        newItem: false,
        available: false
    },
    {
        id: 4,
        title: "Purple",
        image: GreenPressedBottle,
        price: 4.99,
        shortDescription: "WIP",
        LongDescription: "WIP",
        newItem: false,
        available: false
    },
    {
        id: 5,
        title: "5x5 Detox Carrot Juice",
        image: GreenPressedBottle,
        price: 29.99,
        shortDescription: "WIP",
        LongDescription: "WIP",
        newItem: true,
        available: true
    }
]

const getItemData = (id) => {
    let itemData = itemsArray.find(item => item.id === id)

    if(itemData === undefined){
        console.log(`Item ${id} is undefined`)
    }

    return itemData;
}

export {itemsArray, getItemData}
export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#0043F9',
    backgroundLight: '#FOFOF3', 
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
}
export const Items = [

    {
    id:1,
    category: 'products',
    serviceName: 'Home Clening',
    servicesPrice: '25$',
    description: 'all types of home cleaning contact me',
    isoff: true,
    offPercentage: 15,
    productImage: require('../database/images/products/electrical.jpg'),
    isAvailable: true,
    productImageList: [
        require('../database/images/products/parlour.jpg'),
        require('../database/images/products/plumber-fixing-.jpg'),
        require('../database/images/products/wallpainter.jpg'),
        ],
    },

    {
        id:2,
        category: 'service',
        serviceName: 'Home Clening',
        servicesPrice: '25$',
        description: 'all types of home cleaning contact me',
        isoff:true,
        offPercentage: 15,
        productImage:require('../database/images/products/plumber.jpg'),
        },

        {
            id:3,
            category: 'accessory',
            serviceName: 'Home Clening',
            servicesPrice: '25$',
            description: 'all types of home cleaning contact me',
            isoff: true,
            offPercentage: 15,
            productImage: require('../database/images/products/wallpainter.jpg'),
            isAvailable: true,
            productImageList: [
                require('../database/images/products/parlour.jpg'),
                require('../database/images/products/wallpainter.jpg'),
                //require('../database/images/products/Washing-Machine-Repair-1.jpg'),
                ],
            },
];
export default Items;
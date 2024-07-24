import { ProductModel } from "../models/product.model";

export class ProductService {
  listofproducts: ProductModel[] = [
    {
      id: '2',
      title: 'OLED TV',
      price: 25000,
      rating: 3,
      imageUrl:
        'https://www.lg.com/content/dam/channel/wcms/in/images/tvs/oled65a3psa_atr_eail_in_c/gallery/TV-OLED-65-A3-A-Gallery-01.jpg/_jcr_content/renditions/thum-1600x1062.jpeg',
      likes: 500,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '3',
      title: 'Desktop',
      price: 10000,
      rating: 3,
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/I/41IjXCFmiRL._SL500_AC_SS350_.jpg',
      likes: 200,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '4',
      title: 'Mobile',
      price: 20000,
      rating: 5,
      imageUrl:
        'https://5.imimg.com/data5/SELLER/Default/2022/3/BK/TA/UG/148618475/vivo-y19-mobile-phones.jpg',
      likes: 400,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '5',
      title: 'Q-OLED TV',
      price: 25000,
      rating: 3,
      imageUrl:
        'https://www.lg.com/content/dam/channel/wcms/in/images/tvs/oled65a3psa_atr_eail_in_c/gallery/TV-OLED-65-A3-A-Gallery-01.jpg/_jcr_content/renditions/thum-1600x1062.jpeg',
      likes: 500,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];
}
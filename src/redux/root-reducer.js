import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';
import CartReducer from './cart/cart-reducer';
import { ShopReducer } from './shop/shop.reducer';
import { DirectoryReducer } from './directory/directory.reducer';

export default combineReducers({
    user: userReducer,
    cart: CartReducer,
    shop: ShopReducer,
    directory: DirectoryReducer
});
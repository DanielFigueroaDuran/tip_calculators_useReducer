import { Dispatch } from 'react';
import { OrderActions } from '../reducer/order-reducer';
import { MenuItem } from '../types';


type MenuItemsProps = {
      item: MenuItem,
      dispatch: Dispatch<OrderActions>

}

const MenuItems = ({ item, dispatch }: MenuItemsProps) => {
      const { name, price } = item;

      return (
            <button
                  className='border border-teal-400 w-full flex items-center justify-between p-3 hover:bg-teal-200'
                  onClick={() => dispatch({ type: 'add-item', payload: { item } })}
            >
                  <p className="">{name}</p>
                  <p className="font-black">$ {price}</p>
            </button>
      )
}

export default MenuItems
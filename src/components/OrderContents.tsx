import { Dispatch } from 'react'
import { MenuItem, OrderItem } from '../types';
import { formatCurrency } from '../helpers';
import { OrderActions } from '../reducer/order-reducer';

type OrderContentsProps = {
      order: OrderItem[],
      dispatch: Dispatch<OrderActions>
}

const OrderContents = ({ order, dispatch }: OrderContentsProps) => {
      //console.log(order);
      return (
            <div>
                  <h2 className="font-black text-4xl">Consumo</h2>

                  <div className="space-y-3 mt-10">
                        {
                              order.map(item => (
                                    <div
                                          className='flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b'
                                          key={item.id}>
                                          <div className="">
                                                <p>{item.name} - {formatCurrency(item.price)}</p>
                                                <p className="font-bold">Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>

                                          </div>
                                          <button
                                                className="bg-red-600 w-8 h-8 text-white font-bold  rounded-full"
                                                onClick={() => dispatch({ type: 'remove-item', payload: { id: item.id } })}
                                          >X</button>

                                    </div>
                              ))
                        }
                  </div>
            </div>
      )
}

export default OrderContents
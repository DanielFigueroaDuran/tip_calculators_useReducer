import React from 'react'
import { MenuItems, OrderItem } from '../types';
import { formatCurrency } from '../helpers';

type OrderContentsProps = {
      order: OrderItem[],
      removeItem: (id: MenuItems['id']) => void
}

const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
      // console.log(order);
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
                                                onClick={() => removeItem(item.id)}
                                          >X</button>

                                    </div>
                              ))
                        }
                  </div>
            </div>
      )
}

export default OrderContents
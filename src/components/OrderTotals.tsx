import { Dispatch, useMemo } from 'react'
import { OrderItem } from '../types'
import { formatCurrency } from '../helpers'
import { OrderActions } from '../reducer/order-reducer'

type OrderTotalProps = {
      order: OrderItem[],
      tip: number,
      dispatch: Dispatch<OrderActions>
}

const OrderTotals = ({ order, tip, dispatch }: OrderTotalProps) => {
      const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order]);
      const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
      const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order]);


      return (
            <>
                  <div className="space-y-3">
                        <h2 className="font_bold text-2xl">Totales y Propinas</h2>
                        <p>Subtotal a pagar: {''}
                              <span className='font-bold'>{formatCurrency(subtotalAmount)}</span>
                        </p>

                        <p>Propinas: {''}
                              <span className='font-bold'>{formatCurrency(tipAmount)}</span>
                        </p>

                        <p>Total a pagar: {''}
                              <span className='font-bold'>{formatCurrency(totalAmount)}</span>
                        </p>
                  </div>

                  <button
                        className='w-full bg-black text-white font-bold rounded uppercase p-3 mt-18  disabled:opacity-10'
                        disabled={totalAmount === 0}
                        onClick={() => dispatch({ type: 'place-order' })}
                  >
                        Guardar Orden
                  </button>
            </>
      )
}

export default OrderTotals
import React, { useMemo } from 'react'
import { OrderItem } from '../types'
import { formatCurrency } from '../helpers'

type OrderTotalProps = {
      order: OrderItem[],
      tip: number,
      placeOrder: () => void
}

const OrderTotals = ({ order, tip, placeOrder }: OrderTotalProps) => {
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
                        onClick={() => placeOrder()}
                  >
                        Guardar Orden
                  </button>
            </>
      )
}

export default OrderTotals
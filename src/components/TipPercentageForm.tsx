import { Dispatch } from 'react'
import { tipOptions } from '../data/db'
import { OrderActions } from '../reducer/order-reducer';

type TipPercentageFormProps = {
      tip: number,
      dispatch: Dispatch<OrderActions>
}

const TipPercentageForm = ({ tip, dispatch }: TipPercentageFormProps) => {

      return (
            <div>
                  <h3 className="font-bold text-2xl">Propinas</h3>

                  <form>
                        {tipOptions.map(tipOption => (
                              <div
                                    className='flex gap-2 p-2'
                                    key={tipOption.id}
                              >
                                    <input
                                          type='radio'
                                          id={tipOption.id}
                                          name='tip'
                                          value={tipOption.value}
                                          onChange={e => dispatch({ type: 'add-tip', payload: { value: + e.target.value } })}
                                          checked={tipOption.value === tip}
                                    />
                                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                              </div>
                        ))}
                  </form>
            </div>
      )
}

export default TipPercentageForm
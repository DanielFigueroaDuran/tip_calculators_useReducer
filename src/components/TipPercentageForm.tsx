import React from 'react';
import type { Dispatch, SetStateAction } from 'react'
import { tipOptions } from '../data/db'

type TipPercentageFormProps = {
      setTip: Dispatch<SetStateAction<number>>,
      tip: number
}

const TipPercentageForm = ({ setTip, tip }: TipPercentageFormProps) => {

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
                                          onChange={e => setTip(+ e.target.value)}
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
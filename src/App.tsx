import { useReducer } from "react";
import MenuItems from "./components/MenuItems"
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import { initialState, orderReducer } from "./reducer/order-reducer";

function App() {
  const { tip, setTip, placeOrder } = useOrder();

  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <div className="">
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid  md:grid-cols-2 ">

        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItems
                key={item.id}
                item={item}
                dispatch={dispatch}

              />
            ))
            }
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {state.order.length ? (
            <>
              <OrderContents
                order={state.order}
                dispatch={dispatch}
              />

              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />

              <OrderTotals
                order={state.order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          )
            : <p className="text-center">La Orden esta vacia</p>
          }

        </div>

      </main>
    </div>
  )
}

export default App

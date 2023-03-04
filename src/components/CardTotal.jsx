import React from "react";

const taxRate = 0.18;
const shipping = 25;

const CardTotal = ({products}) => {
  
  const subTotal = products.reduce((acc,product)=> product.price * product.amount * product.dampingRate + acc, 0)
  // console.log(subTotal);
  return (
    <table className="table w-100">
      <tbody>
        <tr className="text-end">
          <th className="text-start">subTotal</th>
          <td>
            $<span className="subtotal">{subTotal.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Tax(18%)</th>
          <td>
            $<span className="tax">{(subTotal*taxRate).toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Shipping (Above $300 Free)</th>
          <td>
            $<span className="shipping">
              {subTotal>300 ? 0 : shipping}
            </span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Total</th>
          <td>
            $
            <span className="total">{(subTotal + (subTotal>300 ? 0 : shipping) + (subTotal*taxRate)).toFixed(2)}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardTotal;

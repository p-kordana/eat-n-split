import React, { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ selectedFriend, onBalanceUpdate }) {
  const [bill, setBill] = useState(0);
  const [myCost, setMyCost] = useState(0);
  const [whoIsPaying, setWhoIsPaying] = useState(0);
  const friendCost = bill - myCost;

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !myCost) return;

    onBalanceUpdate(whoIsPaying === 0 ? friendCost : -myCost);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>Your Cost</label>
      <input
        type="text"
        value={myCost}
        onChange={(e) =>
          setMyCost(
            Number(e.target.value) > bill ? myCost : Number(e.target.value)
          )
        }
      />

      <label>{`${selectedFriend.name}'s Cost`}</label>
      <input type="text" disabled value={friendCost} />

      <label>Who's Paying?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(Number(e.target.value))}
      >
        <option value={0}>You</option>
        <option value={1}>{selectedFriend.name}</option>
      </select>

      <Button onClick={handleSubmit}>Add</Button>
    </form>
  );
}

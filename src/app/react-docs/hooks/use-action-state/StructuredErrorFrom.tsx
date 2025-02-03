"use client";

import { useActionState } from "react";
import { addToCartWithStructuredState } from "./example-two.action";

export default function StructuredErrorForm({
  itemID,
  itemTitle,
}: {
  itemID: string;
  itemTitle: string;
}) {
  const [state, formAction, isPending] = useActionState(
    addToCartWithStructuredState,
    {
      success: false,
      cartSize: 0,
    }
  );

  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit">Add to Cart with structured state</button>
      {isPending ? (
        "Loading..."
      ) : (
        <>
          {state.success
            ? `Added to cart. Cart size: ${state.cartSize}`
            : "Failed to add to cart."}
        </>
      )}
    </form>
  );
}

"use client";
import { useActionState } from "react";
import { addToCart } from "./example-one.action";

export default function AddToCartForm({
  itemID,
  itemTitle,
}: {
  itemID: string;
  itemTitle: string;
}) {
  const [message, formAction, isPending] = useActionState(addToCart, null);

  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit">Add to Cart</button>
      {isPending ? "Loading..." : message}
    </form>
  );
}

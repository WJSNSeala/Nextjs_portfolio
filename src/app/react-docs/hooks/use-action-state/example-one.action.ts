"use server";

export async function addToCart(prevState: string | null, queryData: FormData) {
  const itemID = queryData.get("itemID");

  if (itemID === "1") {
    return "Item added to cart!";
  } else {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return "Counldn't add item to cart";
  }
}

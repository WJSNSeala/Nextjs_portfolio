"use server";

export async function addToCartWithStructuredState(
  prevState: {
    success: boolean;
    cartSize: number;
  },
  queryData: FormData
) {
  const itemID = queryData.get("itemID");

  if (itemID === "1") {
    return {
      success: true,
      cartSize: 12,
    };
  } else {
    return {
      success: false,
      cartSize: -1,
    };
  }
}

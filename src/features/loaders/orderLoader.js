import React from "react";
import { getOrder } from "../../services/apiRestaurant";

export async function orderLoader({ params }) {
  const orden = await getOrder(params);
  console.log(orden);
  return orden;
}

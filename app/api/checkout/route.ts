import { Product } from "@/types/Product";
import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

export const POST = async (request: NextRequest) => {
  const reqBody = await request.json();
  const { items, email } = reqBody;

  const extractingItems = items.map((item: Product) => (
    {
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: Number(item.price) * 100,
        product_data: {
          name: item.name,
          description: item.size,
          images: [item.thumbnail],
        },
      },
    }
  ));

  const orderData = items.map((item: Product) => (
    {
      external_variant_id: item.external_variant_id,
      quantity: item.quantity,
    }
  ));

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2023-10-16",
    });




    const session = await stripe.checkout.sessions.create({
      line_items: extractingItems,
      mode: "payment",
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ['US']
      },
      shipping_options: [
        {
          shipping_rate: "shr_1Ny2LiFXWggz9FO3FWaO5140"
        }
      ],
      phone_number_collection: {
        enabled: true,
      },
      billing_address_collection: "required",
      success_url: `${process.env.NEXTAUTH_URL}/success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/`,
      metadata: {
        email,
        items: JSON.stringify(orderData),
      },
    });
    return NextResponse.json({
      message: "Connection is Active",
      success: true,
      id: session.id,
    });
  } catch (error: any) {
    console.log(extractingItems)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};



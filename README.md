# Printufl + Next.js Template

This is a template for creating an online ecommerce store from 0 to production for $0! It's optimized to use the printful API to import product data from your online store with stripe as the checkout provider.

[Demo]()

## Technologies Used

- [Next.js 13](https://nextjs.org/docs/getting-started)
- [Printful API]()
- [Redux]()
- [Stripe]()
- [Clerk Auth]()
- [React Hot Toast]()
- [TypeScript](https://www.typescriptlang.org/)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## Features

- Secure Payments
- Automatic Order Creation
- Built with Next.js
- Custom Cart(Redux) & Custom Checkout (Stripe)
- Styled With tailwind CSS
- Fully Typed
- One Click Deployable
- .... and more coming soon

## Setup

You'll first need to setup Stripe, Printful, and Clerk before you can run the storefront locally, or deploy.

Please also not that you will not be able to use the webhook functionality if you do not have your project deployed.


### 1. Setup Printful

<details>
  <summary>Login or create an account</summary>

You can [login](https://www.printful.com/auth/login), or [sign up](https://www.printful.com/auth/register) with Facebook, Google, Apple, and your email.

</details>

<details>
  <summary>Create a new store</summary>
  
  You'll want to select **Manual order platform / API** from the available methods when [creating a new store](https://www.printful.com/dashboard/store).
</details>

<details>
  <summary>Add products to your inventory</summary>
  
  Let's add a product to your store.

1. Select from over 200 hundred products which you would like to sell.
2. Configure the product design by adding your logo, selecting available colors, and sizes.
3. Next, proceed to mockups to select the image that will be shown in the storefront. You can select from people wearing your product, to flat wrinkled mockups. **Make sure to select `PNG` as your "mockup format" when creating your product.**
4. Next, proceed to details where you can name your product. This name will be shown in the storefront.
5. Next, proceed to pricing, and set some prices. Here you'll see the price it costs you, and the retail prices you'll charge your customers. You can quickly increase/decrease the profit margin here too.
6. **Save product**

That's it! 🎉 Repeat this step for all products you want to sell.

ℹ️ Don't forget, shipping and taxes are extra!

ℹ️ You can optionally create a [**Product Template**](https://www.printful.com/dashboard/product-templates) for items you may want to add to additional stores later.

</details>

<details>
  <summary>Configure selling preferences</summary>
  
  Inside **Settings** > **Stores**, you'll want to configure your default selling preferences. You can specify your selling region. You can opt to sell worldwide, and choose products from a wide variety of products, or you can set a specific region, such as the UK.

Depending on where you sell, you'll be liable to pay (or collect + pay) VAT. If you are VAT registered, provide Printful your VAT ID so orders can reflect a zero VAT amount where applicable.

📺 [Learn more about VAT and Printful](https://www.youtube.com/watch?v=LiqGcE267UA)

ℹ️ If you need to collect VAT from customers, make sure to enable the Tax API with Snipcart.

</details>

<details>
  <summary>Configure shipping preferences</summary>
  
  Inside **Settings** > **Stores** > **Shipping**, you'll want to configure the USA & Europe settings.

The defaults should work for most, but you might want to make some adjustments for domestic and international shipping.

</details>

<details>
  <summary>Create a Printful Private token</summary>
  
Inside **Settings** > **Stores** > **API**, click visit [Printful Developers](https://developers.printful.com/login).

From here you will want to create a new **Private token**, select the store you want to give this token access to, select the permissions (all), set an expiry and copy the value for use later as `PRINTFUL_API_KEY`.

</details>

<details>
  <summary>Add a billing method</summary>
  
You'll want to add a [billing method](https://www.printful.com/dashboard/billing/billing-methods) to Printful so you can fulfill orders.

When a customer makes an order, Printful will charge YOU to process the order. 📺 [Learn more how Printful processes payments for order fulfillment](https://www.youtube.com/watch?v=_5lsHL8wji4&t=2s).

</details>

### 2. Setup Stripe

<details>
  <summary>Login or create an account</summary>

You'll need to [register](https://www.stripe.com/), or [login](https://www.stripe.com) to Snipcart.

</details>

<details>
  <summary>API key</summary>

When your account is setup you will be able to see a button in the top navigation bar that will say 'Developers'. 

In this Developers dashboard you will be able to access the API keys for your Stripe account to be used in payment collection.
</details>

<details>
  <summary>Configure your website domain</summary>

It's important you configure your **Default Website Domain** so Stripe can successfully validate when checkouts are completed and 
initaite the webhook code that will create the printful order.

You may also want to add other domains, and subdomains if you're working locally with this but stripe also provides testing capability.

The domain you provide here will be your live URL, such as `staterecomm.com`.

</details>

<details>
  <summary>Configure webhooks</summary>

You'll want to configure the endpoint for webhooks. This webhook will be triggered at the post purchase stage.

This projects webhook is designed to listen for when **checkout.session.completed** but this can be customized to your desire.

Be sure to configure your webhook properly to access the automated order creation process.

For example, when a customer places a successful order, this webhook will be triggered, and it will call a function to add the order to Printful.

</details>


### 3. Setup Clerk

<details>
  <summary>Login or create an account</summary>

You need to [login](https://www.Clerk.com), or [sign up](https://www.Clerk.com) for [Clerk]().

</details>

<details>
  <summary>Create a new store and Access API Keys</summary>
  
  You'll want to create an application register on clerk. After you create and application register and you reach the dashboard of that application.
    on the left side navigation at the bottom you will see 'API Keys'. These keys are all you need to get started. No mandatory customization is needed for Clerk.
</details>

### 4. Deploy

<details>
<summary> Fill in the '.env' file in the project with your API keys</summary>
</details>

## Running locally

Next Install the project dependencies, and start the local server:

```bash
pnpm install
pnpm run dev

```

Open [http://localhost:3000](http://localhost:3000) to see the storefront locally! 🚀

### Server Actions & API Routes

<details>
<summary>Fetching Products<summary>
    This template includes 4 server action functions for fetching products by category or only singular products.
    There is also general server action functions, that fetch all products or fetch all product IDs.
    The props for theses functions can be found by using the 'data' page. The 'data' page under the 'app' directory
    returns the json data of your stores products. This data can be used to fill in the props of the getCategory function.
    
</details>

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).

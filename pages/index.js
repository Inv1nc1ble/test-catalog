import Head from "next/head";

import Authors from "../components/authors/Authors";
import Calculation from "../components/calculation/Calculation";
import EarnWith from "../components/earnWith/EarnWith";
import FAQ from "../components/faq/FAQ";
import Features from "../components/features/Features";
import Intro from "../components/intro/Intro";
import Monetization from "../components/monetization/Monetization";
import MonthIncome from "../components/monthIncome/MonthIncome";
import Subscription from "../components/subscription/Subscription";
import OrderCall from "../components/orderCall/OrderCall";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Great Catalog</title>
        <meta name="description" content="The Great Catalog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro />

      <Monetization />

      <MonthIncome />

      <Calculation />

      <EarnWith />

      <Features />

      <Authors />

      <Subscription />

      <FAQ />

      <OrderCall />
    </div>
  );
}

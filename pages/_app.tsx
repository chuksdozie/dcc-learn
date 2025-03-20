import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import PageLayout from "@/layout/PageLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}

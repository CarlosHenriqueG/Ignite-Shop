import { GlobalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

import { Container, Header } from "@/styles/pages/app";

import Image from "next/image";
import Link from "next/link";
import logoImg from "../assets/logo.svg";

GlobalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href={`/`} prefetch={false}>
          <Image src={logoImg} alt="" />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}

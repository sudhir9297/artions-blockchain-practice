import "../styles/globals.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Art, Collection, Bucket, Dashboard } from "../constant/svg";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="flex">
      <nav className="h-screen bg-white w-48">
        <p className="logo mx-5 ">
          art<span>ions</span>
        </p>
        <div className="flex mt-4 flex-col w-full">
          <Link href="/">
            <div
              className={
                router.pathname === "/"
                  ? "optionContainer active"
                  : "optionContainer"
              }
            >
              <div className="mr-5">{Dashboard()}</div>
              <div className="optionName text-sm font-medium">Home</div>
            </div>
          </Link>
          <Link href="/create-item">
            <div
              className={
                router.pathname === "/create-item"
                  ? "optionContainer active"
                  : "optionContainer"
              }
            >
              <div className="mr-5">
                {Art({ width: "24px", height: "22px" })}
              </div>
              <div className="optionName text-sm font-medium">
                Sell Digital Asset
              </div>
            </div>
          </Link>
          <Link href="/my-assets">
            <div
              className={
                router.pathname === "/my-assets"
                  ? "optionContainer active"
                  : "optionContainer"
              }
            >
              <div className="mr-5">
                {Bucket({ width: "24px", height: "24px" })}
              </div>
              <div className="optionName text-sm font-medium">
                My Digital Assets
              </div>
            </div>
          </Link>
          <Link href="/creator-dashboard">
            <div
              className={
                router.pathname === "/creator-dashboard"
                  ? "optionContainer active"
                  : "optionContainer"
              }
            >
              <div className="mr-5">
                {Collection({ width: "22px", height: "22px" })}
              </div>
              <div className="optionName text-sm font-medium">
                Creator Dashboard
              </div>
            </div>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

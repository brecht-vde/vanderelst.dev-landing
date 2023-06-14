"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";
const GA = () => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
    </>
  );
};

export default GA;

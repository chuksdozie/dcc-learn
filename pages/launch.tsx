import { useEffect } from "react";
import { useRouter } from "next/router";
import AboutUs from "@/components/about_us/AboutUs";

const Launch = () => {
  const router = useRouter();

  useEffect(() => {
    window.location.href = "https://youtu.be/kKlQlgzMLvw";
  }, []);

  return <AboutUs />;
};

export default Launch;

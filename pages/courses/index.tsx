import { useEffect } from "react";
import { useRouter } from "next/router";
import AboutUs from "@/components/about_us/AboutUs";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    // window.location.href = "https://youtu.be/kKlQlgzMLvw";
    console.log({ router: router.asPath });
  }, [router]);

  return <div>List of courses</div>;
};

export default Index;

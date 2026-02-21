import Clock from "@/components/Clock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Clock",
  description: "Production grade Next.js Digital Clock",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Clock />
    </section>
  );
};

export default page;

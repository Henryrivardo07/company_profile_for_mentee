import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/ui/feature-card";
import SkewMotion from "@/components/ui/skew-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      id="hero"
      className="custom-container md:pt-36.75 pt-28 overflow-hidden gap-7 items-center flex-wrap flex"
    >
      {/* kiri */}
      <div className="flex-[5.2] basis-80">
        <h1
          id="hero-heading"
          className="display-lg-bold md:display-2xl-bold text-neutral-25"
        >
          Your Trusted IT{" "}
          <span className="text-primary-300">Partner for Digital </span>Success
        </h1>
        <p className="text-sm-regular md:text-md-regular mt-3 text-neutral-400">
          We craft custom IT solutions that align with your goals, ensuring
          efficiency, security, and innovation
        </p>
        <Button asChild className="mt-6 w-full md:mt-12 md:w-fit">
          <Link aria-label="Get Started" href="#contact">
            Get Started
          </Link>
        </Button>
      </div>

      {/* kanan */}
      <div
        className="flex-[4.8] basis-80 relative"
        style={{ height: " clamp(21.25rem, 52.78vw, 39.85rem)" }}
      >
        <SkewMotion asChild>
          <Image
            alt="hero-image"
            src="/images/hero-image.png"
            fill
            className="object-contain"
          />
        </SkewMotion>
        <FeatureCard
          title="Elite Solutions"
          className="absolute top-[10%] right-1/2 -translate-x-[6.25%]"
          description="Cutting-edge tech, flawless execution"
          icon={<Icon icon="mingcute:flash-fill" />}
        />
        <FeatureCard
          title="Smart Tech"
          className="absolute top-[43%] left-1/2 translate-x-[37.5%]"
          description="Innovation that drives real growth."
          icon={<Icon icon="ri:brain-fill" />}
        />
        <FeatureCard
          title="Real Impact"
          className="absolute top-[49%] right-1/2 -translate-x-[48%]"
          description="We turn ideas into measurable success"
          icon={<Icon icon="heroicons:chart-bar-16-solid" />}
        />
        <div className="bottom-0 absolute inset-x-0 h-[26%] from-base-background bg-gradient-to-t to-transparent" />
      </div>
    </section>
  );
};

export default Hero;

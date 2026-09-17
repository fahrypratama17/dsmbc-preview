"use client";

import Image from "next/image";

export default function BackgroundDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-40">
      <Image
        src={"/images/bg-2.svg"}
        alt=""
        className="absolute -right-24 lg:right-0 top-112 lg:top-100.5 lg:w-77.5 lg:h-180"
        width={179}
        height={261}
      />
      <Image
        src={"/images/bg-3.svg"}
        alt=""
        className="absolute -left-12 lg:left-10 top-215 lg:top-175 lg:w-39.5 lg:h-39.5"
        width={106}
        height={106}
      />
      <Image
        src={"/images/bg-4.svg"}
        alt=""
        className="absolute -left-20 lg:-left-6 top-333.75 lg:top-348.5 lg:w-133.75 lg:h-211.25"
        width={308}
        height={466}
      />
      <Image
        src={"/images/bg-5.svg"}
        alt=""
        className="absolute -right-3 lg:right-8 top-321.25 lg:top-336.5 rotate-45 lg:w-21.75 lg:h-21.75"
        width={32}
        height={39}
      />
      <Image
        src={"/images/bg-5.svg"}
        alt=""
        className="absolute right-8 lg:right-32 top-335.5 lg:top-378.75 lg:w-21.75 lg:h-21.75"
        width={32}
        height={39}
      />
      <Image
        src={"/images/bg-5.svg"}
        alt=""
        className="absolute -right-3 lg:right-6 top-353.75 lg:top-[1698px] rotate-12 lg:w-21.75 lg:h-21.75"
        width={32}
        height={39}
      />
      <Image
        src={"/images/bg-6.svg"}
        alt=""
        className="hidden lg:block absolute right-0 top-[2270px] w-83.25 h-138.75"
        width={333}
        height={555}
      />
      <Image
        src={"/images/bg-7.svg"}
        alt=""
        className="absolute -left-3 lg:left-64 top-[3000px] lg:top-[3264px] lg:w-215 lg:h-276.75"
        width={533}
        height={686}
      />
      <Image
        src={"/images/bg-8.svg"}
        alt=""
        className="absolute right-3 lg:right-0 top-[5818px] lg:top-[6190px] lg:w-137.75 lg:h-222.5"
        width={303}
        height={488}
      />
    </div>
  );
}

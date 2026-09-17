"use client";

import Image from "next/image";

export default function BackgroundDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-40">
      <Image
        src={"/images/bg-2.svg"}
        alt=""
        className="absolute -right-24 lg:right-0 top-[448px] lg:top-[402px] lg:w-[310px] lg:h-[720px]"
        width={179}
        height={261}
      />
      <Image
        src={"/images/bg-3.svg"}
        alt=""
        className="absolute -left-12 lg:left-10 top-[860px] lg:top-[700px] lg:w-[158px] lg:h-[158px]"
        width={106}
        height={106}
      />
      <Image
        src={"/images/bg-4.svg"}
        alt=""
        className="absolute -left-20 lg:-left-6 top-[1335px] lg:top-[1394px] lg:w-[535px] lg:h-[845px]"
        width={308}
        height={466}
      />
      <Image
        src={"/images/bg-5.svg"}
        alt=""
        className="absolute -right-3 lg:right-8 top-[1285px] lg:top-[1346px] rotate-45 lg:w-[87px] lg:h-[87px]"
        width={32}
        height={39}
      />
      <Image
        src={"/images/bg-5.svg"}
        alt=""
        className="absolute right-8 lg:right-32 top-[1342px] lg:top-[1515px] lg:w-[87px] lg:h-[87px]"
        width={32}
        height={39}
      />
      <Image
        src={"/images/bg-5.svg"}
        alt=""
        className="absolute -right-3 lg:right-6 top-[1415px] lg:top-[1698px] rotate-12 lg:w-[87px] lg:h-[87px]"
        width={32}
        height={39}
      />
      <Image
        src={"/images/bg-6.svg"}
        alt=""
        className="hidden lg:block absolute right-0 top-[2270px] w-[333px] h-[555px]"
        width={333}
        height={555}
      />
      <Image
        src={"/images/bg-7.svg"}
        alt=""
        className="absolute -left-3 lg:left-64 top-[3000px] lg:top-[3264px] lg:w-[860px] lg:h-[1107px]"
        width={533}
        height={686}
      />
      <Image
        src={"/images/bg-8.svg"}
        alt=""
        className="absolute right-3 lg:right-0 top-[5818px] lg:top-[6190px] lg:w-[551px] lg:h-[890px]"
        width={303}
        height={488}
      />
    </div>
  );
}

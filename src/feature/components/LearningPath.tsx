import Image from "next/image";

const LearningPath = () => {
  return (
    <section className="flex flex-col gap-8 lg:gap-10 mb-28 lg:mb-44 px-6 md:px-24">
      <div className="flex gap-4 items-center justify-center text-light-blue">
        <hr className="border-light_blue border-1 w-16"/>
        <h1 className="text-center font-semibold text-base lg:text-xl">LEARNING PATH</h1>
        <hr className="border-light_blue border-1 w-16"/>
      </div>
      <div className="flex flex-col gap-2 md:gap-3 lg:gap-5">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 justify-items-center">
          <div className="flex lg:flex-col gap-6 lg:gap-8 items-center p-6 lg:px-10 lg:py-20 border-[1px] rounded-xl lg:rounded-[32px] w-full h-[105px] lg:w-[400px] lg:h-[496px] bg-neutral-50 border-gray-200">
            <div className="p-5 rounded-full bg-gradient-to-r from-gray-200 to-white">
              <Image
                src={("/images/startup.svg")}
                alt="-"
                className="justify-center lg:w-12 lg:h-12"
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col gap-1 lg:gap-4 items-start lg:items-center justify-start lg:justify-center text-left lg:text-center">
              <h1 className="font-medium text-xl lg:text-4xl text-slate-700">DAY 0</h1>
              <p className="font-medium text-sm lg:text-2xl text-gray-600">The Case Begins</p>
            </div>
          </div>
          <div className="flex lg:flex-col gap-6 lg:gap-8 items-center p-6 lg:px-10 lg:py-20 border-[1px] rounded-xl lg:rounded-[32px] w-full h-[105px] lg:w-[400px] lg:h-[496px] bg-neutral-50 border-gray-200">
            <div className="p-5 rounded-full bg-gradient-to-r from-gray-200 to-white">
              <Image
                src={("/images/folder-search.svg")}
                alt="-"
                className="justify-center lg:w-12 lg:h-12"
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col gap-1 lg:gap-4 items-start lg:items-center justify-start lg:justify-center text-left lg:text-center">
              <h1 className="font-medium text-xl lg:text-4xl text-slate-700">DAY 1</h1>
              <p className="font-medium text-sm lg:text-2xl text-gray-600">Uncovering Clues in the Data Through Investigation</p>
            </div>
          </div>
          <div className="flex lg:flex-col gap-6 lg:gap-8 items-center p-6 lg:px-10 lg:py-20 border-[1px] rounded-xl lg:rounded-[32px] w-full h-[105px] lg:w-[400px] lg:h-[496px] bg-neutral-50 border-gray-200">
            <div className="p-5 rounded-full bg-gradient-to-r from-gray-200 to-white">
              <Image
                src={("/images/search.svg")}
                alt="-"
                className="justify-center lg:w-12 lg:h-12"
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col gap-1 lg:gap-4 items-start lg:items-center justify-start lg:justify-center text-left lg:text-center">
              <h1 className="font-medium text-xl lg:text-4xl text-slate-700">DAY 2</h1>
              <p className="font-medium text-sm lg:text-2xl text-gray-600">Preparing the Evidence for Investigation</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 md:gap-3 lg:gap-5 justify-center">
          <div className="flex lg:flex-col gap-6 lg:gap-8 items-center p-6 lg:px-10 lg:py-20 border-[1px] rounded-xl lg:rounded-[32px] w-full h-[105px] lg:w-[400px] lg:h-[496px] bg-neutral-50 border-gray-200">
            <div className="p-5 rounded-full bg-gradient-to-r from-gray-200 to-white">
              <Image
                src={("/images/puzzle-piece.svg")}
                alt="-"
                className="justify-center lg:w-12 lg:h-12"
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col gap-1 lg:gap-4 items-start lg:items-center justify-start lg:justify-center text-left lg:text-center">
              <h1 className="font-medium text-xl lg:text-4xl text-slate-700">DAY 3</h1>
              <p className="font-medium text-sm lg:text-2xl text-gray-600">Solving the Mystery Through Predictive Modeling</p>
            </div>
          </div>
          <div className="flex lg:flex-col gap-6 lg:gap-8 items-center p-6 lg:px-10 lg:py-20 border-[1px] rounded-xl lg:rounded-[32px] w-full h-[105px] lg:w-[400px] lg:h-[496px] bg-neutral-50 border-gray-200">
            <div className="p-5 rounded-full bg-gradient-to-r from-gray-200 to-white">
              <Image
                src={("/images/presentation.svg")}
                alt="-"
                className="justify-center lg:w-12 lg:h-12"
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col gap-1 lg:gap-4 items-start lg:items-center justify-start lg:justify-center text-left lg:text-center">
              <h1 className="font-medium text-xl lg:text-4xl text-slate-700">DAY 4</h1>
              <p className="font-medium text-sm lg:text-2xl text-gray-600">Revealing the Answer: The Final Presentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
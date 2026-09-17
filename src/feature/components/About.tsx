const About = () => {
  return (
    <section className="flex flex-col px-6 md:px-24 gap-8 lg:gap-10 mb-28 lg:mb-44">
      <div className="flex gap-4 items-center justify-center text-light-blue">
        <hr className="border-light-blue border w-16"/>
        <h1 className="text-center font-semibold text-base lg:text-xl">ABOUT</h1>
        <hr className="border-light-blue border w-16"/>
      </div>
      <div className="flex flex-col gap-5 justify-center">
        <h1 className="font-semibold text-2xl lg:text-4xl text-slate-700 text-center">
          About <span className="text-orange-500">Data Science</span> Mini <br /> Bootcamp 2026
        </h1>
        <p className="font-medium text-base lg:text-xl text-gray-600 text-center mx-auto lg:mx-64">
          <span className="font-bold">Explore the world of Data Science through &quot;Data Odyssey:</span> A Journey from Data to Intelligence,&quot; a project-based mini bootcamp organized by the Data Science Department of Basic Computing Community, Faculty of Computer Science. Over these 2 weeks, you will experience firsthand how data is processed, analyzed, and transformed into meaningful insights while developing practical skills in data analysis and machine learning through real-world projects.
        </p>
      </div>
    </section>
  );
};

export default About;
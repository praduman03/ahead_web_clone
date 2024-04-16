const data = [
  {
    title: "It's not easy as 1-2-3",
    description:
      "The journey may be long but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
  },
  {
    title: "Old habits are hard to break",
    description:
      "We know that. That's why we're here to help you break them. We'll give you the tools you need to succeed.",
  },
  {
    title: "It's hard to stay motivated",
    description:
      "We get it. It's hard to stay motivated when you're not seeing results. That's why we're here to help you stay on track.",
  },
  {
    title: "It's easy to get discouraged",
    description:
      "We know that. That's why we're here to help you stay positive and focused on your goals. We'll help you overcome any obstacles that come your way.",
  },
  {
    title: "It's hard to stay focused",
    description:
      "We know that. That's why we're here to help you stay focused on your goals. We'll help you develop a plan that works for you and keep you on track.",
  },
];

const SelfImprovement = () => {
  return (
    <div className="pl-80 mr-auto w-full h-[90vh] mt-20 mb-20">
      <p className="text-xl font-normal">
        Wrong with self-improvement & how we&apos;re fixing it.
      </p>
      <br />
      <h1 className="text-5xl font-medium">Self-improvement. Ugh.</h1>
      <br />
      <br />
      <div className="timeline px-20 pt-14 h-[60vh] overflow-y-scroll scrollbar-hide">
        <div className="border-l-2 border-l-violet-300   flex  flex-col gap-16">
          {data.map((data, index) => {
            return (
              <div key={index}>
                <div className=" max-w-[40rem] relative align-top pl-8">
                  <div style={{ left: "-12px" }} className="absolute">
                    🟣
                  </div>
                  <p className="text-2xl font-medium">{data.title}</p>
                  <p className="mt-3 text-xl">{data.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelfImprovement;

/* eslint-disable react/prop-types */
const data1 = {
  title: "EQ beats IQ",
  description:
    "People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships",
  description2:
    "They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year",
};

const data2 = {
  title: "Be the best you with EQ",
  description:
    "Not having your own Emotions under control might be holding you back.",
  description2:
    "Additionally, not understanding those of others stops you from being parent, friend you can be.",
};

const EQSection = ({ content }) => {
  const data = content === "first" ? data1 : data2;
  return (
    <div className="flex justify-around w-11/12 ml-auto mr-auto mt-14 mb-14">
      <h1 className="text-5xl w-2/5 p-11 font-medium">{data.title}</h1>
      <p className="w-1/3 text-xl p-11 leading-10">{data.description}</p>
      <p className="w-1/3 text-xl p-11 leading-10">{data.description2}</p>
    </div>
  );
};

export default EQSection;

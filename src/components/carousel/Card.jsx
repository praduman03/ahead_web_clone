/* eslint-disable react/prop-types */
const Card = ({ data }) => {
  return (
    <div
      className={`min-w-[350px] h-80 p-5 ${data.bgColor} rounded-xl ${
        data.rotate === true ? "-rotate-12" : ""
      }`}
    >
      <h1 className="text-5xl m-3">{data.title}</h1>
      <h1 className="text-2xl text-white font-medium m-3">{data.heading}</h1>
      <p className="m-3 text-white">{data.content}</p>
    </div>
  );
};

export default Card;

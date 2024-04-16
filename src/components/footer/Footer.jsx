const Footer = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <span className="border w-[80%]"></span>
      <div className="flex flex-col justify-center items-center">
        <img className="w-16" src="./logo.jpg" alt="" />
        <h1 className="text-lg font-medium">ahead</h1>
      </div>
      <div>made by prad with ❤️</div>
      <p className="text-gray-500 mb-10">
        © 2024 Ahead App. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

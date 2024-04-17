const Result = () => {
  const score = localStorage.getItem("score");
  return (
    <div className="flex justify-center items-center text-5xl font-medium w-[40vh] h-[20vh] bg-slate-200 rounded-lg ml-auto mr-auto">
      <h1>You Scored {score ? score : "0"} !</h1>
    </div>
  );
};

export default Result;

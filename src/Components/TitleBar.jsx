const TitleBar = () => {
  return (
    <div className="flex items-center justify-center my-[3%]  mx-auto ">
      <div className="">
        <p className="text-5xl font-bold text-slate-600 text-center ">
          Simplify Loan Approvals with Data-Driven Predictions!
        </p>
        <p className="text-slate-500 font-semibold text-center w-[60%] mx-auto mt-[2%] leading-9">
          LoanCalc is a web application that check loan eligibilty of a user and
          predict loan amount if user is eligible for loan. It features Flask
          API, CI/CD with GitHub Actions, and deployment on Render. The front
          end, built with React and Tailwind CSS, delivers accurate diabetes
          predictions through a seamless, user-friendly interface.
        </p>
      </div>
    </div>
  );
};

export default TitleBar;

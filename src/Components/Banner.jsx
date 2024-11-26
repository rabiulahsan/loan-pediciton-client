const Banner = () => {
  return (
    <div className="max-w-5xl mx-auto px-[5%] py-[4%] bg-gray-100 rounded-lg shadow-lg my-[5%]">
      <div className="">
        <h1 className="heading-style">Loan Amount Prediction System</h1>
        <p className="text-slate-600 mb-3">
          This end-to-end machine learning project aims to streamline the loan
          approval process by leveraging predictive analytics. The system is
          designed to handle two tasks:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>
            <strong>Loan Eligibility Prediction:</strong> Determines whether a
            loan applicant qualifies for a loan based on provided attributes.
          </li>
          <li>
            <strong>Loan Amount Prediction:</strong> If eligible, predicts the
            loan amount the applicant can receive.
          </li>
        </ul>
      </div>
      <h2 className="heading-style">Key Features:</h2>
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li>
          <strong>Exploratory Data Analysis (EDA):</strong> Uncovered patterns
          and insights in the training data.
        </li>
        <li>
          <strong>Data Preprocessing:</strong> Handled missing values, and data
          transformation.
        </li>
        <li>
          <strong>Pipeline Creation:</strong> Built efficient machine learning
          pipelines for both tasks.
        </li>
        <li>
          <strong>Exception Handling & Logging:</strong> Implemented robust
          mechanisms to handle errors and log activities.
        </li>
        <li>
          <strong>Model Development:</strong> Utilized scikit-learn for
          classification and regression tasks.
        </li>
        <li>
          <strong>API Deployment:</strong> Deployed models using a Flask API.
        </li>
      </ul>
      <h2 className="heading-style">Technologies Used:</h2>
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li>
          <strong>Languages:</strong> Python
        </li>
        <li>
          <strong>Libraries:</strong> scikit-learn, pandas, NumPy, matplotlib,
          seaborn
        </li>
        <li>
          <strong>Framework:</strong> Flask
        </li>
      </ul>
      <h2 className="heading-style">Use Cases:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Automating Loan Approval Processes:</strong> Reduces manual
          assessment time with instant predictions.
        </li>
        <li>
          <strong>Enhancing Risk Assessment:</strong> Improves evaluation of
          applicants creditworthiness.
        </li>
        <li>
          <strong>Improving Customer Experience:</strong> Provides quick
          responses to customers.
        </li>
        <li>
          <strong>Scaling Operations:</strong> Handles a large number of
          applications efficiently.
        </li>
      </ul>
      <p className="text-orange-600 text-center font-semibold mt-[4%]">
        This project demonstrates practical ML applications in the financial
        domain, covering data preprocessing, model evaluation, and deployment.
      </p>
      <div className=" flex items-center justify-center">
        <button className="px-5 py-3 mt-5 font-semibold bg-orange-500 text-white rounded-sm hover:bg-orange-600">
          <a
            href="https://github.com/rabiulahsan/loan-prediction"
            target="blank"
          >
            Model Repository
          </a>
        </button>
      </div>
    </div>
  );
};

export default Banner;

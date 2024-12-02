import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    income_stability: "",
    co_applicant: "",
    income: "",
    current_loan: "",
    credit_score: "",
    loan_amount_request: "",
    property_price: "",
  });

  const [amountName, setAmountName] = useState(null); // State for storing loan amount result
  const [shouldFetch, setShouldFetch] = useState(false); // Trigger for fetch request

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Check if the 'income' field is being updated
    if (name === "income") {
      const incomeValue = parseFloat(value) || 0; // Ensure it's a number
      const income_stability = incomeValue > 2000 ? "High" : "Low"; // Categorize income

      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
        income_stability,
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    setShouldFetch(true); // Trigger the fetch on form submission
  };

  useEffect(() => {
    if (!shouldFetch) return;

    // const body = {
    //   age: 65, // Static value for example; adjust as needed
    //   income_stability: formData.income >= 2000 ? "High" : "Low",
    //   co_applicant: parseInt(formData.co_applicant, 10), // Convert "1" or "0" to a number
    //   income: parseFloat(formData.income),
    //   current_loan: parseInt(formData.current_loan, 10),
    //   credit_score: parseInt(formData.credit_score, 10),
    //   loan_amount_request: parseInt(formData.loan_amount_request, 10),
    //   property_price: parseInt(formData.property_price, 10),
    // };

    const fetchLoanAmount = async () => {
      const promise = fetch(
        "https://load-prediction-model.onrender.com/predictdata",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      ).then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch loan amount");
        }
        return await response.json();
      });

      toast.promise(
        promise,
        {
          pending: "Predicting loan amount...",
          success: "Loan eligibility predicting successfully 🎉",
          error: "Failed to predict loan amount. 😞",
        },
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

      try {
        const result = await promise;
        setAmountName(result.loan_amount); // Update state with the loan amount
        console.log(result);
      } catch (error) {
        console.error("Error submitting data:", error);
      } finally {
        setShouldFetch(false); // Reset trigger
      }
    };

    fetchLoanAmount();
  }, [shouldFetch, formData]);

  return (
    <div className=" bg-gray-100 flex items-center justify-center py-[5%]">
      <div className="bg-white shadow-lg rounded-lg p-[4%]  max-w-lg w-full">
        <h1 className="text-2xl font-bold text-orange-500 mb-6 text-center">
          Loan Prediction Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="mb-5">
            <label className="block text-slate-500 ">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              //   placeholder="Enter you name..."
              required
              className="input-style"
            />
          </div>
          {/* Gender */}
          <div>
            <label className="block text-slate-500 mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="input-style bg-transparent"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Age */}
          <div className="mb-5">
            <label className="block text-slate-500">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="input-style"
            />
          </div>

          {/* Co-Applicant */}
          <div className="flex items-center gap-x-6">
            <label className="block text-slate-600 ">Co-Applicant</label>
            <div className="flex items-center space-x-4">
              {/* Option Yes */}
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="co_applicant"
                  value="1"
                  checked={formData.co_applicant === "1"}
                  onChange={handleChange}
                  required
                  className="h-5 w-5 text-orange-500 focus:ring-orange-500"
                />
                <label className="text-slate-600 font-semibold">Yes</label>
              </div>

              {/* Option No */}
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="co_applicant"
                  value="0"
                  checked={formData.co_applicant === "0"}
                  onChange={handleChange}
                  required
                  className="h-5 w-5 text-orange-500 focus:ring-orange-500"
                />
                <label className="text-slate-600 font-semibold">No</label>
              </div>
            </div>
          </div>

          {/* Income */}
          <div className="mb-5">
            <label className="block text-slate-500">Income (usd)/month</label>
            <input
              type="number"
              name="income"
              value={formData.income}
              onChange={handleChange}
              min={100}
              //   placeholder="Enter your monthly income"
              required
              className="input-style"
            />
          </div>
          {/* Current Loan */}
          <div>
            <label className="block text-slate-500">
              Current Loan (usd)/month
            </label>
            <input
              type="number"
              name="current_loan"
              value={formData.current_loan}
              onChange={handleChange}
              min={0}
              //   placeholder="Enter your current loan amount"
              required
              className="input-style"
            />
          </div>
          {/* Credit Score */}
          <div>
            <label className="block text-slate-500">
              Credit Score (450 - 900)
            </label>
            <input
              type="number"
              name="credit_score"
              value={formData.credit_score}
              onChange={handleChange}
              min={400}
              max={900}
              //   placeholder="Enter your credit score..."
              required
              className="input-style"
            />
          </div>
          {/* Loan Amount Request */}
          <div>
            <label className="block text-slate-500">
              Loan Amount Request (usd)
            </label>
            <input
              type="number"
              name="loan_amount_request"
              value={formData.loan_amount_request}
              onChange={handleChange}
              min={100}
              max={1000000}
              //   placeholder="Enter your loan request amount..."
              required
              className="input-style"
            />
          </div>
          {/* Property Price */}
          <div>
            <label className="block text-slate-500">Property Price (usd)</label>
            <input
              type="number"
              name="property_price"
              value={formData.property_price}
              onChange={handleChange}
              min={0}
              //   placeholder="Enter your property price..."
              required
              className="input-style"
            />
          </div>
          {/* Submit Button */}
          <div className="flex justify-center items-center ">
            <button
              type="submit"
              className=" bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-7 my-5  rounded-sm"
            >
              Check
            </button>
          </div>
        </form>

        {/* Result */}
        {amountName !== null && (
          <div className="mt-6 text-center text-slate-500 font-semibold text-lg">
            {amountName === 0 ? (
              "You are not eligible for the loan"
            ) : (
              <>
                You are eligible for{" "}
                <span className="text-lg font-bold text-orange-500">
                  {amountName}
                </span>{" "}
                usd
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormSection;

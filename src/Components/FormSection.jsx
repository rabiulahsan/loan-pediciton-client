import { useState, useEffect } from "react";
const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    co_applicant: false,
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShouldFetch(true); // Trigger the fetch on form submission
  };

  useEffect(() => {
    if (!shouldFetch) return;

    const body = {
      age: 65, // Static value for example; adjust as needed
      income_stability: formData.income >= 2000 ? "High" : "Low",
      //   income_stability: "High",
      co_applicant: formData.co_applicant ? 1 : 0,
      income: parseFloat(formData.income),
      current_loan: parseInt(formData.current_loan, 10),
      credit_score: parseInt(formData.credit_score, 10),
      loan_amount_request: parseInt(formData.loan_amount_request, 10),
      property_price: parseInt(formData.property_price, 10),
    };

    const fetchLoanAmount = async () => {
      try {
        const response = await fetch("http://localhost:5000/predictdata", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        const result = await response.json();
        // setAmountName(result.loan_amount); // Update state with the loan amount
        console.log(result);
        alert("Loan amount predicted successfully!");
      } catch (error) {
        console.error("Error submitting data:", error);
        alert("Failed to submit data.");
      } finally {
        setShouldFetch(false); // Reset trigger
      }
    };

    fetchLoanAmount();
  }, [shouldFetch, formData]);

  return (
    <div className=" bg-gray-100 flex items-center justify-center py-[5%]">
      <div className="bg-white shadow-2xl rounded-lg p-[4%]  max-w-lg w-full">
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
          {/* Co-Applicant */}
          <div className="flex items-center space-x-2 ">
            <input
              type="checkbox"
              name="co_applicant"
              checked={formData.co_applicant}
              onChange={handleChange}
              required
              className="h-5 w-5 text-orange-500 focus:ring-orange-500"
            />
            <label className="text-slate-600 font-semibold">Co-Applicant</label>
          </div>
          {/* Income */}
          <div className="mb-5">
            <label className="block text-slate-500">Income (usd)/month</label>
            <input
              type="number"
              name="income"
              value={formData.income}
              onChange={handleChange}
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
              //   placeholder="Enter your property price..."
              required
              className="input-style"
            />
          </div>
          {/* Submit Button */}
          <div className="flex justify-center items-center ">
            <button
              type="submit"
              className=" bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-5 my-5  rounded"
            >
              Check
            </button>
          </div>
        </form>

        {/* Result */}
        {amountName !== null && (
          <div className="mt-6 text-center text-orange-500 font-bold text-lg">
            Predicted Loan Amount: {amountName}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormSection;

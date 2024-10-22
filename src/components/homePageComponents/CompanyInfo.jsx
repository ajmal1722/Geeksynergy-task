import { useState } from "react";

const CompanyInfo = () => {
    const [showInfo, setShowInfo] = useState(false); // Initially set to false

    const handleToggle = () => {
        setShowInfo(!showInfo); // Toggle the visibility of the company info
    };

    return (
        <div className="relative">
            <button 
                className='bg-green-600 hover:scale-105 text-white text-lg p-2 px-3 m-5 my-6 lg:mx-16 rounded'
                onClick={handleToggle} // Handle button click
            >
                Company Info
            </button>

            {showInfo && (
                <>
                    {/* Background Blur */}
                    <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={handleToggle} /> {/* Clicking on the overlay closes the info */}

                    {/* Company Info Modal */}
                    <div className="fixed inset-0 flex justify-center items-center z-50">
                        <div className="bg-white shadow-lg rounded-lg p-6 text-left max-w-md w-full mx-4">
                            <h2 className="text-xl font-bold mb-2">Company: Geeksynergy Technologies Pvt Ltd</h2>
                            <p className="mb-1"><strong>Address:</strong> Sanjayanagar, Bengaluru-56</p>
                            <p className="mb-1"><strong>Phone:</strong> XXXXXXXXX09</p>
                            <p className="mb-1"><strong>Email:</strong> XXXXXX@gmail.com</p>
                            <div className="flex justify-end">
                                <button 
                                    className="mt-4 mx-4 bg-red-600 text-white rounded px-4 py-2 hover:bg-red-700"
                                    onClick={handleToggle} // Hide the info when this button is clicked
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CompanyInfo;
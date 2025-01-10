import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext'; 

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]); // Correct usage of useState
  const [selectedSpeciality, setSelectedSpeciality] = useState(speciality); // State to track selected speciality
  const navigate = useNavigate(); // Import and use useNavigate for routing

  const { doctors } = useContext(AppContext); // Accessing doctors from AppContext

  // Function to apply filter based on the speciality from the URL params
  const applyFilter = () => {
    if (selectedSpeciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === selectedSpeciality)); // Strict equality check (===)
    } else {
      setFilterDoc(doctors); // No filter if no speciality provided
    }
  };

  // Run applyFilter whenever doctors or selectedSpeciality changes
  useEffect(() => {
    applyFilter();
  }, [doctors, selectedSpeciality]);

  // Function to handle specialization button clicks
  const handleSpecialityClick = (speciality) => {
    if (selectedSpeciality === speciality) {
      setSelectedSpeciality(null); // Deselect if already selected
      navigate('/doctors'); // Navigate back to doctors
    } else {
      setSelectedSpeciality(speciality); // Select new speciality
      navigate(`/doctors/${speciality}`); // Navigate to the selected speciality
    }
  };

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        {/* Add any general specialities or filters here */}
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((item) => (
            <p
              key={item}
              onClick={() => handleSpecialityClick(item)}
              className={`w-[94vw] sm:w-auto pl-3 py-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${selectedSpeciality === item ? "bg-indigo-100 text-black" : ""}`}
            >
              {item}
            </p>
          ))}
        </div>

        {/* Display filtered doctors */}
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}  // Navigate to doctor's appointment page
              className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
            >
              <img className='bg-blue-50' src={item.image} alt={item.name} />  {/* Use item.name for the alt attribute */}
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  <p className='w-2 h-3 bg-green-500 rounded-full'></p>
                  <p>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;

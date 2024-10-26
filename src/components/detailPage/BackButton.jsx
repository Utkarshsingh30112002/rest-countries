import {FaArrowLeft} from 'react-icons/fa'; 

const BackButton = ({ clickedBack }) => {
  return (
    <button
      onClick={clickedBack}
      className="p-2 mx-10 md:mx-20 px-12 shadow-md my-20 relative bg-LME text-LMT dark:bg-DME dark:text-DMT rounded"
    >
      <FaArrowLeft className="absolute left-4 top-3 text-LMT dark:text-DMT" />
      Back
    </button>
  );
};

export default BackButton;

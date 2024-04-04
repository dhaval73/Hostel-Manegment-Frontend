import React, { useState, useEffect } from 'react';

function AlertMessageDanger({ showAlertDanger }) {
  const { isShow = false, message = "Something went wrong.", label = "Alert" } = showAlertDanger;
  const [showAlert, setShowAlert] = useState(isShow);
  const [alertMessage, setAlertMessage] = useState(message);


  useEffect(() => {
    setShowAlert(isShow);
  }, [isShow]);

  useEffect(() => {
    setAlertMessage(message);
  }, [message]);

  useEffect(() => {
    let timer;
    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showAlert]);

  const handleClose = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    if (alertMessage && showAlert) {
      setShowAlert(true);
    }
  }, [alertMessage, showAlert]);

  return showAlert && (
    <div className="fixed bottom-20 right-7 bg-red-100 border border-red-400 text-red-700 rounded w-fit" role="alert">
      <div className='relative px-2 pr-8 py-3'>
        <strong className="font-bold">{label} </strong>
        <span className="block sm:inline"> {alertMessage}</span>
        <button className="absolute top-0 bottom-0 right-0 px-2 py-3" onClick={handleClose}>
          <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default AlertMessageDanger;

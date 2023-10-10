import React, { useState, useEffect } from 'react';
import CustomModal from '../CustomModal'; // Modal을 다른 이름인 CustomModal로 가져옵니다.
import QrIcon from '../icon/icon-qr-code.png';
import QrImg from '../img/QR_example.png';
import axiosInstance from '../api';
function Qr() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [qrCodeData, setQRCodeData] = useState("");
    const [selectedSeat, setSelectedSeat] = useState("");
    const [reservationDatetime, setReservationDatetime] = useState("");

    const openModal = () => {
        setModalIsOpen(true);       // 모달창이 열릴 수 있는 상태
        handleSeatClick();
    };

    const closeModal = () => {
        setModalIsOpen(false);      // 모달창을 닫을 수 있는 상태
    };

    useEffect(() => {
        // If the modal is open, start fetching seat_time every 1 second
        if (modalIsOpen) {
        handleSeatClick();
          const intervalId = setInterval(() => {
            handleSeatTime();
          }, 1000);
    
          return () => {
            // Clean up the interval when the modal is closed or component unmounts
            clearInterval(intervalId);
          };
        }
      }, [modalIsOpen]);


      const handleSeatClick = async (seatName) => {
        setSelectedSeat(seatName);
    
        try {
          const reservationResponse = await axiosInstance.get(`/users/reservation/get`);
          const reservationDatetime = reservationResponse.data.seat_time;
          // Make a POST request to your Express route to generate the QR code
          const response = await axiosInstance.post('/users/generatedQRCode',
            { text: seatName }
          );
    
          // The response should contain the QR code image data
          const qrCodeImageData = response.data.qrCodeData;
          setQRCodeData(qrCodeImageData);
          setReservationDatetime(reservationDatetime);
          setModalIsOpen(true);
        } catch (error) {
          console.error('Error generating QR code', error);
          // Handle the error as needed
        }
      };

      
    const handleSeatTime = async () => {
        try {
        const reservationResponse = await axiosInstance.get(`/users/reservation/get`);
        const reservationDatetime = reservationResponse.data.seat_time;

        setReservationDatetime(reservationDatetime);
        } catch (error) {
        console.error('Error generating seat_time', error);
        // Handle the error as needed
        }
    };

    return (
        <>
            <CustomModal // CustomModal 컴포넌트 사용
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="QR Code Modal"
                className="qr-modal-container"
            >
                <h4>예약한 좌석</h4>
                <h1>{selectedSeat}</h1>
                <h4>남은 시간 : {reservationDatetime}</h4>
                {qrCodeData && <img src={qrCodeData} alt="QR Code" />}
            </CustomModal>
        </>
    );
}

export default Qr;

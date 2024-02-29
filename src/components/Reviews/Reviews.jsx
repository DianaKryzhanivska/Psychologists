import React, { useState } from 'react';
import sprite from '../../images/sprite.svg';
import {
  Comment,
  LetterBox,
  List,
  MeetingBtn,
  Name,
  Rating,
  Reviewer,
} from './Reviews.styled';
import AppointmentForm from 'components/AppointmentForm/AppointmentForm';
import Modal from 'components/Modal/Modal';

const Reviews = ({ reviews, psychologist }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <List>
        {reviews.map((item, index) => (
          <li key={index}>
            <Reviewer>
              <LetterBox>{item.reviewer[0]}</LetterBox>
              <div>
                <Name>{item.reviewer}</Name>
                <Rating>
                  <svg width="16" height="16">
                    <use href={`${sprite}#star`} />
                  </svg>
                  <p>{item.rating}</p>
                </Rating>
              </div>
            </Reviewer>
            <Comment>{item.comment}</Comment>
          </li>
        ))}
      </List>
      <MeetingBtn type="button" onClick={openModal}>
        Make an appointment
      </MeetingBtn>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <AppointmentForm
            psychologist={psychologist}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </>
  );
};

export default Reviews;

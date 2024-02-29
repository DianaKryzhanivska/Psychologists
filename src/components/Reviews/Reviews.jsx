import React from 'react';
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

const Reviews = ({ reviews }) => {
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
      <MeetingBtn type="button">Make an appointment</MeetingBtn>
    </>
  );
};

export default Reviews;

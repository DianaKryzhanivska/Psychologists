import React, { useState } from 'react';
import {
  BtnFav,
  Desc,
  Features,
  ImageWrapper,
  Item,
  Job,
  Name,
  Price,
  Rating,
  ReadMoreBtn,
  Statistics,
} from './SingleCard.styled';
import sprite from '../../images/sprite.svg';
import Reviews from 'components/Reviews/Reviews';

const SingleCard = ({ psychologist, openModal }) => {
  const [readMore, setReadMore] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const {
    name,
    avatar_url,
    experience,
    reviews,
    price_per_hour,
    rating,
    license,
    specialization,
    initial_consultation,
    about,
  } = psychologist;

  const handleToggleFav = () => {
    setIsFavorite(prev => !prev);
    console.log(isFavorite);
  };

  const handleReadMore = () => {
    setReadMore(true);
  };
  return (
    <>
      <Item>
        <Statistics>
          <svg width="16" height="16" style={{ fill: '#FFC531' }}>
            <use href={`${sprite}#star`} />
          </svg>
          <Rating>{`Rating: ${rating}`}</Rating>
          <p style={{ color: '#191A15', opacity: '0.2' }}>|</p>
          <Price>
            Price / 1 hour: <span>{price_per_hour}$</span>
          </Price>
          <BtnFav type="button" onClick={handleToggleFav}>
            {!isFavorite ? (
              <svg style={{ fill: 'none', stroke: '#191A15' }}>
                <use href={`${sprite}#heart`} />
              </svg>
            ) : (
              <svg style={{ fill: '#54BE96', stroke: '#54BE96' }}>
                <use href={`${sprite}#heart-hover`} />
              </svg>
            )}
          </BtnFav>
        </Statistics>
        <ImageWrapper>
          <img src={avatar_url} alt="psychologist" />
          <svg width="14" height="14">
            <use href={`${sprite}#online`} />
          </svg>
        </ImageWrapper>
        <div>
          <Job>Psychologist</Job>
          <Name>{name}</Name>
          <Features>
            <li>
              Experience: <span>{experience}</span>
            </li>
            <li>
              License: <span>{license}</span>
            </li>
            <li>
              Specialization: <span>{specialization}</span>
            </li>
            <li>
              Initial_consultation: <span>{initial_consultation}</span>
            </li>
          </Features>
          <Desc>{about}</Desc>
          {!readMore && (
            <ReadMoreBtn type="button" onClick={handleReadMore}>
              Read more
            </ReadMoreBtn>
          )}
          {readMore && (
            <Reviews
              reviews={reviews}
              openModal={openModal}
              psychologist={psychologist}
            />
          )}
        </div>
      </Item>
    </>
  );
};

export default SingleCard;

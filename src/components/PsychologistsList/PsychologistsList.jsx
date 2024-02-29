import React, { useEffect, useState } from 'react';
import {
  Desc,
  Features,
  ImageWrapper,
  Item,
  ItemInfo,
  Job,
  List,
  Name,
  Price,
  Rating,
  ReadMoreBtn,
  Statistics,
  StyledContainer,
} from './PsychologistsList.styled';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../firebase';
import sprite from '../../images/sprite.svg';

const PsychologistsList = () => {
  const [psychologists, setPsychologists] = useState([]);

  useEffect(() => {
    async function fetchPsychologists() {
      try {
        const psychologistsCol = collection(db, 'psychologists');
        const psychologistsSnapshot = await getDocs(psychologistsCol);
        const psychologistsList = psychologistsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPsychologists(psychologistsList);
      } catch (error) {
        console.error('Error fetching psychologists:', error);
      }
    }
    fetchPsychologists();
  }, []);

  return (
    <>
      <StyledContainer>
        <List>
          {psychologists?.map(item => (
            <Item key={item.id}>
              <ImageWrapper>
                <img src={item.avatar_url} alt="psychologist" />
                <svg width="14" height="14">
                  <use href={`${sprite}#online`} />
                </svg>
              </ImageWrapper>
              <ItemInfo>
                <Job>Psychologist</Job>
                <Name>{item.name}</Name>
                <Features>
                  <li>
                    Experience: <span>{item.experience}</span>
                  </li>
                  <li>
                    License: <span>{item.license}</span>
                  </li>
                  <li>
                    Specialization: <span>{item.specialization}</span>
                  </li>
                  <li>
                    Initial_consultation:{' '}
                    <span>{item.initial_consultation}</span>
                  </li>
                </Features>
                <Desc>{item.about}</Desc>
                <ReadMoreBtn type="button">Read more</ReadMoreBtn>
              </ItemInfo>
              <Statistics>
                <svg width="16" height="16" style={{ fill: '#FFC531' }}>
                  <use href={`${sprite}#star`} />
                </svg>
                <Rating>{`Rating: ${item.rating}`}</Rating>
                <p style={{ color: '#191A15', opacity: '0.2' }}>|</p>
                <Price>
                  Price / 1 hour: <span>{item.price_per_hour}$</span>
                </Price>
                <svg
                  width="26"
                  height="26"
                  style={{ fill: 'none', stroke: '#191A15' }}
                >
                  <use href={`${sprite}#heart`} />
                </svg>
              </Statistics>
            </Item>
          ))}
        </List>
      </StyledContainer>
    </>
  );
};

export default PsychologistsList;

import React, { useEffect, useState } from 'react';
import { List, LoadMoreBtn, StyledContainer } from './PsychologistsList.styled';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../firebase';
import SingleCard from 'components/SingleCard/SingleCard';

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
          {psychologists?.map(psychologist => (
            <SingleCard key={psychologist.id} psychologist={psychologist} />
          ))}
        </List>
        <LoadMoreBtn>Load more</LoadMoreBtn>
      </StyledContainer>
    </>
  );
};

export default PsychologistsList;

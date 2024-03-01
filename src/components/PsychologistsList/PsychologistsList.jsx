import React, { useEffect, useState } from 'react';
import { List, LoadMoreBtn, StyledContainer } from './PsychologistsList.styled';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../firebase';
import SingleCard from 'components/SingleCard/SingleCard';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import Filter from 'components/Filter/Filter';

const PsychologistsList = ({ openModal }) => {
  const favorites = useSelector(selectFavorites);
  const [psychologists, setPsychologists] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    async function fetchPsychologists() {
      try {
        const psychologistsCol = collection(db, 'psychologists');
        const psychologistsSnapshot = await getDocs(psychologistsCol);
        const psychologistsList = psychologistsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          isFavorite: favorites.some(favorite => favorite.id === doc.id),
        }));
        setPsychologists(psychologistsList);
        setFilteredData(psychologistsList);
      } catch (error) {
        console.error('Error fetching psychologists:', error);
      }
    }
    fetchPsychologists();
  }, [favorites]);

  const handleFilterData = filter => {
    switch (filter) {
      case 'A to Z':
        setFilteredData(prevData => [
          ...prevData.sort((a, b) => a.name.localeCompare(b.name)),
        ]);
        break;
      case 'Z to A':
        setFilteredData(prevData => [
          ...prevData.sort((a, b) => b.name.localeCompare(a.name)),
        ]);
        break;
      case 'Less than 10$':
        setFilteredData(prevData => [
          ...psychologists.filter(
            psychologist => psychologist.price_per_hour < 10
          ),
        ]);
        break;
      case 'Greater than 10$':
        setFilteredData(prevData => [
          ...psychologists.filter(
            psychologist => psychologist.price_per_hour >= 10
          ),
        ]);
        break;
      case 'Popular':
        setFilteredData(prevData => [
          ...prevData.sort((a, b) => b.rating - a.rating),
        ]);
        break;
      case 'Not popular':
        setFilteredData(prevData => [
          ...prevData.sort((a, b) => a.rating - b.rating),
        ]);
        break;
      case 'Show all':
        setFilteredData(psychologists);
        break;
      default:
        setFilteredData(psychologists);
    }
  };

  const displayedPsychologists = filteredData.slice(0, limit);

  const handleLoadMore = () => {
    setLimit(prevLimit => prevLimit + 3);
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <StyledContainer>
        <Filter applyFilter={handleFilterData} />
        <List>
          {displayedPsychologists?.map(psychologist => (
            <SingleCard
              key={psychologist.id}
              psychologist={psychologist}
              openModal={openModal}
            />
          ))}
        </List>
        {limit < filteredData.length && (
          <LoadMoreBtn type="button" onClick={handleLoadMore}>
            Load more
          </LoadMoreBtn>
        )}
      </StyledContainer>
    </>
  );
};

export default PsychologistsList;

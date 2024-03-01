import React, { useEffect, useState } from 'react';
import { Message, StyledContainer } from './FavoritesList.styled';
import {
  List,
  LoadMoreBtn,
} from 'components/PsychologistsList/PsychologistsList.styled';
import SingleCard from 'components/SingleCard/SingleCard';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import Filter from 'components/Filter/Filter';

const FavoritesList = ({ openModal }) => {
  const favorites = useSelector(selectFavorites);
  const [filteredData, setFilteredData] = useState([...favorites]);

  useEffect(() => {
    setFilteredData([...favorites]);
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
          ...favorites.filter(psychologist => psychologist.price_per_hour < 10),
        ]);
        break;
      case 'Greater than 10$':
        setFilteredData(prevData => [
          ...favorites.filter(
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
        setFilteredData([...favorites]);
        break;
      default:
        setFilteredData([...favorites]);
    }
  };

  return (
    <>
      <StyledContainer>
        <Filter applyFilter={handleFilterData} />
        <List>
          {favorites?.length > 0 ? (
            filteredData.map(psychologist => (
              <SingleCard
                key={psychologist.id}
                psychologist={psychologist}
                openModal={openModal}
              />
            ))
          ) : (
            <Message>
              You haven't added any psychologists to your favorites yet. Let's
              choose!
            </Message>
          )}
        </List>

        <LoadMoreBtn>Load more</LoadMoreBtn>
      </StyledContainer>
    </>
  );
};

export default FavoritesList;

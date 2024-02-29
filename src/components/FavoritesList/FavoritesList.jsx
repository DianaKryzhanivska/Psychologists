import React from 'react';
import { Message, StyledContainer } from './FavoritesList.styled';
import {
  List,
  LoadMoreBtn,
} from 'components/PsychologistsList/PsychologistsList.styled';
import SingleCard from 'components/SingleCard/SingleCard';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';

const FavoritesList = ({ openModal }) => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <StyledContainer>
        <List>
          {favorites?.length > 0 ? (
            favorites.map(psychologist => (
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

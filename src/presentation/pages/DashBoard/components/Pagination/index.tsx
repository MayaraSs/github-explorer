import { Container } from "./styles";

export interface Props {
  currentPage: number;
  hasNextPage: boolean;
  handlePagination: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  currentPage,
  hasNextPage,
  handlePagination,
}) => {
  return (
    <Container>
      {currentPage !== 1 && (
        <button onClick={() => handlePagination(currentPage - 1)} type='button'>
          Back Page
        </button>
      )}
      {!hasNextPage && (
        <button onClick={() => handlePagination(currentPage + 1)} type='button'>
          Next Page
        </button>
      )}
    </Container>
  );
};

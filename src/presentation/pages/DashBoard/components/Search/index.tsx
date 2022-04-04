import { Form } from "./styles";

export const Search = ({ onSearch, onChange, value }: any) => {

    return (
      <>
        <div className='content'>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              onSearch(value);
            }}
          >
            <input
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder='Pesquise por username'
            />
            <button type='submit'>Pesquisar</button>
          </Form>
        </div>
      </>
    );
  };
  
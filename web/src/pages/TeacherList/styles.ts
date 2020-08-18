import styled from 'styled-components';

export const Toggle = styled.div`
  position:  fixed;
  bottom: 10px;
  left: 10px;
`;

export const PageTeacherList = styled.div`
  width: 100vw;
  height: 100vh;

  #search-teachers {
  margin-top: 3.2rem;

    label {
    color: var(--color-text-in-primary);
    }

    button {
      width: 100%;
      height: 5.6rem;
      background: var(--color-secundary);
      color: var(--color-button-text);
      border: 0;
      border-radius: 0.8rem;
      cursor: pointer;
      font: 700 1.6rem Archivo;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;
      margin-top: 3.2rem;

      :hover {
        background: var(--color-secundary-dark);
      }
    }
  }

  @media (min-width: 700px) {
    max-width: 100%;

  #search-teachers {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;

    .input-block + .input-block {
      margin-top: 0;
    }
    .select-block + .select-block {
      margin-top: 0;
    }

    .select-block {
      select {
      background: ${props => props.theme.colors.inputColor};
      border: 1px solid ${props => props.theme.colors.borderInput};
      color: ${props => props.theme.colors.text};
      } 
    }

    .input-block {
      input {
      background: ${props => props.theme.colors.inputColor};
      border: 1px solid ${props => props.theme.colors.borderInput};
      color: ${props => props.theme.colors.text};
      }
    }
  }
}

`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;  

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;
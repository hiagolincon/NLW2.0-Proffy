import styled from 'styled-components';

export const Toggle = styled.div`
  position:  fixed;
  bottom: 10px;
  left: 10px;
`;

export const PageTeacherForm = styled.div`
  width: 100vw;
  height: 100vh;

  .page-header .header-content {
    margin-bottom: 6.4rem;
  }

  @media (min-width: 700px) {
    max-width: 100vw;
    .page-header .header-content {
    margin-bottom: 0;
  }
  }
`;

export const Main = styled.main`
  background: ${props => props.theme.colors.bgForm};
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;

  .input-block label {
    color: var(--color-text-complement);
  }  
`;

export const Form = styled.form`
  input {
    background: ${props => props.theme.colors.inputColor};
    border: 1px solid ${props => props.theme.colors.borderInput};
  }

  fieldset {
  border: 0;
  padding: 0 2.4rem;

    + fieldset {
      margin-top: 6.4rem;
    }
  legend {
    font: 700 2.4rem Archivo;
    color: ${props => props.theme.colors.titleForm};
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid ${props => props.theme.colors.inputColor};

    button {
      background: none;
      border: 0;
      color: var(--color-primary);
      font: 700 1.6rem Archivo;
      cursor: pointer;
      transition: color 0.2s;

      :hover {
        color: var(--color-primary-dark);
      }
    }
  }

  .input-block + .textarea-block {
    margin-top: 2.4rem;

    label {
      color: #9c98a6;
    }

    textarea {
      background: ${props => props.theme.colors.inputColor};
      border: 1px solid ${props => props.theme.colors.borderInput};
    }
  }

  .select-block {
    label {
      color: #9c98a6;
    }

    select {
      background: ${props => props.theme.colors.inputColor};
      border: 1px solid ${props => props.theme.colors.borderInput};
      color: ${props => props.theme.colors.text};
    }
  }

  .select-block + .input-block {
    margin-top: 2.4rem;
  }
}

  @media (min-width: 700px) {
    fieldset {
      padding: 0 6.4rem;
    } 
    .schedule-item {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      column-gap: 1.6rem;

      .input-block {
        margin-top: 0 !important;
      }
    }
  }
`;

export const Footer = styled.footer`
  padding: 4rem 2.4rem;
  background: ${props => props.theme.colors.bgForm};
  border-top: 1px solid ${props => props.theme.colors.borderInput};
  margin-top: 6.4rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2, 4rem;
    color: var(--color-text-complement);
    img {
      margin-right: 2rem;
    }
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

  @media (min-width: 700px) {
    padding: 4rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      justify-content: space-between;
    }

    button {
      width: 20rem;
      margin-top: 0;
    }
  }
`;

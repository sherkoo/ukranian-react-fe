import React from "react";
import CheckBox from "../Checkbox";
import { useSelector } from "react-redux";
import { CategoriesContainer } from "./categories.style";
import { handleShowPhrases } from '../../Redux/words';

function Categories(props) {
  const words = useSelector((state) => state.words);

  const handleTest = (c) => {
    alert(c)
    handleShowPhrases()
  }

  return (
    <CategoriesContainer>
      {words.categories.map((c) => {
        return (
          <CheckBox label={c} click={() => handleTest(c)} />
        )
      })}
    </CategoriesContainer>
  );
}

export default Categories;

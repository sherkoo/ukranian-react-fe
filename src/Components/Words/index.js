import React from "react";
import { useSelector } from "react-redux";
import { Row, Table, RowContainer } from './words.style';

function WordsRow(props) {
  const words = useSelector((state) => state.words);

  return (
    <Row>
      {words.showEng && <td>{props.english}</td>}
      {words.showUkr && <td>{props.ukranian}</td>}
      {words.showPro && <td>{props.pronounce}</td>}
    </Row>
  );
}

function WordsRowHead(props) {
  const words = useSelector((state) => state.words);

  return (
    <thead>
      <tr>
        {words.showEng && <td>{props.englishLabel}</td>}
        {words.showUkr && <td>{props.ukranianLabel}</td>}
        {words.showPro && <td>{props.pronounceLabel}</td>}
      </tr>
    </thead>
  );
}

function Words(props) {
  const words = useSelector((state) => state.words);

  return (
    <RowContainer>
      {words.post.map((w, index) => {
        return (
          <div key={w+index}>
            <h2>{w.category}</h2>
            {w.category && (
              <Table>
              <WordsRowHead
                englishLabel="English"
                ukranianLabel="Ukranian"
                pronounceLabel="Pronounce" />
              <tbody>
              {w.words.map((t,index) => {
                return <WordsRow key={t+index} english={t.english} ukranian={t.ukranian} pronounce={t.pronounce} />;
              })}
              </tbody>
            </Table>
            )}
          </div>
        );
      })}
    </RowContainer>
  );
}

export default Words;

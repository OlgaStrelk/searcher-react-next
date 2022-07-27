import { useState, useMemo } from "react";

import api from "../api/api";

import Input from "../components/Input";
import Form from "../components/Form";
import Button from "../components/Button";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [cardsData, setCardsData] = useState([]);
  const [cardPageData, setCardPageData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isCardClicked, setCardClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  let pageSize = 9;

  //отрисовать кнопку поиска
  const renderButton = () => {
    if (inputValue === "") {
      setIsButtonActive(false);
    }
    setIsButtonActive(true);
  };

  //отправить запрос за карточками
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setIsNotFound(false);
    setIsLoading(true);
    setCardsData([]);
    console.log(inputValue);
    api
      .getCards(inputValue)
      .then((res) => {
        if (res.length === 0) {
          setIsNotFound(true);
        } else {
          setIsNotFound(false);
          const formattedData = res.map((cardData) => {
            return {
              link: cardData.image_url,
              title: cardData.name,
              subtitle: cardData.description,
              id: cardData.id,
            };
          });
          setCardsData(formattedData);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  //карточки для отображения на одной странице
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return cardsData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, cardsData, pageSize]);

  //управляемый импут
  const handleInput = (e) => {
    setInputValue(e.target.value);
    renderButton();
  };

  return (
    <div className="App">
      <div className="App-content">
        <Form className="App-search" handleSubmit={handleSubmit}>
          <Input handleChange={handleInput} value={inputValue} />
          <Button
            text={"Искать"}
            inputValue={inputValue}
            isButtonActive={isButtonActive}
          />
        </Form>
        {isLoading && <Loading />}
        {isNotFound && <NotFound />}

        <ul className="App-cards">
          <Cards currentTableData={currentTableData}></Cards>
        </ul>
        <Pagination
          className="App-pagination"
          currentPage={currentPage}
          totalCount={cardsData.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};
export default Index;

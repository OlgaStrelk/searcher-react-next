import Link from "next/link";
import { useState, useMemo } from "react";

import api from "../api/api";

import Input from "../components/Input";
import Form from "../components/Form";
import Button from "../components/Button";
import Card from "../components/Card";
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
    console.log(inputValue)
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
    <>
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
          {isLoading && <Loading>Loading...</Loading>}
          <section className="App-cards">
            {isNotFound && <NotFound />}
            {currentTableData.map((card) => (
              <Link href={`/${card.id}`}>
                <Card
                  {...card}
                  key={card.id}
                  onCardClick={setCardClicked}
                />
              </Link>
            ))}
          </section>
          <Pagination
            className="App-pagination"
            currentPage={currentPage}
            totalCount={cardsData.length}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
      <style jsx>{`
        .App {
          text-align: center;
          font-family: Helvetica, Arial, sans-serif;
          color: #000;
        }

        .App-content {
          max-width: 860px;
          margin: 90px auto;
        }

        .App-search {
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .App-cards {
          margin-top: 60px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 48px;
        }

        .App-pagination {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );
};
export default Index;

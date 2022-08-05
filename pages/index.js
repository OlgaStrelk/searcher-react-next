import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.scss";

import Form from "../components/Form";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Работает");
  };
  //отрисовать кнопку поиска
  const renderButton = () => {
    if (inputValue === "") {
      setIsButtonActive(false);
    }
    setIsButtonActive(true);
  };

  //управляемый импут
  const handleInput = (e) => {
    setInputValue(e.target.value);
    renderButton();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Поисковик пива</title>
        <meta name="description" content="bear searcher" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.searcher}>
          <Form handleSubmit={handleSubmit}>
            <Input
              handleChange={handleInput}
              value={inputValue}
              text="Введите название пива"
            ></Input>
            <Button
              text={"Искать"}
              inputValue={inputValue}
              isButtonActive={isButtonActive}
            />
          </Form>
        </section>
      </main>
    </div>
  );
}

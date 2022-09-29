import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions,handleDeleteQuestion}) {
  let questionNo = 0
  const questionList= questions.map(question => {
    questionNo++
  return <QuestionItem key={questions.id} question={question} questionNo={questionNo} handleDeleteQuestion={handleDeleteQuestion}/>
})
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;
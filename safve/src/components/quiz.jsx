import React, { useState } from 'react';
import { db } from './firebase';
import {  Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText,Form, FormGroup, Label, Input, FormText,Container,Row,Col } from 'reactstrap';
import './quiz.css'
import Header from './header'
function Quiz() {
	const questions = [
		{
			questionText: 'How expensive is the cheapest Starbucks Cofee?',
			answerOptions: [
				{ answerText: 'Free!', isCorrect: false },
				{ answerText: '0.20$', isCorrect: false },
				{ answerText: '2.25$', isCorrect: true },
				{ answerText: '10$', isCorrect: false },
			],
		},
		{
			questionText: 'How much will it cost you to make your own coffee?',
			answerOptions: [
				{ answerText: '20$', isCorrect: false },
				{ answerText: '0.20$', isCorrect: true },
				{ answerText: '1$', isCorrect: false },
				{ answerText: '3$', isCorrect: false },
			],
		},
		{
			questionText: 'What should you do with the money you save by making coffee at home?',
			answerOptions: [
				{ answerText: 'Save & Invest!', isCorrect: true },
				{ answerText: 'Put it in your bank account', isCorrect: false },
				{ answerText: 'Spend on Starbucks Tea', isCorrect: false },
				{ answerText: 'Keep it in a piggy bank', isCorrect: false },
			],
		},
		{
			questionText: 'How many years will it take to be a millionaire by making your coffee at home (for 3 cups a day you save and invest 6$ at a 7% return)?',
			answerOptions: [
				{ answerText: '55', isCorrect: false },
				{ answerText: '60', isCorrect: false },
				{ answerText: '100', isCorrect: false },
				{ answerText: 'Never', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			var coins = score/questions.length+usercoin;
			db.collection("UserCoins")
.doc()
.set({
	user:'TestUser',
coins: coins,
})
		}
	};
	return (
		<React.Fragment>
			<Header />
		<Container>
			<h2 className="text-left my-5">Quiz:</h2>
			<Row className="quiz">
			<Col className='sm'>		
			{showScore ? (
				
				<div className='score-section'>
					You scored {score} out of {questions.length} and earned {score/questions.length} Stonkoins!
				</div>
				
			) : (
				
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</Col>
		</Row>
		</Container>
		</React.Fragment>
	);
}

export default Quiz;
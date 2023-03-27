import React, { useState } from 'react';
import './Quiz.css';
// import {users} from './Quiz.json';
import '../home/home.css';
function getCustomAnswerText(answerText) {
  switch(answerText) {
    case "Absolutely,I love pets!":
      return "Pet lover";
    case "As long as they are well-behaved":
      return "Pet friendly, but only well behaved";
    case "I have allergies, So not ideal for me":
      return "Alergetic from pets";
    case "No, sorry! I am not a pet person":
      return "Not a pet person";
	  case "Someone who is neat and tidy":
		  return "Looking for Hygienic Partner";
	  case "Someone who is outgoing and social":
		  return "Looking for Social and Outgoing roomie";
	  case "Someone who is respectful of privacy":
		  return "Need a roomie to give personal space"
	  case "Someone who is easy-going and relaxed":
		  return "Looking for  relaxed and chill person";
					
	  case "Doing something adventurous or outdoorsy":
		  return "Adventurous and outdoorsy";
	  case "Reading or learning something new":
		  return "avid reader";
	  case "Having a few close friends over":
		  return "Ambivert";
	  case "I prefer to keep to myself":
		  return "Introvert"
	  case "Going out to parties and events":
		  
		  return "Extrovert ; love parties";  
	  case "Hosting small gatherings at home":
		  return "love small gathering with few close friends";
	  case "Relaxing and recharging at home":
		  return "panda-soul";
	  case "Hanging out with friends":
		  return "friendly and outgoing";
    default:
      return answerText;
  }
}
export default function Quiz() {
	const questions = [
		{
			questionText: 'Are you comfortable with pets in  the apartment?',
			answerOptions: [
				{ answerText: 'Absolutely,I love pets!' },
				{ answerText: 'As long as they are well-behaved' },
				{ answerText: 'I have allergies, So not ideal for me' },
				{ answerText: 'No, sorry! I am not a pet person' },
			],
		},
		{
			questionText: 'What is your idea of perfect rommate',
			answerOptions: [
				{ answerText: 'Someone who is neat and tidy' },
				{ answerText: 'Someone who is outgoing and social' },
				{ answerText: 'Someone who is respectful of privacy ' },
				{ answerText: 'Someone who is easy-going and relaxed' },
			],
		},
		{
			questionText: 'How do you like to socialize?',
			answerOptions: [
				{ answerText: 'Going out to parties and events' },
				{ answerText: 'Hosting small gatherings at home' },
				{ answerText: 'Having a few close friends over' },
				{ answerText: 'I prefer to keep to myself' },
			],
		},
		{
			questionText: 'How do you like to spend your free time?',
			answerOptions: [
				{
					answerText: 'Doing something adventurous or outdoorsy'
				},
				{ answerText: 'Reading or learning something new', isCorrect: false },
				{ answerText: 'Relaxing and recharging at home', isCorrect: false },
				{ answerText: ' Hanging out with friends', isCorrect: true },
			],
		},
	];
       
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState([]);
	const [showAnswers, setShowAnswers] = useState(false);
// 	const [users, setUsers] = useState([]);
// 	useEffect(() => {
// 		const users = JSON.parse(localStorage.getItem('users'))
// 		setUsers(quizData.users);
// 		if (users) {
// 			setItems(users);
// 		}
//   }, []);
	const handleAnswerSelected = (answer) => {
		
		setSelectedAnswers([...selectedAnswers, answer]);
		const customAnswerText = getCustomAnswerText(answer.answerText);
	};
	

	const onSubmitting = () => {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		}
		else {
			setShowAnswers(true);
		
		     }
			
	}

	return (
	
		<div className='quizapp'>
			{!showAnswers && (
				<>
					<div className='question-count'>
						<span>Question {currentQuestion + 1}</span>/{questions.length}
					</div>
					<div className='question-text'>
						{questions[currentQuestion].questionText}
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerSelected(answerOption)}>
								{answerOption.answerText}
							</button>
						))}
					</div>
					<button onClick={onSubmitting}>Submit</button>
				</>
			)}
			{showAnswers && (
				<div className="Profile-container">
				 <div className='Profile'>
					<div className='Profile-title'>Your profile</div>
					<div className='Profile-attributes'>
						{selectedAnswers.map((answer, index) => (
							<div key={index}>
							 {getCustomAnswerText(answer.answerText)}
							</div>
						))}
					</div>
					</div>
				</div>
				
			)}
			{/* <div className='other_profiles'> */}
      {/* {items.map((item, index) => (
       //  <div key={index}>
       //    <h2>{item.name}</h2>
       //    <p>Pet Preference: {item.petPreference}</p>
       //    <p>Partner Hygiene: {item.partnerHygiene}</p>
       //    <p>Outdoorsy: {item.outdoorsy}</p>
       //    <p>Social: {item.social}</p>
       //  </div>
      ))}
				 */}
    {/* </div> */}
		</div>
	);

                   
}



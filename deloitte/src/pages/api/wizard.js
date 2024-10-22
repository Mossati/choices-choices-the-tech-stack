//importeer het "fetch-json" bestand en geef het de naam fetchJson
import fetchJson from '@components/fetch-json.js';

//een functie om data in te laden met async wacht je totdat the API request gedaan is
export async function load({ params }) {
  //een variable met een APi url voor person met id 56
  const questions_url = 'https://fdnd-agency.directus.app/items/deloitte_questions'
  const answers_url = 'https://fdnd-agency.directus.app/items/deloitte_answers'
  //fetch de data uit de API url en sla het op in deze variable
  const questions = await fetchJson(questions_url)
  const answers = await fetchJson(answers_url)

  const currentQuestionIndex = params.currentQuestionIndex || 0;

  const currentQuestion = questions.data[currentQuestionIndex];
  const currentAnswers = answers.data.filter(answer => answer.question_id === currentQuestion.id);

  //return een object waarin person.data wordt meegegeven
  return {
    currentQuestion,
    currentAnswers
  }
}
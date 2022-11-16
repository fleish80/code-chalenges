import {SubmissionModel} from './submission.model';
import {QuestionModel} from './question.model';

const QUESTIONS_URL = 'https://www.algoexpert.io/api/fe/questions';
const SUBMISSIONS_URL = 'https://www.algoexpert.io/api/fe/submissions';

const fetchQuestions = async (): Promise<QuestionModel[]> => {
  const questionsResponse = await fetch(QUESTIONS_URL, {mode: 'no-cors'});
  return await questionsResponse.json() as QuestionModel[];
}

const fetchSubmissions = async (): Promise<SubmissionModel[]> => {
  const submissionsResponse = await fetch(SUBMISSIONS_URL, {mode: 'no-cors'});
  return await submissionsResponse.json() as SubmissionModel[];
}


const createCategory = (questions: QuestionModel[]): Element => {
  const categoriesMap = new Map<string, Element>();

  const categoriesDiv = document.createElement('div');
  categoriesDiv.classList.add('categories');


  questions.forEach((question) => {
    const categoryForId = question.category.replace(' ', '-').toLowerCase();

    let categoriesWrapperDiv = categoriesMap.get(question.category);

    if (!categoriesWrapperDiv) {

      categoriesWrapperDiv = document.createElement('div');
      categoriesWrapperDiv.classList.add('category-wrapper');
      categoriesWrapperDiv.id = categoryForId;
      categoriesWrapperDiv.innerHTML = `<h2>${question.category}</h2>`;

      const questionsDiv = document.createElement('div');
      questionsDiv.classList.add('questions');

      categoriesWrapperDiv.append(questionsDiv);
      categoriesDiv.append(categoriesWrapperDiv);
      categoriesMap.set(question.category, categoriesWrapperDiv);
    }

    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.id = question.id;
    questionDiv.textContent = question.name;

    const questionsDiv = categoriesWrapperDiv.querySelector('.questions')!;
    questionsDiv.append(questionDiv);
  });

  return categoriesDiv;

}

const updateSubmissionQuestion = (submissions: SubmissionModel[]): void => {

}

(async () => {
  const questions = await fetchQuestions();
  document.body.append(createCategory(questions));
})()

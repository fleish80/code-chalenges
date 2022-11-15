const QUESTIONS_URL = 'https://www.algoexpert.io/api/fe/questions';
const SUBMISSIONS_URL = 'https://www.algoexpert.io/api/fe/submissions';

(async () => {
  const questionsJson = await fetch(QUESTIONS_URL, {mode: 'no-cors'});
  const questions: QuestionModel[] = await questionsJson.json();

  console.log({questions});

  const categoriesMap = new Map<string, boolean>();

  questions.forEach((question) => {
    const categoryForId = question.category.replace(' ', '-').toLowerCase();
    const hasCategory = categoriesMap.get(question.category);
    if (!hasCategory) {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'category';
      categoryDiv.id = categoryForId;
      categoryDiv.innerHTML = `<h2>${question.category}</h2>`;
      const questionsDiv = document.createElement('div');
      questionsDiv.className = 'questions';
      categoryDiv.append(questionsDiv);
      document.body.append(categoryDiv);
      categoriesMap.set(question.category, true);
    }
    const categoryDiv = document.querySelector(`#${categoryForId} .questions`);

    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.textContent = question.name;
    categoryDiv!.append(questionDiv);

  });

})()

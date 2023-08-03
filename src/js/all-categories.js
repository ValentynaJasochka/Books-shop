console.log('Hello All Categories');
import { createMarkupBookGroup } from './home';
const param = {
  bookCategoriesList: document.querySelector('.all-categories-list'),
};
const { bookCategoriesList } = param;

// fetch for category list for sidebar

class BooksApiService {
  #BASE_URL = 'https://books-backend.p.goit.global/books/';

  fetchCategoryList() {
    return fetch(`${this.#BASE_URL}category-list`).then(response => {
      if (!response.ok) {
        console.log(response);
        console.log(response.statusText);
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  fetchTopBooks() {
    return fetch(`${this.#BASE_URL}top-books`).then(response => {
      if (!response.ok) {
        console.log(response);
        console.log(response.statusText);
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  fetchCategory(category) {
    const searchParams = new URLSearchParams({
      category,
    });

    return fetch(`${this.#BASE_URL}category?${searchParams}`).then(response => {
      if (!response.ok) {
        console.log(response);
        console.log(response.statusText);
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  fetchBookById(bookId) {
    return fetch(`${this.#BASE_URL}${bookId}`).then(response => {
      if (!response.ok) {
        console.log(response);
        console.log(response.statusText);
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
}

const booksApiService = new BooksApiService();

async function fetchCategories() {
  try {
    const data = await booksApiService.fetchCategoryList();
    createMarkupBookCategory(data);
  } catch (error) {
    console.log(error);
  }
}
fetchCategories();

// markup for all categories list in sidebar
export function createMarkupBookCategory(arrBookCategories) {
  const arrForMarkup = arrBookCategories.map(
    ({ list_name: bookCategoryName }) => {
      return `<li>
          <span class="category">${bookCategoryName}</span>
                    </li>`;
    }
  );
  bookCategoriesList.innerHTML = arrForMarkup.join(' ');
}

//function for add event listener for click on book category in sidebar
bookCategoriesList.addEventListener('click', selectMarkupBookGroup);
function selectMarkupBookGroup(evt) {
  if (evt.target.className === 'category') {
    const category = evt.target.textContent;
    booksApiService
      .fetchCategory(category)
      .then(data => createMarkupBookGroup(data, category))
      .catch(err => console.log(err));
  }
}

# Random Quote Machine

This project is a Random Quote Machine built with Vite and React. The application displays random quotes and their authors, and allows users to fetch new quotes or tweet the current quote.

## Objective

Build an app that is functionally similar to this: https://random-quote.hackimtech.com

## User Stories

- I can see a wrapper element with a corresponding id="quote-box".
- Within #quote-box, I can see an element with a corresponding id="text".
- Within #quote-box, I can see an element with a corresponding id="author".
- Within #quote-box, I can see a clickable element with a corresponding id="new-quote".
- Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".
- On first load, my quote machine displays a random quote in the element with id="text".
- On first load, my quote machine displays the random quote's author in the element with id="author".
- When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.
- My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.
- I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.
- The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.

### Steps

1. Clone the repository:

```
git clone https://github.com/hackim18/Frontend-Random-Quote-Machine
cd Frontend-Random-Quote-Machine
```

2. Install dependencies:

```
npm install
```

3. Create a .env file in the root directory of the project and add your environment variables:

```
REACT_APP_API_URL=<Your API URL>
```

## Usage

### Start the development server:

```
npm run dev
```

### Build for production:

```
npm run build
```

### Preview the production build:

```
npm run preview
```

## API Endpoint

To fetch random quotes, you can use a public API like Quotes Free API (https://quotes.rest/) or Quotable API (https://quotable.io/).

## License

This project is licensed under the MIT License.

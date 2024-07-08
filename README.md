# WittyFacts (A Fact Sharing Web Application)

This full stack web application, developed with HTML, CSS, JavaScript, and React.js on the frontend and Supabase on the backend, allows users to upload facts, attach trustworthy source links, categorize them, and engage with them through reactions and voting.

## Features

- User-friendly interface for fact uploading and browsing
- Facts are stored in Supabase, providing a reliable backend
- Categorization of facts into 8 categories:
  - Technology
  - Science
  - Finance
  - Society
  - Entertainment
  - Health
  - History
  - News
- Display of facts based on selected categories
- Display of all facts when ALL category is selected
- User interactions with facts:
  - Thumbs up reaction
  - Mind blowing reaction
  - Downvote option
- Fact dispute handling based on voting:
  - If the number of downvotes exceeds the sum of thumbs up and mind blowing reactions, the fact is marked as disputed
- Real-time updates without page reload using React.js

## Deployment

The project is deployed and accessible at: [WittyFacts](https://witty-facts.netlify.app/)

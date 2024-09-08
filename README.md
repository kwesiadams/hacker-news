# Description

It’s finally happening! Hacker News is getting a redesign, and you’re in charge of building the front- end. Luckily, they’ve attached a mockup of the new design. They want a fast and flexible web application, so they want you to use React. The mockup they’ve provided to you is full of features, but they only require you to implement the core features unless you want extra brownie points.

# React + TypeScript + Vite

# Styling

The app uses tailwind css for styling.

# Structure

The src folder is made up of 4 subfolders besides the default asset folder.
1. The layout folder contains all components concerned with the main layout of the application
2. The lib folder contains utilities that are used across features in the application
3. The news folder is a feature folder with feature specific components (News List and News List Item)
4. The components folder contains basic reusable components

# Data Fetch and Caching

This project uses SWR for data fetching and caching. This decision was the project is relatively small and SWR simplicity and ease of use fits perfectly for the the project size
Live data for the project is fetched from https://github.com/HackerNews/API

# State Managemet 

Since SWR maintains a global cache by default for all fetched items. The approach to state management was intended to keep things simple. 
This project uses a combination of local state with useState and useContext for the few state elements that was needed 2 plus levels deep.
A combination of sessionStorage and localStorage was used to persist data through reloads/refreshes and to persist saved and seen data respectively beyond a session.

# Testing
Unit testing was omitted from this project in favor of usibility testing. Will add tests over the lifetime of the project





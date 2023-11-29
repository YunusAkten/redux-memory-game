import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    lastClicked: null,
    matched: [],
    frameworks: [
      "angular2",
      "vue",
      "react",
      "grunt",
      "phantomjs",
      "ember",
      "babel",
      "ionic",
      "gulp",
      "meteor",
      "yeoman",
      "yarn",
      "nodejs",
      "bower",
      "browserify",
      "angular2",
      "vue",
      "react",
      "grunt",
      "phantomjs",
      "ember",
      "babel",
      "ionic",
      "gulp",
      "meteor",
      "yeoman",
      "yarn",
      "nodejs",
      "bower",
      "browserify",
    ],
    score: 0,
  },
  reducers: {
    setLastClicked: (state, action) => {
      state.lastClicked = action.payload;
    },
    addToMatched: (state, action) => {
      state.matched.push(action.payload);
    },
    changeScore: (state, action) => {
      state.score += action.payload;
    },
    shuffleArray: (state, action) => {
      for (let i = state.frameworks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.frameworks[i], state.frameworks[j]] = [
          state.frameworks[j],
          state.frameworks[i],
        ];
      }
      state.matched = [];
      state.score = 0;
      state.lastClicked = null;
    },
  },
});

export const { setLastClicked, addToMatched, shuffleArray, changeScore } =
  boardSlice.actions;

export default boardSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:8080/api/words/";

// get words
export const getWords = createAsyncThunk("words/getWords", async () => {
  return fetch(url).then((res) => res.json());
});

// get cats
export const getCategories = createAsyncThunk("words/getCategories", async () => {
  return fetch("http://localhost:8080/api/words/categories").then((res) => res.json());
});

export const wordSlice = createSlice({
  name: "words",
  initialState: {
    current: [],
    showEng: true,
    showUkr: true,
    showPro: true,
    test: "testing",
    loading: true,
    post: [],
    categories: [],
    showPhrases: true,
  },
  reducers: {
    handleShowEng: (state, action) => {
      if(state.showEng === false){
        state.showEng = true;
      } else {
        state.showEng = false;
      }
    },
    handleShowUkr: (state, action) => {
      if(state.showUkr === false){
        state.showUkr = true;
      } else {
        state.showUkr = false;
      }
    },
    handleShowPro: (state, action) => {
      if(state.showPro == false){
        state.showPro = true;
      } else {
        state.showPro = false;
      }
    },
    handleShowPhrases: (state, action) => {
      if(state.showPhrases == false){
        state.showPhrases = true;
      } else {
        state.showPhrases = false;
      }
    }
  },
  extraReducers: {
    [getWords.pending]: (state, action) => {
      state.loading = true;
    },
    [getWords.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = action.payload;
      console.log(state.post);
    },
    [getCategories.pending]: (state, action) => {
      state.loading = true;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
  },
});

export const { handleShowEng, handleShowUkr, handleShowPro, handleShowPhrases } = wordSlice.actions;

export default wordSlice.reducer;

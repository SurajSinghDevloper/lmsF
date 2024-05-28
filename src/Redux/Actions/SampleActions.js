import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('sample/fetchData', async () => {
    const response = await fetch('https://dummyapi.online/api/movies');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await   response.json();
    return data;
});

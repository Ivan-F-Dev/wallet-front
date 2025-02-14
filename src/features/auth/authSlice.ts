import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    user: { id: number; username: string } | null;
}

const initialState: AuthState = {
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<{ id: number; username: string }>) {
            state.user = action.payload;
        },
        logout(state) {
            state.user = null;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

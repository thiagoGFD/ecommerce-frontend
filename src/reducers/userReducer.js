import userService from '../services/UserService';

const signIn = async(data) => {
    await userService.signIn(data.username, data.password).then(({data}) => {
        console.log('logou', data)
        return data;
    })
    .catch(function (error) {
        console.log(error);
        return null;
    });
}

const initialState = {
    user: null
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            // return {user: signIn(action.data)};
            return {user: {token:1, firstName:'qwe'}};
        default:
            return state;
    }
}
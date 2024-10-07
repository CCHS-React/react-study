import { configureStore,createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : 'kim',
    reducers : {
        changeName(state) { //여기서 state는 기존 state의 값 
            // 여기는 state값을 변경하는 함수입니다.
            return 'john' + state
        }
    }
})
export let {changeName} = user.actions
// 위에 만든 이녀석은 사실 [user,setUser] = useState('kim');
let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
})
let cart = createSlice({
    name: 'cart',
    initialState : [
        {id : 0, name : 'white and black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ]
})

export default configureStore({
    // reducer 안에 state를 등록해주어야지 사용이 가능
    reducer : {
        // user를 reducer에 등록
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }
})
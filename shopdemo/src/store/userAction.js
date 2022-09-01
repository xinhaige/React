import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'

const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
     (num) => {
        return num
    }
 )

 let user={
    isLogin:false,
    name:"",
    password:""
 }

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    user
  },
  
  reducers: {
    setName: (state,param) => {
        debugger
        state.user={
            ...param.payload,
            isLogin:true
        }
    },
   
  },

})
// 每个 case reducer 函数会生成对应的 Action creators
export const {setName} = counterSlice.actions

export default counterSlice.reducer
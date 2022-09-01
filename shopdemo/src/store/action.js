import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'

const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
     (num) => {
        return num
    }
  )



export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  
  reducers: {
    increment: state => {
      // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它
      // 并不是真正的改变状态值，因为它使用了 Immer 库
      // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的
      // 不可变的状态
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, pram) => {
      state.value += pram.payload
    }
  },
  //异步方法
  extraReducers(builder) {
    // omit posts loading reducers
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
        debugger
      // We can directly add the new post object to our posts array
         state.value+=action.payload
    })
  }

})
// 每个 case reducer 函数会生成对应的 Action creators
export const { increment, decrement, incrementByAmount} = counterSlice.actions
export  {incrementAsync}

export default counterSlice.reducer
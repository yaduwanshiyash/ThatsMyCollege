'use client'
import { useDispatch, useSelector } from "react-redux";
import { LoginSlice } from "@/store/slices/LoginSlice";

const Test = () => {
  const dispatch = useDispatch();

  const { isLogin } = useSelector((state) => state.loginStatus);

  const handleClick = () => {
    // Dispatch the setIsLogin action from LoginSlice.actions
    // dispatch(LoginSlice.actions.setIsLogin(!isLogin));
  }
  // console.log(isLogin);

  return (
    <div>
      This is Test 
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Test;

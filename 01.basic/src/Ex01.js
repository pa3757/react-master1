function Ex01() {
  const isLogin = "Login";

  //     if(isLogin === 'Login1'){
  //     return(
  //         <div>
  //         <p>로그인해주세요!</p>
  //         <button>Login</button>
  //         </div>
  //     )
  //     }else{
  //         return(
  //             <div>
  //             <p>손준수님 환영합니다:</p>
  //             <button>Logout</button>
  //             </div>
  //         )
  //     }
  // }
  const styled = {
    p: {
      color: "red",
      fontWeight: "bold",
    },
  };

  return isLogin === "Login" ? (
    <div>
      <p style={styled.p}>로그인해주세요!</p>
      <button>Login</button>
    </div>
  ) : (
    <div>
      <h2>손준수님 환영합니다:)</h2>
      <button>Logout</button>
    </div>
  );
}
export default Ex01;

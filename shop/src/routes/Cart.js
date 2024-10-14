import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName,addAge, addCount, minusCount } from "../store";

function Cart() {
  //localstorage test
  localStorage.setItem('데이터 이름','데이터'); //추가
  localStorage.getItem('데이터이름') // 읽기
  // localStorage.removeItem('데이터 이름') // 삭제;

  //localstorage는 키, 밸류 문자만 저장하는 공간
  // array나 object를 저장하고 싶다면??
  // array/object ==> json 변환해서 저장하면 됩니다
  // json ==> 따옴표 친 array 라고 생각하십쇼
  
  localStorage.setItem('obj',JSON.stringify({name:'kim'}))
  // json은 문자 취급이기 때문에 그냥 박을수 잇다
  // json로 저장한 데이터를 꺼내고 싶으면 
  let aaa = localStorage.getItem('obj')
  console.log(aaa)
  let b = JSON.parse(aaa)
  console.log(b)

  let state = useSelector((state) => state);
  let dispatch = useDispatch()
  return (
    <div>
      {state.user.name}의 장바구니
      {state.user.age}의 나이
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>1</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button onClick={()=>{
                  dispatch(changeName('jeonghun'))
                  dispatch(addAge(3))
                  dispatch(addCount(i))
                }}>+</button>
                <button onClick={()=>{
                  dispatch(minusCount(i))
                }}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Cart;

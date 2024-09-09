import {useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import styled from 'styled-components'


let Box = styled.div`
    padding : 20px;
    color : grey;
`;
let YelloBtn = styled.button`
    background : ${props => props.bg};
    color : black;
    padding : 10px;
`;
function Detail (props) {
    useEffect(() => {
        console.log("안녕안녕");
    });
    let [count, setCount] = useState(0);

    let {id} = useParams();
    let myItem = props.shoes.find(function(x) {
        return x.id == id
    });

    let [alert, setAlert] = useState(true)
    useEffect(() => {
        let timer = setTimeout(()=> {setAlert(false)}, 2000)
        return () => {
            clearTimeout(timer);
        }
    }, [] )

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="/shoe1.png" width="100%"></img>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{myItem.title}</h4>
                    <p>{myItem.content}</p>
                    <p>{myItem.price} 원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
                <div>
                    <Box>
                        <YelloBtn bg="orange" onClick={()=> {setCount(count+1)}}>오렌지버튼</YelloBtn>
                        <YelloBtn bg="blue">파란 버튼</YelloBtn>
                        {alert == true ? <YelloBtn>2초후 사라짐</YelloBtn> : null}
                    </Box>
                </div>
            </div>
        </div>
    )
}
export default Detail;
import { useState } from "react";
// useState 사용할때는 데이터에 해당하는 부분과 데이터를 초기화하는 setter 부분

const IterationSample = () => {
    const [names,setNames] = useState([
        {id:1, text:'눈사람'},
        {id:2, text:'얼음'},
        {id:3, text:'눈'},
        {id:4, text:'바람'}
    ]);
    const [inputText,setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);
    const onClick = () =>{
        const nextNames = names.concat({
            id : nextId,
            text : inputText
        });
        setNextId(nextId +1); // nextId 값에 1을 더해준다
        setNames(nextNames) // concat한 값을 업데이트한다.
        setInputText(''); // input 칸을 비운다.

    }
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !==id);
        setNames(nextNames);
    }

    const nameList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}</li>);
    console.log(nameList);
    return (
        <>
        <input value={inputText} onChange={onChange}/>
        <button onClick={onClick}>추가</button>
        <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;
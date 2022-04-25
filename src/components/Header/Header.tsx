import {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {getDataByNameTC} from "../../store/getDataByName/getDataByNameThuncCreator";
import style from "./header.module.css"


export const Header = () => {

    const dispatch = useDispatch()
    const [inputState, setInputState] = useState('')

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputState(e.currentTarget.value)
    }

    const clickHandler = () => {

        dispatch(getDataByNameTC(inputState))
    }




    return (
        <header className={style.main_container}>
            <input
                onChange={inputChangeHandler}
                type="text"/>
            <button onClick={clickHandler}>x</button>
        </header>
    )
}
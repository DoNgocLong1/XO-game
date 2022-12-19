import React, {useEffect, useState} from 'react'
import {
    Container,
    Square,
    Layout,
    PopDown,
    Img} from './Table.styled'
import O from '../../assets/images/Opng.png'
import X from '../../assets/images/Xpng.png'
const Table2 = () => {

    /* const tick = [{'id': 0, 'value': 1}, {'id': 30, 'value': 1}, {'id': 25, 'value': 1}, {'id': 28, 'value': 0}, {'id': 45, 'value': 0}] */
    let isWinner = false
    const [count, setCount] = useState(1)
    const [sign, setSign] = useState([])
    const [isCaro, setIsCaro] = useState(1)
    if(count > 3) {
        /* isWinner = true */
        alert('winner')
    }
    /* useEffect(() => {
        isCaro === 1 ? setIsCaro(0) : setIsCaro(1)  
    },[isWinner]) */
    const handleSign = (item) => {
        let newArr = [...sign]
        newArr = [
            ...newArr,
            item
        ]
        setSign(newArr)
    }
    const setXO = (id) => {
        const findId = sign.find((item) => {
            return item.id === id
        })
        if(findId && isWinner) return 
        isCaro === 1 ? setIsCaro(0) : setIsCaro(1)      
    }
    const checkRow = (chess, table) => {
        let count = 0
        let {x,y} = chess
        const findArr = table.filter((item) => {
            return item.value === chess.value
        })
        for(let i = y-4; i <= y+4; i++){
          for(let item of findArr){
            if(item.y === i && item.x=== x) {
                count++
            }
          }
        }
        if(count>3) setCount(count)
    }
    const winner = () => {

    }
    const checkColumn = (chess, table) => {
        let count = 0
        let {x,y} = chess
        const findArr = table.filter((item) => {
            return item.value === chess.value
        })
        for(let i = x-4; i <= x+4; i++){
          for(let item of findArr){
            if(item.x === i && item.y=== y) {
                count++
            }
          }
        }
        if(count>3) setCount(count)
    }
    const checkDiagonalLeft = (chess, table) => {
        let count = 0
        let {x,y} = chess
        const findArr = table.filter((item) => {
            return item.value === chess.value
        })
        console.log(findArr)
        for(let i = x-4; i <= x+4; i++){
          for(let j = y-4; j<= y+4; j++){
            for(let item of findArr){
                if(item.x === i && item.y === j && i+j === x+y) {
                    console.log(true)
                    count++
                }
              }
          }
        }
        if(count>3) setCount(count) 
    }
    const checkDiagonalRight = (chess, table) => {
        let count = 0
        let {x,y} = chess
        const findArr = table.filter((item) => {
            return item.value === chess.value
        })
        console.log(findArr)
        for(let i = x-4; i <= x+4; i++){
          for(let j = y-4; j<= y+4; j++){
            for(let item of findArr){
                if(item.x === i && item.y === j && i-j === x-y) {
                    console.log(true)
                    count++
                }
              }
          }
        }
        if(count>3) setCount(count) 
    }
    return (
    <Container>
        {/* <Layout isWinner = {isWinner}></Layout>
        <PopDown isWinner = {isWinner}>
            <Img src={isCaro === 1 ? O : X} />
        </PopDown> */}
        {Array(20).fill(0).map((_,trIndex) => (
            <tbody key={trIndex}>
                <tr >
                    {Array(20).fill(0).map((_,tdIndex) => (
                    <td key={20 * trIndex + tdIndex} x ={trIndex} y = {tdIndex}>
                        <Square
                         onClick={() => {
                            handleSign(                  
                            {
                                'x': trIndex,
                                'y': tdIndex,
                                'value': isCaro
                            })
                            checkRow(
                                {
                                    'x': trIndex,
                                    'y': tdIndex,
                                    'value': isCaro
                                },
                                sign
                            )
                            checkColumn(
                                {
                                    'x': trIndex,
                                    'y': tdIndex,
                                    'value': isCaro
                                },
                                sign
                            )
                            checkDiagonalLeft(
                                {
                                    'x': trIndex,
                                    'y': tdIndex,
                                    'value': isCaro
                                },
                                sign
                            )
                            checkDiagonalRight(
                                {
                                    'x': trIndex,
                                    'y': tdIndex,
                                    'value': isCaro
                                },
                                sign
                            )
                            setXO(10 * trIndex + tdIndex)
                            
                        }}
                        isTick = {sign.find((item) => {
                            return item.x === trIndex && item.y === tdIndex
                            
                        })}
                        />
                    </td>
                    ))}
                </tr>
            </tbody>
        ))}
    </Container>
  )
}

export default Table2
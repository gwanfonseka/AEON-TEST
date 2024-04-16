'use client';

import classes from './calculator.module.css';
import { useState } from 'react';

const Calculator = () => {
    const [firstNumber, setFirstNumber] = useState<number>(0);
    const [secondNumber, setSecondNumber] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    const handleTotal = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTotal(firstNumber + secondNumber);
    };

    const handleClear = () => {
        setFirstNumber(0);
        setSecondNumber(0);
        setTotal(0);
    };

    return (
        <div className={classes.calculatorWrapper}>
            <div className={classes.wrapper}>
                <h1>Adding Two Numbers</h1>
                <div className={classes.calculatorSection}>
                    <div className={classes.calculatorInputs}>
                        <form onSubmit={handleTotal}>
                            <div className={classes.inputGroup}>
                                <label htmlFor='firstNumber'>First Number</label>
                                <input
                                    id='firstNumber'
                                    type="number"
                                    placeholder="First number"
                                    value={firstNumber}
                                    onChange={(event) => setFirstNumber(+event.target.value)}
                                />
                            </div>
                            <div className={classes.inputGroup}>
                                <label htmlFor='secondNumber'>Second Number</label>
                                <input
                                    id='secondNumber'
                                    type="number"
                                    placeholder="Second number"
                                    value={secondNumber}
                                    onChange={(event) => setSecondNumber(+event.target.value)}
                                />
                            </div>
                            <div className={classes.footerButtons}>
                                <button className={classes.submitButton} type='submit'>Add Two Numbers</button>
                                <button className={classes.clearButton} type='button' onClick={handleClear}>Clear Calculator</button>
                            </div>
                            <div className={classes.totalWrapper}>
                                <p>Total is:</p>
                                <div className={classes.answer}>{total}</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
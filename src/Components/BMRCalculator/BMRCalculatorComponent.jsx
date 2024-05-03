import React, { useState } from 'react';
import './BMRCalculatorStyle.css'

export const BMRCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [activityLevel, setActivityLevel] = useState('sedentary');
    const [bmrResult, setBmrResult] = useState(null);

    // Функция за изчисляване на BMR
    function calculateBMR(weight, height, age, gender) {
        let bmr = 0;

        if (gender === 'male') {
            // Формула за мъже
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else if (gender === 'female') {
            // Формула за жени
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        return bmr;
    }

    // Функция за коригиране на BMR спрямо нивото на физическа активност
    function adjustBMR(bmr, activityLevel) {
        let adjustedBMR = 0;

        switch (activityLevel) {
            case 'sedentary':
                adjustedBMR = bmr * 1.2;
                break;
            case 'light':
                adjustedBMR = bmr * 1.375;
                break;
            case 'moderate':
                adjustedBMR = bmr * 1.55;
                break;
            case 'active':
                adjustedBMR = bmr * 1.725;
                break;
            case 'veryActive':
                adjustedBMR = bmr * 1.9;
                break;
            default:
                adjustedBMR = bmr;
        }

        return adjustedBMR;
    }

    // Обработчик за изчисляване на BMR
    function handleSubmit(event) {
        event.preventDefault();
        const bmr = calculateBMR(parseFloat(weight), parseFloat(height), parseFloat(age), gender);
        const adjustedBMR = adjustBMR(bmr, activityLevel);
        setBmrResult(adjustedBMR.toFixed(2));
    }

    return (
        <div className='container'>
            <h4>Enter your information for calculating daily calories:</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="weight">Weight (kg):</label>
                <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required /><br />

                <label htmlFor="height">Height (cm):</label>
                <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} required /><br />

                <label htmlFor="age">Age (years):</label>
                <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required /><br />

                <label htmlFor="gender">Gender:</label>
                <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select><br />

                <label htmlFor="activityLevel">Activity Level:</label>
                <select id="activityLevel" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} required>
                    <option value="sedentary">Sedentary</option>
                    <option value="light">Light (1-3 days per week)</option>
                    <option value="moderate">Moderate (3-5 days per week)</option>
                    <option value="active">Active (6-7 days per week)</option>
                    <option value="veryActive">Very Active (twice per day)</option>
                </select><br />

                <button type="submit">Calculate BMR</button>
            </form>
            <div className='calories-result'><span style={{ paddingRight: '5px', fontWeight : 'bold' }}>Your Adjusted BMR:</span>
                {bmrResult && <p>{bmrResult} calories/day</p>}</div>

        </div>
    );
}



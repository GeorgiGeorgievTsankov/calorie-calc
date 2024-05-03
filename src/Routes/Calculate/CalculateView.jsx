import React from 'react'
import { BMRCalculator } from '../../Components/BMRCalculator/BMRCalculatorComponent';
import './CalculateStyle.css'
import UseScrollComponent from '../../Components/UseScroll/UseScrollComponent';

export const CalculateView = () => {

    UseScrollComponent();

    return (
        <div className="container-calculate animation">
            <div className="item">
                <h1>NORMAL WEIGHT ACCORDING TO THE TABLE</h1>
                <p>
                    Normal weight represents the desired or optimal weight of an individual. It depends on age and gender. You have a reason to rejoice when your body mass index as a woman is between 19 and 24 and respectively between 20 and 25 for a man. This means that your weight and height are in harmony. Regarding your nutrition and health, you have largely made the right decisions. Balanced eating and sufficient exercise will help you maintain your ideal weight. If you already exercise a lot, are in shape, and have a high percentage of muscle mass, it is possible that your calculated BMI falls into the overweight category. In this case, it is better to orient yourself based on the percentage of body fat. Orienting based on body fat percentage is also useful for normal weight individuals. Women and men with overweight can relatively quickly lose weight through crash diets, mainly in the form of water expelled from the body. But weight loss can also occur with loss of muscle mass. This can have negative consequences when too little body fat is broken down simultaneously. When losing weight, you should be careful above all to maintain or increase your muscle mass and ideally break down fat.</p>
            </div>
            <div className="item"><BMRCalculator /></div>
        </div>
    )
}

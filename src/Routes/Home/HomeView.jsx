import React from 'react'
import './HomeStyle.css'
import ImgFirst from '../../Components/Assets/calc-first.jpg';
import ImgSecond from '../../Components/Assets/calc-second.jpg';
import ImgThird from '../../Components/Assets/calc-third.jpg';
import UseScrollComponent from '../../Components/UseScroll/UseScrollComponent';



export const HomeView = () => {

    UseScrollComponent();

    return (
        <>
            <div className='uchebni-celi animation'><h1>The application is made for educational purposes.</h1></div>
            <div className='uchebni-celi animation'><h2>The goal is to practice React, Routes, and utilizing external API resources. This educational project involves implementing React components, managing routes for navigation, and integrating external APIs for data retrieval and interaction.</h2></div>
            <div className='home-container'>
                <div className='cviat animation'>
                    <h2>BODY MASS INDEX</h2>
                    <p>
                        Have you ever wondered, "How many kilograms should I be?" or wanted to calculate how many kilograms you should weigh according to your height to be in good health? Perhaps you think you are overweight, but is that always the case, and does it always require medical intervention? To check this, you need to know your height and weight to calculate your Body Mass Index (BMI).

                        Do you want to calculate your ideal weight? The Body Mass Index (BMI) can help you with that. Your weight is divided by your height squared. Age and weight also play a role. The formula looks like this: (weight in kilograms) / (height in meters)².The BMI (Body Mass Index) shows the relationship between your weight and height. Depending on the result of this calculation and in relation to your age and gender, our BMI calculator can calculate a value that indicates whether your weight is within normal limits. In the adjacent BMI value table, which presents the division of individual weight groups, you can easily see if you are on the border of another group. For example, you may still be within normal weight range, but already be on the border towards overweight or underweight group. Depending on the structure of your body and your health condition, it may seem necessary to increase or decrease your current weight.</p></div>
                <div className='cviat animation'><img src={ImgFirst} alt="circle-calc" style={{ maxWidth: '100%', height: 'auto' }} /></div>
            </div>
            <div class="attachment">
                <div class="attachment-text">
                    <h1>To be in shape we need to eat right</h1>
                </div>
            </div>
            <div className='uchebni-celi animation'><h1>FEEL GOOD IN YOUR SKIN</h1></div>
            <div className='home-container'>
                <div className='cviat animation'>
                    <h2>NORMAL WEIGHT ACCORDING TO THE TABLE</h2>
                    <p>
                        Normal weight represents the desired or optimal weight for an individual. It depends on age and gender. You have a reason to rejoice when your body mass index (BMI) as a woman is between 19 and 24 and between 20 and 25 for men. This means that your weight and height are in harmony. Regarding your diet and health, you have largely made the right decisions. Balanced nutrition and sufficient exercise will help you maintain your ideal weight.

                        If you already exercise a lot, are in good condition, and have a high percentage of muscle mass, it is possible that your calculated BMI falls into the overweight category. In this case, it is better to orient yourself by the percentage of body fat. Orienting by the percentage of body fat is also useful for normal weight individuals. Women and men with excess weight can relatively quickly lose weight through crash diets in the form of water expelled from the body. However, weight loss can also occur with muscle loss. This can have negative consequences when too little body fat is being broken down at the same time. When losing weight, you should be careful above all to maintain or increase your muscle mass and ideally break down fat.</p></div>
                <div className='cviat animation'><img src={ImgSecond} alt="normal-weight" style={{ maxWidth: '100%', height: 'auto' }} /></div>
            </div>
            <div className='uchebni-celi animation'><h1>Don't wonder, take measures.</h1></div>
            <div className='home-container'>
                <div className='cviat animation'>
                    <h2>OVERWEIGHT ACCORDING TO BMI TABLE</h2>
                    <p>
                        Overweight is divided into three levels: overweight (BMI value between 24 and 30 for women and between 25 and 30 for men), obesity (BMI between 30 and 40 for both men and women), and severe obesity (BMI above 40 for both men and women). If you are overweight, it is essential to visit a doctor and consult with a dietitian, as the risk of cardiovascular disease is significant.

                        Not all overweight is unhealthy. Calculated overweight according to BMI does not necessarily mean that it is unhealthy or that the body is not fit. As explained in the section on normal weight, both men and women who engage in strength training and have a high percentage of muscle mass may fall into the overweight category. However, they are often the healthiest among us.

                        To get a better idea of the type of your overweight, you should consult with your doctor. Together with them, analyze the composition of your body in terms of percentage of fat, muscles, and water. Based on this, goals can be set that are not focused solely on weight loss.</p></div>
                <div className='cviat animation'><img src={ImgThird} alt="fat-girl" style={{ maxWidth: '100%', height: 'auto' }} /></div>
            </div>
        </>
    )
}



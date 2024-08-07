'use client'
import React, { useState, useEffect } from 'react';

const FoodWheel: React.FC = () => {
    const [selectedFood, setSelectedFood] = useState<string | null>(null);
    const [currentFoodIndex, setCurrentFoodIndex] = useState<number>(0);
    const [isShuffling, setIsShuffling] = useState<boolean>(false);

    const foods = [
        'น้องแนน', 'ห้องแอร์', 'better', 'เตี๋ยวเป็ด',
        'เตี๋ยวไก่', 'ขาหมู', 'ส้มตำ'
    ];

    useEffect(() => {
        let shuffleTimeout: NodeJS.Timeout;

        if (isShuffling) {
            shuffleTimeout = setTimeout(() => {
                setCurrentFoodIndex((prevIndex) => (prevIndex + 1) % foods.length);
            }, 100);
        } else if (selectedFood === null) {
            setSelectedFood(foods[currentFoodIndex]);
        }

        return () => clearTimeout(shuffleTimeout);
    }, [isShuffling, currentFoodIndex, selectedFood, foods]);

    const startShuffle = () => {
        setSelectedFood(null);
        setIsShuffling(true);

        setTimeout(() => {
            setIsShuffling(false);
        }, 2000); // จำนวนเวลาในการสลับค่า 2 วินาที
    };

    return (
        <div className="flex flex-col items-center">
            <div className="text-2xl mb-4">
                {isShuffling ? foods[currentFoodIndex] : selectedFood}
            </div>
            <button onClick={startShuffle} disabled={isShuffling} className="px-4 py-2 bg-blue-500 text-white rounded">
                สุ่มร้านอาหาร
            </button>
            {selectedFood && !isShuffling && <div>ร้านอาหารที่สุ่มได้: {selectedFood}</div>}
        </div>
    );
};

export default FoodWheel;

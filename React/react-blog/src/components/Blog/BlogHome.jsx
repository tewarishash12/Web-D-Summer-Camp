import React from "react";
import Slide from "../Slides/Slide";
import Card from "./Card";
import Footer from "../Footer/Footer";
import CardTwo from "./CardTwo";

const BlogHome = () => {
const data = [
    {
        id: 1,
        titleOne: "YOU CAN CHANGE THE WORLD",
        titletwo: "STRONG STYLE",
        paraOne: "How Women are Redirecting Hollywood",
        paraTwo: "New Ways to Wear Denim Belt Bags make a Comeback",
        name: "By Jasmin Smith",
        subTitle: "How to Shop Mindfully",
        qrCode: "/images/qrcode.png",
        cover: "/Images/blog5.jpg",
    },
];
    return (
        <section className="home flex flex-col md:flex-row p-6 space-y-6 md:space-y-0 md:space-x-6">
        <div className="left-content w-full md:w-2/3 flex flex-col space-y-6">
            {data.map((value) => {
                return (
                    <div className="content bg-white shadow-md rounded-lg p-6" key={value.id}>
                        <div className="logo text-4xl font-bold text-center bg-gray-900 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
                            <h1>S</h1>
                        </div>
                        <div className="home-img mb-4">
                            <img src={value.cover} alt="Cover Image" className="w-full h-auto max-w-full rounded-lg"/>
                        </div>
                        <div className="text mb-4">
                            <h1 className="text-xl font-semibold mb-2">{value.titleOne}</h1>
                            <p className="text-gray-600 mb-1">{value.paraOne}</p>
                            <span className="text-gray-400 text-sm">{value.name}</span>
                        </div>
                        <div className="text mb-4">
                            <h1 className="text-xl font-semibold mb-2">{value.titletwo}</h1>
                            <p className="text-gray-600 mb-1">{value.paraTwo}</p>
                            <span className="text-gray-400 text-sm">{value.subTitle}</span>
                        </div>
                        <div className="qrcode">
                            <img src={value.qrCode} alt="QR Code" className="w-16 h-16 mt-4"/>
                        </div>
                    </div>
                );
            })}
        </div>
        <div className="right-content w-full md:w-1/3 flex flex-col space-y-6">
            <Slide />
            <Card />
            <CardTwo />
            <Footer />
        </div>
    </section>
    
  );
};

export default BlogHome;

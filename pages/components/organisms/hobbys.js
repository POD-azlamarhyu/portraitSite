import React from "react";
import Header from './header';
import Footer from './footer';
import Image from "next/image";

const Hobbys = () => {
    return (
        <>
            <Header />
            <div className="flex justify-center">
                <div className="flex-none w-1/6 m-4">
                    
                </div>
                <div className="flex-1 flex-col w-5/6 m-4">
                    <div className="flex w-full h-80 bg-slate-300 m-2 rounded-xl">
                        <div className="w-7/12">
                            <h2 className="mx-5 my-5 text-4xl font-medium">Travel -鉄道旅行-</h2>
                            <p className="mx-5 my-7 text-xl text-slate-600">
                                自分の趣味の中で最も優先度が高く、お金もかかっているものです。鉄道で日本各地に赴いては、自分がその場に生きていたことをカメラで記録しています。<br />
                                今、日本はどんどん鉄路が消えていっている状態です。少しでも、皆様に鉄道に興味を持っていただくための活動もしていきたいと考えております。
                            </p>
                        </div>
                        <div className="w-5/12">
                            2
                        </div>
                    </div>
                    <div className="flex w-full">2</div>
                </div>
                <div className="flex-none w-1/6 m-4">
                    
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Hobbys;
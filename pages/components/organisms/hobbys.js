import React from "react";
import Header from './header';
import Footer from './footer';
import HobbysLeftCard from "../modules/hobbysLeftCard";
import HobbysRightCard from "../modules/hobbysRightCard";


const Hobbys = () => {

    const hobbysCardContents = [
        {
            id: 0,
            image: require("../../../public/travel.png").default,
            title: "Travel　-鉄道旅行-",
            description: [
                {
                    id: 0,
                    param:"自分の趣味の中で最も優先度が高く，お金もかかっているものです．鉄道で日本各地に赴いては，自分がその場に生きていたことをカメラで記録しています．",
                    
                },
                {
                    id: 1,
                    param: "今，日本はどんどん鉄路が消えていっている状態です．少しでも，皆様に鉄道に興味を持っていただくための活動もしていきたいと考えております．",
                }
            ],
        },
        {
            id: 1,
            image: require("../../../public/gadget.png").default,
            title: "Gadget　-PC＆ガジェット-",
            description: [
                {
                    id: 0,
                    param: "PCやカメラ，スマートフォンなどのガジェット類がとても好きです．パソコンはPCパーツを一つ一つ選んで組んだり，PC周辺機器でより便利で生産性を上げる品がないか日々探してます．",
                },
                {
                    id :1,
                    param: "PCパーツも色々調べたり，旅で使うカメラなども選んでいます．",
                }
            ],
        },
        {
            id: 2,
            image: require("../../../public/anime.png").default,
            title: "Anime&Comic　-アニメ&漫画-",
            description: [
                {
                    id: 0,
                    param: "日本の文化，アニメなどもお金が比較的かからない趣味として楽しんでいます．TVを私は捨てたので，VODサービスオンリーで視聴しています．",
                },
                {
                    id: 1,
                    param: "他にも，漫画，ラノベなども嗜んでおります．さらに，二次創作を某小説投稿サイトにて執筆しております．",
                }
            ],
        },
        {
            id: 3,
            image: require("../../../public/money_kabuken.png").default,
            title: "Assets Management　-資産運用-",
            description: [
                {
                    id: 0,
                    param: "今の日本の状況から打開するために，自分の資産の置き方を考えた結果，自身で資産を運用しています．",
                },
                {
                    id: 1,
                    param: "中でも，株式に投資し，少しでも資産を増やす努力をすることを当たり前にし続けた結果趣味となりました．"
                }
            ]
        }
    ];

    return (
        <>
            <Header />
            <div className="flex justify-center">
                <div className="flex-none w-1/12 m-4">
                    <></>
                </div>
                <div className="flex-1 flex-col w-5/6 m-4">
                    {hobbysCardContents.map((contents)=>{
                        return(
                            contents.id % 2 === 0 ? (
                                <HobbysLeftCard contents={contents} key={contents.id}/>
                            ):(
                                <HobbysRightCard contents={contents} key={contents.id}/>
                            )
                        )
                    })}
                </div>
                <div className="flex-none w-1/12 m-4">
                    <></>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Hobbys;
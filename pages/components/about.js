import React from "react";
import Header from "./header";
import Footer from "./footer";

const About = () =>{
    return(
        <>
            <Header />
            <div className="sm:mx-8 sm:my-6 sm:p-6 flex justify-center">
                <div className="grid grid-cols-2 gap-4 sm:w-4/5 md:w-4/5 items-center">
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="md:m-auto bg-gradient-to-r from-red-100 to-red-200 border-b-8 border-red-400 text-xl md:text-2xl py-5">名前</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="m-1 text-center text-xl md:text-2xl py-5">ShellVarng Jiro.</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="md:m-auto bg-gradient-to-r from-red-100 to-red-200 border-b-8 border-red-400 text-xl md:text-2xl py-5">所属</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="m-1 text-center text-xl md:text-2xl py-5">私立理系　大学院博士課程</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="md:m-auto bg-gradient-to-r from-green-100 to-green-200 border-b-8 border-green-400 text-xl md:text-2xl py-5">研究分野</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="m-1 text-center text-xl md:text-2xl py-5">インタラクション・画像認識・IoT・アクセシビリティ</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="md:m-auto bg-gradient-to-r from-green-100 to-green-200 border-b-8 border-green-400 text-xl md:text-2xl py-5">進路</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="m-1 text-center text-xl md:text-2xl py-5">同大学院に進学予定</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="md:m-auto bg-gradient-to-r from-blue-100 to-blue-200 border-b-8 border-blue-400 text-xl md:text-2xl py-5">実績</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center py-5">
                        <p className="text-center mt-3 mr-3 ml-3 text-xl md:text-4xl px-4"><strong>情報処理学会論文誌</strong></p>
                        <p className="text-center mr-3 ml-3 mb-3 text-xl md:text-4xl px-4"><strong>GN特集号　採録</strong></p>
                        <p className="text-center m-3 text-xl md:text-2xl p-4">Interaction2021　投稿・採録</p>
                        <p className="text-center m-3 text-xl md:text-2xl p-4">DICOMO2021　投稿・採録</p>
                        <p className="text-center m-3 text-xl md:text-2xl p-4">Interaction2022　投稿・採録</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="md:m-auto bg-gradient-to-r from-blue-100 to-blue-200 border-b-8 border-blue-400 text-xl md:text-2xl py-5">実務</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="mt-3 mr-3 ml-3 text-center text-xl md:text-3xl px-5"><strong>ソフトバンク株式会社</strong></p>
                        <p className="mb-3 mr-3 ml-3 text-center text-xl md:text-3xl px-5"><strong>職種：コンサル・5G&IoTエンジニア</strong></p>
                        
                        <p className="mt-3 mr-3 ml-3 text-center text-xl md:text-3xl px-5">Material Bank Japan株式会社（現職）</p>
                        <p className="mb-3 mr-3 ml-3 text-center text-xl md:text-3xl px-5">職種：データエンジニア</p>
                        <p className="m-1 text-center text-xl md:text-2xl py-5">株式会社LDB　職種：Webエンジニア</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="md:m-auto bg-gradient-to-r from-purple-100 to-purple-200 border-b-8 border-purple-400 text-xl md:text-2xl py-5">資格</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="m-1 text-center text-xl md:text-2xl">TOEIC score 550</p>
                        {/* <p className="m-1 text-center text-xl md:text-2xl">AWS 認定試験(予定)</p> */}
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="md:m-auto bg-gradient-to-r from-purple-100 to-purple-200 border-b-8 border-purple-400 text-xl md:text-2xl py-5">特技</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="m-1 text-center text-xl md:text-2xl">マネジメント</p>
                        <p className="m-1 text-center text-xl md:text-2xl">極限の節約</p>
                        <p className="m-1 text-center text-xl md:text-2xl">耐久力</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
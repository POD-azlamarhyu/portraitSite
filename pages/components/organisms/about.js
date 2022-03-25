import React from "react";
import Header from "./header";
import Footer from "./footer";

const About = () =>{
    return(
        <>
            <Header />
            <div className="sm:mx-8 sm:my-6 sm:p-6 flex justify-center">
                <div className="grid grid-cols-2 gap-4 sm:w-4/5 md:w-3/5 items-center">
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="md:m-auto bg-gradient-to-r from-red-100 to-red-200 border-b-8 border-red-400">名前</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="m-1 text-center">ShellVarng Jiro.</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="md:m-auto bg-gradient-to-r from-red-100 to-red-200 border-b-8 border-red-400">所属</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="m-1 text-center">私立理系学生 4回生</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="md:m-auto bg-gradient-to-r from-green-100 to-green-200 border-b-8 border-green-400">研究分野</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="m-1 text-center">インタラクション・画像認識・IoT</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="md:m-auto bg-gradient-to-r from-green-100 to-green-200 border-b-8 border-green-400">進路</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="m-1 text-center">同大学院に進学予定</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="md:m-auto bg-gradient-to-r from-blue-100 to-blue-200 border-b-8 border-blue-400">実績</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="text-center m-1">Interaction2021　投稿・採録</p>
                        <p className="text-center m-1">DICOMO2021　投稿・採録</p>
                        <p className="text-center m-1">Interaction2022　投稿・採録</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="md:m-auto bg-gradient-to-r from-blue-100 to-blue-200 border-b-8 border-blue-400">実務</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="m-1 text-center">株式会社LDBにてインターン経験あり</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="md:m-auto bg-gradient-to-r from-purple-100 to-purple-200 border-b-8 border-purple-400">資格</p>
                    </div>
                    <div className="m-4 px-2 my-3 md:h-4/5 md:mx-3 md:px-2 md:py-2 text-center">
                        <p className="m-1 text-center">TOEIC score 550</p>
                        <p className="m-1 text-center">AWS 認定試験(予定)</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
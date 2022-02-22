import React from "react";
import { name } from "../../api/variable";
import Header from "./header";
import Footer from "./footer";

const About = () =>{
    return(
        <>
            <Header />
            <div className="mx-16 my-10 p-10">
                <div className="grid grid-cols-2 gap-4">
                    <div className="mx-10 px-5 text-center">
                        名前
                    </div>
                    <div className="mx-10 px-5 text-center">
                        {name}
                    </div>
                    <div className="mx-10 px-5 text-center">
                        所属
                    </div>
                    <div className="mx-10 px-5 text-center">
                        {"私立理系学生 4回生"}
                    </div>
                    <div className="mx-10 px-5 text-center">
                        研究分野
                    </div>
                    <div className="mx-10 px-5 text-center">
                        インタラクション・画像認識・IoT
                    </div>
                    <div className="mx-10 px-5 text-center">
                        進路
                    </div>
                    <div className="mx-10 px-5 text-center">
                        同大学院に進学予定
                    </div>
                    <div className="mx-10 px-5 text-center">
                        実績
                    </div>
                    <div className="mx-10 px-5 text-center">
                        <p>Interaction2021　投稿・再録</p>
                        <p>DICOMO2021　投稿・再録</p>
                        <p>Interaction2022　投稿・再録</p>
                    </div>
                    <div className="mx-10 px-5 text-center">
                        実務
                    </div>
                    <div className="mx-10 px-5 text-center">
                        株式会社LDBにてインターン経験あり
                    </div>
                    <div className="mx-10 px-5 text-center">
                        資格
                    </div>
                    <div className="mx-10 px-5 text-center">
                        <p>TOEIC score 550</p>
                        <p>AWS 認定試験(予定)</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
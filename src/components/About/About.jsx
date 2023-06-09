import React from "react";
import style from "../About/About.module.css"


export default function About() {

    return (
        <div className={style.cardAbout}>
            <div className={style.cardTextAbout}>
                <h1 className={style.h1About}> Hola Soy Rick Sanchez</h1>
                <p className={style.pAbout}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quidem sequi est nulla illo, natus hic ipsam molestias numquam
                    minima ea ratione porro, et facilis sint. Delectus, aliquid quisquam, iusto placeat eveniet suscipit consequatur corporis optio nostrum voluptas,
                    dolorem omnis voluptatem
                    aperiam necessitatibus culpa quia ipsa! Tempore fugiat natus, quam fuga rem, nam incidunt in id sit debitis, nobis laboriosam optio eligendi exercitationem ducimus sint
                    iste voluptatem eius asperiores?
                    Perspiciatis facilis temporibus aut adipisci deserunt rerum? Sit cumque laudantium culpa autem! Excepturi iusto voluptas, debitis, fugit tenetur nesciunt
                    unde laborum ratione harum eaque, eum architecto. Perferendis quam doloremque rem facere?</p>
            </div>
            <div className={style.cardImgAboutCnt} >
                <img className={style.cardImgAbout}src="https://images7.alphacoders.com/633/633262.png" alt="" srcset="" />
            </div>
        </div>

    )
}


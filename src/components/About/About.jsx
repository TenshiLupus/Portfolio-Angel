import "./About.css"

import React from "react";

const About = () => {
    return (
        <section className="description">
                    <h2 className="description-title"><p>Description Title</p></h2>
            <section className="description-container">
                <section className="description-left">
                    <img src="./images/foto.png" className="image-container"></img>
                </section>
                <article className="description-right">
                    <p className="description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ullam nihil dolor iste velit est tempore quisquam, enim ad aut dicta officia beatae ratione distinctio. Nobis sint officiis ab adipisci repellat aperiam odit suscipit? Optio doloremque numquam dolore! Laudantium molestiae vitae suscipit accusantium eum nobis officia. Eligendi repellat nisi facere?</p>
                </article>
            </section>
        </section>
    )
}

export default GalleryItemDescription
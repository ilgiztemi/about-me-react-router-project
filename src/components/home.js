import React from "react";

const Home = () => {
  return (
    <div>
      <img className="img"
        src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
        style={{ width: "200px", height: '200px', objectFit: 'cover', borderRadius: '50%', boxShadow: '5px 5px 10px'}}
        alt="me"
      />
      <h1 className="name">Ilgiz Temirbekov</h1>
      <p>
        Seytech student, web developer - software engineer Thanks for visiting
        my site. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
        in amet officia molestias id, omnis earum culpa eius neque sit. Sed
        vero, id quidem tenetur nesciunt quod nobis consectetur fugit? List of
        things i'm learning: HTML, CSS, Javascript, React
      </p>
      <h3>About me</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos
        in aliquam eaque. Aspernatur vitae doloribus ducimus repellendus
        quisquam, cupiditate nesciunt minima sunt, sit, quia cum. Ducimus neque
        porro reiciendis. Lorem ipsum dolor, large sit amet consectetur
        adipisicing elit. Deleniti quae, officia rerum nulla, consequuntur odit
        nobis neque repellat illum eius ipsam distinctio qui amet quisquam? Et
        inventore sunt modi repellendus.
      </p>
      <h3>My goals</h3>
      <ol>
        <li>Learning HTML/CSS</li>
        <li>Learning Javascript</li>
        <li>Learning React</li>
        <li>Finding a Software engineering job</li>
      </ol>
    </div>
  );
};

export default Home;

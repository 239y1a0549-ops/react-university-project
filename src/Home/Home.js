import './Home.css';

function Home() {
    return (
        <div className="home">
      
            <nav className="navbar">
                <div className="logo">MSU</div>
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#departments">Departments</a>
<a href="#appointments">Appointments</a>
                    <a href="#contact">Contact</a>
<a href="#footer">Footer</a>
                </div>
            </nav>
           
            <div className="content">
                <h1>Welcome to MSU University</h1>
                <p >Excellence in Engineering Education Since 1995</p>
               
                <div className="intro">
                    <p>MSU University is a premier institution dedicated to providing world-class
                    engineering education and fostering innovation through cutting-edge research.</p>
                </div>
               
                <div className="features">
                    <div className="feature">
                        <h3> Quality Education</h3>
                        <p>NAAC A+ accredited with expert faculty</p>
                    </div>
                    <div className="feature">
                        <h3> Modern Labs</h3>
                        <p>State-of-the-art laboratories and equipment</p>
                    </div>
                    <div className="feature">
                        <h3>Industry Connect</h3>
                        <p>Strong placement record with top companies</p>
                    </div>
                </div>
               
                <div className="departments">
                    <h2>Our Departments</h2>
                    <p>Explore our specialized engineering departments offering B.Tech, M.Tech, and PhD programs.</p>
                </div>
               
                <div className=" more">
                    <h3>Ready to Start Your Journey?</h3>
                    <p>Join our community of innovators and shape the future of technology.</p>
                    <button className="explore">Explore Programs</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
import { useState } from "react";
import "./App.css";

function App() {
    return (
        <>
            <header>
                <a>SocialMediaApp</a>
                <h1>Feed</h1>
                <nav>
                    <a>Login</a>
                    <a>Register</a>
                </nav>
            </header>
            <div className="post">
                <div className="user-info">
                    <img
                        className="profile-photo"
                        src="https://media.istockphoto.com/id/1401927281/de/foto/balance-mit-gr%C3%BCnem-zucchinigem%C3%BCse-auf-beigem-hintergrund-gesundes-essen-und-life-balance.jpg?s=1024x1024&w=is&k=20&c=tiWtVCR-lAQWZeRftMF3j_Kb9SZD5fDiSNovdOPDswo="
                    />
                    <p>@username</p>
                </div>
                <p>This is a post text. How are you doing? What's up?</p>
            </div>
            <div className="post">
                <div className="user-info">
                    <img
                        className="profile-photo"
                        src="https://media.istockphoto.com/id/1401927281/de/foto/balance-mit-gr%C3%BCnem-zucchinigem%C3%BCse-auf-beigem-hintergrund-gesundes-essen-und-life-balance.jpg?s=1024x1024&w=is&k=20&c=tiWtVCR-lAQWZeRftMF3j_Kb9SZD5fDiSNovdOPDswo="
                    />
                    <p>@username</p>
                </div>
                <p>This is a post text. How are you doing? What's up?</p>
            </div>
            <div className="post">
                <div className="user-info">
                    <img
                        className="profile-photo"
                        src="https://media.istockphoto.com/id/1401927281/de/foto/balance-mit-gr%C3%BCnem-zucchinigem%C3%BCse-auf-beigem-hintergrund-gesundes-essen-und-life-balance.jpg?s=1024x1024&w=is&k=20&c=tiWtVCR-lAQWZeRftMF3j_Kb9SZD5fDiSNovdOPDswo="
                    />
                    <p>@username</p>
                </div>
                <p className="post-content">
                    This is a post text. How are you doing? What's up?
                </p>
            </div>
        </>
    );
}

export default App;

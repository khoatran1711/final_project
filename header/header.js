$(document).ready(function() {
    $("#header").before(`
    <link rel="stylesheet" href="/header/header.css">
    <header>
    <div class="container">
        <div class="branding">
            <h1>CODEFE COFFEE</h1>
        </div>
        <nav>
            <ul>
                <li><a href="/Home/Home.html">HOME</a></li>
                <li><a href="/Menu/Menu.html">MENU</a></li>
                <li><a href="#">OUR STORY</a></li>
                <li><a href="/New/News.html">NEWS</a></li>
                <li><a href="/Contact/Contact.html">CONTACT</a></li>
            </ul>
        </nav>
    </div>
    </header>
    `
    )
})
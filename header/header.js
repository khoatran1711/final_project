$(document).ready(function() {
    $("#header").before(`
   
    <header>
    <link rel="stylesheet" href="/header/test_header.css">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="/codefe_login/image/codegelogo.png"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>CodeFe SHOP</title>
    <div class="nav-bar">
        <input id ="check" hidden type="checkbox" >
        <div class="branding">
           <h1><a href = "/Home/Home.html">CODEFE COFFEE</a></h1>
        </div>
        <div class = "cart">
            <div class ="cart-num"> </div>
            <div class ="cart-img"> </div>
            
        </div>
       
        <label for="check" class = "menu-icon" >
        </label>
        <div class = "menu">
            <ul>
                <li><a href = "/Home/Home.html">HOME</a></li>
                <li><a href = "/Story/ourstory.html">STORY</a></li>
                <li><a href = "/Menu/Menu.html">MENU</a></li>
                <li><a href = "/New/News.html">NEWS</a></li>
                <li><a href = "/Contact/Contact.html">CONTACT</a></li>
                <li><a href = "/codefe_login/login.html">LOGIN</a></li>
            </ul>
        </div>
    </div>
</header>
    `
    )
})
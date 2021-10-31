$(document).ready(function() {
    $("#footer").before(`
<link rel="stylesheet" href="/footer/footer.css">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <div class="footer-end">
        <div class="Logo">

            <img class="Logo-image" src="../Hinh_anh/logo_footer.png">

            <h2> CODEFEE </h2>
            <h3> TEA & COFFEE </h3>
        </div>
        <div class="Copyright">
            <h1>&copy; CODEFE COFFEE & TEA. All rights reserved.
            </h1>

        </div>
        <div class="contact-info">
            <div class="Logos-all">
                <a href="#">
                    <img class="logo-fb" src="../Hinh_anh/fb.png">
                </a>
               <a href="#">
                <img class="logo-insta" src="../Hinh_anh/insa.png">
               </a>
               
            </div>
        </div>

    </div>
    `
    )
})
const certificates = {
    computer: [{
        title:"Code Yourself! An Introduction to Programming",
        imageUrlSrc: "https://www.coursera.org/account/accomplishments/certificate/CBGAFGPWXSAU",
        localSrc:"",
        url:"https://www.coursera.org/account/accomplishments/verify/CBGAFGPWXSAU",
        from: "Coursera",
        logoUrl:"https://1000logos.net/wp-content/uploads/2022/06/Coursera-Logo.png",
        logoLocalSrc:"",
        date: 15/11/2021
    },{
        title:"Introduction to Cloud Computing",
        imageUrlSrc: "https://www.coursera.org/account/accomplishments/certificate/2NLJG334Z692",
        localSrc:"",
        url:"https://www.coursera.org/account/accomplishments/verify/2NLJG334Z692",
        from: "Coursera",
        logoUrl:"https://1000logos.net/wp-content/uploads/2022/06/Coursera-Logo.png",
        logoLocalSrc:"",
        date: 3/12/2021
    },
    {
        title:"",
        imageUrlSrc: "",
        localSrc:"",
        url:"",
        from: "",
        logoUrl:"",
        logoLocalSrc:"",
        date: ""
    }
    ],

    animal:[{
        title:"",
        imageUrlSrc: "",
        localSrc:"",
        url:"",
        from: "",
        logoUrl:"",
        logoLocalSrc:"",
        date: ""
    }],
    volunteer:{},
    religion:{},
    documented:{},
}

// let image = document.querySelector(".certificate .image img");
// let title = document.querySelector(".certificate .title h3");

// certificates.computer.map( (certificate) => {
//     image.src= certificate.src;
//     title.innerHTML= certificate.title;
// })

let title ;
let image;
let link ;
let site ;
let siteLogo ;
let div ;

let card = document.querySelector(".certificates .container")

certificates.computer.map((certificate) => {
    div = document.createElement("div");

    // title = document.createElement("h1");
    // title.innerHTML = certificate.title;
    // div.appendChild(title);
    // image = document.createElement("img");
    // image.src = certificate.imageSrc;
    // div.appendChild(image);
    // link = document.createElement("a");
    // site = document.createElement("h2");
    // site = certificate.from;
    // // div.appendChild(site);
    // siteLogo = document.createElement("img");
    // card.appendChild(div);

    div.innerHTML = "<div class='certificate'> " +
    "<div class ='image'><a href='"+ certificate.url  +"'> <img src='"+certificate.imageUrlSrc +"'></a><div>"+
    "<img src='"+certificate.logoUrl+"' class='logo'>"+
    "<div class = 'title'><a href='"+certificate.url+"'><h3>"+certificate.title+"</h3></a></div>"+
    "</div>"
    
    card.appendChild(div);
})


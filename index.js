const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sauravsky55@gmail.com',
        pass: 'enter app password here'
    }
});

let mailOptions = {
    from: 'sauravsky55@gmail.com',
    to: ['sauravsky55@yahoo.com', 'vk74449@gmail.com'],
    subject: 'Testing nodemailer with attachments',
    // text: 'This is how mail would be sent normally',
    // here we can send html code with the image address as shown below
    //  with the href we see we are sending the image link an dthe secong img src will show the image the mail 
    html: `<h1>This is an html code with image attached from a site</h1>
    <a href="https://www.bing.com/images/search?view=detailV2&ccid=S6a4rRP0&id=0CACCB4F431C111C0E2611A934ECDDBC17D19EE5&thid=OIP.S6a4rRP0zCX4yQN9RfFg1wAAAA&mediaurl=https%3a%2f%2fmiro.medium.com%2fmax%2f1200%2f1*fdSXh7EpJIwrAGTfYNmdLA.png&exph=265&expw=474&q=nodemailer+images&simid=608011406485494092&FORM=IRPRST&ck=7472FD86A3A73F0FA6C173D5F5BDBB2C&selectedIndex=14"</a>
    <img src="https://miro.medium.com/max/594/1*LTuPfWkseyn1u4GYSJxFfQ.png">`,
    
    attachments: [
        {
            filename: "image1.jfif",
            path: "./files/image1.jfif"
        },
        {
            filename: "Travel Application Documentation.pdf",
            path: "./files/Travel Application Documentation.pdf"
        },
        {
            filename: "catandbike.html",
            path: "./files/catandbike.html"
        },
        {
            filename: "Async Await trycatch hell1080p.mp4",
            path: "./files/Async Await trycatch hell1080p.mp4"
        }
    ]
};

transporter.sendMail(mailOptions, (error, info)=> {
    if(error) {
        console.log('Error sending mail' + error);
    }else {
        console.log("Email sent successfully");
    }
});



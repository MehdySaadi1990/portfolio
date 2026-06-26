const sendEmail = require('../utils/email');

exports.sendMail = async (req, res, next) =>{
    try{
    await sendEmail(process.env.USER_EMAIL, "Demande contact Portfolio", `<h1>Message utilisateur</h1>
                                                <h2>Mr ${req.body.name}</h2>
                                                <p>${req.body.message}<br/>
                                                <p>Téléphone : ${req.body.phone}<br/>
                                                   Email : ${req.body.email}</p>
                                                </div>`);

    res.status(200).json({message:"An Email sent by a user"});
    }

     catch (error) {
        res.status(400).json({message : "An error occured"});
}
}
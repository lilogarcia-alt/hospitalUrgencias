const index = (req,res) => {
   res.render("contacto");
};

const submit = (req,res) => {
   console.log(req.body);
   res.send("Enviando");
};



module.exports = {
    index,
    submit,
    
    
}
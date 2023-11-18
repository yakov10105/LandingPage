 const onSubmit = () => {
        Email.send({
          Host: "smtp.elasticemail.com",
          Username: "yakovkantor.00@gmail.com",
          Password: "2C7D6C2016CFDA47F2980E4C1F870C331075",
          To: "yakovkantor.00@gmail.com",
          From: "yakovkantor.00@gmail.com",
          Subject: "This is the subject",
          Body: "And this is the body",
        }).then((message)=>{
            alert(message)
        });
    }
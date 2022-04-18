class User {
    constructor(id, userName, pswd) {
      this.userId = id;
      //this.fName = fName
      this.userName = userName;
      this.setUserPassword(pswd);
    }
    //get methods
    getUserId() {
      return this.userId;
    }
    getUserName() {
      return this.userName;
    }
    getUserPassword() {
      return this.userPassword;
    }
    //set methods
    setUserId(id) {
      this.userId = id;
    }
    setUserName(userName) {
      this.userName = userName;
    }
    setUserPassword(pswd) {
      if(this.validPassword(pswd)) {
        this.userPassword = pswd;
      } else {
        console.log("Password must have at least 1 uppercase letter, 1 symbol, 2 numbers," 
          + "and have a length of at least 8 characters.");
      }
    }
    //valid password method
    validPassword(pswd) {
      if(pswd.length >= 8) {
        let upper = 0;
        let numbers = 0;
        let symbols = 0;
        
        for(let i = 0; i<pswd.length; i++) {
          if(this.isDigit(pswd[i])) {
            numbers++;
          } else if(!this.isLetterOrDigit(pswd[i])) {
            symbols++;
          } else if(this.isUpperCase(pswd[i])) {
            upper++;
          }
        }
  
        if(upper >= 1 && numbers >= 2 && symbols >= 1) {
          return true;
        }
      }
      return false;
    }
    //returns if character is a letter
    isUpperCase(char) {
      return (/[A-Z]/).test(char)
    }
    //returns if character is a digit
    isDigit(char) {
      return (/[1-9]/).test(char)
    }
    //returns if character is a letter or digit
    isLetterOrDigit(char) {
      return ((/[a-zA-Z]/).test(char) || (/[1-9]/).test(char))
    }
  }
  
  let user1 = new User(12345, "coolGuy23", "wordD12@");
  console.log(user1);
  console.log(user1.getUserId());
  
  let user2 = new User(15555, "cathy2000", "bfdd_ejJr42");
  console.log(user2)
  console.log(user2.getUserName());
  
  user2.setUserPassword("frgd@");
  ///////
  const user = {
      userName: "spat",
      firstName: "joe",
      lastName: "mamma",
      password: 0
  }
  // user.firstName =
  // user.lastName =

    let form = document.getElementById("registerForm");
    //let userId = document.getElementById("questions")

    // 2
    form.addEventListener('submit', addUser);

    // 3
    function addUser(e) {
        e.preventDefault();
        // 4
        let Id = document.getElementById("Id").value;

        let userName = document.getElementById("username").value;
        let pswd = document.getElementById("pswd").value;

        const newUser = new User(Id, userName, pswd);
        console.log(newUser);
    }